"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import "@/app/globals.css";

const Accessories = () => {
  console.log;
  return (
    <Carousel
      showArrows={true}
      className="main-slider"
      autoPlay={true}
      interval={1000}
    >
      <div>
        <img src="/bed_img2.jpg" />
      </div>
      <div>
        <img src="/bed-factory-bed-frames.jpg" />
      </div>
      <div>
        <img src="/bed-factory-metal-beds.jpg" />
      </div>
      <div>
        <img src="/bed_img2.jpg" />
      </div>
      <div>
        <img src="/bed-factory-bed-frames.jpg" />
      </div>
      <div>
        <img src="/bed-factory-metal-beds.jpg" />{" "}
      </div>
    </Carousel>
  );
};

export default Accessories;
