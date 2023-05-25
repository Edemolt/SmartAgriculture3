import React from "react";
import './pricing.styles.css'
import CropsShow from "../LoadCrops/CropsShow";

const Prices = () => {
    return(
        <div className="container">
            <h2>
                Booked Crops will be shown here
            </h2>
            <div>
                <CropsShow/>
            </div>
        </div>
    )
}

export default Prices;