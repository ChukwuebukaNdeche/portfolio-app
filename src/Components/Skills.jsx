import { Link } from "react-router-dom"

function Skills() {

    return (
        <section id="skills" className="py-5">
            <div className="container mt-5 pt-4 skills_section">
                <div className="row">
                    <h2 className="about_sec_head mb-3">Skills <span className="mini">&</span> Tools</h2>
                    <div className="col-md-4 mb-3 skill_col">
                        <div className="about_icons mb-2"><i className="fa fa-laptop-code"></i><span
                            className="ms-2 fw-bold lhead">Technical
                            Skills</span></div>
                        <ul>
                            <li>HTML, CSS, JavaScript</li>
                            <li>Bootstrap</li>
                            <li>React</li>
                            <li>UI/UX Design</li>
                            <li>Version Control</li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-3 skill_col">
                        <div className="about_icons mb-2"><i className="fa fa-layer-group"></i><span
                            className="ms-2 fw-bold lhead">Design
                            Tools</span></div>
                        <ul>
                            <li>Figma</li>
                            <li>Canva</li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-3 skill_col">
                        <div className="about_icons mb-2"><i className="fa fa-lightbulb"></i><span className="ms-2 fw-bold lhead">Soft
                            Skills</span></div>
                        <ul>
                            <li>Problem Solving</li>
                            <li>Team Collaboration</li>
                            <li>Attention to detail</li>
                        </ul>
                    </div>
                </div>
                <p className="skillp">See how i've used these skills in my <Link to="/project" className="skill_sec_link">Projects</Link></p>
            </div>
        </section>
    )
}
export default Skills