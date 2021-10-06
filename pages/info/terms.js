import Layout from '../../components/Layout'
import {UIThemeHeadSecondPageInfo} from "../../components/UIPartials";
import {tc} from "../../content/contentWP";
import {useEffect} from "react";

const Terms = ({passData}) => {
    useEffect(() => {
        $('.wp-policy p, .wp-policy h5, .wp-policy ul li').attr({
            'data-aos': "fade-up"
        });
    }, [])

    const placeData = passData||{}

    return (
        <Layout title="GlobalXtreme | Committed to better quality">
            <UIThemeHeadSecondPageInfo title="TERMS AND CONDITIONS"/>

            <section className="space-of-section color-black-white" data-aos="fade-up">
                <div className="container text-break">
                    <div className="wp-policy" dangerouslySetInnerHTML={{
                        __html: placeData.content ? placeData.content.rendered : ''}}/>
                </div>
            </section>
        </Layout>
    )
}

Terms.getInitialProps = async () => {
    let passData = {}
    await tc()
        .then((res) => {
            passData =  res
        })

    return {passData: passData}
}

export default Terms
