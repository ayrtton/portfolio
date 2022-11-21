import styles from "./Menu.module.css"
import { IoHome } from "react-icons/io5"
import { FaUserTie } from "react-icons/fa"
import { FaCode} from "react-icons/fa"
import { useState } from "react"
import { Link } from "react-router-dom"

function Menu() {
    const [isVisible, setIsVisible] = useState(0)

    return (
        <div className={styles.menuContent}>
            <ul>
                <li onMouseLeave={() => setIsVisible(0)}>
                    <Link to="/">
                        {isVisible === 1 && <div className={styles.iconTitle}>Home</div>}
                        <IoHome className={styles.icon} onMouseOver={() => setIsVisible(1)} />
                    </Link>
                </li>
                <li onMouseLeave={() => setIsVisible(0)}>
                    <Link to="/about">
                        {isVisible === 2 && <div className={styles.iconTitle}>About Me</div>}
                        <FaUserTie className={styles.icon} onMouseOver={() => setIsVisible(2)} />
                    </Link>
                </li>
                <li onMouseLeave={() => setIsVisible(0)}>
                    <Link to="/projects">
                        {isVisible === 3 && <div className={styles.iconTitle}>Projects</div>}
                        <FaCode className={styles.icon} onMouseOver={() => setIsVisible(3)} />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu