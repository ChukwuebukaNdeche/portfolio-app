import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from '../Components/Header.jsx'
import About from '../Components/About.jsx'
import Skills from '../Components/Skills.jsx'
import Project from '../Components/Project.jsx'
import Contacts from '../Components/Contacts.jsx'
import Footer from '../Components/Footer.jsx'
function HomePage() {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.section) {
            const section = document.getElementById(location.state.section);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <>
            <Header />
            <About />
            <Skills />
            <Project />
            <Contacts />
            <Footer />
        </>

    )
}
export default HomePage