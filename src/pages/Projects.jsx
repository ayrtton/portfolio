import styles from "./Projects.module.css"

function Projects() {
    return (
        <div className={styles.main}>
            <h1>Projects</h1>
            <div className={styles.projectList}>
                <div className={styles.row}>
                    <div className={styles.project}>
                        <div id={styles.image1}></div>
                        <a className={styles.projectTitle} href="https://github.com/ayrtton" target="" rel="noreferrer">Under Construction...</a>
                    </div>
                    <div className={styles.project}>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Projects