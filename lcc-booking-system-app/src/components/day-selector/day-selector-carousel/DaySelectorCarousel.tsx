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

const DaySelectorCarousel = ({ availableDays }: { availableDays: { date: string; dayOfWeek: string; displayDate: string; totalActivities: number }[] }) => {
    const { selectedDay, setSelectedDay } = useActivitySearchFilters();

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
        spaceBetween={2}
        speed={300}
        >
            {availableDays.map((day, index) => (
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