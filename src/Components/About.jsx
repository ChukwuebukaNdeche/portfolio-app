
import htmlLogo from '../assets/images/logo html.png'
import cssLogo from '../assets/images/logocss.png'
import jsLogo from '../assets/images/logojs.png'
import bootstrapLogo from '../assets/images/logobootstrap.png'
import reactLogo from '../assets/images/logoreact.png'
import figmaLogo from '../assets/images/logofigma.png'
import { Link } from 'react-router-dom'

function About() {

    return (
        <section className="py-5 about_section">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-6 text-center m">
                        <h2 className="about_sec_head mb-5">About Me</h2>
                        <div className="about_sec_img mb-4">
                            <div className="first d-flex">
                                <img src={htmlLogo} alt="logo" className="img-fluid"/>
                                    <img src={cssLogo} alt="logo" className="img-fluid"/>
                                        <img src={jsLogo} alt="logo" className="img-fluid"/>
                                        </div>
                                        <div className="second d-flex">
                                            <img src={bootstrapLogo} alt="logo" className="img-fluid"/>
                                                <img src={reactLogo} alt="logo" className="img-fluid"/>
                                                    <img src={figmaLogo} alt="logo" className="img-fluid"/>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="about_sec_text">
                                                <div className="about_icons mb-2"><i className="fa fa-info-circle "></i><span
                                                    className="ms-2 fw-bold">personal info</span></div>
                                                <p>
                                                    Hello! My name is <strong>Emmanuel Chukwuebuka Ndeche</strong>, a skilled
                                                    <strong> Frontend Web Developer</strong> with expertise in
                                                    <strong> HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>,
                                                    <strong> Bootstrap</strong>, and <strong>React</strong>. I also specialize in <strong>UI/UX design</strong>,
                                                    creating intuitive and visually appealing user experiences that bring ideas to life.
                                                </p>
                                                <div className="about_icons mb-2"><i className="fa fa-graduation-cap"></i><span
                                                    className="ms-2 fw-bold">Education</span></div>
                                                <p>
                                                    I graduated in <strong>2024</strong> from <strong>Nnamdi Azikiwe University, Awka, </strong>
                                                    where I earned my degree in <strong>Computer Science</strong>. During my academic
                                                    journey, I developed a solid foundation in programming, problem solving and design principles.
                                                </p>
                                                <div className="about_icons mb-2"><i className="fa fa-code"></i><span className="ms-2 fw-bold">Learnind
                                                    Curve</span></div>
                                                <p className="mb-4">
                                                    Currently, I am expanding my skillset in <strong>React</strong>, aiming to
                                                    build dynamic, interactive web applications. I also have a deep passion for
                                                    <strong> cybersecurity</strong> and aspire to become an expert in the field while
                                                    establishing my own tech company in the future.
                                                </p>

                                                <Link to='/about' className="hero_btn">Learn More About Me</Link>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </section>
                        )
}
                        export default About