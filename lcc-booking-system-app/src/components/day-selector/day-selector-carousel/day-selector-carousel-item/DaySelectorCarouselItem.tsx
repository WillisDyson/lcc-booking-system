import styles from "./DaySelectorCarouselItem.module.scss";

const DaySelectorCarouselItem = ({ active, day, date }: { active?: boolean, day: string; date: string }) => {
    return (
        <button className={`${styles["day-selector-carousel-item"]} ${active ? styles["day-selector-carousel-item--active"] : ""}`}>
            <h2 className={styles["day-selector-carousel-item__inner"]}>
                <em className={styles["day-selector-carousel-item__day"]}>{day}</em>
                <span className={styles["day-selector-carousel-item__date"]}>{date}</span>
            </h2>
        </button>
    );
};

export default DaySelectorCarouselItem;