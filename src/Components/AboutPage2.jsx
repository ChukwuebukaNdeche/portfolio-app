import unizik from '../assets/images/unizik logo.png'
function AboutPage2() {

    return (
        <section className="about_page_secs">
            <div className="container">
                <div className="about_page_text mb-3">
                    <h2 className="about_sec_head mb-3">My Journey</h2>
                    <p>
                        I graduated in <strong>2024</strong> from <strong>Nnamdi Azikiwe University</strong> with a
                        degree in <strong>Computer Science</strong>. During my academic journey, I developed a solid
                        foundation in programming and design principles, and further refined my skills during my
                        industrial training at <strong>Digitanotion System</strong>, the leading tech
                        firm in Awka. There, I gained hands-on experience delivering real-world tech solutions and
                        collaborating with a professional team.
                    </p>
                    <p>
                        Currently, I’m advancing my technical expertise in <strong>React</strong>, aiming to
                        create dynamic, interactive web applications. Additionally, I am deeply interested in
                        <strong> cybersecurity</strong> and aspire to become a leader in the field while building my
                        own tech company in the future.
                    </p>
                </div>
                <div className="fixed_img d-flex justify-content-center align-items-center">
                    <h5 className="text-white mx-2 jm">Nnamdi Azikiwe University, Awka</h5>
                    <img src={unizik} alt="unizik" className="img-fluid"
                        style={{width: '10%', borderRadius: '40%'}} />
                </div>
            </div>
        </section>
    )
}
export default AboutPage2