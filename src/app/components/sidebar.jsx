
"use client"

import Image from "next/image"
import userpicture from "src/app/assets/images/User-Picture.png"
import {
    Broadcast,
    Playlist,
    VinylRecord,
    MusicNotesSimple,
    YoutubeLogo,
    MicrophoneStage,
    DotsThree,

}
    from "@phosphor-icons/react";

export function Sidebar() {
    return (
        <aside className="w-60 bg-[#212124] fixed z-10 top-0 bottom-0">
            <div className="flex justify-between items-center p-5">
                <Image
                    className="cursor-pointer"
                    src={userpicture}
                    alt="Foto de perfil do usuário"
                    width={23}
                    height={24}
                />
                <DotsThree
                    className="cursor-pointer"
                    size={24}
                    color="#fcfcfc" />
            </div>
            <nav className="mt-2 ml-8">
                <ul className="flex flex-col gap-6 text-sm">
                    <li className="cursor-pointer hover:text-[#00FFFF] transition-all duration-150 delay-150 ease-in-out">Home</li>
                    <li className="cursor-pointer hover:text-[#00FFFF] transition-all duration-150 delay-150 ease-in-out">Explore</li>
                    <li className="cursor-pointer hover:text-[#00FFFF] transition-all duration-150 delay-150 ease-in-out">Videos</li>
                </ul>
            </nav>
            <p className="text-xs pt-8 pl-3 text-[#9898A6]">MY COLLECTION</p>
            <nav className="mt-3 ml-8">
                <ul className="flex flex-col gap-6 text-xs">
                    <li className="flex items-center gap-3 hover:text-[#00FFFF] cursor-pointer transition-all duration-150 delay-150 ease-in-out"><Broadcast
                        size={24}
                        color="#fcfcfc"
                    />Mixes and Radio</li>

                    <li className="flex items-center gap-3 hover:text-[#00FFFF] cursor-pointer transition-all duration-150 delay-150 ease-in-out"><Playlist
                        size={24}
                        color="#fcfcfc"
                    />  Playlists</li>

                    <li className="flex items-center gap-3 hover:text-[#00FFFF] cursor-pointer transition-all duration-150 delay-150 ease-in-out"><VinylRecord
                        size={24}
                        color="#fcfcfc"
                    />Albums</li>

                    <li className="flex items-center gap-3 hover:text-[#00FFFF] cursor-pointer transition-all duration-150 delay-150 ease-in-out"><MusicNotesSimple
                        size={24}
                        color="#fcfcfc"
                    />Tracks</li>

                    <li className="flex items-center gap-3 hover:text-[#00FFFF] cursor-pointer transition-all duration-150 delay-150 ease-in-out"><YoutubeLogo
                        size={24}
                        color="#fcfcfc"
                    />Videos</li>

                    <li className="flex items-center gap-3 hover:text-[#00FFFF] cursor-pointer transition-all duration-150 delay-150 ease-in-out"><MicrophoneStage
                        size={24}
                        color="#fcfcfc"
                    />Artists</li>
                </ul>
            </nav>
            <p className="text-xs pt-8 pl-3 text-[#9898A6]">MY PLAYLISTS</p>
            <nav className="mt-3 ml-8">
                <ul className="flex flex-col gap-6 text-xs">
                    <li className="flex gap-3 hover:text-[#00FFFF] cursor-pointer transition-all duration-150 delay-150 ease-in-out">Mixes and Radio</li>
                    <li className="flex gap-3 hover:text-[#00FFFF] cursor-pointer transition-all duration-150 delay-150 ease-in-out">September</li>
                    <li className="flex gap-3 hover:text-[#00FFFF] cursor-pointer transition-all duration-150 delay-150 ease-in-out">Clubbing</li>
                    <li className="flex gap-3 hover:text-[#00FFFF] cursor-pointer transition-all duration-150 delay-150 ease-in-out">Chil story2</li>
                    <li className="flex gap-3 hover:text-[#00FFFF] cursor-pointer transition-all duration-150 delay-150 ease-in-out">Playlist 342</li>
                    <li className="flex gap-3 hover:text-[#00FFFF] cursor-pointer transition-all duration-150 delay-150 ease-in-out">Tracks</li>
                </ul>
            </nav>
            <p className="text-xs pt-8 pl-3 text-[#9898A6]">Imported Albums</p>
            <nav className="mt-3 ml-8">
                <ul className="text-sm">
                    <li className="flex gap-3 hover:text-[#00FFFF] cursor-pointer transition-all duration-150 delay-150 ease-in-out">Mixes and Radio</li>
                </ul>
            </nav>
        </aside>
    )
}