import React from 'react'
import Sidebar from './Sidebar'
import Video from './Video'
import { useAuth } from '../Context/AuthProvider'
import Listitems from './Listitems'
import Loader from './Loader'

const Home = () => {
      //context Api
    const { data,loading } =useAuth();
        
  return (
    <div className='flex mt-1'>
        <Sidebar/>
        <div className='h-[calc(100vh-5.625rem)] px-2 overflow-y-scroll overflow-x-hidden videobar'>
          <Listitems/>
          {loading && <Loader/>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {data.map((item,index)=>{
                if(item.type!=="video") return false;
                return <Video key={index} video={item?.video}/>

            })}
      
        </div>
        </div>
    </div>
  )
}

export default Home