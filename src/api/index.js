import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


  


export const getPlacesData = async (sw,ne) =>{
    try{
        //request
        const {data : {data}} = await axios.get(URL, {
            method: 'GET',
        
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
        
            },
            headers: {
              'X-RapidAPI-Key': '76e2436635msh4c7e26c082d86b3p13266djsn31cc98e43721',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });
        return data;
    }
    catch(error){
        console.log(error);

    }
}