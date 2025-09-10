import { cn } from "@/lib/utils";
import { Todos } from "@/types";
import { Ellipsis, ListTree, MessageSquareText, Paperclip } from "lucide-react";
import Image from "next/image";

const Card = ({item}:{item: Todos}) => {
    const { todo, topic, date, message, pin, progress, photo } = item;
    
    return (
        <main className="border-1 border-gray-300 rounded-3xl shadow-gray-200 shadow-lg my-4 p-4 mx-5">
            <h1 className="font-bold flex justify-between">{todo}
                <Ellipsis className="p-1 border-1 border-gray-500 rounded-full"/>
            </h1>
            <h3 className="text-gray-600">{topic}</h3>
            <div className="flex justify-between mt-2">
                <p className="flex gap-1"><ListTree/>
                    Progress 
                </p>
                <h3>{progress}/10</h3>
            </div>
            <div className="w-full rounded-full bg-gray-300 my-3">
                <div className={cn("h-2", progress < 5 ? "bg-red-500" : progress <= 7 ?"bg-amber-600" : "bg-green-400")}
                style={{width: `${(progress / 10) * 100}%`}}></div>
            </div>
            <div className="flex gap-3">
                <p className="text-gray-600 mr-5">{date}</p>
                <p className="text-gray-600 flex gap-2">{message}
                    {message && <MessageSquareText className="text-sm"/>}
                    
                </p>
                <p className="text-gray-600 flex gap-2">{pin}
                    {pin && <Paperclip/>}
                </p>
            </div>
        </main>
    )
}
export default Card;