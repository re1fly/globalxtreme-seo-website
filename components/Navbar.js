import Link from "next/link";
import {useRouter} from "next/router";
import {URL_PORTAL} from '../config/urls'
import {useEffect} from "react";
import setupTawkTo from "../config/setupTawkTo";
import {UIChooseLocation} from "./Location";
import {useLayoutContext} from './MainContext'
import {ModalMenuProduct, ModalMenuInfo} from './ModalMenu'
import {animateMenuFO, animateMenuInfo} from "../animations/animation.utils";

const partialURLProducts = ['/product/fiber-optic', '/product/channel-tv']
const partialURLInfo = [
    '/info/terms', '/info/policy', '/info/visitor', '/info/understanding-bill-en',
    '/info/understanding-bill-id', '/info/about', '/info/event', '/info/blog', '/info/career',
    '/info/faq'
]

const Navbar = () => {
    const router = useRouter()
    const isActive = (routeName, routeWithArray = []) => {
        let isRoutMain = router.pathname == routeName ? true : false
        let giveCss = isRoutMain ? 'nav-item active' : 'nav-item'
        if (!isRoutMain && routeWithArray && routeWithArray.length) {
            giveCss = routeWithArray.findIndex((r) => router.pathname == r) > -1 ? 'nav-item active' : 'nav-item'
        }

        return giveCss
    }

    useEffect(() => {setupTawkTo()}, [])

    const {imgLogo} = useLayoutContext()

    const _handleShowModal = (keyModal) => {
        $(keyModal).modal({
            show: true,
            backdrop: false
        });
        $('body').removeClass('modal-open');
    }

    const _handleAnimateProduct = async () => {
        await _handleShowModal('#modalMenuProduct')
        await animateMenuFO()
    }

    const _handleAnimateInfo = async () => {
        await _handleShowModal('#modalMenuInfo')
        await animateMenuInfo()
    }

    return (
        <>
            <nav className="navbar fixed-top navbar-inverse navbar-light navbar-toggleable-sm navbar-expand-lg nav-bg-mode">
                <div className="container m-md-0P">
                    <Link href="/">
                        <a className="navbar-brand">
                            <img src={imgLogo} height="38" alt="Logo GlobalXtreme"/>
                        </a>
                    </Link>

                    <button className="navbar-toggler  collapsed" type="button" data-toggle="collapse" data-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar top-bar"></span>
                        <span className="icon-bar middle-bar"></span>
                        <span className="icon-bar bottom-bar"></span>
                        <span className="sr-only">Toggle navigation</span>
                    </button>

                    <div className="collapse navbar-collapse wp-navbar-custom" id="navbarText">
                        <ul className="navbar-nav ml-auto">
                            <li className={isActive('',['/'])}>
                                <Link href="/">
                                    <a className="nav-link">HOME
                                        <span className="d-none"></span></a>
                                </Link>
                            </li>
                            <li className={isActive('/product', partialURLProducts)}>
                                <a className="nav-link"
                                   onClick={_handleAnimateProduct}>
                                    PRODUCT
                                    <span className="d-none"></span></a>
                            </li>
                            <li className={isActive('/info', partialURLInfo)}>
                                <a className="nav-link"
                                   onClick={_handleAnimateInfo}>INFO
                                    <span className="d-none"></span></a>
                            </li>
                            <li className="nav-item">
                                <Link href={URL_PORTAL}>
                                    <a className="nav-link" target="_blank">MY GX
                                        <span className="d-none"></span></a>
                                </Link>
                            </li>
                        </ul>

                        <div className="ml-lg-4 pl-0 pr-0 pl-md-3 pr-md-3">
                            <UIChooseLocation/>
                        </div>
                    </div>

                </div>
            </nav>

            <ModalMenuProduct/>
            <ModalMenuInfo/>
        </>
    )
}

export default Navbar
