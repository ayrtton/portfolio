import styles from "./Sidebar.module.css"
import { IoHome } from "react-icons/io5"
import { FaUser, FaSuitcase, FaTools, FaMailBulk } from "react-icons/fa"
import { useState } from "react"

function Sidebar() {
    const [isVisible, setIsVisible] = useState(0)

    return (
        <div className={styles.sidebar}>
            <ul>
                <li onMouseLeave={() => setIsVisible(0)}>
                    {isVisible === 1 && <div className={styles.iconTitle}>Home</div>}
                    <IoHome className={styles.icon} onMouseOver={() => setIsVisible(1)} />
                </li>
                <li onMouseLeave={() => setIsVisible(0)}>
                    {isVisible === 2 && <div className={styles.iconTitle}>About</div>}
                    <FaUser className={styles.icon} onMouseOver={() => setIsVisible(2)} />
                </li>
                <li onMouseLeave={() => setIsVisible(0)}>
                    {isVisible === 3 && <div className={styles.iconTitle}>Experience</div>}
                    <FaSuitcase className={styles.icon} onMouseOver={() => setIsVisible(3)}/>
                </li>
                <li onMouseLeave={() => setIsVisible(0)}>
                    {isVisible === 4 && <div className={styles.iconTitle}>Personal Projects</div>}
                    <FaTools className={styles.icon} onMouseOver={() => setIsVisible(4)}/>
                </li>
                <li onMouseLeave={() => setIsVisible(0)}>
                    {isVisible === 5 && <div className={styles.iconTitle}>Contact</div>}
                    <FaMailBulk className={styles.icon} onMouseOver={() => setIsVisible(5)}/>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar