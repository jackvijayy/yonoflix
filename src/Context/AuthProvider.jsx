import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/rapidapi";



export const AuthContext=createContext(); //create context

//auth provider Component
export const AuthProvider=({ children })=>{
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState([]); //store the api data
    const [value,setValue]=useState("New");

    useEffect(() => {
        fetchAllData(value);//call tha funtions
      
    }, [value])

    //fetch the data sarting end point
    const fetchAllData=(query) => { 
        setLoading(true);
        fetchData(`search/?q=${query}`)
        .then(({ contents })=>{
            console.log(contents)
      
            setData(contents);
            setLoading(false);
        })
        

    }
    return(
        <AuthContext.Provider value={{loading,data,value,setValue}}>
            {children}

        </AuthContext.Provider>
    )
    


}
export const useAuth=()=>useContext(AuthContext);//create the custom hooks
//this context export the auth context value across the components