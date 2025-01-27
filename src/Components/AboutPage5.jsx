import { Link } from "react-router-dom";
function AboutPage5() {

    return (
        <section className="about_page_secs position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="about_page_text">
                            <h2 className="about_sec_head">My Mission</h2>
                            <p className="mt-3 mb-3">
                                I aim to create impactful digital experiences that help businesses and individuals
                                bring their ideas to life. Whether it’s designing a user-friendly website or building
                                a complex application, I’m driven by innovation and excellence.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about_page_text">
                            <h2 className="about_sec_head">Let’s Work Together!</h2>
                            <p className="my-3 mb-4">
                                I’d love to collaborate with forward-thinking teams or individuals who share a
                                passion for creating exceptional digital solutions. If you’d like to discuss a
                                project or have an idea in mind, let’s connect!
                            </p>
                            <Link  to='/' state={{section: 'contacts'}} className="hero_btn ms-3" >Get In Touch</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutPage5