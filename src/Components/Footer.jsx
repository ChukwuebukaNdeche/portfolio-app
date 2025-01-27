import { Link } from "react-router-dom"

function Footer() {

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h5 className="mb-3">Quick Links</h5>
                        <ul>
                            <li><Link to='/' state={{section: 'home'}}>Home</Link></li>
                            <li><Link to='/about'>About Me</Link></li>
                            <li><Link to='/' state={{section: 'skills'}}>Skills</Link></li>
                            <li><Link to='/projects'>Projects</Link></li>
                            <li><Link to='/' state={{section: 'contacts'}}>Contact Me</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-6 mb-4">
                        <h5 className="mb-3">Follow Me</h5>
                        <a className="flink" href="https://www.linkedin.com/in/chukwuebuka-ndeche-aa3867291/" target="_blank" rel="noopener noreferrer">
                            <div className="mb-2"><i className="fab fa-linkedin"></i><span
                                className="ms-2">LinkedIn</span></div>
                        </a>
                        <a className="flink" href="https://github.com/ChukwuebukaNdeche" target="_blank" rel="noopener noreferrer">
                            <div className=" mb-2"><i className="fab fa-github"></i><span
                                className="ms-2 ">GitHub</span></div>
                        </a>
                        <a className="flink" href="mailto:emmanuelndeche@gmail.com" target="_blank" rel="noopener noreferrer">
                            <div className=" mb-2"><i className="fa fa-envelope"></i><span
                                className="ms-2">emmanuelndeche@gmail.com</span></div>
                        </a>
                    </div>
                </div>
            </div>
            <p className="text-center copy_right">&copy; 2024 Emmanuel Ndeche. All Rights Reserved.</p>
        </footer>

    )
}
export default Footer