import dynamic from "next/dynamic";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {UIAppStoreIcon} from "../../UIPartials";
import {useEffect} from "react";
import {shakeElement} from "../../../animations/animation.utils";

const OwlCarousel = dynamic(() => {
    return import ('react-owl-carousel')
}, {ssr: false})

const SliderHeroSecond = () => {

    useEffect(() => {
        $(".myHeroSlider").mousemove(function (e) {
            shakeElement('.myHeroSlider', e, ".carousel-caption", -100)
            shakeElement('.myHeroSlider', e, '.slider-hero .owl-dots', -50)
        });
    }, [])

    return (
        <section className="wp-slider myHeroSlider">
            <OwlCarousel items={1}
                         loop
                         smartSpeed={600}
                         autoplay={true}
                         stageOuterClass="owl-stage-outer h-100"
                         stageClass="h-100 d-flex"
                         className="owl-theme slider-hero">
                <div
                    className="myHeroSlider d-block w-100 h-100 d-flex justify-content-center overflow-hidden slider-bg-black-overlay">
                    <img src="/images/slider/slider-gx-01.jpg"
                         className="slider-without-width fix-img-card slider-img"
                         loading="lazy"
                         alt="globalxtreme tv 4k"/>
                    <div className="carousel-caption d-md-block content-slider-one fixed-top container">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="col-lg-5 col-md-12 text-lg-left text-center">
                                <h2 className="display-1 text-shadowP font-weight-bolder animate-text-fromTop">
                                    MyGX
                                </h2>
                                <p className="small text-small-shadowP owl-slide-animated owl-slide-title fs-dot-8-rem mb-4">
                                    Get Update | Manage Account | Payment | Customer Service
                                </p>
                            </div>

                            <div className="col-lg-4 col-md-12 text-lg-left text-center">
                                <h3 className="font-weight-500 text-shadowP h2 mb-1 owl-slide-animated owl-slide-title">
                                    DOWNLOAD NOW
                                </h3>
                                <UIAppStoreIcon extraClass="wp-icon-app" key={'slider hero'}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="carousel-itemP d-block w-100 h-100 d-flex justify-content-center overflow-hidden">
                    <img src="/images/slider/slider-gx-02.jpg"
                         className="slider-without-width fix-img-card slider-img"
                         loading="lazy"
                         alt="globalxtreme tv 4k"/>
                    <div className="carousel-caption d-md-block slider-caption-top-50vh">
                        <h2 className="font-weight-bolder text-center h1">
                            Perfect Match For Entertainment
                        </h2>
                        <h5 className="font-weight-light">
                            Change standard TV to Smart TV with various feature that compact with one portable box.
                        </h5>
                    </div>
                </div>

                <div className="carousel-itemP d-block w-100 h-100 d-flex justify-content-center overflow-hidden">
                    <img src="/images/slider/slider-gx-03.jpg"
                         className="slider-without-width fix-img-card slider-img"
                         loading="lazy"
                         alt="globalxtreme game stream content"/>

                    <div className="carousel-caption d-noneP d-md-block slider-caption-top-50vh">
                        <h2 className="font-weight-bolder text-center h1">
                            GAME. STREAM. CONTENT.
                        </h2>
                        <h5 className="font-weight-light">
                            All in one with GlobalXtreme your reliable Internet provider
                        </h5>
                    </div>
                </div>

            </OwlCarousel>
        </section>
    )
}

export default SliderHeroSecond
