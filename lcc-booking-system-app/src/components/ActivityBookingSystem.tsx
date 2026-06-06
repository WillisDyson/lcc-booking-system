import styles from "./ActivityBookingSystem.module.scss";
import DaySelector from "./day-selector/DaySelector";

const ActivityBookingSystem = ({ }) => {
    return (
        <div className={styles["activity-booking-system"]}>
            <DaySelector />
            {/* TODO: Create new search results grid component */}
        </div>
    );
};

export default ActivityBookingSystem;