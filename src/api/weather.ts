import { Api_Config } from "./apiconfig";

class WeatherAPI {

  private creatUrl(endpoint:string,params : Record<string, string | number>) {
            const searchParams =  new URLSearchParams({
                appid : Api_Config.Api_key,
                ...params
            })
            return `${endpoint}?${searchParams.toString()}`
  }
  private fetchData(){}
  async getCurrentWeather(){}
  async getForcast (){}
  async reverseGeoCode(){}
}