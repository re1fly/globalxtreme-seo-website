import Layout from "../../components/Layout";
import {useEffect} from "react";
import {UIButtonLinkTo, UIThemeHeadSecondPageInfo} from "../../components/UIPartials";
import {speedTest, visitor} from "../../content/contentWP";


const SpeedTestInfo = ({passData}) => {
    const placeData = passData || {}

    // useEffect(() => {
    //     $('.wp-policy p, .wp-policy h5, .wp-policy ul li').attr({
    //         'data-aos': "fade-up"
    //     });
    // }, []);

    return (
        <Layout title="GlobalXtreme | Commited to better quality">
            <UIThemeHeadSecondPageInfo title="SPEEDTEST INFORMATION"/>

            <section className="space-of-section color-black-white">
                <div className="container text-break" data-aos="fade-up">
                    <div className="wp-speedtest">
                        <UIButtonLinkTo linkTo='https://globalxtreme.speedtestcustom.com/'
                                        other={{
                                            'data-aos': "fade-up",
                                            'data-aos-delay': "400"
                                        }}
                        />

                    </div>
                    <div className="wp-speedtest" dangerouslySetInnerHTML={{
                        __html: placeData.content ? placeData.content.rendered : ''}}/>
                </div>

            </section>


        </Layout>
    )

}

SpeedTestInfo.getInitialProps = async () => {
    let passData = {}
    await speedTest()
        .then((res) => {
            passData =  res
        })

    return {passData: passData}
}

export default SpeedTestInfo
