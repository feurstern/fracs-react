"use client"
import { Navbar, Footer } from './components/components';
import styles from './style';
//no longer needed due to migrate to NextJS
// import {CreateBrowserRouter, Outlet, Route, RouterProvider, createBrowserRouter,} from "react-router-dom";
import Home from './Home/page';
import React, { Component } from 'react';
import Banner from './Home/banner';



//fetch api from nodejs
class App extends Component {
   constructor(props) {
      super(props);
      this.state = { apiResponse: "" };
   };

   // callAPITest(){
   //    fetch("http://localhost:3001/testAPI")
   //    .then(res=> res.text())
   //    .then(res=> this.setState({apiResponse : res}))
   //    .catch(err=> err);
   // };
   // callAPIRegister(){
   //    fetch("http://localhost:3001/register")
   //    .then(res=> res.text())
   //    .then(res=> this.setState({apiResponse : res}))
   //    .catch(err=> err);
   // };

   // componentDidMount(){
   //    // this.callAPITest();
   //    this.callAPIRegister();
   // };

   render() {
      return (

         <div className="bg-red-700 w-full">
            <div className={`${styles.paddingX} ${styles.flexCenter} sticky top-0 bg-red-700 z-50`} >
               <div className={`${styles.boxWidth}`}>
                  <Navbar />
                  {/* <RouterProvider router={router} /> */}
               </div>
            </div>
            <div className={``}>
               <Banner />
            </div>
            <div className={`bg-white border-red-600 ${styles.flexStart}`}>
               <div className={`${styles.boxWidth}`}>
               </div>
            </div>

            <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
               <div className={`${styles.boxWidth}`}>
                  <Home />
               </div>
            </div>

            <div className={`bg-blue-900 ${styles.paddingX} ${styles.flexStart}`}>
               <div className={`${styles.boxWidth}`}>
                  <Footer />
               </div>
            </div>
         </div>
      );
   }
}

// check whether the api has been succesfully or not
//
//create basic layout of component.
// no longer used due to next js support routing 
// const Layout=()=>{

//    return(
//       <div>
//          <Navbar/>
//          <Outlet/>
//          <footer/>
//       </div>
//    )
// }


// No longer used due to next js support routing
// const router = createBrowserRouter([

//    // the main layout has the rendered page that depends on the child on the properties of <Outlet />
//    { 
//       path :"/",
//       element: <Layout />,
//       children:[
//          { 
//             path: "/",
//             element: <Home />
//          },
//          {
//             path:"/gallery",
//             element:<Gallery />
//          },
//          {
//             path:"/register",
//             element:<Register />
//          },
//          {
//             path:"/certifications",
//             element: <Certification/>
//          }
//       ],

//    },
//    {
//       path:"/",
//       element : <Home />
//    },
//    {
//      path: "/register",
//      element : <Register/>  
//    },
//    {
//       path : "/gallery",
//       element : <Gallery/>
//    },
//    {
//       path:"/certifcations",
//       element : <Certification/>
//    }

// ]);



export default App;
