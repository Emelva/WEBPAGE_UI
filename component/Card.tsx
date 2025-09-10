import { cn } from "@/lib/utils";
import { Todos } from "@/types";
import { Ellipsis, ListTree, MessageSquareText, Paperclip } from "lucide-react";
import Image from "next/image";



const Card = ({item, addCard}:{item?: Todos, addCard?: boolean}) => {

    if (addCard) {
    return (
      <main className="border-2 border-dashed border-gray-400 rounded-3xl my-4 p-8 mx-5 flex items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-50">
        <p className="flex items-center gap-2">Drag to add more here</p>
      </main>
    );
  }

  
  
    
    const { todo, topic, date, message, pin, progress, photo } = item;
    const imageUrl = [photo?.image1, photo?.image2, photo?.image3].filter(url => url);
    
    return (
        <main className="border-1 border-gray-300 rounded-3xl shadow-gray-200 shadow-lg my-4 p-4 mx-5">
            <h1 className="font-bold flex justify-between">{todo}
                <Ellipsis className="p-1 border-1 border-gray-500 rounded-full"/>
            </h1>
            <h3 className="text-gray-600">{topic}</h3>
            <div className="flex justify-between mt-2">
                <p className="flex gap-1 text-sm"><ListTree/>
                    Progress 
                </p>
                <h3>{progress}/10</h3>
            </div>
            <div className="w-full rounded-full bg-gray-300 my-3">
                <div className={cn("h-2", progress < 5 ? "bg-red-500" : progress <= 7 ?"bg-amber-600" : "bg-green-400")}
                style={{width: `${(progress / 10) * 100}%`}}></div>
            </div>
            <div className="flex gap-3">
                <p className={cn("text-gray-700 mr-5 p-1 rounded-2xl", progress < 5 ? "bg-red-300" : progress <= 7 ? "bg-amber-200" : "bg-gray-300")}
                >{date}</p>
                <p className="text-gray-600 flex gap-1">{message}
                    {message && <MessageSquareText className="text-sm"/>}
                    <div className="flex overflow-hidden">
                        {imageUrl.slice(0, 2).map((url, index) => (
                        <Image key={index} src={url || ""} alt={topic} width={50} height={50}
                        className={`w-10 h-10 rounded-full overflow-hidden border-2 border-white ${
                            index > 0 ? "-ml-3" : ""
                        }`}/> 
                    ))}
                    {imageUrl.length > 2 && (
                        <div className="-ml-3 w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 text-sm font-medium border-2 border-white">+{imageUrl.length - 2}</div>
                    )}
                    </div>
                </p>
                <p className="text-gray-600 flex gap-1">{pin}
                    {pin && <Paperclip/>}
                </p>
            </div>
        </main>
    )
}
export default Card;