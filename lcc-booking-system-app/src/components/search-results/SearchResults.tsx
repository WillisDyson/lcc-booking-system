import DropdownSelect from "../generic/dropdown-select/DropdownSelect";
import SearchResultsTile from "./search-results-tile/SearchResultsTile";
import styles from "./SearchResults.module.scss";
import { useMemo } from "react";
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
                status: string;
                link: string;
            }[];
        }[];
        meta?: {
            activityTypes?: string[];
            locations?: string[];
        };
    };
};

/**
 * Main component for displaying the search results based on the selected day and applied filters.
 * It includes dropdown filters for activity types and locations, and renders a grid of search result tiles for the activities that match the selected criteria.
 * If no activities match the filters, a message is displayed indicating that no results were found.
 */

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

    // Find the schedule for the selected day, if any, and extract the activities for that day.
    const selectedScheduleDay = useMemo(
        () => activitySchedule?.schedule?.find((day) => day.date === selectedDay?.date),
        [activitySchedule?.schedule, selectedDay?.date],
    );

    const allActivities = selectedScheduleDay?.activities ?? [];
    
    // Find the unique locations and activity types from the activity schedule data
    const { locationOptions, activityTypeOptions } = useMemo(() => {
        const foundLocations = new Set<string>();
        const foundActivityTypes = new Set<string>();

        for (const day of activitySchedule?.schedule ?? []) {
            for (const activity of day.activities) {
                foundLocations.add(activity.location);
                foundActivityTypes.add(activity.type);
            }
        }

        return {
            // Return a sorted array of locations and activity types in alphabetical order to be used as options in the dropdown filters.
            locationOptions: Array.from(foundLocations).sort(),
            activityTypeOptions: Array.from(foundActivityTypes).sort(),
        };
    }, [activitySchedule?.schedule]);

    // Filter the activities based on the selected locations and activity types. If no filters are applied, all activities for the selected day are shown.
    const filteredActivities = allActivities.filter((activity) => {
        const matchesLocation =
            selectedLocations.length === 0 || selectedLocations.includes(activity.location);
        const matchesActivityType =
            selectedActivityTypes.length === 0 || selectedActivityTypes.includes(activity.type);

        return matchesLocation && matchesActivityType;
    });


    return (
        <>
            <section className={styles["search-results__filters"]}>
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
            </section>
            <section id="search-results-panel" aria-labelledby={`day-${selectedDay?.date}`} className={styles["search-results"]}>
                <ul className={styles["search-results__grid"]}>
                    {filteredActivities.length > 0 ? (
                        filteredActivities.map((activity) => (
                            <SearchResultsTile key={activity.id} activity={activity} />
                        ))
                    ) : (
                        <li>No activities match these filters.</li>
                    )}
                </ul>
            </section>
        </>
    );
};

export default SearchResults;