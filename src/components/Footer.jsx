import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="footer__copyright">
                    <span className="footer__copyright-text">Ayrton Vinicius © {new Date().getFullYear()}</span>
                </div>
                <div className="footer__social">
                    <a className="footer__social-link" href="https://github.com/ayrtton/">
                        <FaGithub className="footer__social-icon"/>
                    </a>
                    <a className="footer__social-link" href="https://www.linkedin.com/in/ayrton-vinicius/">
                        <FaLinkedin className="footer__social-icon" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;