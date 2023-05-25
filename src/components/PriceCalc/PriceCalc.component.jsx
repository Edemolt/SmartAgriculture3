import { useState } from "react";

import Land from "../Land/land.component";
import Time from "../Time/time.component";
import Crops from "../../routes/Crops/crops.component";

const PriceCalc = () => {
    
    const [valueA, setValueA] = useState(0);
    const [valueB, setValueB] = useState(0);
    const [valueC, setValueC] = useState(0);
  
    const product = valueA * valueB * valueC;

    return (
        <div>
          {/* <Crops value={valueA} setValue={setValueA} />
          <Land value={valueB} setValue={setValueB} />
          <Time value={valueC} setValue={setValueC} />
          <div>Product: {product}</div> */}
          <h2>
            Total price will be displayed here : 100000000
          </h2>
        </div>
    );
}

export default PriceCalc;