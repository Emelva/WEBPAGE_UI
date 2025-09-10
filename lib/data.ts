import { TodoList, } from "@/types"

export const todos: TodoList = [
    {
        id: "1",
        todo: "Design new UI presentation",
        topic: "Dribble Marketing",
        date: "24 Aug 2022",
        progress: 7,
        message: 7,
        pin: "2",
    },
    {
        id: "2",
        todo: "Add more ui/ux mockups",
        topic: "Pinterest promotion",
        date: "25 Aug 2022",
        progress: 4,
        photo: {
            image1: "/asianClothModel.jpg",
            image2: "/BlackModelCloth.jpg",
            image3: "/manyWigs.jpg"
        }
    },
    {
        id: "3",
        todo: "Design few mobile screens",
        topic: "Dropbox mobile app",
        date: "26 Aug 2022",
        progress: 7,
        message: 3,
        pin: "4",
    },
    {
        id: "4",
        todo: "Create a tweet and promote",
        topic: "Twitter Marketing",
        date: "27 Aug 2022",
        progress: 2,
        photo: {
            image1: "/asianClothModel.jpg",
            image2: "/BlackModelCloth.jpg",
            image3: "/manyWigs.jpg"
        }
    },
]

export const  IN_PROGRESS : TodoList = [
    {
        id: "1",
        todo: "Design system update",
        topic: "Oreo website project",
        date: "12 Nov 2022",
        progress: 3,
        photo: {
            image1: "/asianClothModel.jpg",
            image2: "/BlackModelCloth.jpg",
            image3: "/manyWigs.jpg"
        }
    },
    {
        id: "2",
        todo: "Create brand guideline",
        topic: "Oreo branding project",
        date: "13 Nov 2022",
        progress: 7,
        message: 2,
        pin: "13",
    },
    {
        id: "3",
        todo: "Create wireframe for ios app",
        topic: "Oreo ios app project",
        date: "14 Nov 2022",
        progress: 4,
        photo: {
            image1: "/asianClothModel.jpg",
            image2: "/BlackModelCloth.jpg",
            image3: "/manyWigs.jpg"
        }
    },
    {
        id: "4",
        todo: "Create ui kit for layout",
        topic: "Crypto mobile app",
        date: "15 Nov 2022",
        progress: 3,
        message: 23,
        pin: "12",
    },
]

export const Done: TodoList = [
    {
        id: "1",
        todo: "Add project to the market",
        topic: "UI B marketplace",
        date: "6 Jan 2022",
        progress: 10,
        message: 1,
        pin: "5",
    },
    {
        id: "2",
        todo: "Launch product promotion",
        topic: "Kickstarter campaign",
        date: "7 Jan 2022",
        progress: 10,
        message: 17,
        pin: "3",
    },
    {
        id: "3",
        todo: "Make twitter banner",
        topic: "Twitter marketing",
        date: "8 Jan 2022",
        progress: 10,
        photo: {
            image1: "/asianClothModel.jpg",
            image2: "/BlackModelCloth.jpg",
            image3: "/manyWigs.jpg"
        }
    }
]