import React from "react";
import bannerStyles from "./banner.module.css";
import Hair from "../../images/hair.jpg"
import Skin from "../../images/skin.jpg"
import Weight from "../../images/weight.jpg"

export default function Banner() {
    return (
        <div class={`d-flex align-items-center justify-content-center ${bannerStyles.bannerImage}`}>
            <div class={`d-flex align-items-center flex-column text-center ${bannerStyles.bannerText}`}>
                <h1>Women's Wellness Simplified</h1>
                <p>We are the country’s first holistic wellness platform for men. We talk to men, listen to them and understand their needs</p>
                <div className={bannerStyles.subTitle}>What's your concern?</div>
                <ol className={`d-flex justify-content-between ${bannerStyles.productDisplay}`}>
                    <li>
                        <img src={Hair} />
                    </li>
                    <li>
                        <img src={Skin}/>
                    </li>
                    <li>
                        <img src={Weight}/>
                    </li>
                </ol>
            </div>
        </div>
    )
}

