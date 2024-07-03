"use client";

// Import necessary hooks and utilities

import ProductbaseDropdown from "@/components/ProductbaseDropdown";
import Image from "next/image";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define the Page component to accept imageUrl as a prop
const Page = ({ imageUrl }) => {
  const fruits = [
    { value: "apple", label: "Apple", imageUrl: "/Double-small.png" },
    { value: "banana", label: "Banana", imageUrl: "/Double-small.png" },
    {
      value: "blueberry",
      label: "Blueberry",
      imageUrl: "/Double-small.png",
    },
    { value: "grapes", label: "Grapes", imageUrl: "/Double-small.png" },
    {
      value: "pineapple",
      label: "Pineapple",
      imageUrl: "/Double-small.png",
    },
  ];

  return (
    <>
      <section className="mx-auto p-[4%] flex items-start gap-8 w-full flex-row justify-between">
        {/* Use the passed imageUrl for the Image component */}
        <Image
          src="/bed-factory-bed-frames.jpg"
          width={50}
          height={20}
          alt="Mattress"
          className="w-full h-[650px] object-cover "
        />

        {/* information section */}
        <div className="flex flex-col items-start  justify-start gap-2 w-full">
          <h1 className="text-base mb-5 font-semibold">
            Cool Gel 5000 Pocket Sprung Mattress
          </h1>
          <span className="flex flex-row gap-1 uppercase font-bold items-center justify-start">
            <p className="text-sm">SIZE:</p>
            <h3 className="text-sm ">SMALL DOUBLE 4FT</h3>
          </span>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* <SelectLabel>Fruits</SelectLabel> */}
                {fruits.map((fruit) => (
                  <SelectItem
                    key={fruit.value}
                    value={fruit.value}
                  >
                    <div                     className="flex flex-row items-center justify-start w-full gap-3"
>

                    <img
                      src={fruit.imageUrl}
                      alt={fruit.label}
                      style={{
                        marginRight: "10px",
                        width: "20px",
                        height: "20px",
                      }}
                    />{" "}
                  <h1>
                  {fruit.label}
                    </h1>
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </section>
      <ProductbaseDropdown />
    </>
  );
};

export default Page;
