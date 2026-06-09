import DaySelector from "./day-selector/DaySelector";
import SearchResults from "./search-results/SearchResults";
import styles from "./ActivityBookingSystem.module.scss";
import activityScheduleData from "../../data/activity-schedule.json";
import { useEffect } from "react";
import { useActivitySearchFilters } from "../context/ActivitySearchFiltersContext";

type ScheduleDay = {
    date: string;
    dayOfWeek: string;
    displayDate: string;
    totalActivities: number;
};

const ActivityBookingSystem = ({}) => {
    const { selectedDay, setSelectedDay } = useActivitySearchFilters();

    const schedule = Array.isArray(activityScheduleData?.schedule)
        ? activityScheduleData.schedule
        : [];

    if (schedule.length === 0) {
        return (
            <div className={styles["activity-booking-system"]}>
                <p className={styles["activity-booking-system__error-message"]}>
                    <b>Error:</b> there is an issue with the activity schedule data.
                </p>
            </div>
        );
    }

    const availableDays: ScheduleDay[] = schedule.map((day) => ({
        date: day.date,
        dayOfWeek: day.dayOfWeek,
        displayDate: day.displayDate,
        totalActivities: day.totalActivities,
    }));

    useEffect(() => {
        if (!selectedDay && availableDays.length > 0) {
            setSelectedDay(availableDays[0]);
        }
    }, [availableDays, selectedDay, setSelectedDay]);
    
    return (
        <div className={styles["activity-booking-system"]}>
            <DaySelector availableDays={availableDays} />
            <SearchResults activitySchedule={activityScheduleData} />
        </div>

    );
};

export default ActivityBookingSystem;