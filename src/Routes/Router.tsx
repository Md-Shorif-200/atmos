import { Layout } from "@/components/layout";
import {
  createBrowserRouter,
} from "react-router-dom";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children : [
         {
            path : "/",
            element : <h1 className="text-white">cdfdfd</h1>
         }
    ]
  },
]);