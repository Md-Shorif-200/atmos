import { Layout } from "@/components/layout";
import { CityPage } from "@/Page/city-page";
import { WeatherDashboard } from "@/Page/weather-dashboard";
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
            element : <WeatherDashboard/>
         },
         {
          path : '/city:id',
          element : <CityPage />
         }
    ]
  },
]);