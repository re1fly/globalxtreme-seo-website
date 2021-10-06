import {useEffect} from "react";
import Header from "./Header";
import Footer from './Footer'
import Navbar from "./Navbar";
import {animateCursorCircle} from "../animations/animation.utils";

const Layout = (props) => {
    const {children} = props

    useEffect(() => {
        animateCursorCircle()
    },[])

    return (
        <>
            <div className="cursor-circle"></div>
            <div className="cursor-follower"></div>
            <Header title={props.title}/>
            <Navbar/>
            <div className="wp-page">
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default Layout
