import DaySelector from "./day-selector/DaySelector";
import SearchResults from "./search-results/SearchResults";
import styles from "./ActivityBookingSystem.module.scss";
import activityScheduleData from "../../data/activity-schedule.json";

const ActivityBookingSystem = ({  }) => {
    const availableDays = activityScheduleData.schedule.map(day => ({
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