import styles from "./Menu.module.css"
import { IoMenu } from "react-icons/io5"
import { IoHome } from "react-icons/io5"
import { FaUserTie } from "react-icons/fa"
import { FaCode} from "react-icons/fa"
import { Link } from "react-router-dom"

function Menu() {
    let isActive = false

    function activateMenu() {
        let menuItems = document.getElementsByClassName(styles.menuItem)

        if(!isActive) {
            let time = 0.7
            for(let i of menuItems) {
                i.style.transition = `${time}s`
                i.style.opacity = "1"
                time += 0.5
            }
        } else {
            let time = 1
            for(let i of menuItems) {
                i.style.transition = `${time}s`
                i.style.opacity = "0"
                time -= 0.5
            }
        }

        isActive = !isActive
    }

    return (
        <div className={styles.menuContent}>
            <ul>
                <li>
                    <IoMenu className={styles.icon} onClick={activateMenu}/>
                </li>
                <li>
                    <Link to="/" className={styles.menuItem} onClick={activateMenu}>
                        <div className={styles.iconTitle}>Home</div>
                        <IoHome className={styles.icon}/>
                    </Link>
                </li>
                <li>
                    <Link to="/about" className={styles.menuItem} onClick={activateMenu}>
                        <div className={styles.iconTitle}>About Me</div>
                        <FaUserTie className={styles.icon}/>
                    </Link>
                </li>
                <li>
                    <Link to="/projects" className={styles.menuItem} onClick={activateMenu}>
                        <div className={styles.iconTitle}>Projects</div>
                        <FaCode className={styles.icon}/>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu