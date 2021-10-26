import Layout from "../../components/Layout";
import {headPageSpeedTest} from '../../content/seoOfPage'

const SpeedTest = () => (
    <Layout title={headPageSpeedTest.title}>
        {/*<iframe width="100%" height="650px"*/}
        {/*        frameBorder="0"*/}
        {/*        src="https://speedtest.cbn.id/"></iframe>*/}


        <iframe width="100%" height="650px"
                frameBorder="0"
                src="https://globalxtreme.speedtestcustom.com/"/>
    </Layout>
)

export default SpeedTest
