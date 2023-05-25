import React from "react";
import { useState } from "react";

const Time = () => {
    const [time, settime] = useState(0);
    const ontimechange = (event) => {
        const set_time_value = event.target.value;

        settime(set_time_value);
    }
    return(
        <div>
            <div>
                <h1>
                    Time you selected -> {time}
                </h1>
            </div>
            <input type="range" min='2' max='12' onChange={ontimechange}/>
        </div>
    )
}

export default Time;   