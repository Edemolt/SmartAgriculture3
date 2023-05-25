import React from "react";
import { Outlet, Link } from "react-router-dom";
import './nav.styles.css';

const Nav = () => {
    return(
        <div className="encloser">
            <Link className="box" to='/bookings'>
                <h1>Bookings</h1>
            </Link>
            <Link className="box" to='/pricings'>
                <h1>Booked</h1>
            </Link>
            <div className="box">
                <h1>Analysis</h1>
            </div>
            <Outlet/>
        </div>
    )
}

export default Nav;