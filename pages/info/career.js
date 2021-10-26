import Layout from "../../components/Layout";
import {Accordion, Card} from 'react-bootstrap'
import * as Icon from "react-feather";
import {UIThemeHeadSecondPageInfo} from "../../components/UIPartials";
import {clientPrismic, prismicToDataContentPage} from "../../content/configPrismic";
import Prismic from "@prismicio/client";
import {useMemo} from "react";
import marked from "marked";

export async function getStaticProps(context) {
    const dataPrismic = await clientPrismic.query(
        Prismic.Predicates.at('document.type', 'content_page_career'),
        {orderings: '[document.first_publication_date]'}
    )
    const contentPosts = dataPrismic.results.map(prismicToDataContentPage)
    return {
        props: {
            contentPosts,
        },
        revalidate: 10
    }
}

const Career = ({contentPosts}) => {
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
                                {contentPosts.map((data, key) => {
                                    const htmlContent = useMemo(() => marked(data.content), [data.content])
                                    return (
                                        <Card className="bg-whiteP bg-grey border-0 b-rad-20 mb-3"
                                              data-aos="fade-up"
                                              data-aos-delay={(key + 1) + '00'}
                                              key={'general-' + key}>
                                            <Card.Header className="bg-whiteP bg-grey border-0">
                                                <Accordion.Toggle as="div"
                                                                  className="cursor-pointer d-flex font-weight-600"
                                                                  variant="link" eventKey={key + 1}>
                                                    {data.title}
                                                    <span className="ml-auto">
                                                    <Icon.ChevronDown/>
                                                </span>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey={key + 1}>
                                                <Card.Body className="pt-0">
                                                    <div className="wp-faq" dangerouslySetInnerHTML={{
                                                        __html: htmlContent ? htmlContent : ''
                                                    }}/>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    )
                                })}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Career
