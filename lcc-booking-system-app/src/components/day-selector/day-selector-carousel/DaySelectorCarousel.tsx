import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import DaySelectorCarouselItem from "./day-selector-carousel-item/DaySelectorCarouselItem";
import styles from "./DaySelectorCarousel.module.scss";

const DaySelectorCarousel = ({ availableDays }: { availableDays: { date: string; dayOfWeek: string; displayDate: string }[] }) => {
    const slides = Array.from(
        { length: Math.ceil(availableDays.length / 7) },
        (_, index) => availableDays.slice(index * 7, index * 7 + 7),
    );

    return (
        <Swiper
        className={styles["day-selector-carousel"]}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
                addIcons: false
            }}
            speed={1000}>
            {slides.map((slideDays, slideIndex) => (
                <SwiperSlide className={styles["day-selector-carousel__slide"]} key={`slide-${slideIndex}`}>
                    {slideDays.map((day, dayIndex) => (
                        <DaySelectorCarouselItem
                            key={day.date}
                            active={slideIndex === 0 && dayIndex === 0}
                            day={day.dayOfWeek}
                            date={day.displayDate}
                        />
                    ))}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default DaySelectorCarousel;