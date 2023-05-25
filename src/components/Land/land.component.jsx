import React from "react";
import { useState } from "react";

const Land = () => {
    const[land, setland] = useState(0);
    const onlandchange = (event) => {
        const set_land_value = event.target.value;

        setland(set_land_value);
    }
    return(
        <div>
            <div>
                <h1>Land you selected(in acre) -> {land}</h1>
            </div>
            <input type="range" min='0' max='100' onChange={onlandchange}/>
        </div>
    )
}

export default Land;