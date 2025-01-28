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
                            Welcome to my projects! Here, you'll find a collection of my work, showcasing my skills in
                            front-end development, UI/UX design, and interactive web applications. Dive in and explore!
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