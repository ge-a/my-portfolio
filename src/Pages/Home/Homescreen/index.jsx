import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from  "../AboutMe"
import MyPortfolio from  "../MyPortfolio"
import ContactMe from  "../ContactMe"
import Footer from "../Footer"

import { Link } from 'react-router-dom';


export default function Home() {
    return(
        <>
            <HeroSection />
            <MySkills />
            <MyPortfolio />
            <AboutMe />
            <ContactMe />
            <Footer />
            <nav>
                <ul>
                    <li><Link to="/resume">View My Resume</Link></li>
                </ul>
            </nav>
        </>
    )
}