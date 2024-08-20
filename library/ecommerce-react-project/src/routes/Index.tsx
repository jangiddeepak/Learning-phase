import { Outlet, useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { UseStateHook } from "../hooks/UseStateHook"; 
import { UseEffecteHook } from "../hooks/UseEffectHook";
import path from "path";
import { Regsiter } from "../pages/Register";

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
        },
        {
            path:'hooks',
            element:
            <> <UseStateHook/>
            <UseEffecteHook/>
            </>

        },
        {
            path:'register',
            element:<Regsiter/>
        }
     ]

}

 function  Allroutes(){
    return useRoutes([allPages]) 
 }
 export   default Allroutes; 