import Layout from "../../../components/Layout";
import {UIBlank, UIBlogOtherOwlCarousel, UIPreviewDetailEvent} from "../../../components/UIPartials";
import {clientPrismic, prismicToBlogPost} from "../../../content/configPrismic";
import Prismic from "@prismicio/client";

export async function getStaticProps(context) {
    const dataEventById = await clientPrismic.getByUID('events', context.params.id)
    const dataEventAll = await clientPrismic.query(
        Prismic.Predicates.at('document.type', 'events'),
        {orderings: '[my.events.publish_date desc]'}
    )
    const contentPost = dataEventAll.results.map(prismicToBlogPost)

    return {
        props: {
            dataContent: prismicToBlogPost(dataEventById),
            dataContents: contentPost,
        },
        revalidate: 10
    }
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

const Event = ({dataContent, dataContents}) => {
    return (
        <Layout>
            <section className="space-of-section">
                <div className="container mt-n4 mb-5">
                    {dataContent.title ? (
                        <UIPreviewDetailEvent
                            linkBack="/info/event"
                            contentOf="Event"
                            event={dataContent}
                        />
                    ) : <UIBlank msg="Post event is empty"/>}
                </div>

                <div className="container mb-5">
                    <div className="row">
                        <div className="col-md-12 mb-2">
                            <h2 className="font-weight-500 color-black-white h4" data-aos="fade-up"
                                data-aos-delay="100">
                                Other Article</h2>
                        </div>

                        <div className="col-md-12" data-aos="fade-up" data-aos-delay="200">
                            <UIBlogOtherOwlCarousel
                                contents={dataContents}
                                linkDetail="/info/event/"/>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Event
