import { Button } from "../components/Button"
import { CardContainerApi } from "../components/cards/CardContainerApi"
import { CardConttainer } from "../components/cards/CardConttainer"
import { MuiButton } from "../components/mui/MuiButton"
import { MyCarousal } from "../components/mycarousal/MyCarousal"
import { MyNavbar } from "../components/mynavbar/MyNavbar"
import { CustomCss } from "../components/styles/CustomCss"

export let Home = ()=>{
    return <>
    <MyNavbar/>
    <h1>hello its home page</h1>
    <Button/>
    <MuiButton/>
    <CustomCss/>
    <MyCarousal/>
    <CardConttainer/>
   <CardContainerApi/>

    </>

}