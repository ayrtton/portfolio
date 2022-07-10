import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Siderbar'
import About from './pages/About'
import Home from './pages/Home'

function App() {
    return (
        <Router>
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </Router>
    )
}

export default App
