import { Grid } from "@mui/material"
import { MyCard } from "./MyCard"
import { apiCaller } from "../../Api/Api"
import { useEffect, useState } from "react"


export const CardContainerApi =()=>{
    let [apiData, setApiData] = useState([])
    useEffect(() => {
        (async()=> {
            setApiData(await apiCaller())
        })()
    }, []) 
    return <>

<Grid
  container
  direction="row"
  justifyContent="space-between"
  alignItems="center"
>
{apiData.map((a:any  ) => {
            return  <MyCard img ={a.image}/>

        })}
   
 </Grid>

     </>
}