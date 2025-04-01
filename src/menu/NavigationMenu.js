import React from "react";
import '../css/tailwind.css';
import { Link } from "react-router"

function NavigationMenu(props) {
    return (
        <ul>
            <Link
                onClick={props.closeMenu}
                to="/"
                >
                <li className="p-2 text-blue-500 font-bold">Home</li>
            </Link>
            <Link
                onClick={props.closeMenu}
                to="/about"
                >
                <li className="p-2 text-blue-500 font-bold">About</li>
            </Link>
        </ul>
    );
}

export default NavigationMenu;
