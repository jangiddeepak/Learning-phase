import { useEffect, useState } from "react"
import { apiCaller } from "../Api/Api"

export const UseEffecteHook = () => {
    let [apiData, setApiData] = useState([])
    useEffect(() => {
        (async()=> {
            setApiData(await apiCaller())
        })()
    }, []) 
    console.log(apiData)
    return <>
    apiData
        {apiData.map((a:any  ) => {
            return <img width="200px" src={a.image} />

        })}

    </>
}