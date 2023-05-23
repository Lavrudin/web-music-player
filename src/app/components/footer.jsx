"use client";

import coexist from "../assets/images/coexist.png";
import Image from "next/image";

import useSound from "use-sound";
import { useState } from "react";

import {
  Heart,
  DotsThree,
  Shuffle,
  SkipBack,
  SkipForward,
  Play,
  Pause,
  Repeat,
  SpeakerHigh,
  Screencast,
  List,
  CaretUp,
} from "@phosphor-icons/react";

export default function Footer() {
  const soundUrl = "/angels.mp3";
  const [play, { pause }] = useSound(soundUrl);

  const [isPlaying, setIsPlaying] = useState("");
  console.log(isPlaying);

  return (
    <div className="flex justify-between h-24 bg-[#1F1F22bf] fixed z-10 bottom-0 left-0 right-0 px-4 pr-10 backdrop-blur-xl">
      <div className="flex gap-5 items-center">
        <Image src={coexist} alt="Tocando agora" width={75} />
        <div className="flex flex-col gap-2 text-xs">
          <div className="flex items-center gap-2">
            <p className="text-[#FCFCFC]">Angels</p>
            <Heart
              className="cursor-pointer"
              size={16}
              color="#ffffff"
              weight="bold"
            />
            <DotsThree
              className="cursor-pointer"
              size={16}
              color="#ffffff"
              weight="bold"
            />
          </div>
          <p className="text-[#AFAFB0]">The XX</p>
          <p className="text-[#AFAFB0]">PLAING FROM: Coexist</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex gap-8 items-center">
          <Shuffle
            className="cursor-pointer"
            size={14}
            color="#ffffff"
            weight="bold"
          />
          <SkipBack
            className="cursor-pointer"
            size={15}
            color="#ffffff"
            weight="fill"
          />
          {isPlaying ? (
            <Pause
              onClick={() => {
                pause();
                setIsPlaying(false);
              }}
              className="cursor-pointer hover:scale-125 transition-all duration-150 delay-150 ease-in-out"
              size={18}
              color="#ffffff"
              weight="fill"
            />
          ) : (
            <Play
              onClick={() => {
                play();
                setIsPlaying(true);
              }}
              className="cursor-pointer hover:scale-125 transition-all duration-150 delay-150 ease-in-out"
              size={18}
              color="#ffffff"
              weight="fill"
            />
          )}

          <SkipForward
            className="cursor-pointer"
            size={15}
            color="#ffffff"
            weight="fill"
          />
          <Repeat
            className="cursor-pointer"
            size={14}
            color="#ffffff"
            weight="fill"
          />
        </div>

        <div className="h-1 w-[515px] bg-[#4C4E54] rounded-full">
          <div className="h-1"></div>
        </div>
      </div>

      <div className="flex gap-8 items-center">
        <SpeakerHigh
          className="cursor-pointer hover:scale-105 transition-all duration-150 delay-150 ease-in-out"
          size={32}
          color="#ffffff"
          weight="bold"
        />
        <Screencast
          className="cursor-pointer hover:scale-105 transition-all duration-150 delay-150 ease-in-out"
          size={32}
          color="#ffffff"
          weight="bold"
        />
        <List
          className="cursor-pointer hover:scale-105 transition-all duration-150 delay-150 ease-in-out"
          size={32}
          color="#ffffff"
          weight="bold"
        />
        <div className="bg-[#1F1F22] rounded-lg p-4 cursor-pointer border-2 border-[#29292D]">
          <CaretUp className="cursor-pointer" size={20} color="#fcfcfc" />
        </div>
      </div>
    </div>
  );
}
