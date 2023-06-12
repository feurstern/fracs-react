"use client"
import { Navbar, Footer } from './components/components';
import styles from './style';

import {CreateBrowserRouter, Outlet, Route, RouterProvider, createBrowserRouter,} from "react-router-dom";
import { Gallery, GetStarted, Home, Register, Certification } from './pages';
import React,{Component} from 'react';

//fetch api from nodejs
class App extends Component{
   constructor(props){
      super(props);
      this.state = {apiResponse: ""};
   };

   // callAPITest(){
   //    fetch("http://localhost:3001/testAPI")
   //    .then(res=> res.text())
   //    .then(res=> this.setState({apiResponse : res}))
   //    .catch(err=> err);
   // };
   callAPIRegister(){
      fetch("http://localhost:3001/register")
      .then(res=> res.text())
      .then(res=> this.setState({apiResponse : res}))
      .catch(err=> err);
   };

   componentDidMount(){
      // this.callAPITest();
      this.callAPIRegister();
   };
   
   render(){
      return(
         <div className="bg-red-700 w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <RouterProvider router={router} />
                  <p>{this.state.apiResponse}</p>
            </div>
         </div>

         <div className={`bg-white border-red-600 ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
            </div>
          </div>

    <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <Home/>
      <Footer/>
       
      </div>
    </div>
 </div>
      );
   }
}

// check whether the api has been succesfully or not
//
//create basic layout of component.
const Layout=()=>{

   return(
      <div>
         <Navbar/>
         <Outlet/>
         <footer/>
      </div>
   )
}

   

const router = createBrowserRouter([

   // the main layout has the rendered page that depends on the child on the properties of <Outlet />
   { 
      path :"/",
      element: <Layout />,
      children:[
         { 
            path: "/",
            element: <Home />
         },
         {
            path:"/gallery",
            element:<Gallery />
         },
         {
            path:"/register",
            element:<Register />
         },
         {
            path:"/certifications",
            element: <Certification/>
         }
      ],

   },
   {
      path:"/",
      element : <Home />
   },
   {
     path: "/register",
     element : <Register/>  
   },
   {
      path : "/gallery",
      element : <Gallery/>
   },
   {
      path:"/certifcations",
      element : <Certification/>
   }

]);



export default App;
