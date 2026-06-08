import styles from "./DaySelector.module.scss";
import DaySelectorCarousel from "./day-selector-carousel/DaySelectorCarousel";

type AvailableDay = {
    date: string;
    dayOfWeek: string;
    displayDate: string;
    totalActivities: number;
};

const DaySelector = ({ availableDays }: { availableDays: AvailableDay[] }) => {
    return (
        <section className={styles["day-selector"]}>
            <div className={styles["day-selector__inner"]}>
                <DaySelectorCarousel availableDays={availableDays} />
            </div>
            <span className={styles["day-selector__info"]}>[X] activities showing for [displayDate]</span>
        </section>
    );
};

export default DaySelector;