import Typewriter from "typewriter-effect";

function Home() {
    return (
        <main>
            <div className="home">
                <div className="home__name">Hi, I{"'"}m Ayrton.</div>
                <div className="home__message">
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
                </div>
            </div>
        </main>
    );
}

export default Home;