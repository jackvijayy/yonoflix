import { useAuth } from "../Context/AuthProvider";



const Listitems = () => {
  //value Change in Home Components
  const {setValue}=useAuth();

    const categories=["Java","Music","React js","ComputerProgramming","Rap Song","MovieMusic","India National Cricket Team","News","Mixes","Telugu Cinimas","Live","Dreamedy","Dubbing","Indian","Football","Tamil Cinemas","Learn Coding"];
  return (
    <div className="overflow-x-scroll flex items-center gap-3 listbar">
        {categories.map((item,index)=>{
            return(
                <div key={index} className="py-1 px-2 cursor-pointer border hover:bg-black hover:text-white text-black rounded-full text-nowrap duration-200" onClick={()=>setValue(item)}>{item}</div>
            )

        })}
    </div>
  )
}

export default Listitems