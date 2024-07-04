"use client";
import React from "react";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "./ui/MagicButton";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "cephaskiprono@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div className="mt-5 relative">
      {/* button border magic from tailwind css buttons  */}
      {/* add rounded-md h-8 md:h-8, remove rounded-full */}
      {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
      {/* add handleCopy() for the copy the text */}
      <div
        className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}
      >
        {/* <img src="/confetti.gif" alt="confetti" /> */}
        {/* <Lottie options={defaultOptions} height={200} width={400} /> */}
      </div>

      {/* <MagicButton
        title={copied ? "Email is Copied!" : "Copy my email address"}
        icon={<IoCopyOutline />}
        position="left"
        handleClick={handleCopy}
        otherClasses="!bg-[#161A31]"
      /> */}
    </div>
  );
};

export default Contact;
