import { useMounted } from './useMounted';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { MediaItem } from '../../lib/media';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Props {
  media: MediaItem[];
}

function MediaSlideContent({ item }: { item: MediaItem }) {
  return (
    <>
      {item.label && <span className="cheat-slide-label">{item.label}</span>}
      <img
        src={item.src}
        alt={item.alt}
        className="cheat-slide-media"
        loading="lazy"
        decoding="async"
        width={1280}
        height={720}
        sizes="(max-width: 900px) 100vw, 960px"
      />
    </>
  );
}

export default function MediaSwiper({ media }: Props) {
  const mounted = useMounted();
  const firstItem = media[0];

  if (!firstItem) {
    return null;
  }

  if (!mounted) {
    return (
      <div className="cheat-swiper-wrap">
        <div className="cheat-slide">
          <MediaSlideContent item={firstItem} />
        </div>
      </div>
    );
  }

  return (
    <div className="cheat-swiper-wrap">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        effect="slide"
        speed={600}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        loop={media.length > 1}
        className="cheat-swiper"
      >
        {media.map((item, index) => (
          <SwiperSlide key={`${item.src}-${index}`}>
            <div className="cheat-slide">
              <MediaSlideContent item={item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
