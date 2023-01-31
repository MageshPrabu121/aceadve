import React,{createContext,useState} from 'react';
export const MovieContext=createContext();
export const MovieProvider=(props)=>{
    const[movies,setMovies]=useState([
        
                {
                    name:"Manas Leelai",
                    price:"Rs.500",
                    id:"001",
                },
                {
                    name:"3",
                    price:"Rs.450",
                    id:"002",
                }
    ]);
    return(
        <MovieContext.Provider value={[movies,setMovies]}>
        {props.children}
        </MovieContext.Provider>
    );
};