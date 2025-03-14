import React from "react";
import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const ProductColorsSlider = ({ colors }) => {
  return (
    <div className="colors-slider">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={4}
        navigation
      >
        {colors.map((color) => (
          <SwiperSlide key={color._id}>
            <div className="color-slide">
              <img
                src={color.colorImages[0]}
                alt={color.colorName}
                className="color-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductColorsSlider;
