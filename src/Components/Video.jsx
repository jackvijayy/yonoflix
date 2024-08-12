
import { Link } from "react-router-dom"
import Timer from "../Timer/Timer"
import { BsFillCheckCircleFill } from "react-icons/bs"
import { abbreviateNumber } from "js-abbreviation-number"


const Video = ({video}) => {
  return (
    <div className=""> 
       <Link to={`/video/${video?.videoId}`}>
       <div className="flex flex-col space-y-2">
        {/* channel thubnail */}
        <div className=" relative h-58 md:h-56 md:rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img src={video?.thumbnails[1]?.url} className="h-full w-full" />
            {video?.lengthSeconds && <Timer time={video?.lengthSeconds}/>}
        </div>
        {/* channel avatar & title */}
        <div className="flex gap-1 overflow-hidden">
          <div className="flex h-9 w-14 rounded-full overflow-hidden border">
            <img src={video?.author.avatar[0].url} alt="" 
            className="h-full w-full rounded-full" />
          </div>
          <span>{video?.title}</span>
        </div>
        {/* //channelDetail */}
        <div className="flex gap-2 items-center ml-5">
        <span>{video?.author?.title}</span>
        {video?.author?.badges[0]?.type==="VERIFIED_CHANNEL" &&(<BsFillCheckCircleFill className="text-gray-600 text-[12px]"/>)}
        </div>
        <div className="flex ml-5 gap-1">

         <span>{`${abbreviateNumber(video?.stats?.views,2)} views`}</span>
         <span className="px-2 font-bold items-center relative top-[-4px]">.</span>
         <span>{video?.publishedTimeText}</span>
        </div>
       </div>
       </Link>  
    </div>
  )
}

export default Video