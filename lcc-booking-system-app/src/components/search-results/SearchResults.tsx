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
            }[];
        }[];
        meta?: {
            activityTypes?: string[];
            locations?: string[];
        };
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
        () =>
            activitySchedule?.meta?.locations?.length
                ? activitySchedule.meta.locations
                : Array.from(
                    new Set(
                        (activitySchedule?.schedule ?? []).flatMap((day) =>
                            day.activities.map((activity) => activity.location),
                        ),
                    ),
                ).sort(),
        [activitySchedule?.meta?.locations, activitySchedule?.schedule],
    );

    const activityTypeOptions = useMemo(
        () =>
            activitySchedule?.meta?.activityTypes?.length
                ? activitySchedule.meta.activityTypes
                : Array.from(
                    new Set(
                        (activitySchedule?.schedule ?? []).flatMap((day) =>
                            day.activities.map((activity) => activity.type),
                        ),
                    ),
                ).sort(),
        [activitySchedule?.meta?.activityTypes, activitySchedule?.schedule],
    );

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
            <section aria-labelledby={`day-${selectedDay?.date}`} className={styles["search-results"]}>
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