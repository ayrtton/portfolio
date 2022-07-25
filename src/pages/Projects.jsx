import styles from "./Projects.module.css"

function Projects() {
    return (
        <div className={styles.projectsContent}>
            <h1>Projects</h1>
            <span id={styles.constructionMessage}>Under construction...</span>
        </div>
    )
}

export default Projects