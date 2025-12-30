import { Api_Config } from "./apiconfig";
import type { Coordinates, ForecastData, GeocodingResponse, WeatherData } from "./types";

class WeatherAPI {

    // ---------- Creat Url 

  private creatUrl(endpoint:string,params : Record<string, string | number>) {
            const searchParams =  new URLSearchParams({
                appid : Api_Config.Api_key,
                ...params
            })
            return `${endpoint}?${searchParams.toString()}`
  }

// -------- fetch data
  private async fetchData<T>(url :string) : Promise<T>{
      const  res = await fetch(url)
       if(!res.ok) {
         throw new Error(`Weather Api Error`)
       }

        return res.json()
  }

//  -------------- get CurrentWeather

  async getCurrentWeather({lat,lon}:Coordinates):Promise<WeatherData> {
        const url = this.creatUrl(`${Api_Config.base_url}/weather`,{
             lat : lat,
             lon :  lon,
             units : Api_Config.Default_Params.units
        })

         return this.fetchData<WeatherData>(url)
  }
//  -------------- get Forecast Weather

  async getForecast({lat,lon}:Coordinates):Promise<ForecastData> {
        const url = this.creatUrl(`${Api_Config.base_url}/forecast`,{
             lat : lat,
             lon :  lon,
             units : Api_Config.Default_Params.units
        })

         return this.fetchData<ForecastData>(url)
  }
//  -------------- get Reverse Geocoding Weather

  async reverseGeoCode({lat,lon}:Coordinates):Promise<GeocodingResponse> {
        const url = this.creatUrl(`${Api_Config.base_url}/forecast`,{
             lat : lat,
             lon :  lon,
             units : Api_Config.Default_Params.units
        })

         return this.fetchData<GeocodingResponse>(url)
  }



}