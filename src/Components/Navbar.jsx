
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  //Query set for Search params
  const [searchQuery,setSearchQuery]=useState("");
  //similar to <Link> used for onclick send Query 
  const navigate=useNavigate();
 //setQuery to the router params
  const searchQueryHandle=(event)=>{
    //onkeyup and event trigger
    if(event?.key==="Enter" || event === "searchButton") {
      navigate(`/search/${searchQuery}`)
      setSearchQuery('')

    };
  };
    return (
    <div className="flex justify-between px-6 py-2 gap-2 lg:gap-3">
        <div className="flex items-center space-x-4">
        {/* link To the home.jsx */}
          <Link to={'/'}>
          <div className="flex items-center"><img src="/logo.svg" alt="" width={30}/><h4 className="text-xl font-semibold hidden lg:ml-4 lg:flex">YoNo</h4></div>
          </Link>
        </div>
        <div className=" flex w-[35%] flex-1 border border-gray-600 rounded-3xl">
            <div className="rounded-l-full  border-black flex-1 pt-2 w-[300px]">
                <input type="text" placeholder="Search" onChange={(e)=>setSearchQuery(e.target.value)}
                 value={searchQuery} onKeyUp={searchQueryHandle}
                className="outline-none rounded-full w-[100%] px-2 border-black"/></div>
            <button className="px-4 py-1 border rounded-r-full bg-gray-50"
            onClick={(e)=>searchQueryHandle("searchButton")}>
            <CiSearch size={"24px"} />

            </button>
            <IoMdMic size={"42px"} className="ml-3 border rounded-full p-2 cursor-pointer hidden lg:flex hover:bg-gray-50 duration-200"/>
        </div>
        <div className="flex justify-between gap-2 items-center">
          
          <RiVideoAddLine size={"25px"}  className="hidden lg:block" />

          
        
        <AiOutlineBell size={"25px"}/>
        <img src="/github.svg" alt="" width={25}/>
        

        </div>
    </div>
  )
}

export default Navbar