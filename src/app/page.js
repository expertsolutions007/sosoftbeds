// pages/index.js

import "../css/styles.css";
import React from "react";
import CarouselSlider from "@/components/carousel/CarouselSlider";
import HomeCards from "@/components/cards/HomeCards";
import ProductIndex from "../components/Products";

export default function Home() {
  const images = [
    { img: "/divan-beds.jpg", name: "a", height: 100 },
    { img: "/bed-factory-bed-frames.jpg", name: "b", height: 100 },
    { img: "/bed-factory-wooden-beds.jpg", name: "c", height: 100 },
    { img: "/bed-factory-mattresses.jpg", name: "d", height: 100 },
  ];

  const buttons = [
    { defaultText: "Divan Beds from €198", buttonText: "EXPLORE" },
    { defaultText: "Bed frames from €89", buttonText: "EXPLORE" },
    { defaultText: "Wooden frames from €99", buttonText: "EXPLORE" },
    { defaultText: "Mattresses from €79", buttonText: "EXPLORE" },
    { defaultText: "Metal Beds from €89", buttonText: "EXPLORE" },
    { defaultText: "Ottoman Beds from €249", buttonText: "EXPLORE" },
    { defaultText: "Bunk Beds", buttonText: "EXPLORE" },
    { defaultText: "Tv Beds", buttonText: "EXPLORE" },
    { defaultText: "Divan Base only", buttonText: "EXPLORE" },
    { defaultText: "Headboards", buttonText: "EXPLORE" },
    { defaultText: "Custom sizes", buttonText: "EXPLORE" },
    { defaultText: "View all Beds", buttonText: "EXPLORE" },
  ];

  return (
    <main className="bg-white flex items-center justify-center mx-auto flex-col">
      <CarouselSlider />
      <div className="container my-5">
        <div className="divider divider-info">
          <div className="collect">
            <div className="left-line"></div>
            <div className="collection">Our Collections</div>
            <div className="right-line"></div>
          </div>
        </div>
      </div>

      <div className="w-[100%]  ">
        <div className="container flex items-center justify-center mx-auto">
          <div className="collection-grid grid gap-5 overflow-x-hidden">
            {images.map((imageUrl, index) => (
              <HomeCards
                key={index}
                index={index}
                imageUrl={imageUrl.img}
                buttons={buttons}
                char={imageUrl.name}
                height={imageUrl.height}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="container bg-white">
        <div>
          <div className="text-[22px] font-[600] fw-1000 text-center mt-8 mb-3">
            Trending
          </div>
          <div class="underline-container ">
            <div class="underline"></div>
            <div class="underline"></div>
          </div>
        </div>
        <ProductIndex />
        <div className="text-center my-8">
          <button class="btn btn-outline rounded-full font-bold border-[3px] px-4 py-2">
            Load More
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-6 my-16 ">
          <div className="h-100 w-100 relative">
            <img src="/offer-1.png" style={{ objectFit: "contain" }}></img>
            <div className="offer-text text-[#FFF8F0]">
              <div className="text-[24px] md:text-[18px] lg:text-[24px] font-[500] text-center text-nowrap">
                LOOKBOOK 2023
              </div>
              <div
                className="text-[14px] md:text-[12px] lg:text-[14px] font-[600] text-center text-nowrap"
                style={{ lineHeight: "24PX" }}
              >
                MAKE LOVE THIS LOOK
              </div>
            </div>
          </div>
          <div className="h-100 w-100 relative">
            <img src="/offer-2.png" style={{ objectFit: "contain" }}></img>
            <div className="offer-text text-[#1C2C39]">
              <div className="text-[18px] md:text-[14px] lg:text-[18px] font-[500] text-center mb-5 text-nowrap">
                SUMMER SALE
              </div>
              <div
                className="text-[50px] md:text-[30px] lg:text-[50px] font-[600] text-center text-nowrap"
                style={{ lineHeight: "24PX" }}
              >
                UP TO 70%
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
