import Layout from "../../components/Layout";
import {UIBlogOtherOwlCarousel, UIBlank, UICardLargeEventPrismic} from '../../components/UIPartials'
import {clientPrismic, prismicToBlogPost} from "../../content/configPrismic";
import Prismic from "@prismicio/client";

export async function getStaticProps(context) {
    const dataPrismic = await clientPrismic.query(
        Prismic.Predicates.at('document.type', 'events'),
        {orderings: '[my.events.publish_date desc]'}
    )
    const eventPost = dataPrismic.results.map(prismicToBlogPost)
    return {
        props: {
            eventPost,
        },
        revalidate: 10
    }
}

const HomeEvent = ({eventPost}) => {
    const _countMin = (number) => eventPost.length >= number
    const _countSame = (number) => eventPost.length == number

    return (
        <Layout>
            <section className="space-of-section">

                <div className="container mb-5">
                    <div className="row mb-4">
                        <div className="col-md-12 color-black-white">
                            <h1 className="font-weight-600" data-aos="fade-up">Event</h1>
                        </div>
                    </div>

                    {eventPost.length ? (
                        <div className="row mb-3">
                            <div className="col-md-12 d-flex mb-3" data-aos="fade-up" data-aos-delay="100">
                                <UICardLargeEventPrismic
                                    urlDetail='/info/event/'
                                    event={eventPost[0]}
                                    extraClass="card-large border-in-dark-mode"/>
                            </div>

                            {_countMin(2) ? (
                                <div className={'pr-md-2 d-flex mb-3 ' +
                                (_countSame(2) ? 'col-md-12' : 'col-md-7 ')} data-aos="fade-up" data-aos-delay="200">
                                    <UICardLargeEventPrismic
                                        urlDetail='/info/event/'
                                        event={eventPost[1]}
                                        extraClass="card-large border-in-dark-mode"/>
                                </div>
                            ) : null}

                            {_countMin(3) ? (
                                <div className="col-md-5 pl-md-2 d-flex mb-3" data-aos="fade-up" data-aos-delay="250">
                                    <UICardLargeEventPrismic
                                        urlDetail='/info/event/'
                                        event={eventPost[2]}
                                        extraClass="card-large border-in-dark-mode"/>
                                </div>
                            ) : null}
                        </div>
                    ) : <UIBlank msg="Post event is empty"/>}
                </div>

                {eventPost.length ? (
                    <div className="container mb-5">
                        <div className="row">
                            <div className="col-md-12 mb-2">
                                <h3 className="font-weight-500 color-black-white h4" data-aos="fade-up"
                                    data-aos-delay="100">Other Article</h3>
                            </div>

                            <div className="col-md-12" data-aos="fade-up" data-aos-delay="200">
                                <UIBlogOtherOwlCarousel
                                    contents={eventPost}
                                    linkDetail="/info/event/"/>
                            </div>
                        </div>
                    </div>
                ) : null}
            </section>
        </Layout>
    )
}

export default HomeEvent
