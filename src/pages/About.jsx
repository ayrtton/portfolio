import styles from "./About.module.css"
import { FaLaravel, FaReact, FaGithub } from "react-icons/fa"
import { SiPostgresql } from "react-icons/si"

function About() {
    return (
        <div className={styles.aboutContent}>
            <h1>About Me</h1>
            <p id={styles.aboutText}>
                My name is Ayrton Vinicius and I'm a programmer specialized in web development. I have
                experience in back end by building web applications with Laravel and PHP and also knowledge in
                front end using React.
            </p>

            <h1>Skill Set</h1>
            <span id={styles.constructionMessage}>Under construction...</span>
            <div id={styles.skills}>
                <div className={styles.logo}>
                    <FaLaravel id={styles.laravel} />
                    <span className={styles.logoTitle}>Laravel</span>
                </div>
                <div className={styles.logo}>
                    <FaReact id={styles.react} />
                    <span className={styles.logoTitle}>React</span>
                </div>
                <div className={styles.logo}>
                    <svg viewBox="0 0 128 128">
                        <path fill="#767bf3" d="M64 33.039C30.26 33.039 2.906 46.901 2.906 64S30.26 94.961 64 94.961 125.094 81.099 125.094 64 97.74 33.039 64 33.039zM48.103 70.032c-1.458 1.364-3.077 1.927-4.86 2.507-1.783.581-4.052.461-6.811.461h-6.253l-1.733 10h-7.301l6.515-34H41.7c4.224 0 7.305 1.215 9.242 3.432 1.937 2.217 2.519 5.364 1.747 9.337-.319 1.637-.856 3.159-1.614 4.515a15.118 15.118 0 01-2.972 3.748zM69.414 73l2.881-14.42c.328-1.688.208-2.942-.361-3.555-.57-.614-1.782-1.025-3.635-1.025h-5.79l-3.731 19h-7.244l6.515-33h7.244l-1.732 9h6.453c4.061 0 6.861.815 8.402 2.231s2.003 3.356 1.387 6.528L76.772 73h-7.358zm40.259-11.178c-.318 1.637-.856 3.133-1.613 4.488-.758 1.357-1.748 2.598-2.971 3.722-1.458 1.364-3.078 1.927-4.86 2.507-1.782.581-4.053.461-6.812.461h-6.253l-1.732 10h-7.301l6.514-34h14.041c4.224 0 7.305 1.215 9.241 3.432 1.935 2.217 2.518 5.418 1.746 9.39zM95.919 54h-5.001l-2.727 14h4.442c2.942 0 5.136-.29 6.576-1.4 1.442-1.108 2.413-2.828 2.918-5.421.484-2.491.264-4.434-.66-5.458-.925-1.024-2.774-1.721-5.548-1.721zm-56.985 0h-5.002l-2.727 14h4.441c2.943 0 5.136-.29 6.577-1.4 1.441-1.108 2.413-2.828 2.917-5.421.484-2.491.264-4.434-.66-5.458S41.708 54 38.934 54z"></path>
                    </svg>
                    <span className={styles.logoTitle}>PHP</span>
                </div>
                <div className={styles.logo}>
                    <SiPostgresql id={styles.postgresql} />
                    <span className={styles.logoTitle}>PostgreSQL</span>
                </div>
                <div className={styles.logo}>
                    <FaGithub id={styles.github} />
                    <span className={styles.logoTitle}>GitHub</span>
                </div>
                <div className={styles.logo}>
                    <svg viewBox="0 0 128 128">
                        <path fill="#FF92FF" d="M114 13.9C114 7.3 108.7 2 102.1 2H25.9C19.3 2 14 7.3 14 13.9v100.3c0 6.6 5.3 11.9 11.9 11.9h76.3c6.6 0 11.9-5.3 11.9-11.9V13.9zm-4 .1v99.3c0 4.7-3.5 8.7-8.2 8.7H26.5c-4.7 0-8.5-4-8.5-8.7V14c0-4.7 3.9-8 8.5-8h75.2c4.7 0 8.4 3.6 8.4 8.3l-.1-.3zm-73 94.7l14.1-14.1L37 80.5zm14-60.9V18.4l-13.9.1s.1 45.9.2 45.7C80.1 47.5 77 59.4 77 59.4v49.4l-.1.2H90V59.5c0-27.1-39-11.7-39-11.7zM70 36h14.8c8-10 10.7-17 10.7-17H80.2S75.3 30 70 36z"></path>
                    </svg>
                    <span className={styles.logoTitle}>Heroku</span>
                </div>
                <div className={styles.logo}>
                    <svg viewBox="0 0 128 128">
                        <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
                    </svg>
                    <span className={styles.logoTitle}>HTML</span>
                </div>
                <div className={styles.logo}>
                    <svg viewBox="0 0 128 128">
                        <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>
                    </svg>
                    <span className={styles.logoTitle}>CSS</span>
                </div>
                <div className={styles.logo}>
                    <svg viewBox="0 0 128 128">
                        <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
                    </svg>
                    <span className={styles.logoTitle}>JavaScript</span>
                </div>
                <div className={styles.logo}>
                    <svg viewBox="0 0 128 128">
                        <defs><linearGradient id="jira-original-a" gradientUnits="userSpaceOnUse" x1="22.034" y1="9.773" x2="17.118" y2="14.842" gradientTransform="scale(4)"><stop offset=".176" stop-color="#0052cc"></stop><stop offset="1" stop-color="#2684ff"></stop></linearGradient><linearGradient id="jira-original-b" gradientUnits="userSpaceOnUse" x1="16.641" y1="15.564" x2="10.957" y2="21.094" gradientTransform="scale(4)"><stop offset=".176" stop-color="#0052cc"></stop><stop offset="1" stop-color="#2684ff"></stop></linearGradient></defs><path d="M108.023 16H61.805c0 11.52 9.324 20.848 20.847 20.848h8.5v8.226c0 11.52 9.328 20.848 20.848 20.848V19.977A3.98 3.98 0 00108.023 16zm0 0" fill="#2684ff"></path><path d="M85.121 39.04H38.902c0 11.519 9.325 20.847 20.844 20.847h8.504v8.226c0 11.52 9.328 20.848 20.848 20.848V43.016a3.983 3.983 0 00-3.977-3.977zm0 0" fill="url(#jira-original-a)"></path><path d="M62.219 62.078H16c0 11.524 9.324 20.848 20.848 20.848h8.5v8.23c0 11.52 9.328 20.844 20.847 20.844V66.059a3.984 3.984 0 00-3.976-3.98zm0 0" fill="url(#jira-original-b)"></path>
                    </svg>
                    <span className={styles.logoTitle}>Jira</span>
                </div>
                <div className={styles.logo}>
                    <svg viewBox="0 0 128 128">
                        <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
                    </svg>
                    <span className={styles.logoTitle}>Figma</span>
                </div>
                <div className={styles.logo}>
                    <svg viewBox="0 0 128 128">
                        <linearGradient id="kotlin-original-a" gradientUnits="userSpaceOnUse" x1="-11.899" y1="48.694" x2="40.299" y2="-8.322"><stop offset="0" stop-color="#1c93c1"></stop><stop offset=".163" stop-color="#2391c0"></stop><stop offset=".404" stop-color="#378bbe"></stop><stop offset=".696" stop-color="#587eb9"></stop><stop offset=".995" stop-color="#7f6cb1"></stop></linearGradient><path fill="url(#kotlin-original-a)" d="M0 0h65.4L0 64.4z"></path><linearGradient id="kotlin-original-b" gradientUnits="userSpaceOnUse" x1="43.553" y1="149.174" x2="95.988" y2="94.876"><stop offset="0" stop-color="#1c93c1"></stop><stop offset=".216" stop-color="#2d8ebf"></stop><stop offset=".64" stop-color="#587eb9"></stop><stop offset=".995" stop-color="#7f6cb1"></stop></linearGradient><path fill="url(#kotlin-original-b)" d="M128 128L64.6 62.6 0 128z"></path><linearGradient id="kotlin-original-c" gradientUnits="userSpaceOnUse" x1="3.24" y1="95.249" x2="92.481" y2="2.116"><stop offset="0" stop-color="#c757a7"></stop><stop offset=".046" stop-color="#ca5a9e"></stop><stop offset=".241" stop-color="#d66779"></stop><stop offset=".428" stop-color="#e17357"></stop><stop offset=".6" stop-color="#e97c3a"></stop><stop offset=".756" stop-color="#ef8324"></stop><stop offset=".888" stop-color="#f28817"></stop><stop offset=".982" stop-color="#f48912"></stop></linearGradient><path fill="url(#kotlin-original-c)" d="M0 128L128 0H64.6L0 63.7z"></path>
                    </svg>
                    <span className={styles.logoTitle}>Kotlin</span>
                </div>
            </div>
        </div>
    )
}

export default About