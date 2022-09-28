import React, { useContext, useEffect, useState } from "react";

const API_URl = `http://www.omdbapi.com/?apikey=b89c61e4&s=titanic`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [isLoading,setIsLoading]=useState(true);
    const [movie,setMovie]=useState([]);
    const [iserror,setIsError]=useState({show:true,msg:""})


  const getMovies = async (url) => {
    try {
      const res =await fetch(url);
      const data =await res.json();
      console.log(data);
      if(data.Response==="True"){
        setIsLoading(false);
        setMovie(data.Search)
      }
      else{
        setIsError({show:true,msg:data.error})
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies(API_URl);
  }, []);

  return (
    <AppContext.Provider value={{isLoading,movie,iserror}}>{children}</AppContext.Provider>
  );
};

//custom global hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
