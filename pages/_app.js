import {useEffect, useState} from 'react'
import {Router} from "next/router";
import TopBarProgress from "react-topbar-progress-indicator"
import AOS from "aos"
import 'aos/dist/aos.css';
import {WrappingLayout} from '../components/MainContext'
if (typeof window !== "undefined") {
    require('jquery')
    require('popper.js')
    require('bootstrap/dist/js/bootstrap.bundle.min')
}
import 'font-awesome/scss/font-awesome.scss'
import '../styles/global.scss'
import '../styles/wp-content.scss'
import '../styles/dark-mode.scss'

TopBarProgress.config({
    barColors: ['#f9c900'],
    shadowBlur: 2,
    barThickness: 3,
});

const App = ({Component, pageProps}) => {
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
        AOS.init(
            {
                offset: 50,
                delay: 50,
                duration: 1000
            }
        );

    }, []);

    const [progress, setProgress] = useState(false)
    Router.events.on("routeChangeStart", () => {
        setProgress(true)
    })

    Router.events.on("routeChangeComplete", () => {
        setProgress(false)
    })

    return (
        <WrappingLayout>
            {progress && <TopBarProgress />}
            <Component {...pageProps}/>
        </WrappingLayout>
    )
}

export default App
