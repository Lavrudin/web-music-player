import Image from "next/image"

import bloodsugar from "src/app/assets/images/blood-sugar.png"
import mydailydiscovery from "src/app/assets/images/my-daily-discovery.png"
import mymix from "src/app/assets/images/my-mix.png"
import bonne from "src/app/assets/images/bonne.png"
import honor from "src/app/assets/images/honor.png"

export default function Themostplayed() {

    let ImageWidth = 210

    return (
        <section className="mt-20 mx-8">
            <div className="flex items-center justify-between p-2">
                <h2 className="">As mais tocadas</h2>
            </div>
            <div className="flex gap-6">
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
                        <p className="text-[10px] text-[#9898A6]">LABEL</p>
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
                        <p className="text-[#FCFCFC] text-sm">My Daily Discovery</p>
                        <h1 className="text-sm text-[#9898A6]">Songs by new and familiar artists inspired by your listening. Updates every morning.</h1>
                        <p className="text-[10px] text-[#9898A6]">LABEL</p>
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
                        <p className="text-[#FCFCFC] text-sm">My Mix 2</p>
                        <h1 className="text-sm text-[#9898A6]">Ghali, Liberato, Coma_Cose and more</h1>
                        <p className="text-[10px] text-[#9898A6]">LABEL</p>
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
                        <p className="text-[#FCFCFC] text-sm">My Mix 4</p>
                        <h1 className="text-sm text-[#9898A6]">Stephanie Beatriz, Kristen Bell, JD McCrary and more</h1>
                        <p className="text-[10px] text-[#9898A6]">LABEL</p>
                    </div>
                </div>
                <div className="h-72 w-52">
                    <Image
                        className="cursor-pointer"
                        src={honor}
                        alt="#"
                        width={ImageWidth}
                    />
                    <div className="flex flex-col pt-4 whitespace-nowrap overflow-hidden">
                        <p className="text-[#FCFCFC] text-sm">In Your Honor</p>
                        <h1 className="text-sm text-[#9898A6]">Foo Fighters</h1>
                        <p className="text-[10px] text-[#9898A6]">LABEL</p>
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
                        <p className="text-[10px] text-[#9898A6]">LABEL</p>
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
                        <p className="text-[#FCFCFC] text-sm">My Daily Discovery</p>
                        <h1 className="text-sm text-[#9898A6]">Songs by new and familiar artists inspired by your listening. Updates every morning.</h1>
                        <p className="text-[10px] text-[#9898A6]">LABEL</p>
                    </div>
                </div>
            </div>
        </section>
    )
}