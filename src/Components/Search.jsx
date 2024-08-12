import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchData } from '../utils/rapidapi';
import Video from './Video';



const Search = () => {
  
  const [result,setResult]=useState([]);//store the searchQuery and data
  const{ searchQuery }=useParams(); //get the query from parameter

//fetching the data and calling the function
  useEffect(() => {
    fetchSearchResults();
  }, [searchQuery])

  //fetch the data using searchquery params
  //same funtion used in home component
  const fetchSearchResults =() => {
    fetchData(`search/?q=${searchQuery}`).then(({ contents })=>{
      setResult(contents);
    })
  }
  

  return (
    <div className=''>
      <div className='flex mt-1'>
        <div className='h-[calc(100vh-5.625rem)] px-2 overflow-y-scroll overflow-x-hidden videobar'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {result.map((item,index)=>{
                if(item.type!=="video") return false;
                return <Video key={index} video={item?.video}/>
            })}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Search