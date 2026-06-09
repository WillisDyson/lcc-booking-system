import DropdownSelect from "../generic/dropdown-select/DropdownSelect";
import SearchResultsTile from "./search-results-tile/SearchResultsTile";
import styles from "./SearchResults.module.scss";
import { useEffect, useMemo } from "react";
import { useActivitySearchFilters } from "../../context/ActivitySearchFiltersContext";

type SearchResultsProps = {
    activitySchedule?: {
        schedule?: {
            date: string;
            activities: {
                id: string;
                startTime: string;
                endTime: string;
                name: string;
                location: string;
                type: string;
                spaces: number;
            }[];
        }[];
    };
};

const SearchResults = ({ activitySchedule }: SearchResultsProps) => {
    const {
        selectedDay,
        selectedLocations,
        toggleSelectedLocation,
        clearSelectedLocations,
        selectedActivityTypes,
        toggleSelectedActivityType,
        clearSelectedActivityTypes,
    } = useActivitySearchFilters();

    const selectedScheduleDay = useMemo(
        () => activitySchedule?.schedule?.find((day) => day.date === selectedDay?.date),
        [activitySchedule?.schedule, selectedDay?.date],
    );

    const allActivities = selectedScheduleDay?.activities ?? [];

    const locationOptions = useMemo(
        () => Array.from(new Set(allActivities.map((activity) => activity.location))).sort(),
        [allActivities],
    );

    const activityTypeOptions = useMemo(
        () => Array.from(new Set(allActivities.map((activity) => activity.type))).sort(),
        [allActivities],
    );

    useEffect(() => {
        const hasInvalidLocationSelection = selectedLocations.some(
            (selectedLocation) => !locationOptions.includes(selectedLocation),
        );

        if (hasInvalidLocationSelection) {
            clearSelectedLocations();
        }
    }, [selectedLocations, locationOptions, clearSelectedLocations]);

    useEffect(() => {
        const hasInvalidTypeSelection = selectedActivityTypes.some(
            (selectedActivityType) => !activityTypeOptions.includes(selectedActivityType),
        );

        if (hasInvalidTypeSelection) {
            clearSelectedActivityTypes();
        }
    }, [selectedActivityTypes, activityTypeOptions, clearSelectedActivityTypes]);

    const filteredActivities = allActivities.filter((activity) => {
        const matchesLocation =
            selectedLocations.length === 0 || selectedLocations.includes(activity.location);
        const matchesActivityType =
            selectedActivityTypes.length === 0 || selectedActivityTypes.includes(activity.type);

        return matchesLocation && matchesActivityType;
    });


    return (
        <div className={styles["search-results"]}>
            <div className={styles["search-results__filters"]}>
                <DropdownSelect
                    dropdownText="Select an activity type"
                    options={activityTypeOptions}
                    selectedValues={selectedActivityTypes}
                    onToggleValue={toggleSelectedActivityType}
                    onClearValues={clearSelectedActivityTypes}
                />
                <DropdownSelect
                    dropdownText="Select a location"
                    options={locationOptions}
                    selectedValues={selectedLocations}
                    onToggleValue={toggleSelectedLocation}
                    onClearValues={clearSelectedLocations}
                />
            </div>
            <ul className={styles["search-results__grid"]}>
                {filteredActivities.length > 0 ? (
                    filteredActivities.map((activity) => (
                        <SearchResultsTile key={activity.id} activity={activity} />
                    ))
                ) : (
                    <li>No activities match these filters.</li>
                )}
            </ul>
        </div>
    );
};

export default SearchResults;