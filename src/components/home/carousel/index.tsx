import { useEffect, useState } from "react";
import theme from "../../../theme";
import { PDiv, CDiv, CImage, Description, Explore, Title, wave, CWrap } from "./carousel.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BannerData } from "./data/data";

export const Carousel: any = (props: any) => {
  const [width, setWidth]: any = useState("lg");

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    // console.log("UseEffect TCCMBanner");
    onLoadSizeCheck();

    function handleResize() {
      if (innerWidth > 1280) {
        setWidth("lg");
      } else if (innerWidth >= 940) {
        setWidth("md");
      } else if (innerWidth >= 600) {
        setWidth("sm");
      } else if (innerWidth < 600) {
        setWidth("mb");
      }
    }

    window.addEventListener("resize", handleResize);
  }, []);

  function onLoadSizeCheck() {
    if (innerWidth > 1280) {
      setWidth("lg");
    } else if (innerWidth >= 940) {
      setWidth("md");
    } else if (innerWidth >= 600) {
      setWidth("sm");
    } else if (innerWidth < 600) {
      setWidth("mb");
    }
  }

  return (
    <PDiv>
      <Slider {...settings}>
        {BannerData.map((i) =>
          <CDiv background={i.img}>
            <CWrap>
            <Title>{i.title}</Title>
            <Description>{i.description}</Description>
            <Explore>Explore Now</Explore>
            </CWrap>
          </CDiv>
        )}
      </Slider>
    </PDiv>
  );
};
