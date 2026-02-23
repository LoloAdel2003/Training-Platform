"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CourseCard, { Course } from "../student/cards/CourseCard";

type CourseSliderProps = {
  courses: Course[];
};

const CourseSlider: React.FC<CourseSliderProps> = ({ courses }) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null); // ref للـ Swiper

  // تأكد أن الأزرار مرتبطة بالـ swiper بعد mount
  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="w-full py-6 bg-background">
      <div className="flex justify-center items-center">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // حفظ instance في ref
          breakpoints={{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            968: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="py-6 w-auto "
        >
          {courses.map((course) => (
            <SwiperSlide
              key={course.id}
              className="flex justify-center items-center"
            >
              <div className="py-4">
                <CourseCard card={course} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          ref={prevRef}
          aria-label="Previous slide"
          className="w-10 h-10 rounded-full cursor-pointer bg-primary text-white flex items-center justify-center text-lg hover:bg-primary/80 transition"
        >
          ❮
        </button>

        <button
          ref={nextRef}
          aria-label="Next slide"
          className="w-10 h-10 rounded-full cursor-pointer bg-primary text-white flex items-center justify-center text-lg hover:bg-primary/80 transition"
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default CourseSlider;
