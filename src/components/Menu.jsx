import styles from "./Menu.module.css"
import { IoHome } from "react-icons/io5"
import { FaUserTie } from "react-icons/fa"
import { FaCode} from "react-icons/fa"
import { Link } from "react-router-dom"

function Menu() {
    return (
        <div className={styles.menuContent}>
            <ul>
                <li>
                    <Link to="/">
                        <div className={styles.iconTitle}>Home</div>
                        <IoHome className={styles.icon}/>
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <div className={styles.iconTitle}>About Me</div>
                        <FaUserTie className={styles.icon}/>
                    </Link>
                </li>
                <li>
                    <Link to="/projects">
                        <div className={styles.iconTitle}>Projects</div>
                        <FaCode className={styles.icon}/>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu