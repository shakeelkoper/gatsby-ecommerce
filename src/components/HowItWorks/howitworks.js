import React from "react";
import HowItWorksStyles from "./howitworks.module.css"
import HowItWorksImg from "../../images/howitworks.jpg"

export default function HowItWorks() {
    return (
        <div className={`text-center container ${HowItWorksStyles.container}`}>
            <h2>How It Works</h2>
            <div className={`row ${HowItWorksStyles.innerContainer}`}>
                <div className="col-xl-6">
                    <img alt="HELP" src={HowItWorksImg} />
                </div>
                <div className={`col-xl-6 ${HowItWorksStyles.steps}`}>
                    <div className="text-start">
                        <h3>1. Help us know you</h3>
                        <p className={HowItWorksStyles.content}>Know what you're looking for? Browse ourcarefully crafted solutions. Not sure what will work for you? Schedule a free online consultation with our renowned experts</p>
                    </div>
                    <div className="text-start">
                        <h3>2. Help us know you</h3>
                        <p className={HowItWorksStyles.content}>Know what you're looking for? Browse ourcarefully crafted solutions. Not sure what will work for you? Schedule a free online consultation with our renowned experts</p>
                    </div>
                    <div className="text-start">
                        <h3>3. Help us know you</h3>
                        <p className={HowItWorksStyles.content}>Know what you're looking for? Browse ourcarefully crafted solutions. Not sure what will work for you? Schedule a free online consultation with our renowned experts</p>
                    </div>
                </div>
            </div>
        </div>
    )
}