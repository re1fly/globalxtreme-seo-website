import {generateDelay, getDelayTime} from '../config/getDelay'
let delays = generateDelay(4)

const InstagramFeedUI = ({passData = [], counter = 0}) => {

    const placeData = passData ? passData.map((pd) => {
        return {...pd, delay: getDelayTime(delays, delays.length -1)}
    }) : []

    const _link = (url) => {window.open(url);}

    return (
        <div className="row">
            {placeData.map((fd, index) => (
                <div className="col-md-3 d-flex mb-3 pl-md-2 pr-md-2"
                     data-aos-duration="1000"
                     data-aos="fade-up"
                     data-aos-delay={fd.delay}
                     key={index}>
                    <div className="card ig-card border-0"
                         onClick={() => _link(fd.permalink)}>
                        {fd.media_type === "VIDEO" ?
                            <video src={fd.media_url} alt="img-fluid" loading="lazy"/>
                            : <img src={fd.media_url} alt="img-fluid" loading="lazy"/>}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default InstagramFeedUI
