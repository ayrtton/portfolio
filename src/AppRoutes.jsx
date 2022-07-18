import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Menu from "./components/Menu"
import Home from "./pages/Home"

function AppRoutes() {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes