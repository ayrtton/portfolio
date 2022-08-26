import styles from "./Projects.module.css"
import image from "./../images/loginSignUp.JPG"

function Projects() {
    return (
        <div className={styles.projectsContent}>
            <h1>Projects</h1>
            <span id={styles.constructionMessage}>Under construction...</span>
            <div className={styles.projectList}>
                <div className={styles.project}>
                    <img className={styles.image} src={ image } alt="" />
                    <a href="https://github.com/ayrtton/login-signup">Login and Sign Up System</a>
                </div>
            </div>
        </div>
    )
}

export default Projects