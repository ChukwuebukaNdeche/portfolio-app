import unizik from '../assets/images/uni.png'
function AboutPage2() {

    return (
        <section className="about_page_secs">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="about_page_text mb-3">
                            <h2 className="about_sec_head mb-3">My <span className='mini'>Journey</span></h2>
                            <p>
                                I graduated in <strong>2024</strong> from <strong>Nnamdi Azikiwe University</strong> with a
                                degree in <strong>Computer Science</strong>. During my academic journey, I developed a solid
                                foundation in programming and design principles, and further refined my skills during my
                                industrial training at <strong>Digitanotion System</strong>, the leading tech
                                firm in Awka. There, I gained experience delivering real-world tech solutions and
                                collaborating with a professional team.
                            </p>
                            <p>
                                I am deeply interested in
                                <strong> cybersecurity</strong> and aspire to become a leader in the field while building my
                                own tech company in the future.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <img src={unizik} alt="" className='img-fluid unizik' />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutPage2