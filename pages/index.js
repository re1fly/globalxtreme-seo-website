import {useEffect} from "react";
import Link from "next/link";
import * as Icon from 'react-feather'
import Layout from '../components/Layout'
import {useLayoutContext} from "../components/MainContext";
import {getLinkRedirectWA} from '../config/whatsappNumber'
import {headPageHome} from '../content/seoOfPage'

import CardWhyNotTheBest from '../components/partialOfPages/home/CardWhyNotTheBest'
import GXOpening from '../components/partialOfPages/home/GXOpening'
import PackageLoved from '../components/partialOfPages/home/PackageLoved'
import SliderHero from '../components/partialOfPages/home/SliderHero'

import animationPageIndex from '../animations/animation.page.index'
import {animateCursorCircle, animateScrollTest, shakeElement} from "../animations/animation.utils";
import MyGXApp from "../components/partialOfPages/home/MyGXApp";

const rocketBlack = '/images/rocket-page-index-black.svg'
const rocketWhite = '/images/rocket-page-index-white.svg'

const rocketIconBlack = '/images/rocket-main-black.svg'
const rocketIconParticleLeftBlack = '/images/rocket-icon-left-black.svg'
const rocketIconParticleRightBlack = '/images/rocket-icon-right-black.svg'

const rocketIconWhite = '/images/rocket-main-white.svg'
const rocketIconParticleLeftWhite = '/images/rocket-icon-left-white.svg'
const rocketIconParticleRightWhite = '/images/rocket-icon-right-white.svg'

const Home = () => {
    const {isModeDark, locationId} = useLayoutContext()

    useEffect(() => {
        // animationPageIndex()
        // animateScrollTest()

        $(".wp-rocket-index").mousemove(function(e) {
            shakeElement('.wp-rocket-index', e, ".rocket-index", -100)
            shakeElement('.wp-rocket-index',e, ".rocket-particle-left", -50)
            shakeElement('.wp-rocket-index',e, ".rocket-particle-right", -50)
        });
    }, [])

    return (
      <Layout title={headPageHome.title}>
          <GXOpening/>
          <SliderHero/>

          <section className="space-of-section s-two">
              <div className="container">
                  <div className="row mb-5">
                      <div className="col-md-12 text-center mb-5 color-black-white">
                          <h2 className="font-weight-light mb-0 sTwo-t-one" data-aos="fade-up">
                              {/* eslint-disable-next-line react/no-unescaped-entities */}
                              Nothing Beats GlobalXtreme's
                          </h2>
                          <h1 className="font-weight-bold mb-0 sTwo-t-two" data-aos="fade-up">
                              100% OPTICAL INTERFACESSSSZZZ
                          </h1>
                      </div>

                      <div className="col-md-12 text-center mb-4 sTwo-t-there">
                          <h2 className="h3 font-weight-light color-black-white" data-aos="fade-up">
                              Lets Find You The Best Deals!
                          </h2>
                          <Link href={getLinkRedirectWA(locationId)}>
                              <a className="btn btn-primary-yellow base-box-shadow" data-aos="fade-up">
                              <span className="d-flex align-items-center">
                                  <span className="h5 font-weight-600 mb-0 mr-2">Chat With Sales</span>
                              <img src="/images/icon-whatsapp.svg"
                                   className="w-icon-wa"
                                   alt="globalxtreme whatsapp"/>
                              </span>
                              </a>
                          </Link>
                      </div>
                  </div>

                  <div className="row justify-content-center mt-3 pl-0 pl-lg-2">
                      <div className="col-lg-4 col-md-6 d-flex mr-lg-3 mt-3 mb-3  show-from-left"
                           data-aos="fade-up" data-aos-delay="100">
                          <div className="card card-yellow w-100 cursor-hover-white">
                              <div className="card-body">
                                  <img src="/images/icon-speed.svg"
                                       className="mb-4 mt-4"
                                       alt="globalxtreme speed fiber optic"/>
                                  <h3 className="card-title font-weight-bold h5">
                                      FIBER OPTIC<br/>BROADBAND
                                  </h3>
                                  <p className="text-description mb-4">
                                      The fastest & most reliable Internet<br/>
                                      service available. Utilizing the speed of<br/>
                                      light and backed by our very own fiber<br/>
                                      optics network.
                                  </p>

                                  <Link href="/product/fiber-optic">
                                      <a className="float-right font-weight-bold text-link align-items-center d-flex">
                                          <span className="mr-1">See Product</span> <Icon.ChevronRight size={17}/>
                                      </a>
                                  </Link>
                              </div>
                          </div>
                      </div>

                      <div className="col-lg-4 col-md-6 d-flex ml-lg-3 mr-lg-2 mt-3 mb-3  show-from-right"
                           data-aos="fade-up" data-aos-delay="300">
                          <div className="card card-yellow w-100 cursor-hover-white">
                              <div className="card-body  d-flex flex-column">
                                  <img src="/images/icon-tv-4k.svg"
                                       className="mb-4 mt-4"
                                       alt="globalxtreme 4K ULTRA HD TV"/>
                                  <h4 className="card-title font-weight-bold mt-auto h5">
                                      4K ULTRA HD TV
                                  </h4>
                                  <p className="text-description mb-4">
                                      We bring the cinema to you!<br/>
                                      Experience your favorite channels like<br/>
                                      never before, using fiber optic cables<br/>
                                      for fast & optimal delivery.
                                  </p>


                                  <div className="mt-auto">
                                      <Link href="/product/channel-tv">
                                          <a className="float-right font-weight-bold text-link align-items-center d-flex">
                                              <span className="mr-1">See Product</span> <Icon.ChevronRight size={17}/>
                                          </a>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </section>

          <section className="d-flex justify-content-center wp-rocket-index"
                   data-aos="fade-up" data-aos-delay="300">
              <img src={isModeDark ? rocketIconParticleLeftWhite : rocketIconParticleLeftBlack}
                   className="position-absolute rocket-particle-left"
                   alt="globalxtreme icon"/>
              <img src={isModeDark ? rocketIconWhite : rocketIconBlack}
                   className="rocket-index"
                   alt="globalxtreme icon"/>
              <img src={isModeDark ? rocketIconParticleRightWhite : rocketIconParticleRightBlack}
                   className="position-absolute rocket-particle-right"
                   alt="globalxtreme icon"/>
          </section>

          <section className="mb-5 mt-n5">
              <PackageLoved/>
          </section>

          <MyGXApp/>

          <section className="space-of-section">
              <h2 className="text-center font-weight-bolder color-black-white"
                  data-aos="fade-up" data-aos-delay="100">
                  Why Not The Best ?
              </h2>

              <div className="container mt-5">
                  <div className="row">
                      <div className="col-lg-4 col-md-12 mt-3 mb-3"
                           data-aos="fade-up" data-aos-delay="200">
                          <CardWhyNotTheBest
                              src="/images/icon-xpertise.svg"
                              title="XPERTISE"
                              content={(
                                  <>
                                      Our team of accomplished
                                      technicians are ready to serve
                                      24/7 365 days a year to ensure
                                      your satisfaction in our services.
                                  </>
                              )}/>
                      </div>
                      <div className="col-lg-4 col-md-12 mt-3 mb-3"
                           data-aos="fade-up" data-aos-delay="300">
                          <CardWhyNotTheBest
                              src="/images/icon-xtensive.svg"
                              title="XTENSIVE"
                              content={(
                                  <>
                                      Supported by our very own
                                      infrastructure we are ready
                                      to serve anyone, anywhere.
                                  </>
                              )}/>
                      </div>

                      <div className="col-lg-4 col-md-12 mt-3 mb-3"
                           data-aos="fade-up" data-aos-delay="500">
                          <CardWhyNotTheBest
                              src="/images/icon-xperienced.svg"
                              title="XPERIENCED"
                              content={(
                                  <>
                                      Having been operational since
                                      1996 we know the field better
                                      than anyone.
                                  </>
                              )}/>
                      </div>

                  </div>
              </div>
          </section>

          <div className="space-of-section position-relative overflow-hidden space-before-footer">
              <div className="position-absolute block-gre-before-footer" data-aos="fade-right" data-aos-delay="100"></div>
              <div className="container">
                  <div className="row justify-content-centerP d-flex align-items-center">
                      <div className="col-lg-6 col-md-12 mb-5 mb-lg-0 mr-lg-4">
                          <img src="/images/index-cso.jpg"
                               className="img-fluid b-rad-20"
                               data-aos="fade-right" data-aos-delay="200"
                               alt="customer service globalxtreme"/>
                      </div>

                      <div className="col-lg-5 col-md-12">
                          <div className="card b-rad-10 bg-primary-yellow border-0 base-box-shadow mb-5 left-min-120-px"
                               data-aos="fade-up">
                              <div className="card-body pl-5 pr-5">
                                  <h4 className="font-weight-light mb-0">
                                      NO PROBLEM!<br/>
                                      <span className="font-weight-bold">
                                          {/* eslint-disable-next-line react/no-unescaped-entities */}
                                          WE'VE GOT YOUR BACK!
                                      </span>
                                  </h4>
                              </div>
                          </div>

                          <p className="mb-0 color-black-white small pr-lg-5 mt-md-n3"
                             data-aos="fade-up">
                              You deserve only the best. Our
                              highly capable technicians
                              monitor our network 24 hours
                              everyday of the year to ensure that
                              we solve any problem that may
                              occur before you even notice.
                              <br/>
                              <br/>
                              In case any of these problems slip
                              through, our customer service
                              department is ready to assist you
                              24 hours 365 days a year including
                              national and religious holidays!
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </Layout>
    )
}

export default Home
