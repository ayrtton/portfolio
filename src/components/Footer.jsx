import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.footerContent}>
            <span className={styles.text}>
                Ayrton Vinicius © 2022
            </span>
        </footer>
    )
}

export default Footer