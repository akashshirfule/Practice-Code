import React, { useContext, useEffect, useState } from "react";

export const API_URl = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [isLoading,setIsLoading]=useState(true);
    const [movie,setMovie]=useState([]);
    const [iserror,setIsError]=useState({show:true,msg:""});
    const [query,setQuery]=useState("titanic")


  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res =await fetch(url);
      const data =await res.json();
      console.log(data);
      if(data.Response==="True"){
        setIsLoading(false);
        setIsError({show:false,msg:""})
        setMovie(data.Search)
      }
      else{
        setIsError({show:true,msg:data.Error})
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
   let Timerout= setTimeout(()=>{
        getMovies(`${API_URl}&s=${query}`);
    },800)
    
    return ()=>clearTimeout(Timerout)
  }, [query]);

  return (
    <AppContext.Provider value={{isLoading,movie,iserror,query,setQuery}}>{children}</AppContext.Provider>
  );
};

//custom global hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
