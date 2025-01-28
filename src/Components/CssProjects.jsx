import ProjectCard from "./ProjectCard"
import cssform from '../assets/images/css_cform.png'
import tesla from '../assets/images/tesla.png'
import flex1 from '../assets/images/flexbox1.png'
import flex2 from '../assets/images/flexbox2.png'
import table from '../assets/images/html_table.png'
import music from '../assets/images/music.png'
import myblog from '../assets/images/myblog.png'
function CssProjects() {

    return(
        <section className="mt-4 pb-5">
            <div className="container">
                <div className="project_lines mb-3"></div>
                <div className="row">
                    <div className="js_headins">
                        <h5>CSS Showcase</h5>
                        <p className="js_project_sub">
                            This section contains projects I built while honing my CSS skills.
                        </p>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mb-2">
                        <ProjectCard
                            img={cssform}
                            title='Contact Form'
                            text='A dynamic video background that can be paused or played with the click of a
                                button. This project highlights the integration of HTML,
                                CSS, and JavaScript to create an interactive and engaging user experience.'
                            href1={void(0)}
                            href2="https://github.com/ChukwuebukaNdeche/contact_form"
                            link1={<i className="fas fa-ban"></i>} link2='Source Code' />
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mb-2">
                        <ProjectCard
                            img={tesla}
                            title='Blog Project'
                            text='A dynamic video background that can be paused or played with the click of a
                                button. This project highlights the integration of HTML,
                                CSS, and JavaScript to create an interactive and engaging user experience.'
                            href1={void(0)}
                            href2="https://github.com/ChukwuebukaNdeche/css_project2"
                            link1={<i className="fas fa-ban"></i>} link2='Source Code' />
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mb-2">
                        <ProjectCard
                            img={table}
                            title='HTML Tags Table'
                            text='A dynamic video background that can be paused or played with the click of a
                                button. This project highlights the integration of HTML,
                                CSS, and JavaScript to create an interactive and engaging user experience.'
                            href1={void(0)}
                            href2="https://github.com/ChukwuebukaNdeche/css_project"
                            link1={<i className="fas fa-ban"></i>} link2='Source Code' />
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mb-2">
                        <ProjectCard
                            img={music}
                            title='Music Site'
                            text='A dynamic video background that can be paused or played with the click of a
                                button. This project highlights the integration of HTML,
                                CSS, and JavaScript to create an interactive and engaging user experience.'
                            href1={void(0)}
                            href2=""
                            link1={<i className="fas fa-ban"></i>} link2='Source Code' />
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mb-2">
                        <ProjectCard
                            img={flex1}
                            title='Flexbox Project1'
                            text='A dynamic video background that can be paused or played with the click of a
                                button. This project highlights the integration of HTML,
                                CSS, and JavaScript to create an interactive and engaging user experience.'
                            href1={void(0)}
                            href2="https://github.com/ChukwuebukaNdeche/flexbox_project1"
                            link1={<i className="fas fa-ban"></i>} link2='Source Code' />
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mb-2">
                        <ProjectCard
                            img={flex2}
                            title='Flexbox Project2'
                            text='A dynamic video background that can be paused or played with the click of a
                                button. This project highlights the integration of HTML,
                                CSS, and JavaScript to create an interactive and engaging user experience.'
                            href1={void(0)}
                            href2="https://github.com/ChukwuebukaNdeche/flexbox_project2"
                            link1={<i className="fas fa-ban"></i>} link2='Source Code' />
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mb-2">
                        <ProjectCard
                            img={myblog}
                            title='Myblog Project'
                            text='A dynamic video background that can be paused or played with the click of a
                                button. This project highlights the integration of HTML,
                                CSS, and JavaScript to create an interactive and engaging user experience.'
                            href1={void(0)}
                            href2="https://github.com/ChukwuebukaNdeche/myblog"
                            link1 = {<i className="fas fa-ban"></i>}
                            link2='Source Code' />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CssProjects