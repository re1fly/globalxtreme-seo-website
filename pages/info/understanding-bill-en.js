import React, {useEffect} from 'react'
import Layout from '../../components/Layout'
import {UIThemeHeadSecondPageInfo} from "../../components/UIPartials";
import {useLayoutContext} from '../../components/MainContext'
import {bill} from "../../content/contentWP";

const UnderStandingBillEN = ({placeData}) => {
    const {isModeDark} = useLayoutContext()

    useEffect(() => {
        $('#bill .elementor-container').addClass("row")
    }, [])

    useEffect(() => {
        $('.wp-policy p, .wp-policy h5').attr({
            'data-aos': "fade-up"
        });
    }, [])

    return (
        <Layout title="GlobalXtreme | Understanding Your Bill">
            <UIThemeHeadSecondPageInfo title="UNDERSTANDING YOUR BILL"/>

            <section className="space-of-section color-black-white" data-aos="fade-up">
                <div className="container text-break">
                    <div className="wp-policy" dangerouslySetInnerHTML={{
                        __html: placeData.content ? placeData.content.rendered : ''}}/>
                </div>
            </section>
        </Layout>
    )
}

UnderStandingBillEN.getInitialProps = async () => {
    let passData = {}
    await bill()
        .then((res) => {
            passData =  res
        })

    return {placeData: passData}
}

export default UnderStandingBillEN