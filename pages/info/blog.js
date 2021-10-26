import Layout from "../../components/Layout";
import {UIBlank, UIBlogOtherOwlCarousel, UICardLargeEventPrismic} from "../../components/UIPartials";
import Prismic from "@prismicio/client";
import {clientPrismic, prismicToBlogPost} from "../../content/configPrismic";

export async function getStaticProps(context) {
    const dataPrismic = await clientPrismic.query(
        Prismic.Predicates.at('document.type', 'blog_post'),
        {orderings: '[my.blog_post.publish_date desc]'}
    )
    const contentPost = dataPrismic.results.map(prismicToBlogPost)
    return {
        props: {
            contentPost,
        },
        revalidate: 10
    }
}

const HomeBlog = ({contentPost}) => {
    const dataBlog = contentPost || []
    const _countMin = (number) => contentPost.length >= number
    const _countSame = (number) => contentPost.length == number

    return (
        <Layout>
            <section className="space-of-section">
                <div className="container mb-5">
                    <div className="row mb-4">
                        <div className="col-md-12 color-black-white">
                            <h1 className="font-weight-600" data-aos="fade-up">Blog</h1>
                        </div>
                    </div>

                    {dataBlog.length ? (
                        <>
                            <div className="row">
                                <div className={'pr-md-2 d-flex mb-3 ' + (_countSame(1) ? 'col-md-12' : 'col-md-7')}
                                     data-aos="fade-up" data-aos-delay="100">
                                    <UICardLargeEventPrismic
                                        urlDetail='/info/blog/'
                                        event={contentPost[0]}
                                        extraClass="card-medium border-in-dark-mode"/>
                                </div>


                                <div className="col-md-5 pl-md-2 d-flex mb-3" data-aos="fade-up"
                                     data-aos-delay="200">
                                    <UICardLargeEventPrismic
                                        urlDetail='/info/blog/'
                                        event={contentPost[1]}
                                        extraClass="card-medium border-in-dark-mode"/>
                                </div>

                            </div>

                            {_countMin(3) ? (
                                <div className="row">
                                    <div className={'pr-md-2 d-flex mb-3 ' +
                                    (_countSame(3) ? 'col-md-12' : _countSame(4) ? 'col-md-6' : 'col-md-3')}
                                         data-aos="fade-up" data-aos-delay="250">
                                        <UICardLargeEventPrismic
                                            urlDetail='/info/blog/'
                                            event={contentPost[2]}
                                            extraClass="card-medium border-in-dark-mode"/>
                                    </div>

                                    {_countMin(4) ? (
                                        <div className={'pl-md-2 pr-md-2 d-flex mb-3 ' +
                                        (_countSame(4) ? 'col-md-6' : 'col-md-3')}
                                             data-aos="fade-up" data-aos-delay="300">
                                            <UICardLargeEventPrismic
                                                urlDetail='/info/blog/'
                                                event={contentPost[3]}
                                                extraClass="card-medium border-in-dark-mode"/>
                                        </div>
                                    ) : null}

                                    {_countMin(5) ? (
                                        <div className="col-md-6 pl-md-2 d-flex mb-3"
                                             data-aos="fade-up" data-aos-delay="300">
                                            <UICardLargeEventPrismic
                                                urlDetail='/info/blog/'
                                                event={contentPost[4]}
                                                extraClass="card-medium border-in-dark-mode"/>
                                        </div>
                                    ) : null}
                                </div>
                            ) : null}

                        </>
                    ) : <UIBlank msg="Post blog is empty"/>}
                </div>

                {dataBlog.length ? (
                    <div className="container mb-5">
                        <div className="row">
                            <div className="col-md-12 mb-2">
                                <h3 className="font-weight-500 color-black-white h4" data-aos="fade-up"
                                    data-aos-delay="100">Other Article</h3>
                            </div>

                            <div className="col-md-12" data-aos="fade-up" data-aos-delay="200">
                                <UIBlogOtherOwlCarousel
                                    contents={dataBlog}
                                    linkDetail="/info/blog/"/>
                            </div>
                        </div>
                    </div>
                ) : null}
            </section>
        </Layout>
    )
}

export default HomeBlog
