import Layout from "../../components/Layout";
import {contentEvent} from "../../content/contentWP";
import {UIBlogOtherOwlCarousel, UICardLargeEvent, UIBlank} from '../../components/UIPartials'
import {useRouter} from "next/router";

const HomeEvent = ({dataEvent = []}) => {
    const route = useRouter()

    const _handleDetail = (eventId) => {
        route.push('/info/event/' + eventId)
    }

    const _countMin = (number) => dataEvent.length >= number
    const _countSame = (number) => dataEvent.length == number

    return (
        <Layout>
            <section className="space-of-section">

                <div className="container mb-5">
                    <div className="row mb-4">
                        <div className="col-md-12 color-black-white">
                            <h1 className="font-weight-600" data-aos="fade-up">Event</h1>
                        </div>
                    </div>

                    {dataEvent.length ? (
                        <div className="row mb-3">
                            <div className="col-md-12 d-flex mb-3" data-aos="fade-up" data-aos-delay="100">
                                <UICardLargeEvent event={dataEvent[0]}
                                                  extraClass="card-large border-in-dark-mode"
                                                  handleLink={() => _handleDetail(dataEvent[0].id)}/>
                            </div>

                            {_countMin(2) ? (
                                <div className={'pr-md-2 d-flex mb-3 ' +
                                (_countSame(2) ? 'col-md-12' : 'col-md-7 ')} data-aos="fade-up"data-aos-delay="200">
                                    <UICardLargeEvent event={dataEvent[1]}
                                                      extraClass="card-medium border-in-dark-mode"
                                                      handleLink={() => _handleDetail(dataEvent[1].id)}/>
                                </div>
                            ) : null}

                            {_countMin(3) ? (
                                <div className="col-md-5 pl-md-2 d-flex mb-3" data-aos="fade-up" data-aos-delay="250">
                                    <UICardLargeEvent event={dataEvent[2]}
                                                      extraClass="card-medium border-in-dark-mode"
                                                      handleLink={() => _handleDetail(dataEvent[2].id)}/>
                                </div>
                            ) : null}
                        </div>
                    ) : <UIBlank msg="Post event is empty"/>}
                </div>

                {dataEvent.length ? (
                    <div className="container mb-5">
                        <div className="row">
                            <div className="col-md-12 mb-2">
                                <h3 className="font-weight-500 color-black-white h4" data-aos="fade-up" data-aos-delay="100">Other Article</h3>
                            </div>

                            <div className="col-md-12" data-aos="fade-up" data-aos-delay="200">
                                <UIBlogOtherOwlCarousel
                                    contents={dataEvent}
                                    linkDetail="/info/event/"/>
                            </div>
                        </div>
                    </div>
                ) : null}
            </section>
        </Layout>
    )
}

HomeEvent.getInitialProps = async () => {
    let passData = []
    await contentEvent()
        .then((res) => {
            passData =  res
        })

    return {dataEvent: passData}
}

export default HomeEvent
