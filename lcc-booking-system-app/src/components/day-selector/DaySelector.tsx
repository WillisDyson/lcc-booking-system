import styles from "./DaySelector.module.scss";
import DaySelectorCarousel from "./day-selector-carousel/DaySelectorCarousel";

const DaySelector = ({ }) => {
    return (
        <section className={styles["day-selector"]}>
            <div className={styles["day-selector__inner"]}>
                <DaySelectorCarousel />
            </div>
            <span className={styles["day-selector__info"]}>[X] activities showing for [displayDate]</span>
        </section>
    );
};

export default DaySelector;