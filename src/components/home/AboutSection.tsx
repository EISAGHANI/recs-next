'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

export default function AboutSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decorative dots */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-2 h-2 bg-primary-600 rounded-full"></div>
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary-600 rounded-full"></div>
        <div className="absolute top-40 left-32 w-2 h-2 bg-primary-600 rounded-full"></div>
        <div className="absolute bottom-20 left-16 w-2 h-2 bg-primary-600 rounded-full"></div>
        <div className="absolute bottom-40 left-40 w-2 h-2 bg-primary-600 rounded-full"></div>
        <div className="absolute top-32 right-20 w-2 h-2 bg-primary-600 rounded-full"></div>
        <div className="absolute top-48 right-32 w-2 h-2 bg-primary-600 rounded-full"></div>
        <div className="absolute bottom-32 right-24 w-2 h-2 bg-primary-600 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* New to RECS heading with underline */}
            <div className="mb-6">
              <h3 className="text-primary-600 text-2xl font-normal italic inline-block relative">
                New to RECS
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600"></span>
              </h3>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Watch the video to learn about RECS Research
            </h2>
            
            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              In this{' '}
              <span className="text-primary-600 font-semibold">
                80 seconds video clip
              </span>
              , discover how RECS Research delivers data-driven insights and expert research to drive impactful decision-making for sustainable development projects
            </p>
          </div>

          {/* Right Video/Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Video thumbnail image */}
              <div className="relative aspect-[16/10] bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="RECS Research Team"
                  fill
                  className="object-cover"
                />
                
                {/* Play button overlay */}
                {!isPlaying && (
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center group"
                    aria-label="Play video"
                  >
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-10 h-10 text-red-600 fill-red-600 ml-1" />
                    </div>
                  </button>
                )}

                {/* If playing, show video embed */}
                {isPlaying && (
                  <div className="absolute inset-0 bg-black">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                      title="RECS Research Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>

              {/* RECS Research logo badge */}
              <div className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">RECS</span>
                  </div>
                  <span className="font-bold text-gray-900">research</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
