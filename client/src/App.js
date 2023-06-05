import { Navbar, Footer } from './components';
import styles from './style';
import {CreateBrowserRouter, Outlet, Route, RouterProvider, createBrowserRouter,} from "react-router-dom";
import { Gallery, GetStarted, Home, Register, Certification } from './pages';

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


const App=()=>(
 <div className="bg-red-700 w-full overflow-hidden">
   <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
       <RouterProvider router={router} />
      </div>
   </div>

    <div className={`bg-white border-red-600 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      
         
      </div>
    </div>

    <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <Footer/>
       
      </div>
    </div>
 </div>
);

export default App;
