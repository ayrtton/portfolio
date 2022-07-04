import './App.css'
import Typewriter from 'typewriter-effect'
import Sidebar from './components/Siderbar';

function App() {
    return (
        <div className="App">
            <Sidebar />
            <div className="presentation">
                <span className="name">Ayrton Vinicius</span>
                <span className="message">
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
            </div>
        </div>
    );
}

export default App
