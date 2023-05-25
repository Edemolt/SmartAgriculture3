import React, { Fragment } from "react";

import { Link, Outlet, Route, Routes } from 'react-router-dom';
import './book.styles.css';

import { useState } from "react";

import Crops from "../../routes/Crops/crops.component";
import Time from "../Time/time.component";
import Land from "../Land/land.component";
import PriceCalc from "../PriceCalc/PriceCalc.component";
// import Time from "../../routes/Time/time.component";



const Book = () => {
    const [conent, setcontent] = useState([]);

    const change1 = () => {
        setcontent('variation1');
    }

    const change2 = () => {
        setcontent('variation2');
    }

    const change3 = () => {
        setcontent('variation3');
    }
    return(
    <Fragment>
        <div>
            <div className="wrapper-div">
                <div className="heading">
                    <h1>
                        Just Book It
                    </h1>
                </div>
                <div className="mega">
                <div className="underlings">
                    <div className="book-options">
                        <div className="crops" id="bookbox">
                            <div onClick={change1}>
                                <h2>
                                    All the crops available
                                </h2>
                            </div>
                        </div>
                        <div className="time" id ="bookbox">
                            <div onClick={change2}>
                                <h2>
                                    Time for each crop
                                </h2>
                            </div>
                        </div>
                        <div className="price" id="bookbox">
                            <div onClick={change3}>
                                <h2>
                                    Price for each acre you add
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightside">
                    <div content="variation1">
                        <Crops/>
                    </div>
                    <div content="variation2">
                        <Time/>
                    </div>
                    <div contnet="variation3">
                        <Land/>
                    </div>
                    <div className="totalprice">
                        <PriceCalc/>
                    </div>
                    {/* <div className="land">
                        <h1>Land Area (in acres)</h1>
                        <input type="range" min='0' max='100'/>
                    </div> */}
                    {/* <div className="Crop">
                        <h1>The Crops you can plant for now</h1>
                        <select id="dropdown">
                            <option value="option1">Options</option>
                            <option value="option2">Options</option>
                            <option value="option3">Options</option>
                            <option value="option4">Options</option>
                        </select>
                    </div> */}
                    {/* <Routes>
                        <Route exact path='/bookings' component={<Crops/>}>
                        <Route path="/bookings/time" element={<Crops/>} />
                        <Route path="/bookings/price" element={<Crops/>} />
                        </Route>
                    </Routes> */}
                </div>
                </div>

            </div>
        </div>
        <Outlet/>   
    </Fragment>
    )
}

export default Book;