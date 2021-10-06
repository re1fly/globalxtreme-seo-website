import {memo} from "react";

const CardWhyNotTheBest = memo(({src, title, content}) => (
    <div className="card card-package-loved wp-card-index-why h-100">
        <div className="card-body">
            <div className="row d-flex align-items-center">
                <div className="col-lg-12 col-md-4">
                    <div className="why-img">
                        <img src={src} alt={'GlobalXtreme ' + title}/>
                    </div>
                </div>

                <div className="col-lg-12 col-md-8 pl-5 pr-5">
                    <h3 className="why-title font-weight-bolder h4">{title}</h3>
                    <p className="why-content small mb-0">{content}</p>
                </div>
            </div>
        </div>
    </div>
))

export default CardWhyNotTheBest
