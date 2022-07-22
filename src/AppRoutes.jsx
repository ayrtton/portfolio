import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Menu from "./components/Menu"
import Home from "./pages/Home"
import About from "./pages/About"

function AppRoutes() {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes