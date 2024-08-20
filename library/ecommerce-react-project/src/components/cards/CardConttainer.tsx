import { Grid } from "@mui/material"
import { MyCard } from "./MyCard"
import img1 from '../../static/images/download.jpeg'
import img2 from '../../static/images/2.jpeg'
import img3 from '../../static/images/3.jpeg'
import img4 from '../../static/images/4.jpeg'


export const CardConttainer =()=>{
    return <>

<Grid
  container
  direction="row"
  justifyContent="space-between"
  alignItems="center"
>
    <MyCard img ={img1}/>
    <MyCard img ={img2}/>
    <MyCard img ={img3}/>
    <MyCard img ={img4}/>  
 </Grid>

     </>
}