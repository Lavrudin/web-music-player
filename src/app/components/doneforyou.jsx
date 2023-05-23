"use client"

import Image from "next/image"

import mynewarrivals from "src/app/assets/images/my-new-arrivals.png"
import coexist from "src/app/assets/images/coexist.png"
import afterhours from "src/app/assets/images/after-hours.png"
import ifyouwait from "src/app/assets/images/if-you-wait.png"

import { Play } from "@phosphor-icons/react";

export default function Doneforyou() {

    let ImageWidth = 255

    return (
        <section className="mt-20 mx-8">
            <div className="flex items-center justify-between p-2">
                <h2 className="">Feito para você</h2>
            </div>
            <div className="flex gap-4">
                <div className=" bg-[#212124] rounded-lg cursor-pointer">
                    <Image
                        className="cursor-pointer rounded-t-lg"
                        src={mynewarrivals}
                        alt="#"
                        width={ImageWidth}
                    />
                    <div className="flex flex-col gap-1 bg-[url(./assets/images/my-new-arrivals.png)] rounded-b-lg">
                        <div className="flex ml-48 -mt-5 z-10 cursor-pointer absolute w-10 h-10 justify-center items-center bg-white rounded-full">
                            <Play size={16} color="#00000f" weight="fill" />
                        </div>
                        <div className="p-4 backdrop-blur-xl h-[140px] rounded-b-lg bg-[#0000004d]">
                            <p className="text-[#EF2F62] text-xs">New For You</p>
                            <h1 className="text-lg text=[#FCFCFC]">My New Arrivals</h1>
                            <p className="text-sm text-[#9898A6]">Deine Freunde, Moderat,<br /> Sebastián Yatra and more</p>
                        </div>
                    </div>
                </div>
                <div className=" bg-[#212124] rounded-lg cursor-pointer">
                    <Image
                        className="cursor-pointer rounded-t-lg"
                        src={coexist}
                        alt="#"
                        width={ImageWidth}
                    />
                    <div className="flex flex-col gap-1 bg-[url(./assets/images/coexist.png)] rounded-b-lg">
                        <div className="flex ml-48 -mt-5 z-10 cursor-pointer absolute w-10 h-10 justify-center items-center bg-white rounded-full">
                            <Play size={16} color="#00000f" weight="fill" />
                        </div>
                        <div className="p-4 backdrop-blur-xl h-[140px] rounded-b-lg bg-[#0000004d]">
                            <p className="text-[#00FFFF] text-xs">New Track for you</p>
                            <h1 className="text-lg text=[#FCFCFC]">Coexist</h1>
                            <p className="text-sm text-[#9898A6]">Album by The XX</p>
                        </div>
                    </div>
                </div>
                <div className=" bg-[#212124] rounded-lg cursor-pointer">
                    <Image
                        className="cursor-pointer rounded-t-lg"
                        src={afterhours}
                        alt="#"
                        width={ImageWidth}
                    />
                    <div className="flex flex-col gap-1 bg-[url(./assets/images/after-hours.png)] rounded-b-lg">
                        <div className="flex ml-48 -mt-5 z-10 cursor-pointer absolute w-10 h-10 justify-center items-center bg-white rounded-full">
                            <Play size={16} color="#00000f" weight="fill" />
                        </div>
                        <div className="p-4 backdrop-blur-xl h-[140px] rounded-b-lg bg-[#0000004d]">
                            <p className="text-[#EF2F62] text-xs">New Album</p>
                            <h1 className="text-lg text=[#FCFCFC]">After Hours</h1>
                            <p className="text-sm text-[#9898A6]">The Weeknd</p>
                        </div>
                    </div>
                </div>
                <div className=" bg-[#212124] rounded-lg cursor-pointer">
                    <Image
                        className="cursor-pointer rounded-t-lg"
                        src={ifyouwait}
                        alt="#"
                        width={ImageWidth}
                    />
                    <div className="flex flex-col gap-1 bg-[url(./assets/images/if-you-wait.png)] rounded-b-lg">
                        <div className="flex ml-48 -mt-5 z-10 cursor-pointer absolute w-10 h-10 justify-center items-center bg-white rounded-full">
                            <Play size={16} color="#00000f" weight="fill" />
                        </div>
                        <div className="p-4 backdrop-blur-xl h-[140px] rounded-b-lg bg-[#0000004d]">
                            <p className="text-[#EF2F62] text-xs">Based on your likes</p>
                            <h1 className="text-lg text=[#FCFCFC]">If You Wait</h1>
                            <p className="text-sm text-[#9898A6]">London Grammar</p>
                        </div>
                    </div>
                </div>
                <div className=" bg-[#212124] rounded-lg cursor-pointer">
                    <Image
                        className="cursor-pointer rounded-t-lg"
                        src={mynewarrivals}
                        alt="#"
                        width={ImageWidth}
                    />
                    <div className="flex flex-col gap-1 bg-[url(./assets/images/my-new-arrivals.png)] rounded-b-lg">
                        <div className="flex ml-48 -mt-5 z-10 cursor-pointer absolute w-10 h-10 justify-center items-center bg-white rounded-full">
                            <Play size={16} color="#00000f" weight="fill" />
                        </div>
                        <div className="p-4 backdrop-blur-xl h-[140px] rounded-b-lg bg-[#0000004d]">
                            <p className="text-[#EF2F62] text-xs">New For You</p>
                            <h1 className="text-lg text=[#FCFCFC]">My New Arrivals</h1>
                            <p className="text-sm text-[#9898A6]">Deine Freunde, Moderat,<br /> Sebastián Yatra and more</p>
                        </div>
                    </div>
                </div>
                <div className=" bg-[#212124] rounded-lg cursor-pointer">
                    <Image
                        className="cursor-pointer rounded-t-lg"
                        src={coexist}
                        alt="#"
                        width={ImageWidth}
                    />
                    <div className="flex flex-col gap-1 bg-[url(./assets/images/coexist.png)] rounded-b-lg">
                        <div className="flex ml-48 -mt-5 z-10 cursor-pointer absolute w-10 h-10 justify-center items-center bg-white rounded-full">
                            <Play size={16} color="#00000f" weight="fill" />
                        </div>
                        <div className="p-4 backdrop-blur-xl h-[140px] rounded-b-lg bg-[#0000004d]">
                            <p className="text-[#00FFFF] text-xs">New Track for you</p>
                            <h1 className="text-lg text=[#FCFCFC]">Coexist</h1>
                            <p className="text-sm text-[#9898A6]">Album by The XX</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
