import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { MediaItem } from '../../lib/media';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Props {
  media: MediaItem[];
}

export default function MediaSwiper({ media }: Props) {
  return (
    <div className="cheat-swiper-wrap">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={media.length > 1}
        className="cheat-swiper"
      >
        {media.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="cheat-slide">
              {item.label && <span className="cheat-slide-label">{item.label}</span>}
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="cheat-slide-media"
                  loading="lazy"
                  decoding="async"
                  width={1280}
                  height={720}
                />
              ) : item.src ? (
                <video
                  className="cheat-slide-media"
                  controls
                  playsInline
                  preload="metadata"
                  poster={item.poster}
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <div className="cheat-slide-video-fallback">
                  <img src={item.poster} alt={item.alt} className="cheat-slide-media" loading="lazy" />
                  <div className="cheat-slide-play" aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="8,5 8,19 19,12" />
                    </svg>
                  </div>
                  <p className="cheat-slide-video-note">Full demo available on request</p>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
