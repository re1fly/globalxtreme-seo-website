import Layout from "../../components/Layout";
import {UIThemeHeadSecondPageInfo} from "../../components/UIPartials";
import {policy} from "../../content/contentWP";
import {useEffect, useMemo} from "react";
import {clientPrismic, prismicToBlogPost, prismicToDataContentPage} from "../../content/configPrismic";
import Prismic from "@prismicio/client";
import marked from 'marked'

export async function getStaticProps(context) {
    const data = await clientPrismic.query(
        Prismic.Predicates.at('my.content_page.uid', 'policy')
    )
    const contentPost = data.results.map(prismicToDataContentPage)

    return {
        props: {
            contentPost
        },
        revalidate: 10
    }
}

const PolicyPage = ({contentPost}) => {
    const placeData = contentPost[0]
    const htmlContent = useMemo(() => marked(placeData.content), [placeData.content])

    useEffect(() => {
        $('.wp-policy p, .wp-policy h5, .wp-policy ul li').attr({
            'data-aos': "fade-up"
        });
    }, [])

    return (
        <Layout title="GlobalXtreme | Committed to better quality">
            <UIThemeHeadSecondPageInfo title="PRIVACY POLICY"/>

            <section className="space-of-section color-black-white">
                <div className="container text-break" data-aos="fade-up">
                    <div className="wp-policy" dangerouslySetInnerHTML={{
                        __html: htmlContent ? htmlContent : ''
                    }}/>
                </div>
            </section>
        </Layout>
    )
}

export default PolicyPage
