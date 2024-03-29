import styles from "./Home.module.css"
import Typewriter from 'typewriter-effect'

function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.homeContent}>
                <span className={styles.name}>Hi, I'm Ayrton.</span>
                <span className={styles.message}>
                    <Typewriter
                        options={{ loop: true }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(900)
                                .changeDelay(60)
                                .typeString("Welcome to my Portfolio...")
                                .pauseFor(9000)
                                .start()
                        }}
                    />
                </span>
            </section>
        </main>
    )
}

export default Home