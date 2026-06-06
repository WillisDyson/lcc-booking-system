import styles from "./DaySelectorCarouselItem.module.scss";

const DaySelectorCarouselItem = ({ active }: { active?: boolean }) => {
    return (
        <button className={`${styles["day-selector-carousel-item"]} ${active ? styles["day-selector-carousel-item--active"] : ""}`}>
            <h2 className={styles["day-selector-carousel-item__inner"]}>
                <em className={styles["day-selector-carousel-item__day"]}>Monday</em>
                <span className={styles["day-selector-carousel-item__date"]}>2nd February</span>
            </h2>
        </button>
    );
};

export default DaySelectorCarouselItem;