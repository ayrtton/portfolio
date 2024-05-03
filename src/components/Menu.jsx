import { IoMenu, IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

function Menu() {
    let isActive = false;
    let isMobile = window.innerWidth <= 768;

    function activateMenu() {
        if(isMobile) {
            let menuItems = document.getElementsByClassName("menu__item");

            if(!isActive) {
                let time = 0.7;
                for(let i of menuItems) {
                    i.style.transition = `${time}s`;
                    i.style.opacity = "1";
                    time += 0.5;
                }
            } else {
                let time = 1;
                for(let i of menuItems) {
                    i.style.transition = `${time}s`;
                    i.style.opacity = "0";
                    time -= 0.5;
                }
            }

            isActive = !isActive;
        }
    }

    return (
        <div className="menu">
            <ul className="menu__list">
                <li className="menu__item">
                    <IoMenu className="menu__item-icon" onClick={activateMenu} />
                </li>
                <li className="menu__item">
                    <Link to="/" className="menu__item-link" onClick={activateMenu}>
                        <div className="menu__item-title">Home</div>
                        <IoHome className="menu__item-icon" />
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Menu;