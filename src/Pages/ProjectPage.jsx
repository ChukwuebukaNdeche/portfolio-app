import Jsprojects from '../Components/JsProjects.jsx'
import CssProjects from '../Components/CssProjects.jsx'
import ReactProject from '../Components/ReactProjects.jsx'

function ProjectPage() {

    return (
        <div style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
            <section>
                <div className="project_page_heading">
                    <div className="container">
                        <h2 className="about_sec_head text-center mb-4">Project <span className='mini'>Page</span></h2>
                        <p className="text-center project_page_sub">
                            This page contains a collection of my work, showcasing my skills in
                            React, HTML, CSS, Bootstrap and Javascript
                        </p>
                    </div>
                </div>
            </section>
            <ReactProject/>
            <Jsprojects />
            <CssProjects />
        </div>
    )
}
export default ProjectPage