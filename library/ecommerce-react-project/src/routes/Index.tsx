import { Outlet, useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

let allPages = {
     path:'/',
     element:<><Outlet/></>,
     children:[
        {
            path:'home',
            element:<Home/>
        },
        {
            path:'login',
            element:<Login/>
        }
     ]

}

 function  Allroutes(){
    return useRoutes([allPages]) 
 }
 export   default Allroutes; 