import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import DaySelectorCarouselItem from "./day-selector-carousel-item/DaySelectorCarouselItem";
import styles from "./DaySelectorCarousel.module.scss";
import { useActivitySearchFilters } from "../../../context/ActivitySearchFiltersContext";

/**
 * A carousel component that takes an array of available days and renders a carousel item for each one.
 */

const DaySelectorCarousel = ({ availableDays }: { availableDays: { date: string; dayOfWeek: string; displayDate: string; totalActivities: number }[] }) => {
    const { selectedDay, setSelectedDay } = useActivitySearchFilters();

    // Update the Swiper once fonts are loaded to ensure item widths and alignment is correct.
    const handleSwiper = (swiper: SwiperType) => {
        if (typeof document === "undefined" || !("fonts" in document)) {
            swiper.update();
            return;
        }

        if (document.fonts.status === "loaded") {
            swiper.update();
            return;
        }

        document.fonts.ready.then(() => {
            swiper.update();
        });
    };

    return (
        <Swiper
        className={styles["day-selector-carousel"]}
        loop={false}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation={{
            addIcons: false
        }}
        onSwiper={handleSwiper}
        resizeObserver={true}
        slidesPerView={'auto'}
        speed={300}
        spaceBetween={2}
        >
            {// Render a SwiperSlide for each available day, passing the necessary props to the DaySelectorCarouselItem component.}
            availableDays.map((day, index) => (
                <SwiperSlide className={styles["day-selector-carousel__slide"]} key={day.date}>
                    <DaySelectorCarouselItem
                        active={selectedDay ? selectedDay.date === day.date : index === 0}
                        day={day.dayOfWeek}
                        date={day.date}
                        displayDate={day.displayDate}
                        onClick={() => setSelectedDay(day)}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default DaySelectorCarousel;