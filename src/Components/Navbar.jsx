import React, {useState, useEffect, useRef} from "react"
import { Link } from "react-router-dom";
function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const navElement = useRef()

    useEffect(() => {
        const outsideClick = (event) => {
            if(navElement.current && !navElement.current.contains(event.target)) {
                setIsNavOpen(false)
            }
        }
        document.addEventListener('click', outsideClick)

        return () => {
            document.removeEventListener('click', outsideClick)
        }
    }, [])

    function openNavbar() {
        setIsNavOpen(true)
    }

    function closeNavbar() {
        setIsNavOpen(false)
    }

    function homeClicked() {
        setIsNavOpen(false)
    }
    function aboutClicked() {
        setIsNavOpen(false)
    }
    function skillClicked() {
        setIsNavOpen(false)
    }
    function projectClicked() {
        setIsNavOpen(false)
    }
    function contactClicked() {
        setIsNavOpen(false)
    }

    return(
        <div className="nav_bar" ref={navElement}>
            <div className="nav_container">
                <h4 className="text-white">WEB</h4>
                <div className={`nav_items ${isNavOpen ? "active" : ""}`}>
                    <ul className="nav_list">
                        <li><Link onClick={homeClicked} className="navlink" to='/' state={{section: 'home'}}>Home</Link></li>
                        <li><Link onClick={aboutClicked} className="navlink" to='/about'>About Me</Link></li>
                        <li><Link onClick={skillClicked} className="navlink" to='/' state={{section: 'skills'}}>Skills</Link></li>
                        <li><Link onClick={projectClicked} className="navlink" to='/project'>Projects</Link></li>
                        <li><Link onClick={contactClicked} className="navlink" to='/' state={{section: 'contacts'}}>Contact Me</Link></li>
                    </ul>
                </div>
            </div>
            <i onClick={openNavbar} style={{visibility:isNavOpen ? "hidden" : "visible"}} className="fas fa-bars open_navbar"></i>
            <i onClick={closeNavbar} style={{visibility:!isNavOpen ? "hidden" : "visible"}} className="fas fa-times close_navbar"></i>
        </div>
    )
}
export default Navbar