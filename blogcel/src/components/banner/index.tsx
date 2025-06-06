'use client';
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Banner = () => {
  return (
    <div className="w-full mx-auto h-98 relative flex items-center justify-center overflow-hidden">

      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/circuit-board.svg')",
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
          backgroundPosition: 'center top',
          opacity: 0.3,
          zIndex: 0,
        }}
      />


      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(255,255,255, 0.1), rgba(255,255,255,0.8), rgba(255,255,255,1))',
          zIndex: 1,
        }}
      />

      {/* Conteúdo principal */}
      <div className="relative z-10 w-full">
        <h1 className="text-white text-2xl font-bold text-center mb-4"></h1>
        <Splide
          className="w-full h-full bg-amber-950 rounded-t-md"
          aria-label=" "
          options={{
            type: 'loop',
            perPage: 1,
            autoplay: true,
            interval: 3000,
          }}
        >
          {/* Slides aqui */}
        </Splide>
      </div>
    </div>
  );
};

export default Banner;
