import React, { useRef, useState } from 'react';
import WelcomeAdvertCard from './WelcomeAdvertCard';
import { bonusAd01, bonusAd02,supportAd01} from '@/assets/icons';
// import required modules
import { Pagination,Autoplay} from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


function WelcomeAdvertList() {

  return (
      <div className='relative flex flex-col'>
          {/* carousal wrapper */}
          <div className='w-screen'>
              <Swiper
                  slidesPerView={1}
                  spaceBetween={3}
                  centeredSlides={true}
                  breakpoints={{
                      200: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                      },
                      600: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                      },
                      1024: {
                          slidesPerView: 3,
                          spaceBetween: 20,
                      },
                  }}
                  loop={true}
                  autoplay={true}
                  pagination={true}
                  modules={[Autoplay, Pagination]}
                  //   onAutoplayTimeLeft={onAutoplayTimeLeft}
                  className="mySwiper"
              >
                 <SwiperSlide
                 className='swiper-slide'
                      style={{
                          textAlign: "center",
                          fontSize: "18px",
                          backgroundColor: "white",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                      }}
                  >
                      <WelcomeAdvertCard
                          banner={supportAd01}
                          path={"#"}
                      />
                  </SwiperSlide>

                  <SwiperSlide
                      style={{
                          textAlign: "center",
                          fontSize: "18px",
                          backgroundColor: "white",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                      }}

                  >
                      <WelcomeAdvertCard
                          banner={bonusAd01}
                          path={"#"}
                      />
                  </SwiperSlide>
                  <SwiperSlide
                      style={{
                          textAlign: "center",
                          fontSize: "18px",
                          backgroundColor: "white",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                      }}
                  >
                      <WelcomeAdvertCard
                          banner={bonusAd02}
                          path={"#"}
                      />
                  </SwiperSlide>
              </Swiper>
          </div>
      </div>
  )
}

export default WelcomeAdvertList;