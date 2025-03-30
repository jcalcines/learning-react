import React from "react";
import Navigation from "../menu/Navigation.js";

function Header () {
    return (
        <header className="border-b p-3 flex justify-between items-center" >
            <span className="font-bold">
                React.js + Tailwind CSS Demo
            </span>

            <Navigation />
        </header>
    )
}

export default Header;