'use client';
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Banner = () => {
  return (
    <div className="max-w-5xl w-full  rounded-b-2xl rounded-t-md mx-auto my-4 h-78 bg-gray-900 flex items-center justify-center">
      <h1 className="text-white text-2xl font-bold ">  </h1>
      <Splide
        className="w-full h-full rounded-t-md"
        aria-label=" "
        options={{
          type: 'loop',
          perPage: 1,
          autoplay: true,
          interval: 3000,
        }}
      >
        <SplideSlide className="w-full h-50 bg-amber-300">Slide 01</SplideSlide>
        <SplideSlide className="w-full h-50 bg-amber-400">Slide 02</SplideSlide>
        <SplideSlide className="w-full h-50 bg-amber-500">Slide 03</SplideSlide>
      </Splide>


    </div>
  );
}

export default Banner;