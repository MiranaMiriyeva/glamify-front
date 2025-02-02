import React from "react";
import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper'ın temel CSS'ini ekleyin
import "swiper/css/navigation"; // Navigasyon okları için CSS
import "swiper/css/pagination"; // Sayfalama noktaları için CSS
import { Navigation, Pagination } from "swiper/modules";

const ProductColorsSlider = ({ colors }) => {
  return (
    <div className="colors-slider">
      <Swiper
        modules={[Navigation, Pagination]} // Navigasyon ve sayfalama modüllerini ekleyin
        spaceBetween={0} // Slider öğeleri arasındaki boşluk
        slidesPerView={4} // Aynı anda görünen slider sayısı
        navigation // Navigasyon oklarını etkinleştir
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
