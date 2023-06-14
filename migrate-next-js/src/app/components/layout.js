import { Navbar, Footer } from "./components";

export default function Layout({children}){
    return(
        <>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}