import { NextArrow, PrevArrow } from "../components/HeroCarousal/Arrows.component";

const settings = {
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 6,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true
        },
      },
      {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
        },
      },
      {
        breakpoint: 480,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 3,
        },
      }
    ],
};

export default settings;