import { useState } from "react"

export const UseStateHook = ()=>{
    let [data,setData] =   useState("something")
    return <>
    <center>
    <input type="text" onChange={(g)=>{
       setData( g.target.value)
    }} />
    <h1>{data}</h1>
    </center>
   
    </>
}