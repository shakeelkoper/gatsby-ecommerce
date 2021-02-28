import React from "react";
import GetStartedStyles from "./getstarted.module.css";

export default function GetStarted(){
    return(
        <div className={`text-center ${GetStartedStyles.container}`}>
            <h2>Not sure where to start? We can help</h2>
            <div className="subContent">Let's understand you a bit by asking a few questions before you talk to our experts</div>
            <div className="d-grid col-3 mx-auto">
                <button class="btn btn-primary" type="button">Get Started</button>
            </div>
        </div>
    )
}