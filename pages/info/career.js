import Layout from "../../components/Layout";
import {Accordion, Card} from 'react-bootstrap'
import * as Icon from "react-feather";
import {UIThemeHeadSecondPageInfo} from "../../components/UIPartials";
import {jobCareer} from '../../content/contentWP'

const Career = ({passData}) => {
    let placeData = passData || []

    return (
        <Layout>
            <UIThemeHeadSecondPageInfo title="CAREER"/>

            <section className="space-of-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 color-black-white mb-4">
                            <h2 className="h1 font-weight-600" data-aos="fade-up">
                                We Want You!
                            </h2>
                        </div>

                        <div className="col-md-12">
                            <Accordion defaultActiveKey="0">
                                {placeData.map((data, key) => (
                                    <Card className="bg-whiteP bg-grey border-0 b-rad-20 mb-3"
                                          data-aos="fade-up"
                                          data-aos-delay={(key +1) + '00'}
                                          key={'general-' + key}>
                                        <Card.Header className="bg-whiteP bg-grey border-0">
                                            <Accordion.Toggle as="div"
                                                              className="cursor-pointer d-flex font-weight-600"
                                                              variant="link" eventKey={key + 1}>
                                                {/*{data.title.rendered}*/}
                                                <div dangerouslySetInnerHTML={{
                                                    __html: data.title ? data.title.rendered : ''}}/>
                                                <span className="ml-auto">
                                                    <Icon.ChevronDown/>
                                                </span>
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={key + 1}>
                                            <Card.Body className="pt-0">
                                                <div className="wp-faq" dangerouslySetInnerHTML={{
                                                    __html: data.content ? data.content.rendered : ''}}/>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                ))}
                            </Accordion>
                        </div>
                    </div>

                </div>
            </section>
        </Layout>
    )
}

Career.getInitialProps = async () => {
    let passData = {}
    await jobCareer()
        .then((res) => {
            passData = res
        })

    return {passData: passData}
}

export default Career
