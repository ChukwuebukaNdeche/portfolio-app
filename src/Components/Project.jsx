
import { Link } from "react-router-dom"
import ProjectCardVideo from "./ProjectCardVideo"
function Project() {

    return (
        <section className="py-5 project_section">
            <div className="container pt-4">
                <div className="row mb-5">
                    <h2 className="about_sec_head">My Projects</h2>
                    <p className="mb-4 project_sub">Here are some of the projects i've worked on, showcasing my skills in frontend web
                        development</p>
                    <div className="col-md-4 mb-3">
                        <ProjectCardVideo
                            vid="https://player.vimeo.com/video/1051046887?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;autoplay=1&amp;muted=1&amp;&loop=1&amp;controls=0&amp;player_id=0&amp;app_id=58479"
                            title='Video Project'
                            text='A dynamic video background that can be paused or played with the click of a
                                button. This project highlights the integration of HTML, CSS, and JavaScript to
                                create an interactive and engaging user experience.'
                            href1="https://chukwuebukandeche.github.io/video_project/"
                            href2="https://github.com/ChukwuebukaNdeche/video_project"
                            link1='View Live' link2='Source Code' />
                    </div>
                    <div className="col-md-4 mb-3">
                        <ProjectCardVideo
                            vid="https://player.vimeo.com/video/1051044585?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;autoplay=1&amp;muted=1&amp;&loop=1&amp;controls=0&amp;player_id=0&amp;app_id=58479"
                            title='Image Slider Project'
                            text='An interactive image slider that showcases a sequence of images with smooth transitions.
                                    Built using HTML, CSS, and JavaScript, it offers a visually engaging way to navigate
                                    through content and a visual apealing UI'
                            href1="https://chukwuebukandeche.github.io/image_slider/"
                            href2="https://github.com/ChukwuebukaNdeche/image_slider"
                            link1='View Live' link2='Source Code' />
                    </div>
                    <div className="col-md-4 mb-3">
                        <ProjectCardVideo
                            vid="https://player.vimeo.com/video/1050517400?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;autoplay=1&amp;muted=1&amp;&loop=1&amp;controls=0&amp;player_id=0&amp;app_id=58479"
                            title='About Page Project'
                            text='A responsive about page featuring sections for history, vision, and goals. Designed
                                with HTML, CSS, JavaScript, and Bootstrap. this project demonstrates a clean
                                layout and interactive design to enhance user engagement.'
                            href1="https://chukwuebukandeche.github.io/About_project/"
                            href2="https://github.com/ChukwuebukaNdeche/About_project"
                            link1='View Live' link2='Source Code' />
                    </div>
                </div>
                <Link to="/project" className="hero_btn">View All Projects</Link>
            </div>
        </section>
    )
}
export default Project