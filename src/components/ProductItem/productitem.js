import React from "react";
import ProductItemStyles from "./productitem.module.css";
import ProductImg from "../../images/productImg.jpg"

export default function ProductItem() {
    return (
        <div className={ProductItemStyles.itemContainer}>
            <figure>
                <img src={ProductImg} alt="deep moisturising conditioner" />
                <figcaption>Hair fall Control Shampoo</figcaption>
            </figure>
            <div>
                <div>
                    <span>For</span>
                    <span>Hair fall reduction</span>
                </div>
                <div>
                    <span>With</span>
                    <ul>
                        <li>Keratin</li>
                        <li>Biotin</li>
                        <li>Niacinamide</li>
                        <li>Vitamin B5</li>
                    </ul>
                </div>
            </div>
            <div>
                <span>Rs 3999</span>
                <span>&#8377; 1194</span>
                <span>17% OFF</span>
            </div>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary">Add to Cart</button>
                <button type="button" class="btn btn-primary">Buy Now</button>
            </div>
        </div>
    )
}