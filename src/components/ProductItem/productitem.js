import React from "react"
import ProductItemStyles from "./productitem.module.css"
import ProductImg from "../../images/productImg.jpg"

export default function ProductItem() {
  return (
    <div className={`text-start ${ProductItemStyles.itemContainer}`}>
      <figure>
        <img
          src={ProductImg}
          className="img-fluid"
          alt="deep moisturising conditioner"
        />
        <figcaption>
          Hair fall Control Shampoo
          <div
            className={`d-flex align-items-center justify-content-center ${ProductItemStyles.rating}`}
          >
            <span>&#9733;</span> 4.5
          </div>
        </figcaption>
      </figure>
      <div
        className={`d-flex align-items-center justify-content-center ${ProductItemStyles.productTag}`}
      >
        New Launch
      </div>
      <div className={`${ProductItemStyles.details}`}>
        <div className={`${ProductItemStyles.forWidth}`}>
          <span className="title">For</span>
          <span>Hair fall reduction</span>
        </div>
        <div className={`${ProductItemStyles.forWidth}`}>
          <span className="title">With</span>
          <span>Keratin</span>
          <span>Biotin</span>
          <span>Niacinamide</span>
          <span>Vitamin B5</span>
        </div>
      </div>
      <div className={`${ProductItemStyles.productPrice}`}>
        <span>Rs 3999</span>
        <span className={`${ProductItemStyles.oldPrice}`}>&#8377; 1194</span>
        <span className={`${ProductItemStyles.discount}`}>
          <span role="img" aria-label="discount">
            &#127881;
          </span>{" "}
          17% OFF
        </span>
      </div>
      <div
        className={`btn-group ${ProductItemStyles.btnGroup}`}
        role="group"
        aria-label="Basic example"
      >
        <button type="button" className="btn btn-primary">
          Add to Cart
        </button>
        <button type="button" className="btn btn-primary">
          Buy Now
        </button>
      </div>
    </div>
  )
}
