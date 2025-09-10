import Container from "@/component/Container";
import Header from "@/component/Header";
import { CircuitBoardIcon, EllipsisIcon, Plus } from "lucide-react";


export default function Home() {
  return (
    <div>
      <Header />
      <div className="border-b-1 flex justify-between pb-1">
        <div className="flex gap-5 items-center justify-center">
          <h1 className="flex hover:border-b-black hover:border-b-1 gap-2"><CircuitBoardIcon/> Board View</h1>
          <h1 className="flex hover:border-b-black hover:border-b-1 gap-2"><Plus className="bg-gray-300 p-1 rounded-full"/> Add view</h1>
        </div>

        <div className="flex gap-3 items-center">
          <p>Filter</p>
          <p>Sort</p>
          <h3 className="border-gray-500 p-2 rounded-full text-sm "><EllipsisIcon/></h3>
          <button className="bg-black text-white p-2 rounded-xl">New template</button>
        </div>
      </div>
      <Container/>
    </div>
  );
}
