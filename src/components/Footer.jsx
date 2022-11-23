import styles from "./Footer.module.css"
import { FaGithub, FaLinkedin } from "react-icons/fa"

function Footer() {
    return (
        <footer className={styles.footerContent}>
            <div className={styles.copyright}>
                <span className={styles.copyrightText}>Ayrton Vinicius © 2022</span>
            </div>
            <div className={styles.social}>
                <a className={styles.socialLink} href="https://github.com/ayrtton/">
                    <FaGithub className={styles.icon}/>
                </a>
                <a className={styles.socialLink} href="https://www.linkedin.com/in/ayrton-vinicius/">
                    <FaLinkedin className={styles.icon} />
                </a>
            </div>
        </footer>
    )
}

export default Footer