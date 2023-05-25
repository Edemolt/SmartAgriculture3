import React from "react";
import CropItem from "../CropItem/CropItem";

import Crops from "./Crops";
const List = () => {
    return(
            
            <div className="crop-encloser">
                {
                    Crops.map((crop) => {
                        console.log(crop);
                        return <CropItem crop={crop}/>
                    })    
                }
                <h4>-----------------------------------------------</h4>
            </div>        

            // <div className="crop-encloser">
            //     <p>Hello there</p>
            //     <div>{
            //         Crops.map((crop) => (
            //             <CropItem crop={crop}/>
            //         ))
            //         }
            //         <h2>Hello guys, chai peelo</h2>
            //     </div>
            // </div>
        
    )
}

export default List;