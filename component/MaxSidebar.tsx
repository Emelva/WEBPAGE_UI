'use client'
import { ChevronDown, ChevronRight, Moon, PlusCircle, Sun } from "lucide-react";
import { useTheme } from "next-themes"

export default function MaxSidebar(){
    const {theme, setTheme } = useTheme()
    return (
        <div className=" shadow-2xl w-60 p-1 overflow-y-scroll no-scrollbar">
            <div className="m-4">
                <h1 className="text-2xl font-bold flex justify-between mt-5">Projects
                <span className="text-gray-500 bg-gray-200 rounded-full p-1"><PlusCircle/></span>
            </h1>
            <p className="flex my-5 justify-between">Team 
                <ChevronRight/>
            </p>
            <h2 className="font-medium mb-3 flex my-5 justify-between">Projects
              <ChevronDown/>
            </h2>
            <div className="border-l-2 border-gray-400 ml-3 text-gray-600 text-md">
                <p className="mb-5">__    All Projects (3)</p>
                <p className="mb-5">__    Design System</p>
                <p className="mb-5">__    User Flow</p>
                <p>__    UX Research</p>
            </div>

            <h2 className="font-medium my-3 flex justify-between">Tasks
              <ChevronDown/>
            </h2>
            <div className="border-l-2 border-gray-400 ml-3 text-gray-600 text-md">
                <p className="mb-5">__    All Tasks (11)</p>
                <p className="mb-5">__    To Do (4)</p>
                <p className="mb-5">__    In Progress (4)</p>
                <p>__    Done (3)</p>
            </div>
            <div className="flex flex-col gap-3 mt-5">
                <h2 className="flex mt-5 mb-3 justify-between">Reminders
                  <ChevronRight/>
                </h2>
                <h2 className="flex mb-5 justify-between">Messangers
                  <ChevronRight/>
                </h2>
            </div>



                <button className={`flex gap-2 ${theme === "dark" ? "bg-gray-400 text-gray-900" : "bg-gray-200"} shadow-xl py-1 rounded-xl my-4`}>
                    <div className="flex hover:bg-white text-black rounded-2xl p-2 hover:shadow-xl" onClick={() => setTheme("dark")}>Dark 
                        <Moon/>
                    </div>
                    <div className="flex hover:bg-white text-black rounded-2xl p-2 hover:shadow-xl" onClick={() => setTheme("light")}>
                        Light
                        <Sun/>
                    </div>
                </button> 

            </div>

        </div>
    )
}

{/* <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu> */}