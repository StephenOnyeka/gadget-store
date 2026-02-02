"use client";

import React from 'react'
import { Button } from './ui/button'

export function Hero2() {
  return (
    <section className="container mx-auto px-6 py-12 mt-8">
        <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden bg-black">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          >
            <source
              src="https://videos.pexels.com/video-files/4125670/4125670-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 p-12 md:p-20 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Experience the future, one glance at a time
            </h2>
            <p className="text-lg text-zinc-300 mb-8 max-w-lg">
              Seamlessly integrate digital information into your physical world.
              Precision engineered for comfort and clarity.
            </p>
            <Button
              size="lg"
              className="rounded-full px-8 bg-white text-black hover:bg-zinc-200 h-12 text-base"
            >
              Reserve now
            </Button>
          </div>
        </div>
      </section>
  )
}