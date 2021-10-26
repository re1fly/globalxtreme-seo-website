import Layout from "../../../components/Layout";
import {UIBlank, UIBlogOtherOwlCarousel, UIPreviewDetailEvent} from "../../../components/UIPartials";
import Prismic from "@prismicio/client";
import {clientPrismic, prismicToBlogPost} from "../../../content/configPrismic";

export async function getStaticProps(context) {
    const dataPrismicById = await clientPrismic.getByUID('blog_post', context.params.id)
    const dataPrismicAll = await clientPrismic.query(
        Prismic.Predicates.at('document.type', 'blog_post'),
        {orderings: '[my.blog_post.publish_date desc]'}
    )
    const contentPost = dataPrismicAll.results.map(prismicToBlogPost)

    return {
        props: {
            dataContent: prismicToBlogPost(dataPrismicById),
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

function BlogDetail({dataContent, dataContents}) {
    return (
        <Layout>
            <section className="space-of-section">
                <div className="container mt-n4 mb-5">
                    {dataContent.title ? (
                        <UIPreviewDetailEvent
                            linkBack="/info/blog"
                            contentOf="Blog"
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
                                linkDetail="/info/blog/"/>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default BlogDetail
