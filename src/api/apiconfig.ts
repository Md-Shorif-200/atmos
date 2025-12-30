export const Api_Config = {
    base_url : 'https://api.openweathermap.org/data/2.5/',
    Geo : 'http://api.openweathermap.org/geo/1.0/',
    Api_key : import.meta.env.VITE_OPENWEATHER_API_KEY,
    Default_Params : {
        units : 'metric',
        appid : import.meta.env.VITE_OPENWEATHER_API_KEY,
    }
}