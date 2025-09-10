// interface Photo {
//     image1: string,
//     image2: string
// }
export type Todos = {
    id: string,
        todo: string,
        topic: string,
        date: string,
        message?: number,
        pin?: string,
        progress: number,
        photo?: {
            image1?: string,
            image2?: string,
            image3?: string
        }
}
// interface AddTodo{
//     type: "add"
// }
export type TodoList = Todos[] 