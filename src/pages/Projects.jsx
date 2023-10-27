import styles from "./Projects.module.css"

function Projects() {
    return (
        <div className={styles.main}>
            <h1>Projects</h1>
            <div className={styles.projectList}>
                <div className={styles.row}>
                    <div className={styles.project}>
                        <div id={styles.image1}></div>
                        <a className={styles.projectTitle} href="https://github.com/ayrtton/login-signup" target="_blank" rel="noreferrer">Authentication System [Laravel and React]</a>
                    </div>
                    <div className={styles.project}>
                        <div id={styles.image2}></div>
                        <a className={styles.projectTitle} href="" target="" rel="noreferrer">Under Construction</a>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Projects