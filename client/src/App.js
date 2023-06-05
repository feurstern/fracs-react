import { Navbar, GetStarted, Footer } from './components';
import styles from './style';
const App=()=>(
 <div className="bg-red-700 w-full overflow-hidden">
   <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
         <Navbar />
      </div>
   </div>

    <div className={`bg-white border-red-600 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
         <GetStarted />
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
