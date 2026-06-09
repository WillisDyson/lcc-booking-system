import DaySelector from "./day-selector/DaySelector";
import SearchResults from "./search-results/SearchResults";
import styles from "./ActivityBookingSystem.module.scss";
import activityScheduleData from "../../data/activity-schedule.json";

type ScheduleDay = {
    date: string;
    dayOfWeek: string;
    displayDate: string;
    totalActivities: number;
};

const ActivityBookingSystem = ({}) => {
    const schedule = Array.isArray(activityScheduleData?.schedule)
        ? activityScheduleData.schedule
        : [];

    if (schedule.length === 0) {
        return (
            <div className={styles["activity-booking-system"]}>
                <p className={styles["activity-booking-system__error-message"]}>
                    <b>Error:</b> the booking system is currently experiencing an issue. Please try again later.
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
    
    return (
        <div className={styles["activity-booking-system"]}>
            <DaySelector availableDays={availableDays} />
            <SearchResults />
        </div>

    );
};

export default ActivityBookingSystem;