"use client";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface ProjectCardProps {
  name: string;
  tag: string[];
  images: string[];
}

export default function ProjectsCard({ name, tag, images }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 640); // Consider mobile screens below 640px
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isHovered && isLargeScreen) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2500);
    } else {
      setCurrentImageIndex(0);
    }

    return () => clearInterval(interval);
  }, [isHovered, isLargeScreen, images.length]);

  return (
    <CardContainer className="inter-var  relative group">
      <div
        className="relative bg-[#000] rounded-xl hover:bg-[#151030] lg:hover:scale-125"
        onMouseEnter={() => isLargeScreen && setIsHovered(true)}
        onMouseLeave={() => {
          isLargeScreen && setIsHovered(false);
          setCurrentImageIndex(0);
        }}
      >
        <CardBody className=" relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-full h-auto rounded-xl p-6 border">
          <CardItem translateZ="120" className="h-80 relative w-80 mt-4">
            <div className="flex justify-between z-30 items-center sm:hidden relative h-full">
              <button
                onClick={() =>
                  setCurrentImageIndex(
                    (prevIndex) => (prevIndex - 1 + images.length) % images.length
                  )
                }
                className="text-white absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 px-2 py-1 rounded"
              >
                <AiFillCaretLeft />
              </button>
              <button
                onClick={() =>
                  setCurrentImageIndex(
                    (prevIndex) => (prevIndex + 1) % images.length
                  )
                }
                className="text-white absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 px-2 py-1 rounded"
              >
                <AiFillCaretRight />
              </button>
            </div>
            <div className="h-60  w-full rounded-xl">
              <Image
                src={images[currentImageIndex]}
                fill
                className="h-60 w-full object-contain  rounded-xl transition-transform duration-300 ease-in-out"
                alt="thumbnail"
              />
            </div>
          </CardItem>

          <div className="flex justify-between items-center mt-10">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white dark:text-white"
            >
              {name}
            </CardItem>
            <CardItem
              translateZ={20}
              as={Link}
              href="#"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal text-same"
            >
              Git Link →
            </CardItem>
          </div>
          <CardItem translateZ="50" className="text-white">
            Make things float in air
          </CardItem>
          <CardItem translateZ="50" className="text-xs text-white">
            {tag.join(", ")}
          </CardItem>
        </CardBody>
      </div>
    </CardContainer>
  );
}
