"use client"

import { CaretLeft, CaretRight, MagnifyingGlass } from "@phosphor-icons/react";

export function HeaderBar() {
    return (
        <header className="flex justify-between items-center w-screen h-16 pl-10 pr-72 fixed z-20 backdrop-blur-xl bg-[#161618bf]">
            <div className="flex items-center gap-2">
                <div className="bg-[#1F1F22] rounded-full p-2 cursor-pointer border-2 border-[#222225]">
                    <CaretLeft size={16} color="#fcfcfc" />
                </div>
                <div className="bg-[#1F1F22] rounded-full p-2 cursor-pointer border-2 border-[#222225]">
                    <CaretRight size={16} color="#fcfcfc" />
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="flex items-center">
                    <MagnifyingGlass className="absolute ml-3" size={18} color="#fcfcfc" />
                    <input className=" w-96 h-10 bg-[#1F1F22] border-2 border-[#222225] rounded-xl pl-10 text-sm outline-none"
                        placeholder="Search"></input>
                </div>
                <div className="bg-[#1F1F22] rounded-full p-2 cursor-pointer border-2 border-[#222225]">
                    <CaretLeft size={16} color="#fcfcfc" />
                </div>
            </div>
        </header>
    )
}