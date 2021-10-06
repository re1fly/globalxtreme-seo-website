import Link from "next/link";
import dynamic from "next/dynamic";
import * as Icon from "react-feather";

const OwlCarousel = dynamic(() => {
    return import ('react-owl-carousel')
}, {ssr: false})
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const cardLoved = [1, 2, 3, 4, 5, 6]

const PackageLoved = () => {
    return (
        <OwlCarousel items={1}
                     loop
                     autoplay={false}
                     smartSpeed={600}
                     responsive={
                         {
                             0: {
                                 items: 1
                             },
                             576: {
                                 items: 1,
                                 stagePadding: 0,
                             },
                             1200: {
                                 items: 1,
                                 stagePadding: 200,
                             },
                             1500: {
                                 items: 1,
                                 stagePadding: 300,
                             },
                             1750: {
                                 items: 1,
                                 stagePadding: 400,
                             }
                         }
                     }
                     center={true}
                     className="owl-theme slider-dots-black">

            {cardLoved.map((vm, key) => (
                <div className="item pt-0 pb-4 pl-lg-4 pr-lg-4 pl-md-5 pr-md-5 pl-3 pr-3"
                     data-aos="fade-up" data-aos-delay="100" key={key}>
                    <div className="card card-package-loved">
                        <div className="card-body pb-0">

                            <div className="row align-items-center">
                                <div className="col-md-4 mb-4 md-md-0">
                                    <div className="position-relative overflow-hidden  d-flex justify-content-center">
                                        <img src="/images/icon-index-speed.svg"
                                             className="img-speed love-package-img-speed"
                                             alt="globalxtreme icon speed"/>
                                        <div className="text-center speed-center">
                                            <p className="fs-dot-9-rem mb-0">speeds up to</p>
                                            <h2 className="font-weight-bolder display-3 mb-0">100</h2>
                                            <p className="fs-dot-9-rem mb-0">Mbps</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-8">
                                    <h3 className="label-block-bg-yellow mb-3 font-weight-500 h5">
                                        Enjoy Our Most Loved Package
                                    </h3>

                                    <h2 className="font-weight-bolder h1 mb-1">
                                        XTREME PREFERRED
                                    </h2>
                                    <p className="h4 font-weight-light mb-3">
                                        with 50% Bandwidth Guarantee and Priority Service!
                                    </p>

                                    <div className="mt-auto">
                                        <Link href={'#'}>
                                            <a className="float-right text-link align-items-center d-flex">
                                                <small>
                                                    <span className="mr-1">See Product</span> <Icon.ChevronRight
                                                    size={17}/>
                                                </small>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </OwlCarousel>
    )
}

export default PackageLoved
