import logo from "../../assets/andygename.png";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll"; // Renaming react-scroll Link
import { Link } from "react-router-dom"; // Importing react-router-dom Link for the resume page

function NavBar() {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <ScrollLink
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to={"heroSection"}
                            className="navbar--content"
                        >
                            Home
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to={"mySkills"}
                            className="navbar--content"
                        >
                            Skills and Experience
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to={"MyPortfolio"}
                            className="navbar--content"
                        >
                            My Portfolio
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to={"AboutMe"}
                            className="navbar--content"
                        >
                            About Me
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to={"ContactMe"}
                            className="navbar--content"
                        >
                            Contact Me
                        </ScrollLink>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            to="/resume"
                            className="navbar--content"
                        >
                            Resume
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
