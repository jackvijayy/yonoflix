import axios from "axios";


const BASE_URL= 'https://youtube138.p.rapidapi.com';

const options = {
    headers: {
      'x-rapidapi-key': '7d06d72527mshfd27885500970a0p1c924bjsnadb38121282e',
      'x-rapidapi-host': 'youtube138.p.rapidapi.com'
    }
  };
  //fetch the dataa from api
  export const fetchData=async(url)=>{
    try{
    const {data}=await axios.get(`${BASE_URL}/${url}`,options);///directly destructure ths data
    return data; //return data because every time calling the funtion its resturn tha data
                  //we can use in components for multiple endpoints
    
  }
  catch (error) {
    console.log(error);
    
   }   
  } 
