function AboutPage3() {

    return (
        <section className="about_page_secs">
            <div className="container">
                <div className="row">
                    <h2 className="about_sec_head">Skills & Expertise</h2>
                    <div className="col-md-4">
                        <div className="about_list">
                            <div className="about_icons mb-2"><i className="fa fa-code"></i><span
                                className="ms-2 fw-bold lhead">Frontend Development</span></div>
                            <ul>
                                <li>HTML, CSS, JavaScript, Bootstrap</li>
                                <li>Responsive Web Design</li>
                                <li>Interactive Web Applications</li>
                                <li>React</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="about_list">
                            <div className="about_icons mb-2"><i className="fa fa-paint-brush"></i><span
                                className="ms-2 fw-bold lhead">UI/UX Design</span></div>
                            <ul>
                                <li>Wireframing and Prototyping</li>
                                <li>User-Centric Design</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="about_list">
                            <div className="about_icons mb-2"><i className="fa fa-laptop"></i><span className="ms-2 fw-bold lhead">Other
                                Interests</span></div>
                            <ul>
                                <li>React (Projects)</li>
                                <li>Cybersecurity (Future Endeavors)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutPage3