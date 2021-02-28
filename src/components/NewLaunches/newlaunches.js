import React from "react";
import NewLaunchesStyles from "./newLaunches.module.css"
import ProductItem from "../ProductItem/productitem"
import Slider from "react-slick";

export default function NewLaunches() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <section className={`text-center ${NewLaunchesStyles.container}`}>
            <h2>New Launches</h2>
            {/* role="tablist" */}
            <ul class="nav nav-pills mb-3 col-3 mx-auto d-flex justify-content-between" id="pills-tab">
                <li className={`nav-item ${NewLaunchesStyles.navItem}`} role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                </li>
                <li className={`nav-item ${NewLaunchesStyles.navItem}`} role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                </li>
                <li className={`nav-item ${NewLaunchesStyles.navItem}`} role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                </li>
            </ul>
            <div className="tab-content mx-auto" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <Slider {...settings}>
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                    </Slider>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <Slider {...settings}>
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                    </Slider>
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <Slider {...settings}>
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                    </Slider>
                </div>
            </div>
        </section>
    )
}