import React from "react";
import Layout from "../../components/Layout";
import {UIButtonChatWA, UIHeadSecond} from "../../components/UIPartials";
import {Accordion, Card} from 'react-bootstrap'
import * as Icon from "react-feather";
import {useLayoutContext} from "../../components/MainContext";
import {getPackageByLocation} from "../../components/partialOfPages/IndexProductFO";
import {headPageFO} from '../../content/seoOfPage'

const objectBenefit = (title, content, isWithoutP = false) => {
    return {title: title, content: content, isWithoutP: isWithoutP}
}

const benefits = [
    objectBenefit('TURNKEY IMPLEMENTATION', (
        <>
            The proposed network will be supplied as a turnkey operation. GlobalXtreme will provide all<br/>
            fiber-optic and splicing materials, labor, engineering, quality control, testing, and project<br/>
            management necessary to make this project a reality. Upon agreement signature, our project<br/>
            implementation team will immediately set up a kick-off meeting with all participants to<br/>
            review a complete statement of work, determine implementation responsibilities, and develop<br/>
            a full project plan with scheduled dates for each step in the process.
        </>
    )),
    objectBenefit('LOW RISK', (
        <ol className="pr-3 pl-3 fs-dot-8-rem font-weight-light mb-0">
            <li>
                Repair any damage to the fiber – all restoration is included in the cost of the network.
            </li>
            <li>
                Absorb all make-ready charges, applications and ongoing fees for pole attachments and permits throughout the life of the contract.
            </li>
            <li>
                Work with the city, county and state agencies to relocate and rebuild the fiber plant every time a road is built or widened. These costs are completely covered by GlobalXtreme.
            </li>
            <li>
                Maintain all of the outside plant, including preventative maintenance.
            </li>
        </ol>
    ), true),
    objectBenefit('SECURITY', (
        <>
            GlobalXtreme customers are connected to our network via network electronics and channels of<br/>
            fiber-optic strands dedicated for their use. Data segregation within our network ensures your<br/>
            traffic is not switched or routed with other customers’ data.
        </>
    )),
    objectBenefit('SCALABILITY', (
        <>
            GlobalXtreme fiber-optic connections provide a connectivity platform that will meet our clients’<br/>
            existing and future connectivity needs. The proposed network was designed to accommodate<br/>
            advancements in connectivity and application without modifications to the network infrastructure.
        </>
    )),
    objectBenefit('MONITORED & MANAGED', (
        <>
            The network will be proactively monitored 24/7 by GlobalXtreme Network Operations Center.<br/>
            All warranty, maintenance, repairs, and troubleshooting of the network is covered in the monthly<br/>
            recurring service charge. GlobalXtreme provides a dedicated call-out procedure with local<br/>
            metro area technical assistance for any troubles on the network. If necessary fiber repair crews will<br/>
            be dispatched locally to respond to any fiber issues.
        </>
    )),
]

let iconHeadBlack = '/images/icon-fo-black.png'
let iconHeadWhite = '/images/icon-fo-white.png'

const FiberOptic = () => {
    const {isModeDark, locationId} = useLayoutContext()

    return (
        <Layout title={headPageFO.title}>
            <UIHeadSecond
                partLeft={(
                    <div className="color-black-white">
                        <h1 className="font-weight-bold"
                            data-aos="fade-up"
                            data-aos-delay="200">
                            FIBER OPTIC
                        </h1>
                        <h2 className="mb-4 font-weight-600 h4"
                            data-aos="fade-up"
                            data-aos-delay="300">
                            BROADBAND
                        </h2>
                        <UIButtonChatWA fontSize="h6 font-weight-600"
                                        other={{
                                            'data-aos': "fade-up",
                                            'data-aos-delay': "400"
                                        }}
                                        locationId={locationId}/>
                        {/*<p className="mb-0 mt-3 fs-dot-8-rem font-italic"*/}
                        {/*   data-aos="fade-up"*/}
                        {/*   data-aos-delay="500">*/}
                        {/*    Contact Sales by location**/}
                        {/*</p>*/}
                    </div>
                )}
                contentRight={(
                    <img src={isModeDark ? iconHeadWhite : iconHeadBlack}
                         data-aos="fade-up"
                         className="w-100"
                         alt="Package Fiber Optic globalxtreme"/>
                )}
                extraCssLeft="mb-4 mb-md-0"
            />

            {getPackageByLocation()}

            <section className="space-of-section bg-white-black-secondary border-bottom">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12">
                            <h3 className="font-weight-bold mb-5 text-center color-black-white h4"
                                data-aos="zoom-in">
                                BENEFITS OF FIBER OPTIC CONNECTION
                            </h3>

                            <Accordion defaultActiveKey="0">
                                {benefits.map((ben, indexBen) => (
                                    <Card className="bg-white border-0 b-rad-20 mb-3"
                                          data-aos="fade-up"
                                          data-aos-delay={(indexBen +1) + '00'}
                                          key={'benefit-' + indexBen}>
                                        <Card.Header className="bg-white border-0">
                                            <Accordion.Toggle as="div"
                                                              className="cursor-pointer d-flex font-weight-600"
                                                              variant="link" eventKey={indexBen + 1}>
                                                {ben.title} <span className="ml-auto">
                                                <Icon.ChevronDown/>
                                            </span>
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={indexBen + 1}>
                                            <Card.Body className="pt-0" data-aos="fade-up">
                                                {ben.isWithoutP ? ben.content : (
                                                    <p className="fs-dot-8-rem font-weight-light mb-0">
                                                        {ben.content}
                                                    </p>
                                                )}
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                ))}
                            </Accordion>

                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default FiberOptic
