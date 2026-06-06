import styles from "./DaySelector.module.scss";
import DaySelectorCarousel from "./day-selector-carousel/DaySelectorCarousel";

const DaySelector = ({ }) => {
    return (
        <div className={styles["day-selector"]}>
            <DaySelectorCarousel />
            <span>[X] activities showing for [displayDate]</span>
        </div>
    );
};

export default DaySelector;