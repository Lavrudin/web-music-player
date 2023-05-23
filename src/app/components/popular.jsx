"use client"

import Image from "next/image"

import bloodsugar from "src/app/assets/images/blood-sugar.png"
import mydailydiscovery from "src/app/assets/images/my-daily-discovery.png"
import mymix from "src/app/assets/images/my-mix.png"
import bonne from "src/app/assets/images/bonne.png"
import honor from "src/app/assets/images/honor.png"

export default function Popular() {

    let ImageWidth = 210

    return (
        <section className="mt-20 mb-52 mx-8">
            <div className="flex items-center justify-between p-2">
                <h2 className="">Populares</h2>
            </div>
            <div className="flex gap-6">
                <div className="h-72 w-52">
                    <Image
                        className="cursor-pointer"
                        src={honor}
                        alt="#"
                        width={ImageWidth}
                    />
                    <div className="flex flex-col pt-4 whitespace-nowrap overflow-hidden">
                        <p className="text-[#FCFCFC] text-sm">Blood Sugar Sex Magik (Deluxe Edition)</p>
                        <h1 className="text-sm text-[#9898A6]">Red Hot Chili Peppers</h1>
                        <p className="text-sm text-[#9898A6]">LABEL</p>
                    </div>
                </div>
                <div className="h-72 w-52">
                    <Image
                        className="cursor-pointer"
                        src={mymix}
                        alt="#"
                        width={ImageWidth}
                    />
                    <div className="flex flex-col pt-4 whitespace-nowrap overflow-hidden">
                        <p className="text-[#FCFCFC] text-sm">Blood Sugar Sex Magik (Deluxe Edition)</p>
                        <h1 className="text-sm text-[#9898A6]">Red Hot Chili Peppers</h1>
                        <p className="text-sm text-[#9898A6]">LABEL</p>
                    </div>
                </div>
                <div className="h-72 w-52">
                    <Image
                        className="cursor-pointer"
                        src={mydailydiscovery}
                        alt="#"
                        width={ImageWidth}
                    />
                    <div className="flex flex-col pt-4 whitespace-nowrap overflow-hidden">
                        <p className="text-[#FCFCFC] text-sm">Blood Sugar Sex Magik (Deluxe Edition)</p>
                        <h1 className="text-sm text-[#9898A6]">Red Hot Chili Peppers</h1>
                        <p className="text-sm text-[#9898A6]">LABEL</p>
                    </div>
                </div>
                <div className="h-72 w-52">
                    <Image
                        className="cursor-pointer"
                        src={bloodsugar}
                        alt="#"
                        width={ImageWidth}
                    />
                    <div className="flex flex-col pt-4 whitespace-nowrap overflow-hidden">
                        <p className="text-[#FCFCFC] text-sm">Blood Sugar Sex Magik (Deluxe Edition)</p>
                        <h1 className="text-sm text-[#9898A6]">Red Hot Chili Peppers</h1>
                        <p className="text-sm text-[#9898A6]">LABEL</p>
                    </div>
                </div>
                <div className="h-72 w-52">
                    <Image
                        className="cursor-pointer"
                        src={bonne}
                        alt="#"
                        width={ImageWidth}
                    />
                    <div className="flex flex-col pt-4 whitespace-nowrap overflow-hidden">
                        <p className="text-[#FCFCFC] text-sm">Blood Sugar Sex Magik (Deluxe Edition)</p>
                        <h1 className="text-sm text-[#9898A6]">Red Hot Chili Peppers</h1>
                        <p className="text-sm text-[#9898A6]">LABEL</p>
                    </div>
                </div>

                <div className="h-72 w-52">
                    <Image
                        className="cursor-pointer"
                        src={mymix}
                        alt="#"
                        width={ImageWidth}
                    />
                    <div className="flex flex-col pt-4 whitespace-nowrap overflow-hidden">
                        <p className="text-[#FCFCFC] text-sm">Blood Sugar Sex Magik (Deluxe Edition)</p>
                        <h1 className="text-sm text-[#9898A6]">Red Hot Chili Peppers</h1>
                        <p className="text-sm text-[#9898A6]">LABEL</p>
                    </div>
                </div>
                <div className="h-72 w-52">
                    <Image
                        className="cursor-pointer"
                        src={bloodsugar}
                        alt="#"
                        width={ImageWidth}
                    />
                    <div className="flex flex-col pt-4 whitespace-nowrap overflow-hidden">
                        <p className="text-[#FCFCFC] text-sm">Blood Sugar Sex Magik (Deluxe Edition)</p>
                        <h1 className="text-sm text-[#9898A6]">Red Hot Chili Peppers</h1>
                        <p className="text-sm text-[#9898A6]">LABEL</p>
                    </div>
                </div>
            </div>
        </section>
    )
}