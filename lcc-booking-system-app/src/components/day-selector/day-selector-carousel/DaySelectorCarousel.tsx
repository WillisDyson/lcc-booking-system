import DaySelectorCarouselItem from "./day-selector-carousel-item/DaySelectorCarouselItem";
import styles from "./DaySelectorCarousel.module.scss";

const DaySelectorCarousel = ({ }) => {
    return (
        <div className={styles["day-selector-carousel"]}>
            <DaySelectorCarouselItem active={true} />
            <DaySelectorCarouselItem />
            <DaySelectorCarouselItem />
            <DaySelectorCarouselItem />
            <DaySelectorCarouselItem />
            <DaySelectorCarouselItem />
            <DaySelectorCarouselItem />
        </div>
    );
};

export default DaySelectorCarousel;