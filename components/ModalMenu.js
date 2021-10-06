import Link from "next/link";
import * as Icon from 'react-feather'
import {shakeElement} from "../animations/animation.utils";
import {useLayoutContext} from "./MainContext";
import {useEffect} from "react";

const PlugCircle = ({extraClass = ''}) => (
    <span className={'wp-icon-circle d-flex ' + extraClass}>
        <Icon.Plus size={18}/>
    </span>
)

let blackLeftLine = '/images/menu/icon-black-left-line.svg'
let blackLeftHand = '/images/menu/icon-black-left-hand.svg'
let blackRightLine = '/images/menu/icon-black-right-line.svg'
let blackRightHand = '/images/menu/icon-black-right-hand.svg'

let whiteLeftLine = '/images/menu/icon-white-left-line.svg'
let whiteLeftHand = '/images/menu/icon-white-left-hand.svg'
let whiteRightLine = '/images/menu/icon-white-right-line.svg'
let whiteRightHand = '/images/menu/icon-white-right-hand.svg'

export const ModalMenuProduct = () => {
    const {isModeDark} = useLayoutContext()

    const _close = async () => {
        await $('#modalMenuProduct').modal('hide');
    }

    useEffect(() => {
        let nameWPShake = '.wp-menu-product'
        $(nameWPShake).mousemove(function(e) {
            shakeElement(nameWPShake, e, ".product-line-right", -105)
            shakeElement(nameWPShake,e, ".product-hand-right", -90)
            shakeElement(nameWPShake,e, ".btn-right-position", -80)
            shakeElement(nameWPShake,e, ".icon-plus-right", -120)

            shakeElement(nameWPShake, e, ".product-line-left", -110)
            shakeElement(nameWPShake,e, ".product-hand-left", -90)
            shakeElement(nameWPShake,e, ".btn-left-position", -70)
            shakeElement(nameWPShake,e, ".icon-plus-left", -100)
        });
    }, [])

    return (
        <div className="modal fade-in zoom-in" id="modalMenuProduct" tabIndex="-1" role="dialog"
             aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-full-screen" role="document">
                <div className="modal-content bg-white-black">
                    <div className="modal-body position-relative">
                        <a className="x-close close" onClick={_close}>
                            <Icon.X size={30}/>
                        </a>

                        <div className="h-100 wp-menu-product">
                            <div className="row d-flex h-100">
                                <div className="col-md-6">
                                    <div className="position-relative h-100 wp-icon-product-left">
                                        <img src={isModeDark ? whiteLeftLine : blackLeftLine}
                                             loading="lazy"
                                             className="product-line-left"
                                             alt="globalxtreme menu fiber optic"/>
                                        <img src={isModeDark ? whiteLeftHand : blackLeftHand}
                                             loading="lazy"
                                             className="product-hand-left"
                                             alt="globalxtreme menu fiber optic"/>

                                        <Link href="/product/fiber-optic">
                                            <a className="btn btn-primary-yellow btn-sm btn-in-modal btn-left-position">
                                                FIBER OPTIC<br/>
                                                BROADBAND
                                            </a>
                                        </Link>
                                        <PlugCircle extraClass="icon-plus-left"/>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="position-relative h-100 wp-icon-product-right">
                                        <img src={isModeDark ? whiteRightLine : blackRightLine}
                                             loading="lazy"
                                             className="product-line-right"
                                             alt="globalxtreme menu fiber optic"/>
                                        <img src={isModeDark ? whiteRightHand : blackRightHand}
                                             loading="lazy"
                                             className="product-hand-right"
                                             alt="globalxtreme menu fiber optic"/>

                                        <div className="wp-btn-hd">
                                            <Link href="/product/channel-tv">
                                                <a className="btn btn-primary-yellow btn-sm btn-in-modal btn-right-position">
                                                    HD TV
                                                </a>
                                            </Link>

                                            <PlugCircle extraClass="icon-plus-right"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



let blackPolygonLeft = '/images/menu/info-black-polygon-left.svg'
let blackPolygonRight = '/images/menu/info-black-polygon-right.svg'
let whitePolygonLeft = '/images/menu/info-white-polygon-left.svg'
let whitePolygonRight = '/images/menu/info-white-polygon-right.svg'

export const ModalMenuInfo = () => {
    const {isModeDark} = useLayoutContext()

    const _close = async () => {
        // animateCloseMenuFO()
        await $('#modalMenuInfo').modal('hide');
    }

    useEffect(() => {
        let nameWPShake = '.wp-icon-menu-info'
        $(nameWPShake).mousemove(function(e) {
            shakeElement(nameWPShake, e, ".polygon-right", -100)
            shakeElement(nameWPShake,e, ".btn-about-us", -90)
            shakeElement(nameWPShake,e, ".icon-plus-about", -120)

            shakeElement(nameWPShake, e, ".polygon-left", -105)
            shakeElement(nameWPShake,e, ".btn-info-event", -90)
            shakeElement(nameWPShake,e, ".icon-plus-info-event", -120)
            shakeElement(nameWPShake,e, ".btn-info-blog", -90)
            shakeElement(nameWPShake,e, ".icon-plus-info-blog", -120)
        });
    }, [])

    return (
        <div className="modal fade-in zoom-in" id="modalMenuInfo" tabIndex="-1" role="dialog"
             aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-full-screen" role="document">
                <div className="modal-content bg-white-black">

                    <div className="modal-body position-relative overflow-hidden">
                        <div className="row">
                            <div className="col-md-12">
                                <a className="x-close close" onClick={_close}>
                                    <Icon.X size={30}/>
                                </a>
                            </div>
                        </div>

                        <div className="h-100 d-lg-flexP d-flex Pd-none align-items-center justify-content-center">
                            <div className="row wp-icon-menu-info">
                                <div className="col-lg-6">
                                    <img src={isModeDark ? whitePolygonLeft : blackPolygonLeft}
                                         loading="lazy"
                                         className="polygon-left"
                                         alt="globalxtreme menu fiber optic"/>
                                    <div className="menu-info-event">
                                        <Link href="/info/event">
                                            <a className="btn btn-primary-yellow btn-sm btn-in-modal btn-info-event">
                                                Event
                                            </a>
                                        </Link>
                                        <PlugCircle extraClass="icon-plus-info-event"/>
                                    </div>
                                    <div className="menu-info-blog">
                                        <PlugCircle extraClass="icon-plus-info-blog"/>

                                        <Link href="/info/blog">
                                            <a className="btn btn-primary-yellow btn-sm btn-in-modal btn-info-blog">
                                                Blog
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <img src={isModeDark ? whitePolygonRight : blackPolygonRight}
                                         loading="lazy"
                                         className="img-overlay polygon-right"
                                         alt="globalxtreme info"/>

                                    <div className="menu-info-about">
                                        <PlugCircle extraClass="icon-plus-info-blog icon-plus-about"/>

                                        <Link href="/info/about">
                                            <a className="btn btn-primary-yellow btn-sm btn-in-modal btn-about-us btn-info-blog">
                                                About Us
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
