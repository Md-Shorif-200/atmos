
export interface Coordinates {
     lat : number;
     lon : number;
}


export interface WeatherCondition {
     id : number;
     main : string;
     description : string;
     icon : string
}

// -------- current weather

export interface WeatherData {
     coord : Coordinates;
     weather : WeatherCondition;
     main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
   },
   wind: {
      speed: number;
      deg: number;
   },

   sys: {
      type: number;
      id: number;
      country: string;
      sunrise: number;
      sunset: number;
   },

   name:string;
   dt:number;
}

                          

// ---------- forecast 
export  interface ForecastData {
                          

 
  list: Array<{
    dt : number;
     main : WeatherData["main"];
     weather : WeatherData["weather"];
     wind : WeatherData["wind"];
     dt_txt : number;

  }>;
   city: {

    name : string;
    country : string;
    sunrise : number;
    sunset : number ;
 }
  
}

// -------- Geocoding Response
 export interface GeocodingResponse {
      name : string;
    local_names: Record<string , string>
     lat : number;
     lon : number;
     country : string;
     state?:string;
  }
 