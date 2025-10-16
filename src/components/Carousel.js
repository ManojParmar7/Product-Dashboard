import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Assets from "./Assets/assets";

const Carousels = () => {
  const Items = [
    { src: Assets.Coffee, alt: "logo192" },
    { src: Assets.Coffee4_webp, alt: "logo192" },
    { src: Assets.Coffee7, alt: "logo512" },
    { src: Assets.Coffee1, alt: "logo512" },
    { src: Assets.Coffee4_jpg, alt: "favicon" },
    { src: Assets.Coffee8, alt: "favicon" },
    { src: Assets.Coffee2, alt: "favicon" },
  ];

  return (
    <>
      <style>
        {`
          .carousel.carousel-slider .control-arrow:hover {
            background: none !important;
          }
        `}
      </style>

      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        transitionTime={500}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={false}
        useKeyboardArrows={true}
      >
        {Items.map((item, idx) => (
          <div key={idx} className="max-h-[450px] overflow-hidden">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-[430px] sm:h-[450px] object-contain bg-gray-100"
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Carousels;
