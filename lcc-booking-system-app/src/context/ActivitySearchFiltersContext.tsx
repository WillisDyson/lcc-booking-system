import { createContext, useContext, useState, type PropsWithChildren } from "react";

export type SelectedDay = {
    date: string;
    dayOfWeek: string;
    displayDate: string;
    totalActivities: number;
};

type ActivitySearchFiltersContextValue = {
    selectedDay: SelectedDay | null;
    setSelectedDay: (day: SelectedDay) => void;
    selectedLocations: string[];
    toggleSelectedLocation: (location: string) => void;
    clearSelectedLocations: () => void;
    selectedActivityTypes: string[];
    toggleSelectedActivityType: (activityType: string) => void;
    clearSelectedActivityTypes: () => void;
};

/**
 * Context for managing the state of the activity search filters (selected day, location and activity).
 */

const ActivitySearchFiltersContext = createContext<ActivitySearchFiltersContextValue | undefined>(undefined);

const ActivitySearchFiltersProvider = ({ children }: PropsWithChildren) => {
    const [selectedDay, setSelectedDay] = useState<SelectedDay | null>(null);
    const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
    const [selectedActivityTypes, setSelectedActivityTypes] = useState<string[]>([]);
    
    const toggleSelectedLocation = (location: string) => {
        setSelectedLocations((currentLocations) =>
            currentLocations.includes(location)
                ? currentLocations.filter((currentLocation) => currentLocation !== location) // Remove the location if it is already selected.
                : [...currentLocations, location], // Add the location if it is not already selected.
        );
    };

    const clearSelectedLocations = () => {
        setSelectedLocations([]); // Clear all selected locations   
    };

    const toggleSelectedActivityType = (activityType: string) => {
        setSelectedActivityTypes((currentActivityTypes) =>
            currentActivityTypes.includes(activityType)
                ? currentActivityTypes.filter((currentActivityType) => currentActivityType !== activityType) // Remove the activity type if it is already selected.
                : [...currentActivityTypes, activityType], // Add the activity type if it is not already selected.
        );
    };

    const clearSelectedActivityTypes = () => {
        setSelectedActivityTypes([]); // Clear all selected activity types
    };

    return (
        <ActivitySearchFiltersContext.Provider
            value={{
                selectedDay,
                setSelectedDay,
                selectedLocations,
                toggleSelectedLocation,
                clearSelectedLocations,
                selectedActivityTypes,
                toggleSelectedActivityType,
                clearSelectedActivityTypes,
            }}
        >
            {children}
        </ActivitySearchFiltersContext.Provider>
    );
};

const useActivitySearchFilters = () => {
    const context = useContext(ActivitySearchFiltersContext);

    if (!context) {
        throw new Error("useActivitySearchFilters must be used within ActivitySearchFiltersProvider");
    }

    return context;
};

export { ActivitySearchFiltersProvider, useActivitySearchFilters };
