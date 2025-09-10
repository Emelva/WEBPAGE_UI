import { Blocks, Calendar, CloudUpload, EllipsisIcon, Framer, LogOut, Map, MemoryStick, SlidersHorizontal, User2 } from "lucide-react"

export default function MiniSideBar(){
    return (
        <nav className="bg-black text-white w-20 flex flex-col items-center gap-3">
            <div className="text-lg">
                <p><EllipsisIcon/></p>
            </div>
            <Framer className="mt-10"/>
            <p className="hover:bg-gray-700 transition-all duration-300 rounded-full p-2"><SlidersHorizontal/></p>
            <p className="hover:bg-gray-700 transition-all duration-300 rounded-full p-2"><User2 /></p>
            <p className="hover:bg-gray-700 transition-all duration-300 rounded-full p-2"><Calendar /></p>
            <p className="hover:bg-gray-700 transition-all duration-300 rounded-full p-2"><Map/></p>
            <p className="hover:bg-gray-700 transition-all duration-300 rounded-full p-2"><CloudUpload/></p>
            <p className="hover:bg-gray-700 transition-all duration-300 rounded-full p-2"><Blocks/></p>
            <p className="hover:bg-gray-700 transition-all duration-300 rounded-full p-2"><MemoryStick/></p>
            <p className="hover:bg-gray-700 transition-all duration-300 rounded-full p-2 mt-10 "><LogOut /></p>
        </nav>
    )
}