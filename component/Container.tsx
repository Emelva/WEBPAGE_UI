import { Done, IN_PROGRESS, todos } from "@/lib/data";
import Card from "./Card";
import { Plus } from "lucide-react";
const Container = () => {
    return (
        <main className="grid grid-cols-3 gap-3 m-4">
            <div className="border-dashed border-1 border-gray-400 rounded-xl">
                <div className="flex justify-between m-3">
                    <h1>To do (4)</h1>
                    <h1 className="flex gap-2">
                        <Plus className="bg-gray-300 p-1 rounded-full"/> Add new task</h1>
                </div>
                {todos.map(todo => (
                    <Card key={todo.id} item={todo}/>
                ))}
            </div>
            <div>
                <div className="border-dashed border-1 border-gray-400 rounded-xl">
                    <div className="flex justify-between m-3">
                        <h1>In progress (4)</h1>
                        <h1 className="flex gap-2">
                            <Plus className="bg-gray-300 p-1 rounded-full"/> Add new task</h1>
                    </div>
                    {IN_PROGRESS.map(todo => (
                        <Card key={todo.id} item={todo}/>
                    ))}
                </div>
            </div>
            <div>
                    <div className="border-dashed border-1 border-gray-400 rounded-xl">
                        <div className="flex justify-between m-3">
                        <h1>Done (3)</h1>
                        <h1 className="flex gap-2">
                            <Plus className="bg-gray-300 p-1 rounded-full"/> Add new task</h1>
                    </div>
                    {Done.map(todo => (
                        <Card key={todo.id} item={todo}/>
                    ))}
                </div>
            </div>
        </main>
    )
}
export default Container;