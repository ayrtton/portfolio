import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

function AppRoutes() {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
            </Routes>
            <Footer />
        </Router>
    );
}

export default AppRoutes;