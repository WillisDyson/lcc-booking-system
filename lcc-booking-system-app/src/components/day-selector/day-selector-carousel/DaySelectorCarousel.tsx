import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import DaySelectorCarouselItem from "./day-selector-carousel-item/DaySelectorCarouselItem";
import styles from "./DaySelectorCarousel.module.scss";

const DaySelectorCarousel = ({ }) => {
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
                {/* TODO: Add dynamic looping to generate slides */}
            <SwiperSlide className={styles["day-selector-carousel__slide"]}>
                <DaySelectorCarouselItem active />
                <DaySelectorCarouselItem/>
                <DaySelectorCarouselItem />
                <DaySelectorCarouselItem />
                <DaySelectorCarouselItem />
                <DaySelectorCarouselItem />
                <DaySelectorCarouselItem />
            </SwiperSlide>
            <SwiperSlide className={styles["day-selector-carousel__slide"]}>
                <DaySelectorCarouselItem />
                <DaySelectorCarouselItem />
                <DaySelectorCarouselItem />
                <DaySelectorCarouselItem />
                <DaySelectorCarouselItem />
                <DaySelectorCarouselItem />
                <DaySelectorCarouselItem />
            </SwiperSlide>
        </Swiper>
    );
};

export default DaySelectorCarousel;