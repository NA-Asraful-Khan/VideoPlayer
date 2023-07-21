import React, { useEffect } from 'react'

const rootAPI = "http://localhost:8000/api/"
const GlobalContext = React.createContext()
const reducer = (state,action)=>{

    return state
}

export const GlobalProvider = ({children})=>{

    const initialState={
        videos:[],
        loading:false
    }
    const [state,dispatch] = React.useReducer(reducer,initialState)

    //get Videos
    const getAllVideos=async()=>{
        try {
            const res = await fetch(`${rootAPI}videos`)

            const data = await res.json()
            console.log(data.videos)
        } catch (error) {
            
        } 
    }

    useEffect(()=>{
        getAllVideos()
    },[])

    return (
        <GlobalContext.Provider value={'Hello'}>
            {children}
        </GlobalContext.Provider >
    )
}

export const useGlobalContext = ()=>{
    return React.useContext(GlobalContext)
}