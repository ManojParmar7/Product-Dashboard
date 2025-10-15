import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Assets from "./Assets/assets";

const Carousels = () => {
  const carouselItems = [
    { src: Assets.Coffee1, alt: "logo512" },
    { src: Assets.Coffee4_jpg, alt: "favicon" },
    { src: Assets.Coffee4_webp, alt: "logo192" },
    { src: Assets.Coffee7, alt: "logo512" },
    { src: Assets.Coffee8, alt: "favicon" },
    { src: Assets.Coffee2, alt: "favicon" },
    { src: Assets.Coffee, alt: "logo192" },
  ];

  return (
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
      {carouselItems.map((item, idx) => (
        <div key={idx} style={{ maxHeight: "600px", overflow: "hidden" }}>
          <img
            src={item.src}
            alt={item.alt}
            style={{
              width: "100%",
              height: "600px",
              objectFit: "contain",
              overflow: "hidden",
              background: "#f0f0f0",
            }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Carousels;
