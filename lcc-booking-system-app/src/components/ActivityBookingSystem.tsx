import DaySelector from "./day-selector/DaySelector";
import SearchResults from "./search-results/SearchResults";
import styles from "./ActivityBookingSystem.module.scss";

const ActivityBookingSystem = ({ }) => {
    return (
        <div className={styles["activity-booking-system"]}>
            <DaySelector />
            <SearchResults />
        </div>
    );
};

export default ActivityBookingSystem;