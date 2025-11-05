import React from 'react';

const HeroVideo = () => {
  // Two video renderings to optimize for desktop (widescreen) and mobile (phone view)
  // Desktop: widescreen, large, immersive
  // Mobile: vertical-friendly aspect
  const desktopSrc = 'https://cdn.coverr.co/videos/coverr-a-forest-stream-8542/1080p.mp4';
  const mobileSrc = 'https://cdn.coverr.co/videos/coverr-path-in-the-woods-1416/1080p.mp4';

  return (
    <section className="w-full">
      {/* Desktop / Tablet widescreen video */}
      <div className="hidden sm:block w-full">
        <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-xl">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={desktopSrc}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
        </div>
      </div>

      {/* Mobile phone-view video */}
      <div className="block sm:hidden w-full">
        <div className="relative w-full aspect-[9/16] overflow-hidden rounded-xl shadow-lg">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={mobileSrc}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
