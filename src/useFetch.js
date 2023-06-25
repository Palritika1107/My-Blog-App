import React from 'react';
import { useState , useEffect } from "react";

// 'http://localhost:8000/blogs'
const useFetch = (url) => {

    

    const [data,setData] = useState(null);
    const [isPending,setPending] = useState(true);
    const [err,setErr] = useState(null);
  
    useEffect(() => {
        const abortComp = new AbortController();

        setTimeout(() => {
    
        fetch(url,{ signal: abortComp.signal }).then(
        (res)=>
         {
            // console.log(res);
    
            if(!res.ok)
            {
                throw Error('data cannot be fetched');
            }
            return res.json();
     }).then((data) => {
            setErr(null);
            setData(data);
            setPending(false);
            
    
     }). catch(
        err => {
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            }else{
            
            setPending(false);
            setErr(err.message);
        }
        })
    },1000);

    return () => abortComp.abort();
        
    },[url]);
  
  
  
  
  
  
  
  
  return {data , isPending, err};
}

export default useFetch
