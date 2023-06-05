import { Navbar, Footer } from './components';
import styles from './style';
import {CreateBrowserRouter, Outlet, RouterProvider, createBrowserRouter,} from "react-router-dom";
import { Gallery, GetStarted, Home, Register } from './pages';


const Layout=()=>(
   <div>
      <Navbar />
      <Outlet />
      <Footer />
   </div>
)

   

const router = createBrowserRouter([
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
   }

])

const App=()=>(
 <div className="bg-red-700 w-full overflow-hidden">
   <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
         <Navbar />
      </div>
   </div>

    <div className={`bg-white border-red-600 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
         
      </div>
    </div>

    <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
         <Footer />
      </div>
    </div>
 </div>
);

export default App;
