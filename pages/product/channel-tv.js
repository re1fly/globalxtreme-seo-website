import Layout from '../../components/Layout'
import {
    UIButtonChatWA,
    UIHeadSecond,
    UISectionPackage,
    UICardPackageTV
} from "../../components/UIPartials";
import {useLayoutContext} from "../../components/MainContext";
import {headPageTVChannel} from '../../content/seoOfPage'

const giveChannelName = (name) => {return '/images/channels/' + name}
const funLoop = (total, name) => {
    return Array.from({length: total}, (v, k) => {
        k +=1
        let n = k.toString().length < 2 ? '0' + k : k
        return giveChannelName(name + '-' + n + '.png')
    })
}
const UILogoChannel = ({src, atrParent = {}}) => (
    <div className="col-md-2 col-6" {...atrParent}>
        <div className="box-logo-channel">
            <img src={src} className="w-100"
                 alt="globalxtreme, package tv, list channel"/>
        </div>
    </div>
)

let iconHeadBlack = '/images/icon-hd-tv-black.png'
let iconHeadWhite = '/images/icon-hd-tv-white.png'

let logoXstreamBlack = '/images/logoXstream-black.png'
let logoXstreamWhite = '/images/logoXstream-white.png'

let iconTvBoxBlack = '/images/icon-tv-box-black.png'
let iconTvBoxWhite = '/images/icon-tv-box-white.png'

const ChannelTV = () => {
    const {isModeDark, locationId} = useLayoutContext()
    const imgTVBox = isModeDark ? iconTvBoxWhite : iconTvBoxBlack

    return (
        <Layout title={headPageTVChannel.title}>
            <UIHeadSecond
                partLeft={(
                    <div className="color-black-white">
                        <img src={isModeDark ? logoXstreamWhite : logoXstreamBlack}
                             className="w-50 mb-4"
                             data-aos="fade-up"
                             data-aos-delay="200"
                             alt="Package Trans Vision"/>
                        <br/>
                        <UIButtonChatWA fontSize="h6"
                                        other={{
                                            'data-aos': "fade-up",
                                            'data-aos-delay': "400"
                                        }}
                                        locationId={locationId}/>
                    </div>
                )}
                contentRight={(
                    <img src={isModeDark ? iconHeadWhite : iconHeadBlack}
                         data-aos="fade-up"
                         className="w-100"
                         alt="Package Channel TV globalxtreme"/>
                )}
                extraCssLeft="mb-4 mb-md-0"/>

            <section className="space-of-section">
                <div className="container color-black-white">
                    <h1 className="font-weight-bold text-center mb-5"
                        data-aos="fade-up"
                        data-aos-delay="100">
                        PERFECT MATCH FOR ENTERTAINMENT
                    </h1>

                    <h2 className="font-weight-600 text-center mb-4 h3"
                        data-aos="fade-up"
                        data-aos-delay="300">
                        In Collaboration With Transvision
                    </h2>

                    <h3 className="font-weight-light text-center mb-5 h4"
                        data-aos="fade-up"
                        data-aos-delay="400">
                        Change standard TV to Smart TV with various feature <br/>
                        that compact with one portable box.
                    </h3>
                </div>
            </section>

            <section className="mb-n3 mt-n5">
                <div className="container">
                    <div className="w-100 text-center"
                         data-aos="fade-up">
                        <img src={imgTVBox}
                             className="w-75"
                             alt="tv box globalxtreme"/>
                    </div>
                </div>
            </section>

            <section className="space-of-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card space-grey-in-index border-0 b-rad-15 base-box-shadow">
                                <div className="card-body p-3">
                                    <div className="row">
                                        <div className="col-md-12 text-center mt-5 mb-5">
                                            <span className="btn btn-lg btn-primary-yellow mb-0 font-weight-bold base-box-shadow"
                                                  data-aos="zoom-in">
                                                CHANNEL LIST
                                            </span>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="row d-flex justify-content-center mb-5 ml-0 mr-0 ml-sm-5 mr-sm-5 wp-logo-channel">
                                                {funLoop(45, 'as').map((src, indexLc) => (
                                                    <UILogoChannel src={src} key={indexLc}
                                                                   atrParent={{
                                                                       'data-aos': 'zoom-in',
                                                                       'data-aos-delay': '100'
                                                                   }}/>
                                                ))}

                                                {funLoop(29, 'loc').map((src, indexLc) => (
                                                    <UILogoChannel src={src} key={indexLc}
                                                                   atrParent={{
                                                                       'data-aos': 'zoom-in',
                                                                       'data-aos-delay': '100'
                                                                   }}/>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <UISectionPackage title="AVAILABLE TV PACKAGES"
                              cssTitle="h2 font-weight-bold color-black-white"
                              extraClassRow="justify-content-center">
                <div className="col-lg-3 col-md-4 h-100 mt-3 mb-3" data-aos="fade-up">
                    <UICardPackageTV
                        title={(<>Xtreme<br/>Basic</>)}
                        prices="IDR 100.000"
                        bgCard="bg-primary-yellow"
                        bgFooter="bg-white"/>
                </div>

                <div className="col-lg-3 col-md-4 h-100 mt-3 mb-3" data-aos="fade-up">
                    <UICardPackageTV
                        title={(<>Xtreme<br/>Standard</>)}
                        prices="IDR 150.000"
                        bgCard="bg-primary-yellow"
                        bgFooter="bg-white"/>
                </div>

                <div className="col-lg-3 col-md-4 h-100 mt-3 mb-3" data-aos="fade-up">
                    <UICardPackageTV
                        title={(<>Xtreme<br/>Advanced</>)}
                        prices="IDR 250.000"
                        bgCard="bg-primary-yellow"
                        bgFooter="bg-white"/>
                </div>
            </UISectionPackage>
        </Layout>
    )
}

export default ChannelTV
