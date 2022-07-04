import styles from "./Sidebar.module.css"
import { IoHome } from "react-icons/io5"
import { FaUser, FaSuitcase, FaTools, FaMailBulk } from "react-icons/fa"
import { useState } from "react"

function Sidebar() {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className={styles.sidebar}>
            <ul>
                <li onMouseLeave={() => setIsVisible(false)}>
                    {isVisible && <div className={styles.iconTitle}>Home</div>}
                    <IoHome className={styles.icon} onMouseOver={() => setIsVisible(true)} />
                </li>
                {/*<li>
                    <div className={styles.iconTitle}>About</div>
                    <FaUser className={styles.icon} />
                </li>
                <li>
                    <div className={styles.iconTitle}>Experience</div>
                    <FaSuitcase className={styles.icon} />
                </li>
                <li>
                    <div className={styles.iconTitle}>Personal Projects</div>
                    <FaTools className={styles.icon} />
                </li>
                <li>
                    <div className={styles.iconTitle}>Contact</div>
                    <FaMailBulk className={styles.icon} />
                </li>*/}
            </ul>
        </div>
    )
}

export default Sidebar