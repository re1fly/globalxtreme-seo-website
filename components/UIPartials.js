import React, {memo, useEffect} from "react";
import Link from "next/link";
import * as Icon from 'react-feather'
import {findAddress} from '../config/locations'
import {useLayoutContext} from "./MainContext";
import {datePost} from "../config/formatDate";
import dynamic from "next/dynamic";
import {URL_APP_STORE, URL_MOBILE_STORE} from '../config/urls'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {getLinkRedirectWA} from "../config/whatsappNumber";


const OwlCarousel = dynamic(() => {
    return import ('react-owl-carousel')
}, { ssr: false })

export const UIAppStoreIcon = ({extraClass = ' w-75'}) => (
    <div className={extraClass}>
        <div className="list-group list-group-horizontal">
            <Link href={URL_APP_STORE}>
                <a target="_blank" className="mr-2">
                    <img src="/images/app-store.png"
                         className="border-white border b-rad-5 img-fluid"
                         alt="download globalxtreme app at app store"/>
                </a>
            </Link>
            <Link href={URL_MOBILE_STORE}>
                <a target="_blank">
                    <img src="/images/app-android.png"
                         className="border-white border b-rad-5 img-fluid"
                         alt="download globalxtreme app at google play"/>
                </a>
            </Link>
        </div>
    </div>
)

export const UIButtonChatWA = (props) => (
    <Link href={getLinkRedirectWA()}>
        <a className="btn btn-primary-yellow font-weight-bold base-box-shadow"
           {...props.other||''}>
            <span className="d-flex align-items-center">
                <span className={'mb-0 mr-2 ' + (props.fontSize||'h4')}>Chat With Sales</span>
                <img src="/images/icon-whatsapp.svg"
                     className="w-icon-wa"
                     alt="globalxtreme whatsapp"/>
            </span>
        </a>
    </Link>
)

export const UIHeadSecond = (props) => (
    <section className="space-head-second">
        <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
                <div className={'col-md-5 ' + (props.extraCssLeft||'')}>
                    {props.partLeft}
                </div>

                <div className="col-md-7 d-flex justify-content-center">
                    {props.contentRight||''}
                </div>
            </div>
        </div>
    </section>
)

export const UICardYellow = memo((props) => (
    <div className="card card-package-loved bg-primary-yellow h-100">
        <div className="card-body">
            <h3 className="text-center font-weight-bolder h4" {...props.atrTitle||''}>{props.title}</h3>
            <p className="small text-center mb-0" {...props.atrChild||''}>
                {props.children}
            </p>
        </div>
    </div>
))

export const UIAddressLocation = memo((props) => (
    <p className="footer-size-text-under font-weight-light mb-0"
       data-aos="fade-up" data-aos-delay="200"
       dangerouslySetInnerHTML= {{
           __html: findAddress(props.id).address
       }}/>
))

export const UISectionPackage = ({children, title, extraClassRow = '', cssTitle = ''}) => (
    <section className="space-of-section position-relative">
        <div className="space-50-percent-bg-grey"></div>
        <div className="container pb-5">
            <div className={"row mb-5 " + (extraClassRow)}>
                <div className="col-md-12 d-flex justify-content-center mb-5">
                    <div className={cssTitle||'block-title-product h5'} data-aos="zoom-in">{title}</div>
                </div>
                {children}
            </div>
        </div>
    </section>
)

export const UICardPackage = (props) => (
    <div className={'card card-product-fo ' + (props.bgCard || '')}>
        <div className="card-body">

            <div className="text-center pl-4 pr-4 mt-4 pb-5">
                <img src={props.iconSpeed}
                     className="img-speed w-75"
                     alt="globalxtreme icon speed"/>
                <div className="text-center package-top-min">
                    <p className="fs-dot-8-rem mb-0">{props.type||'speeds up to'}</p>
                    <p className="display-4 font-weight-600 mb-0">{props.speed}</p>
                    <p className="fs-dot-9-rem mb-0">{props.unit||'Mbps'}</p>
                </div>
            </div>



            <p className="text-center font-weight-light fs-dot-8-rem">
                {props.points}
                <br/><br/>
                <span className="fs-dot-6-rem font-italic">
                            ( Terms and conditions apply )
                        </span>
            </p>

        </div>
        <div className={'card-footer block-footer ' + (props.bgFooter||'bg-primary-yellow')}>
            {props.prices}
        </div>
    </div>
)

export const UICardPackageTV = (props) => (
    <div className={'card card-product-fo ' + (props.bgCard || '')}>
        <div className="card-body">
            <p className="h3 font-weight-bold mb-4 pt-4 text-center">
                {props.title}
            </p>
        </div>
        <div className={'card-footer block-footer ' + (props.bgFooter||'bg-primary-yellow')}>
            {props.prices}
        </div>
    </div>
)

export const UIThemeHeadSecondPageInfo = ({title}) => {
    const {isModeDark} = useLayoutContext()
    let iconHeadBlack = '/images/icon-handshake-black.svg'
    let iconHeadWhite = '/images/icon-handshake-white.svg'

    return (
        <UIHeadSecond
            partLeft={(
                <div className="d-flex align-content-center">
                    <div className="block-head-second"
                         data-aos="fade-up"
                         data-aos-delay="200">
                        <h1 className="h6 mb-0 font-weight-bold">{title}</h1>
                    </div>
                </div>
            )}
            contentRight={(
                <img src={isModeDark ? iconHeadWhite : iconHeadBlack}
                     data-aos="fade-up"
                     className="w-100"
                     alt="gx handshake"/>
            )}
            extraCssLeft="mb-4 mb-md-0"/>
    )
}


// UI CARD EVENT OR BLOG
export const UICardLargeEvent = ({event, extraClass, handleLink = () => {}}) => (
    <div className={'card bg-dark base-box-shadow wp-card-blog ' + extraClass}
         onClick={handleLink}>
        <div className="bg-black-overlay">
            <img src={event.yoast_head_json.og_image[0].url}
                 loading="lazy"
                 className="card-img bg-black-overlay" alt="event globalxtreme"/>
        </div>
        <div className="card-img-overlay d-flex align-items-end">
            <div className="row pl-0 pb-0 pl-md-3 pb-md-3">
                <div className="col-md-12 text-shadow">
                    <h2 className="font-weight-500 mb-0 mb-md-2">{event.title.rendered}</h2>
                    <p className="mb-0 small">{datePost(event.date)}</p>
                </div>
            </div>
        </div>
    </div>
)

export const UIPreviewDetailEvent = ({linkBack, contentOf, content}) => {
    useEffect(() => {
        $('.wp-aos p, .wp-aos h6, .wp-aos h2, .wp-aos h3, .wp-aos h4, .wp-aos h5, .wp-aos h6,' +
            ' .wp-aos ul li,  .wp-aos ol li, .wp-aos h5 ol li').attr({
            'data-aos': "fade-up"
        });
    }, [])

    return (
        <div className="row">
            <div className="col-md-12 mb-2">
                <ol className="breadcrumb breadcrumb-in-blog">
                    <li className="breadcrumb-item" data-aos="zoom-in" data-aos-delay="50">
                        <Link href={linkBack}><a className="">{contentOf}</a></Link>
                    </li>
                    <li className="breadcrumb-item active" data-aos="zoom-in" data-aos-delay="100"
                        aria-current="page">{content.title}</li>
                </ol>
            </div>

            <div className="col-md-12 mb-3 text-black-white">
                <h1 className="font-weight-600" data-aos="fade-up" data-aos-delay="100">{content.title}</h1>
                <p className="small" data-aos="fade-up" data-aos-delay="200">{datePost(content.date)}</p>
            </div>

            <div className="col-md-12 d-flex mb-5">
                <div className="card wp-card-blog-detail overflow-hidden border-in-dark-mode"
                     data-aos="fade-up" data-aos-delay="250">
                    <img src={content.img} alt={content.title}/>
                </div>
            </div>

            <div className="col-md-12">
                <div className="text-black-white wp-policy wp-aos" dangerouslySetInnerHTML={{__html: content.value || ''}}></div>
            </div>
        </div>
    )
}

export const UIBlogOtherOwlCarousel = ({contents = [], linkDetail}) => (
    <OwlCarousel item={3}
                 loop
                 autoplay={true}
                 lazyLoad={true}
                 lazyContent={true}
                 navContainerClass="owl-nav owl-nav-center disabled"
                 dotClass="owl-dots disabled"
                 responsive = {
                     {
                         0:{items: 1},
                         576:{items: 1},
                         1200:{items: 3},
                         1500:{items: 3},
                         1750:{items: 3}
                     }
                 }
                 className="owl-theme ">
        {contents.map((content, index) => {
            let title = content.title ? content.title.rendered : ''
            let date = content.date ? datePost(content.date) : ''
            let urlImg = content.yoast_head_json ? content.yoast_head_json.og_image[0].url : ''

            return (
                <div className="item p-2" key={index}>
                    <div className="card wp-card-other border-in-dark-mode">
                        <img className="card-img-top"
                             src={urlImg}
                             loading="lazy"
                             alt={title}/>
                        <div className="card-body">
                            <div className="wp-title">
                                <h3 className="card-title h4">{title}</h3>
                            </div>

                            <p className="small">{date}</p>
                            <Link href={linkDetail + content.id}>
                                <a className="btn btn-primary-yellow btn-sm b-rad-20 fs-dot-7-rem font-weight-500">
                                    See More <Icon.ChevronRight size={15}/>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        })}
    </OwlCarousel>
)

export const UIBlank = ({msg}) => {
    const {isModeDark} = useLayoutContext()
    return (
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-12 text-black-white text-center mt-5">
                <img src={isModeDark ? '/images/icon-empty-white.svg' : '/images/icon-empty.svg'}
                     className="img-fluid"
                     style={{width: '180px'}}
                     alt="globalxtreme blogs"/>
                {msg ? (
                    <p className="mt-4 text-center">{msg}</p>
                ) : null}
            </div>
        </div>
    )
}

export const ModalInfo = ({children}) => (
    <div className="modal right fade fade-left" id="modalInfoMessage" tabIndex="-1" role="dialog"
         data-backdrop="static" data-keyboard="false"
         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content border-0 b-rad-20 base-box-shadow">
                <div className="modal-body position-relative">
                    {children}
                </div>
            </div>
        </div>
    </div>
)
