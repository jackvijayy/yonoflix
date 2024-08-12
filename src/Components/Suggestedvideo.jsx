import React from 'react'
import { Link } from 'react-router-dom'
import Timer from '../Timer/Timer'
import { BsFillCheckCircleFill } from "react-icons/bs"
import { abbreviateNumber } from "js-abbreviation-number"

const Suggestedvideo = ({ video}) => {
  return (
    <div className=''>
        <Link to={`/video/${video?.videoId}`}>
       <div className="flex flex-col lg:flex-row  space-y-2 gap-2">
        {/* channel thubnail */}
        <div className=" relative lg:h-24  h-[250px] md:h-20 xl:h-24 w-full p-2 min-w-[168px] lg:w-32 lg:min-w-[128px]  md:rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img src={video?.thumbnails[1]?.url} className="h-full w-full" />
            {video?.lengthSeconds && <Timer time={video?.lengthSeconds}/>}
        </div>

        <div>
        {/* channel avatar & title */}
        <div className="flex gap-1 overflow-hidden">
          <div className="flex h-9 w-12  rounded-full overflow-hidden border  lg:hidden">
            <img src={video?.author.avatar[0].url} alt="" 
            className="h-full w-full rounded-full" />
          </div>
          <span className='font-semibold'>{video?.title}</span>
        </div>
        {/* //channelDetail */}
        <div className="flex gap-2 items-center ml-9 lg:ml-0 lg:mt-2 mt-3 ">

        <div className=" lg:flex h-5 w-5 rounded-full overflow-hidden border hidden">
            <img src={video?.author.avatar[0].url} alt="" 
            className="h-full w-full rounded-full" />
          </div>

        <span>{video?.author?.title}</span>
        {video?.author?.badges[0]?.type==="VERIFIED_CHANNEL" &&(<BsFillCheckCircleFill className="text-gray-600 text-[12px]"/>)}

        <div className="flex ml-5 gap-1 lg:hidden">
         <span>{`${abbreviateNumber(video?.stats?.views,2)} views`}</span>
         <span className="px-2 font-bold items-center relative top-[-4px]">.</span>
         <span>{video?.publishedTimeText}</span>
        </div>
        </div>
      </div>
       </div>
       </Link>

    </div>
  )
}

export default Suggestedvideo