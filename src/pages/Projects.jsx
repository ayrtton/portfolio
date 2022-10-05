import styles from "./Projects.module.css"
import project01 from "./../images/project01.jpg"
import project02 from "./../images/project02.jpg"

function Projects() {
    return (
        <div className={styles.projectsContent}>
            <h1>Projects</h1>
            <span id={styles.constructionMessage}>Under construction...</span>
            <div className={styles.projectList}>
                <div className={styles.project}>
                    <img className={styles.image} src={ project01 } alt="" />
                    <a href="https://github.com/ayrtton/login-signup" target="_blank" rel="noreferrer">Authentication System [Laravel and React]</a>
                </div>
                <div className={styles.project}>
                    <img className={styles.image} src={ project02 } alt="" />
                    <a href="https://github.com/ayrtton/auth-system-codeigniter" target="_blank" rel="noreferrer">Authentication System [CodeIgniter]</a>
                </div>
            </div>
        </div>
    )
}

export default Projects