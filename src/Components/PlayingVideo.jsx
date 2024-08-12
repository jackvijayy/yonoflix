import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchData } from '../utils/rapidapi';
import ReactPlayer from 'react-player';
import { abbreviateNumber } from 'js-abbreviation-number';
import { AiOutlineLike } from 'react-icons/ai';
import Suggestedvideo from './Suggestedvideo';

const PlayingVideo = () => {
  const[video,setVideo]=useState([]); //store the video Details
  const[relatedvideo,setRelatedvideo]=useState();//store the Related video
  const{id}=useParams(); //get the id from route ///serach/:id  //dynamically send 
  console.log(id);

  //for calling funtions
  useEffect(() => {
    fetchVideodDetails();
    fetchRelatedvideos();
  }, [id]);

  //fetch the video datails using endpoints id get by Routing
  const fetchVideodDetails=()=>{
    fetchData(`video/details/?id=${id}`).then((res)=>{
      setVideo(res);
      
    })
  }
  //Get related video using endpoints also with id params
  const fetchRelatedvideos=()=>{
    fetchData(`video/related-contents/?id=${id}`).then((res)=>{
      setRelatedvideo(res)
      console.log(res);
    })
  }
  
  return (
    <div className='flex  flex-col lg:flex-row h-full '>
      {/* //first div */}
      <div className='p-2 lg:w-[70%] w-[100%] mt-5 '>
        < AiOutlineLike/>
        <div className='w-full h-[250px] lg:h-[450px]'>     
          <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          height="100%"
          width="100%"
          controls
          style={{backgroundColor:"#000000"}}
          playing={true}/> 
          </div>
          <div className='mt-1'>
            <h1 className='font-semibold text-lg lg:text-xl'>
              {video?.title}
            </h1>
            <div className='flex gap-5 mt-3 items-center'>
              <img src={video?.author?.avatar[1]?.url} alt="" className='rounded-full' />
              <div className='flex flex-col items-center'>
                <span className='font-semibold'>{video?.author?.title}</span>
                <span className='text-sm text-nowrap'>{video?.author?.stats?.subscribersText} Subscribers</span>
              </div>
              <span className='bg-red-600 text-sm px-3 py-1 text-white  rounded-full items-center'>Subscribe</span>
              <div className='flex gap-3 ml-3 lg:ml-7'>
                <div className='flex items-center'>
                  <AiOutlineLike/>
                  {`${abbreviateNumber(video?.stats?.like,2)}`}

                </div>
                <div>
                {`${abbreviateNumber(video?.stats?.views,2)}views`}
                </div>
              </div>
               
            </div>
            <div className='bg-gray-100 p-4 rounded-xl mt-4 text-sm'>
              {video?.description}
            </div>
            <div className='flex gap-x-6 font-semibold rounded-xl mt-4 text-xl'>
              {video?.stats?.comments} <p>comments</p>

            </div>
          </div>
      </div>
      {/* //Related video */}
      <div className=' flex-1  h-[calc(100vh-0.40rem)] gap-5 overflow-y-scroll  suggest'>
        <h1 className='font-bold text-2xl mt-3 mb-3'>Related Videos</h1>
        {
          relatedvideo?.contents?.map((item,index)=>{
            if(item?.type!=="video") return false;
            return <Suggestedvideo key={index} video={item.video}/>
            


          })
        }
      

      </div>
    </div>
      
    
  )
}

export default PlayingVideo