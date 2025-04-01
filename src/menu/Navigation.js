import React from "react"
import '../css/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import NavigationMenu from "./NavigationMenu";

function Navigation () {
    const [showMenu, setShowMenu] = React.useState(false)

    let menu
    let menuMask

    if (showMenu) {
        menu = <div className="fixed bg-white top-0 left-0 w-4/5 h-full shadow">
            <span className="p-3 font-bold">Menu</span>
            <NavigationMenu
                closeMenu={() => {setShowMenu(false)}}
            />
        </div>
        menuMask = <div
            className="fixed bg-black/50 top-0 left-0 w-full h-full "
            onClick={() => {setShowMenu(false)}}
        ></div>
    }

    return (
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>

            { menuMask }

            { menu }
        </nav>
    )
}

export default Navigation;