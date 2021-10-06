import Layout from "../../../components/Layout";
import {UIBlank, UIBlogOtherOwlCarousel, UIPreviewDetailEvent} from "../../../components/UIPartials";
import {contentEvent, contentEventDetail} from "../../../content/contentWP";

const Event = ({passData = {}, dataEvent = []}) => {

    return (
        <Layout>
            <section className="space-of-section">
                <div className="container mt-n4 mb-5">
                    {passData.title ?
                        <UIPreviewDetailEvent
                            linkBack="/info/event"
                            contentOf="Event"
                            content={{
                                title: passData.title ? passData.title.rendered : '',
                                date: passData.date||'',
                                img: passData.yoast_head_json ? passData.yoast_head_json.og_image[0].url : '',
                                value: passData.content ? passData.content.rendered: ''
                            }}
                        /> : <UIBlank msg="Post blog is empty"/>}
                </div>

                <div className="container mb-5">
                    <div className="row">
                        <div className="col-md-12 mb-2">
                            <h2 className="font-weight-500 color-black-white h4" data-aos="fade-up" data-aos-delay="100">
                                Other Article</h2>
                        </div>

                        <div className="col-md-12" data-aos="fade-up" data-aos-delay="200">
                            <UIBlogOtherOwlCarousel
                                contents={dataEvent}
                                linkDetail="/info/event/"/>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

Event.getInitialProps = async ({query}) => {
    let passData = {}
    await contentEventDetail(query.id)
        .then((res) => {
            passData =  res
        })

    let passEvents = []
    await contentEvent()
        .then((res) => {
            passEvents = res
        })

    return {
        passData: passData,
        dataEvent: passEvents
    }
}

export default Event
