import DaySelector from "../day-selector/DaySelector";
import SearchResults from "../search-results/SearchResults";
import styles from "./ActivityBookingSystem.module.scss";
import activityScheduleData from "../../../data/activity-schedule.json";
import { useEffect, useMemo } from "react";
import { useActivitySearchFilters } from "../../context/ActivitySearchFiltersContext";

type ScheduleDay = {
    date: string;
    dayOfWeek: string;
    displayDate: string;
    totalActivities: number;
};

const ActivityBookingSystem = () => {
    const { setSelectedDay } = useActivitySearchFilters();

    const schedule = Array.isArray(activityScheduleData?.schedule)
        ? activityScheduleData.schedule
        : [];

    if (schedule.length === 0) {
        return (
            <div className={styles["activity-booking-system"]}>
                <p className={styles["activity-booking-system__error-message"]}>
                    <b>Error:</b> unable to correctly access the activity data.
                </p>
            </div>
        );
    }

    const availableDays: ScheduleDay[] = useMemo(
        () =>
            schedule.map((day) => ({
                date: day.date,
                dayOfWeek: day.dayOfWeek,
                displayDate: day.displayDate,
                totalActivities: day.totalActivities,
            })),
        [schedule],
    );

    useEffect(() => {
        if (availableDays.length > 0) {
            setSelectedDay(availableDays[0]);
        }
    }, [availableDays, setSelectedDay]);
    
    return (
        <div className={styles["activity-booking-system"]}>
            <h1 className={styles["activity-booking-system__hidden-title"]}>LCC Activity Booking System</h1> { /* Visually hidden <h1> for accessibility and SEO purposes. */}
            <DaySelector availableDays={availableDays} />
            <SearchResults activitySchedule={activityScheduleData} />
        </div>

    );
};

export default ActivityBookingSystem;