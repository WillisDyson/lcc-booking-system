import styles from "./DaySelector.module.scss";
import DaySelectorCarousel from "./day-selector-carousel/DaySelectorCarousel";
import { useActivitySearchFilters } from "../../context/ActivitySearchFiltersContext";

type AvailableDay = {
    date: string;
    dayOfWeek: string;
    displayDate: string;
    totalActivities: number;
};

const DaySelector = ({ availableDays }: { availableDays: AvailableDay[] }) => {
    const { selectedDay } = useActivitySearchFilters();

    return (
        <section className={styles["day-selector"]}>
            <div className={styles["day-selector__inner"]}>
                <DaySelectorCarousel availableDays={availableDays} />
            </div>
            <span className={styles["day-selector__info"]}>
                {selectedDay
                    ? `${selectedDay.totalActivities} activities showing for ${selectedDay.displayDate}`
                    : "No day selected"}
            </span>
        </section>
    );
};

export default DaySelector;