import Footer from "./components/footer"
import { Sidebar } from "./components/sidebar"
import { HeaderBar } from "./components/headerbar"

import Doneforyou from "src/app/components/doneforyou.jsx"
import Themostplayed from "src/app/components/themostplayed.jsx"
import Popular from "src/app/components/popular.jsx"

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 ml-60 ">
          <HeaderBar />
          <Doneforyou />
          <Themostplayed />
          <Popular />
        </main>
      </div>
      <Footer />
    </div>
  )
}
