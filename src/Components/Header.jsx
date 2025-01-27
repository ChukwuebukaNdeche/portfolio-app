import React, { useState, useEffect } from 'react'
import profileImg from '../assets/images/profile picture.jpeg'
import { Link } from 'react-router-dom'
function Header() {
    const [text, setText] = useState('')
    const [index, setIndex] = useState(0)
    const [removeCursor, setremoveCursor] = useState(false)
    const fullText = "Emmanuel C. Ndeche";

    useEffect(() => {
        function typeWriter() {
            if (index < fullText.length) {
                setText((prev) => prev + fullText[index]);
                setIndex(i => i + 1);
            }
        }
        
        const interval = setTimeout(typeWriter, 50);
        return () => clearTimeout(interval)
    }, [index, fullText])

    useEffect(() => {
        function cursor() {
            setTimeout(() => {
                setremoveCursor(true)
            }, 500)
        }
        const border = setTimeout(cursor, 500);
        return () => clearTimeout(border)
    }, [index, fullText])

    return (
        <header id="home" className="header">

            <div className="dark-overlay">
                <div className="hero-section">
                    <div className="profile">
                        <img src={profileImg} alt="profile" className="profile_pics" />
                        <h4>Hi, i'm <span style={{ borderRight: removeCursor ? 'none' : '2px solid rgb(97, 218, 251)' }}>{text}</span></h4>
                        
                    </div>
                    <p>
                        An experienced frontend web developer. <br />
                        Creating responsive, modern, and user-friendly websites with HTML,
                        CSS, Javascript, Bootstrap and React.
                    </p>
                    <Link to='/project' className="hero_btn">View My Work</Link>
                    <a href="https://github.com/ChukwuebukaNdeche?tab=repositories" target="_blank" rel="noopener noreferrer" className="hero_btn ms-2">Github Repository</a>
                </div>
            </div>
        </header>
    )
}
export default Header