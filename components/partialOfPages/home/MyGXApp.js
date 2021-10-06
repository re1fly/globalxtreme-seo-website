import {UIAppStoreIcon} from "../../UIPartials";
import {useEffect} from "react";
import {shakeElement} from "../../../animations/animation.utils";
const indexMan = '/images/index-man.png'
const indexPhoneLeft = '/images/index-phone-01.png'
const indexPhoneRight = '/images/index-phone-02.png'

const MyGXApp = () => {

    useEffect(() => {
        $("#sectionMyGXApp").mousemove(function(e) {
            shakeElement('#sectionMyGXApp', e, ".card-noted-app", -100)
            shakeElement('#sectionMyGXApp',e, ".index-phone-left", -50)
            shakeElement('#sectionMyGXApp',e, ".index-man", -30)
            shakeElement('#sectionMyGXApp',e, ".index-phone-right", -60)
        });
        $( "#sectionMyGXApp" ).mouseout(function(e) {
            shakeElement('#sectionMyGXApp', e, ".card-noted-app", 0)
            shakeElement('#sectionMyGXApp',e, ".index-phone-left", 0)
            shakeElement('#sectionMyGXApp',e, ".index-man", 0)
            shakeElement('#sectionMyGXApp',e, ".index-phone-right", 0)
        });
    }, [])

    return (
        <section className="space-wp-grey-in-index overflow-unset">
            <div className="w-100 space-grey-in-index">
                <div className="container mb-md-5 mt-5">
                    <div className="row d-flex align-items-center wp-row-index-gx-app flex-row-reverse ">
                        <div className="col-lg-6 col-md-12 mb-5-custom">
                            <div className="wp-image-download-app d-flex justify-content-center"
                                 data-aos="fade-up" id="sectionMyGXApp">
                                <div className="card-noted-app small" data-aos="fade-up" data-aos-delay="100">
                                    <b>MyGX App</b> manage your
                                    account details, pay your bills,
                                    view your history, troubleshoot
                                    your connectivity, contact our
                                    representatives and more all
                                    online using one App.
                                </div>

                                <img src={indexPhoneLeft} className="index-phone-left"
                                     alt="phone app gx"/>

                                <img src={indexMan} className="index-man img-fluid"
                                     alt="download app gx"/>

                                <img src={indexPhoneRight} className="index-phone-right"
                                     alt="phone app gx"/>
                            </div>

                        </div>

                        <div className="col-lg-6 col-md-12 use-color-theme">
                            <h2 className="font-weight-bolder my-title display-3 mb-0 text-lg-left text-center"
                                data-aos="fade-up">
                                My GX App
                            </h2>
                            <p className="h2 font-weight-light mb-4 text-lg-left text-center"
                               data-aos="fade-up">
                                Download Now
                            </p>
                            <div data-aos="fade-up">
                                <UIAppStoreIcon extraClass="w-50 wp-icon-download-app"/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyGXApp
