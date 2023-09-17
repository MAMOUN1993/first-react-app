import { useState } from "react";
import { useEffect } from "react";

// import axios from "axios";
const Posts = () => {
    useEffect(()=>{
        // const abort = new AbortController();
        // setTimeout(fetch('https://fakestoreapi.com/products' , { signal:abort.signal }).then(
        //     (res)=>{
        //         let data = null ;
        //         data= res.json();
        //         console.log(data)
        //     }
        //     ),200)
        // return ()=>{abort.abort()}
        fetch('https://fakestoreapi.com/products',).then(
            (res)=>{
                let data = null ;
                data = res.json() ;
                console.log(data)
            }
            )
    },[]);
    return ( 
        <div className="container">
            mamoun almousa
        </div>
    );
}

export default Posts;


