import styles from "./DaySelectorCarouselItem.module.scss";
/**
 * A single item in the DaySelectorCarousel, containing a button which sets the selected day when clicked.
 */

const DaySelectorCarouselItem = ({ active, day, date, displayDate, onClick }: { active?: boolean; day: string; date: string; displayDate: string; onClick: () => void }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`${styles["day-selector-carousel-item"]} ${active ? styles["day-selector-carousel-item--active"] : ""}`}>
            <h2 id={`day-${date}`} className={styles["day-selector-carousel-item__inner"]}>
                <em className={styles["day-selector-carousel-item__day"]}>{day}</em>
                <span className={styles["day-selector-carousel-item__date"]}>{displayDate}</span>
            </h2>
        </button>
    );
};

export default DaySelectorCarouselItem;