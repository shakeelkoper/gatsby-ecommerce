import React from "react"
import NewLaunchesStyles from "./newlaunches.module.css"
import ProductItem from "../ProductItem/productitem"
import Slider from "react-slick"

export default function NewLaunches() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  }
  return (
    <section className={`text-center container ${NewLaunchesStyles.container}`}>
      <h2 className={`${NewLaunchesStyles.heading}`}>New Launches</h2>
      <ul
        className="nav nav-pills mb-3 col-lg-4 col-sm-6 col-12 mx-auto d-flex justify-content-between"
        id="pills-tab"
        role="tablist"
      >
        <li
          className={`nav-item ${NewLaunchesStyles.navItem}`}
          role="presentation"
        >
          <button
            className="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Home
          </button>
        </li>
        <li
          className={`nav-item ${NewLaunchesStyles.navItem}`}
          role="presentation"
        >
          <button
            className="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Profile
          </button>
        </li>
        <li
          className={`nav-item ${NewLaunchesStyles.navItem}`}
          role="presentation"
        >
          <button
            className="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Contact
          </button>
        </li>
      </ul>
      <div className="tab-content mx-auto" id="pills-tabContent">
        <div
          className={`tab-pane fade show active ${NewLaunchesStyles.tabPane}`}
          id="pills-home"
          role="tabpanel"
          aria-label="pills-home-tab"
        >
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
        <div
          className={`tab-pane fade ${NewLaunchesStyles.tabPane}`}
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
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
        <div
          className={`tab-pane fade ${NewLaunchesStyles.tabPane}`}
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
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
