import Layout from "../../components/Layout";
import {UIBlank, UIBlogOtherOwlCarousel, UICardLargeEvent} from "../../components/UIPartials";
import {contentBlog} from "../../content/contentWP";
import {useRouter} from "next/router";

const HomeBlog = ({passData}) => {
    const route = useRouter()
    const dataBlog = passData || []

    const _handleDetail = (eventId) => {
        route.push('/info/blog/' + eventId)
    }

    const _countMin = (number) => dataBlog.length >= number

    const _countSame = (number) => dataBlog.length == number

    return (
        <Layout>
            <section className="space-of-section">
                <div className="container mb-5">
                    <div className="row mb-4">
                        <div className="col-md-12 color-black-white">
                            <h1 className="font-weight-600" data-aos="fade-up">Blog</h1>
                        </div>
                    </div>

                    {dataBlog.length ? (
                        <>
                            <div className="row">
                                <div className={'pr-md-2 d-flex mb-3 ' + (_countSame(1) ? 'col-md-12' : 'col-md-7')}
                                     data-aos="fade-up" data-aos-delay="100">
                                    <UICardLargeEvent event={dataBlog[0]}
                                                      extraClass="card-medium border-in-dark-mode"
                                                      handleLink={() => _handleDetail(dataBlog[0].id)}/>
                                </div>

                                {_countMin(2) ? (
                                    <div className="col-md-5 pl-md-2 d-flex mb-3" data-aos="fade-up" data-aos-delay="200">
                                        <UICardLargeEvent event={dataBlog[1]}
                                                          extraClass="card-medium border-in-dark-mode"
                                                          handleLink={() => _handleDetail(dataBlog[1].id)}/>
                                    </div>
                                ) : null}
                            </div>

                            {_countMin(3) ? (
                                <div className="row">
                                    <div className={'pr-md-2 d-flex mb-3 ' +
                                    (_countSame(3) ? 'col-md-12' : _countSame(4) ? 'col-md-6' : 'col-md-3')}
                                         data-aos="fade-up" data-aos-delay="250">
                                        <UICardLargeEvent event={dataBlog[2]}
                                                          extraClass="card-medium border-in-dark-mode"
                                                          handleLink={() => _handleDetail(dataBlog[2].id)}/>
                                    </div>

                                    {_countMin(4) ? (
                                        <div className={'pl-md-2 pr-md-2 d-flex mb-3 ' +
                                        (_countSame(4) ? 'col-md-6' : 'col-md-3')}
                                             data-aos="fade-up" data-aos-delay="300">
                                            <UICardLargeEvent event={dataBlog[3]}
                                                              extraClass="card-medium border-in-dark-mode"
                                                              handleLink={() => _handleDetail(dataBlog[3].id)}/>
                                        </div>
                                    ) : null}

                                    {_countMin(5) ? (
                                        <div className="col-md-6 pl-md-2 d-flex mb-3"
                                             data-aos="fade-up" data-aos-delay="300">
                                            <UICardLargeEvent event={dataBlog[4]}
                                                              extraClass="card-medium border-in-dark-mode"
                                                              handleLink={() => _handleDetail(dataBlog[4].id)}/>
                                        </div>
                                    ) : null}
                                </div>
                            ) : null}

                        </>
                    ) : <UIBlank msg="Post blog is empty"/>}
                </div>

                {dataBlog.length ? (
                    <div className="container mb-5">
                        <div className="row">
                            <div className="col-md-12 mb-2">
                                <h3 className="font-weight-500 color-black-white h4" data-aos="fade-up" data-aos-delay="100">Other Article</h3>
                            </div>

                            <div className="col-md-12" data-aos="fade-up" data-aos-delay="200">
                                <UIBlogOtherOwlCarousel
                                    contents={dataBlog}
                                    linkDetail="/info/blog/"/>
                            </div>
                        </div>
                    </div>
                ) : null}
            </section>
        </Layout>
    )
}

HomeBlog.getInitialProps = async () => {
    let passBlogs = []
    await contentBlog()
        .then((res) => {
            passBlogs = res
        })

    return {
        passData: passBlogs
    }
}

export default HomeBlog
