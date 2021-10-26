import Layout from "../../components/Layout";
import {UICardYellow, UIHeadSecond} from '../../components/UIPartials'
import React, {useState, useCallback, useMemo} from "react";
import {useLayoutContext} from "../../components/MainContext";
import InstagramFeed from '../../components/InstagramFeed'
import {getFeeds} from "../../content/contentIG";
import {clientPrismic, prismicToBlogPost, prismicToDataContentPage} from "../../content/configPrismic";
import Prismic from "@prismicio/client";
import marked from "marked";

const UIContentTitle = ({title, children, cssSpace, atrTitle = {}, atrChild = {}}) => (
    <>
        <h1 className="font-weight-bold mb-3 h4" {...atrTitle}>{title}</h1>
        <p {...atrChild} className={'small font-weight-light ' + (cssSpace||'')} >{children}</p>
    </>
)

const UIContent = ({title, children, cssSpace, atrTitle = {}, atrChild = {}}) => (
    <>
        <h2 className="font-weight-bold mb-3 h4" {...atrTitle}>{title}</h2>
        <p {...atrChild} className={'small font-weight-light ' + (cssSpace||'')} >{children}</p>
    </>
)

const _getFeeds = (count = '', tokenAfter = '') => {
    let addKey = '&limit=' + count + '&after=' + tokenAfter
    return getFeeds(process.env.myIG.TOKEN, addKey)
        .then((res) => {
            return res && res.data ? res : {}
        })
}

export async function getStaticProps(context) {
    const dataAbout = await clientPrismic.query(
        Prismic.Predicates.at('my.content_page_about_us.uid', 'gx-about')
    )

    const dataVision = await clientPrismic.query(
        Prismic.Predicates.at('my.content_page_about_us.uid', 'gx-vision')
    )

    const dataMission = await clientPrismic.query(
        Prismic.Predicates.at('my.content_page_about_us.uid', 'gx-mission')
    )

    const dataLearnMore = await clientPrismic.query(
        Prismic.Predicates.at('document.type', 'about_learn_more'),
        {orderings: '[my.about_learn_more.publish_date desc]'}
    )

    const contentAbout = dataAbout.results.map(prismicToBlogPost)
    const contentVision = dataVision.results.map(prismicToBlogPost)
    const contentMission = dataMission.results.map(prismicToBlogPost)
    const contentLearnMore = dataLearnMore.results.map(prismicToDataContentPage)

    return {
        props: {
            contentAbout,
            contentVision,
            contentMission,
            contentLearnMore,
            passData: await _getFeeds(12) || []
        },
        revalidate: 10,
    }
}

const About = ({passData = {}, contentAbout, contentVision, contentMission, contentLearnMore}) => {
    const [dataFeeds, setDataFeeds] = useState(passData.data || [])
    const [paginationFeed, setPaginationFeed] = useState(passData.paging||{})
    const [isLoading, setIsLoading] = useState(false)
    const dataOfAbout = contentAbout[0]
    const dataOfVision = contentVision[0]
    const dataOfMission = contentMission[0]

    const {isModeDark} = useLayoutContext()
    let iconHeadBlack = '/images/icon-about-black.png'
    let iconHeadWhite = '/images/icon-about-white.png'

    let iconRocketBlack = '/images/icon-rocket-about-gx-black.svg'
    let iconRocketWhite = '/images/icon-rocket-about-gx-white.svg'

    const _paginationFeed = async () => {
        await _handleIsLoading(true)
        let feed = await _getFeeds(8, paginationFeed.cursors ? paginationFeed.cursors.after : '')

        if (feed && feed.data) {
            _handleDataFeed(dataFeeds => [...dataFeeds, ...feed.data])
            _handlePagination(feed.paging)
        }
        _handleIsLoading(false)
    }

    const _handleIsLoading = useCallback((allow = false) => {
        setIsLoading(allow)
    }, [isLoading])

    const _handleDataFeed = useCallback((data) => {
        setDataFeeds(data)
    }, [dataFeeds])

    const _handlePagination = useCallback((data) => {
        setPaginationFeed(data)
    }, [paginationFeed])

    const aboutUsContent = useMemo(() => marked(dataOfAbout.content), [dataOfAbout.content])

    return (
        <Layout title="About GlobalXtreme">
            <UIHeadSecond
                partLeft={(
                    <div className="block-head-second"
                         data-aos="fade-up"
                         data-aos-anchor-placemen="top">ABOUT US</div>
                )}
                contentRight={(
                    <img src={isModeDark ? iconHeadWhite : iconHeadBlack}
                         data-aos="fade-up"
                         data-aos-anchor-placemen="top"
                         className="img-fluid"
                         alt="about globalxtreme"/>
                )}
                extraCssLeft="mb-4 mb-md-0 justify-content-start d-flex"
            />

            <section className="space-of-section bg-white-black-secondary">
                <div className="container color-black-white">
                    <div className="row mb-5  row-from-right" data-aos="fade-up">
                        <div className="col-md-5 float-left mb-3">
                            <div className="card border-0 bg-white-black-secondary b-rad-10 overflow-hidden about-shadow-img">
                                <img src={dataOfAbout.image.url} alt="about globalxtreme"/>
                            </div>
                        </div>
                        <div className="col-md-7 float-right pl-md-4">
                            <UIContentTitle title="GlobalXtreme"
                                       atrTitle={{'data-aos': 'fade-up'}}
                                       atrChild={{'data-aos': 'fade-up', 'data-aos-delay': '100'}}>
                                <div dangerouslySetInnerHTML={{
                                    __html: aboutUsContent ? aboutUsContent : '' }}/>
                            </UIContentTitle>
                        </div>
                    </div>

                    <div className="row row-from-right pt-4 d-none">
                        <div className="col-lg-7 col-md-6 float-right pl-lg-5 pr-lg-5">
                            <div className="card border-0 bg-white-black-secondary b-rad-10 overflow-hidden about-shadow-img"
                                 data-aos="fade-up" data-aos-delay="0">
                                <img src={dataOfMission.image.url} alt="vision and mission globalxtreme"/>
                            </div>
                        </div>

                        <div className="col-lg-5 float-right mb-3 anchor-our-mission">
                            <UIContent title="Our Vision"
                                       atrTitle={{'data-aos': 'fade-up'}}
                                       atrChild={{'data-aos': 'fade-up', 'data-aos-delay': '150'}}>
                                {dataOfVision.content}
                            </UIContent>
                        </div>

                        <div className="col-lg-5">
                            <UIContent title="Our Mission"
                                       atrTitle={{'data-aos': 'fade-up'}}
                                       atrChild={{
                                           'data-aos': 'fade-up',
                                           'data-aos-delay': '100',
                                           'data-aos-anchor': '.anchor-our-mission'
                                       }}>
                                {dataOfMission.content}
                            </UIContent>
                        </div>

                    </div>


                    <div className="row flex-row-reverse pt-4">
                        <div className="col-lg-7 col-md-6 mb-4 mb-lg-0 pl-lg-5" data-aos="fade-up">
                            <div className="card border-0 bg-white-black-secondary b-rad-10 overflow-hidden about-shadow-img">
                                <img src="/images/about-visi-mission-gx.jpg" alt="visi and mission globalxtreme"/>
                            </div>
                        </div>

                        <div className="col-lg-5 col">
                            <div className="row">
                                <div className="col-lg-12 float-right mb-3" data-aos="fade-up">
                                    <UIContent title="Our Vision">{dataOfVision.content}</UIContent>
                                </div>

                                <div className="col-lg-12" data-aos="fade-up">
                                    <UIContent title="Our Mission">{dataOfMission.content}</UIContent>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="space-of-section position-relative overflow-hidden d-flex justify-content-center">
                <img src={isModeDark ? iconRocketWhite : iconRocketBlack}
                     className="about-rocket-img"
                     data-aos="fade-up"
                     data-aos-delay="150"
                     alt="rocket about globalxtreme"/>
                <div className="container mb-5 pb-4 min-vh-100P">
                    <div className="row color-black-white mb-5 mt-5 Ppt-5 pb-5 d-flex justify-content-between">
                        <div className="col-lg-5 col-md-6">
                            <h2 className="text-right display-4 font-italic font-weight-bold"
                                data-aos="fade-up"
                                data-aos-delay="50">
                                -LEARN MORE
                            </h2>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <h2 className="ml-5 font-weight-bolder display-4 font-italic"
                                data-aos="fade-up"
                                data-aos-delay="100">
                                ABOUT US-</h2>
                        </div>
                    </div>

                    <div className="row">
                        {contentLearnMore.map(dataContent => {
                            return(
                                <div className="col-lg-4 col-md-6 mb-3 mt-3" data-aos="fade-up" data-aos-delay="100">
                                    <UICardYellow title={dataContent.title}
                                                  atrTitle={{'data-aos': 'fade-up', 'data-aos-delay': '100'}}
                                                  atrChild={{'data-aos': 'fade-up', 'data-aos-delay': '200'}}>
                                        {dataContent.content}
                                    </UICardYellow>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="space-of-section bg-white-black-secondary border-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <h4 className="font-weight-bold mb-3 text-center text-black-white" data-aos="zoom-in">Our Feed</h4>
                        </div>

                        <div className="col-md-12">
                            <InstagramFeed passData={dataFeeds}/>
                        </div>

                        <div className="col-md-12 text-center mt-4">
                            <button className="btn btn-sm btn-primary-yellow btn-large-second"
                                    onClick={_paginationFeed}
                                    data-aos="zoom-in"
                                    disabled={isLoading}>
                                See More
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default About
