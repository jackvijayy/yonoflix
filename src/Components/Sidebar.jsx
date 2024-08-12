import { GoHome } from "react-icons/go";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { LuBoomBox } from "react-icons/lu";
import { useAuth } from "../Context/AuthProvider";

const Sidebar = () => {

   //change the valus with onclick funtion
    const {setValue}=useAuth();
   
const sidebarItems3=[
    {
        id:11,
        name:"Home",
        icon:<GoHome/>
    },
    {
       id:1,
       name:"Trending",
       icon:<SiTrendmicro/>,

    },
    {
        id:2,
        name:"Shopping",
        icon:<HiOutlineShoppingBag/>,
     },
     {
        id:3,
        name:"Music",
        icon:<SiYoutubemusic/>,
 
     },
     {
        id:4,
        name:"Films",
        icon:<PiFilmSlateLight/>
 
     },
     {
        id:5,
        name:"Live",
        icon:<CgMediaLive/>
     },
     {
        id:6,
        name:"Gaming",
        icon:<SiYoutubegaming/>
     },
     {
        id:7,
        name:"News",
        icon:<FaRegNewspaper/>
     },
     {
        id:8,
        name:"Sports",
        icon:<TfiCup/>
     },
     {
        id:9,
        name:"Course",
        icon:<PiLightbulbLight/>
     },
     {
        id:10,
        name:"Fashion",
        icon:<SiStylelint/>,
     },
     {
        id:11,
        name:"Podcast",
        icon:<MdPodcasts/>
     },
     {
        id:12,
        name:"Beauty",
        icon:<LuBoomBox />
     }
];


  return (
    <div className="px-6  py-3 h-[calc(100vh-5.625rem)]  lg:w-[25%] overflow-y-scroll overflow-x-hidden sidebar mt-1">
        {/* home */}
        <div className="items-center space-y-5 lg:space-y-3">
           
            {sidebarItems3.map((items)=>{
                return(
                    <div key={items.id} className="flex items-center space-x-8 lg:hover:bg-black lg:hover:text-white duration-300 rounded-xl py-2 "
                    onClick={()=>setValue(items.name)}>
                        <div className="text-xl cursor-pointer lg:pl-2">{items.icon}</div>
                        <div className="text-md cursor-pointer hidden lg:flex">{items.name}</div>
                    </div>
                )
            })}
        </div>
        <br/>
        <hr />
        <p className="text-slate-500 hidden lg:flex text-sm">@code by vijay</p>
        
    </div>
  )
}

export default Sidebar