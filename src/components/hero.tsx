"use client";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const TypingEffect: React.FC<{ texts: string[] }> = ({ texts }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(200);
  const period = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullTxt = texts[i];

      setText((prevText) =>
        isDeleting
          ? fullTxt.substring(0, prevText.length - 1)
          : fullTxt.substring(0, prevText.length + 1)
      );

      setDelta(isDeleting ? 100 : 200);

      if (!isDeleting && text === fullTxt) {
        if (loopNum === texts.length - 1) {
          return;
        }
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };

    const ticker = setTimeout(handleTyping, delta);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, delta, loopNum, texts]);

  return (
    <span className="wrap">
      {text}
      <span className="cursor"></span>
    </span>
  );
};

export default function Hero() {
  const texts = ["UI/UX Designer", "Graphic design", "Frontend Developer"];

  return (
    <div
      id="home"
      className="flex relative justify-center lg:justify-start items-center h-screen"
    >
      <div className="w-2/4 h-full relative md:inline hidden">
        <Image alt="Image" src={"/me.png"} className="object-contain" fill />
      </div>
      <div className="flex flex-col gap-3">
        <span className="lg:text-4xl text-xl font-mono text-white font-thin">
          I&apos;M{" "}
          <span className="text-5xl lg:text-8xl font-bold font-sans text-same">
            Sahil Thakur
          </span>
        </span>
        <h1 className="text-3xl lg:text-5xl text-white font-bold font-mono">
          <TypingEffect texts={texts} />
        </h1>
      </div>
      <div className="absolute hidden lg:flex right-0 mr-8 bottom-0 gap-10 text-3xl items-center flex-col ">
        <div className="w-[2px] h-36 bg-[#ffc86a] hidden sm:hidden md:inline rounded-lg"></div>
        <Link href={"https://www.instagram.com/sahilthakur_16"} target="_blank">
          <FaInstagram />
        </Link>
        <Link href={"https://github.com/sahilthakur9461"} target="_blank">
          <BsGithub />
        </Link>
        <Link
          href={
            "https://www.linkedin.com/in/sahil-thakur-7ba765213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          }
          target="_blank"
        >
          <BsLinkedin />
        </Link>
      </div>
    </div>
  );
}
