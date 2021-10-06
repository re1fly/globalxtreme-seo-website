import Layout from '../../components/Layout'
import {UIThemeHeadSecondPageInfo} from "../../components/UIPartials";
import {visitor} from "../../content/contentWP";
import {useEffect} from "react";

const Visitor = ({passData}) => {
    const placeData = passData||{}
    useEffect(() => {
        $('.wp-policy p, .wp-policy h5, .wp-policy ul li').attr({
            'data-aos': "fade-up"
        });
    }, [])

    return (
        <Layout title="GlobalXtreme | Committed to better quality">
            <UIThemeHeadSecondPageInfo title="VISITOR AGREEMENT"/>

            <section className="space-of-section color-black-white">
                <div className="container text-break" data-aos="fade-up">
                    <div className="wp-policy" dangerouslySetInnerHTML={{
                        __html: placeData.content ? placeData.content.rendered : ''}}/>
                </div>
            </section>
        </Layout>
    )
}

Visitor.getInitialProps = async () => {
    let passData = {}
    await visitor()
        .then((res) => {
            passData =  res
        })

    return {passData: passData}
}

export default Visitor
