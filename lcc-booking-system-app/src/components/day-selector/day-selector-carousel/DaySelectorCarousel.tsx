import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import DaySelectorCarouselItem from "./day-selector-carousel-item/DaySelectorCarouselItem";
import styles from "./DaySelectorCarousel.module.scss";
import { useActivitySearchFilters } from "../../../context/ActivitySearchFiltersContext";

const DaySelectorCarousel = ({ availableDays }: { availableDays: { date: string; dayOfWeek: string; displayDate: string; totalActivities: number }[] }) => {
    const daysPerSlide = 7;
    const { selectedDay, setSelectedDay } = useActivitySearchFilters();

    return (
        <Swiper
        className={styles["day-selector-carousel"]}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            navigation={{
                addIcons: false
            }}
            speed={1000}>
            {Array.from({ length: Math.ceil(availableDays.length / daysPerSlide) }, (_, slideIndex) => {
                const start = slideIndex * daysPerSlide;
                const end = start + daysPerSlide;

                return (
                    <SwiperSlide className={styles["day-selector-carousel__slide"]} key={`slide-${slideIndex}`}>
                        {availableDays.slice(start, end).map((day, index) => (
                            <DaySelectorCarouselItem
                                key={day.date}
                                active={selectedDay ? selectedDay.date === day.date : start + index === 0}
                                day={day.dayOfWeek}
                                date={day.displayDate}
                                onClick={() => setSelectedDay(day)}
                            />
                        ))}
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default DaySelectorCarousel;