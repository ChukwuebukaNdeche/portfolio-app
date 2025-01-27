import { Link } from "react-router-dom"

function AboutPage4() {

    return (
        <section className="about_page_secs">
            <div className="about_hr_line"></div>
            <div className="container">
                <div className="row about_page_text">
                    <h2 className="about_sec_head">Experience & Projects</h2>
                    <div className="col-md-6">
                        <div className="it">
                            <p>During my time at Digitanotion System, I:</p>
                            <ul>
                                <li>Worked on creating responsive websites for clients.</li>
                                <li>Collaborated on user interface designs for improved user experiences.</li>
                                <li>Assisted in developing innovative web solutions to meet business needs.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="it">
                            <p>I’ve built numerous personal projects to sharpen my skills, including:</p>
                            <ul>
                                <li>A Blackjack Game</li>
                                <li>An Image Slider</li>
                                <li>A Color Flipper</li>
                                <li>A Modal Project</li>
                            </ul>
                        </div>
                    </div>
                    <h6 className="mt-3">Explore my <Link to="/project" className="about_project_link">Projects</Link> to see more of my work!</h6>
                </div>
            </div>
        </section>

    )
}
export default AboutPage4