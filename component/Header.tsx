import { Bell, BellDotIcon, Calendar, Search } from "lucide-react";
import Image from "next/image";

export default function Header(){
    return (
        <main className="flex items-center justify-between mr-5 my-4">
            <h1 className="text-2xl font-black">Welcome back, Vincent👋</h1>
            <p className="flex gap-3 items-center justify-center text-sm">
                <Search />
                <BellDotIcon/>
                <Calendar />
                <h3>19 May 2022</h3>
                <Image className="rounded-full object-cover" src={'/asianClothModel.jpg'} alt="profile" width={50} height={50}/>
            </p>
        </main>
    )
}