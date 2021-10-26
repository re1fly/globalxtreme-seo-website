import {useEffect} from "react";
import Link from "next/link";
import {UIAddressLocation} from "./UIPartials"
import {useLayoutContext} from './MainContext'
import {URL_GX_FB, URL_GX_IG, URL_GX_TW} from "../config/urls";


const configImgOurPartner = (name) => {
    return {
        url: '/images/ourPartners/our-partner-' + name + '.png',
        alt: 'globalxtreme partner with ' + name.replace(/-/g, ' ')
    }
}

const partner = ['finns', 'amo', 'dickies', 'dufry', 'kembali', 'biliq', 'pt-super-tirta-teknologi',
    'savvoya', 'liga-tennis', 'pt-astra-international-tbk', 'double-view-mansion', 'kanakuta', 'proed-plus-school',
    'tsl', 'swiss-belhotel'];

const listLogosOurPartner = partner.map(name => configImgOurPartner(name))

const UIShapeLinkInfo = ({name, url, extraClass = 'mb-2', isBlank = false, delay = '100'}) => (
    <li className={extraClass} data-aos="fade-up" data-aos-delay={delay}>
        <Link href={url}>
            <a className="" target={isBlank ? '_blank' : ''}>{name}</a>
        </Link>
    </li>
)

const UITitleOfPart = ({name, extraClass = ''}) => (
    <h3 className={'font-weight-500 h4 text-black mb-3 ' + (extraClass || '')}
        data-aos="fade-up" data-aos-delay="100">{name}</h3>
)

const Footer = () => {
    const {locationId, isModeDark, _handleDarkMode} = useLayoutContext()
    useEffect(() => {
        _handleDarkMode(localStorage.getItem('dark-theme') ? true : false)
    }, [])

    return (
        <>
            <section className="space-of-section-footer">
                <footer className="container mb-5">
                    <div className="row justify-content-center mb-3">
                        <div className="col-md-4 mb-4">
                            <UITitleOfPart name="Contact Us"/>
                            <UIAddressLocation id={locationId}/>
                        </div>

                        <div className="col-md-4 mb-4">
                            <UITitleOfPart name="Social Network" extraClass="text-md-center"/>
                            <ul className="list-inline text-left text-sm-center mb-0">
                                <li className="list-inline-item mr-3"
                                    data-aos="fade-up" data-aos-delay="200">
                                    <Link href={URL_GX_FB}>
                                        <a target="_blank">
                                            <img src="/images/icon-sc-fb.svg"
                                                 className="h-social-icon"
                                                 alt="facebook globalxtreme"/>
                                        </a>
                                    </Link>
                                </li>
                                <li className="list-inline-item mr-3"
                                    data-aos="fade-up" data-aos-delay="250">
                                    <Link href={URL_GX_IG}>
                                        <a target="_blank">
                                            <img src="/images/icon-sc-ig.svg"
                                                 className="h-social-icon"
                                                 alt="instagram globalxtreme"/>
                                        </a>
                                    </Link>
                                </li>
                                <li className="list-inline-item"
                                    data-aos="fade-up" data-aos-delay="300">
                                    <Link href={URL_GX_TW}>
                                        <a target="_blank">
                                            <img src="/images/icon-sc-twitter.svg"
                                                 className="h-social-icon"
                                                 alt="twitter globalxtreme"/>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4 mb-4">
                            <UITitleOfPart name="Information"/>
                            <ul className="list-unstyled mb-0 footer-size-text-under font-weight-light">
                                <UIShapeLinkInfo name="Privacy Policy" url="/info/policy" delay="100"/>
                                <UIShapeLinkInfo name="Visitor Agreement" url="/info/visitor"/>
                                <UIShapeLinkInfo name="Terms and Conditions" url="/info/terms"/>
                                <UIShapeLinkInfo name="Understanding Your Bill" url="/info/understanding-bill-en"/>
                                <UIShapeLinkInfo name="FAQ" url="/info/faq"/>
                                <UIShapeLinkInfo name="Career" url="/info/career"/>
                                <UIShapeLinkInfo name="Speed Test" url="https://globalxtreme.speedtestcustom.com/"
                                                 isBlank={true}/>
                                <li className="mt-4 d-flex" data-aos="fade-up" data-aos-delay="100">
                                    <div className="input-wrap switch-btn-animate d-flexP Pjustify-content-center">
                                        <input id="switchDarkMode" type="checkbox"
                                               checked={isModeDark}
                                               onChange={(e) => _handleDarkMode(e.target.checked)}
                                               name="darkMode"/>
                                        <label htmlFor="switchDarkMode" className="mb-0"></label>
                                    </div>
                                    <span
                                        className="ml-2 text-black">| &nbsp;{isModeDark ? 'Dark' : 'Light'} Mode</span>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <UITitleOfPart name="Our Partners"/>
                        </div>
                        <div className="col-md-12">
                            <div className="row d-flex align-items-center">
                                {listLogosOurPartner.map((logo, key) => (
                                    <div key={key} className="pt-3 pb-3" data-aos="zoom-in">
                                        <div className="pl-3 pr-3 w-logos-our">
                                            <img src={logo.url} alt={logo.alt} loading="lazy"
                                                 className="img-fluid"/>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </footer>
            </section>
            <section className="wp-bg-white-to-black">
                <div className="container p-3">
                    <p className="footer-size-text-under mb-0 font-weight-light"
                       data-aos="flip-up">
                        PT. Internet Madju Abad Milenindo - © 1996-{new Date().getFullYear()} GlobalXtreme - Committed
                        to better quality
                    </p>
                </div>
            </section>
        </>
    )
}

export default Footer
