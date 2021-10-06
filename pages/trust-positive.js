import Layout from "../components/Layout";
import {useLayoutContext} from "../components/MainContext";
import FormReport from '../components/partialOfPages/internetBlock/FormReport'
import {headPageInternetPositive} from "../content/seoOfPage";

let iconBlockBlack = '/images/icon-internet-positive-black.svg'
let iconBlockWhite = '/images/icon-internet-positive-white.svg'

const TrustPositive = () => {
    const {isModeDark} = useLayoutContext()

    const _handleShowModal = () => {
        $('#modalFormReportInternet').modal('show')
    }

    return (
        <Layout title={headPageInternetPositive.title}>
            <section className="space-of-section">
                <div className="container">
                    <div className="row text-black-white">
                        <div className="col-md-6 mb-5">
                            <h1 className="font-weight-bold">Oops!</h1>
                            <p className="small">
                                This page can not be accessed through this network because it does not comply with the legislation.
                            </p>
                            <p className="small mb-4">
                                This page can not be accessed through this network because it does not comply with the legislation.
                            </p>

                            <button className="btn btn-primary-yellow b-rad-20 font-weight-bold btn-report-here"
                                    onClick={_handleShowModal}>
                                REPORT HERE
                            </button>
                        </div>

                        <div className="col-md-6">
                            <img src={isModeDark ? iconBlockWhite : iconBlockBlack} alt="globalxtreme internet positive"/>
                        </div>
                    </div>
                </div>
            </section>

            <FormReport/>
        </Layout>
    )
}

export default TrustPositive
