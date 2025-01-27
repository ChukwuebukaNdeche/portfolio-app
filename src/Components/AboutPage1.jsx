import htmlLogoPage from '../assets/images/logo html.png'
import cssLogo from '../assets/images/logocss.png'
import jsLogo from '../assets/images/logojs.png'
import bootstrapLogo from '../assets/images/logobootstrap.png'
import reactLogo from '../assets/images/logoreact.png'
import figmaLogo from '../assets/images/logofigma.png'
import profileImg from '../assets/images/profile picture.jpeg'
function AboutPage1() {

    return(
        <section className="about_page_secs about_head position-relative">
        <div className="container pt-5">
            <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                    <img src={profileImg} alt="profile" className="img-fluid about_page_img"/>
                </div>
                <div className="col-md-6 ">
                    <div className="about_page_text">
                        <h2 className="about_sec_head mb-3">About Me</h2>
                        <p>
                            <strong>Hi, I’m Emmanuel Chukwuebuka Ndeche 👋</strong><br/>
                            I’m a dedicated and creative <strong>Frontend Web Developer</strong> and <strong>UI/UX
                                Designer </strong>with a strong foundation in building user-focused, visually engaging
                            websites and applications. With expertise in <strong>HTML</strong>,
                            <strong> CSS</strong>, <strong>JavaScript</strong>, <strong>Bootstrap</strong>, and <strong>React</strong>.
                            I specialize in crafting digital solutions that are not only functional but also
                            aesthetically pleasing.
                        </p>
                    </div>

                </div>
            </div>
        </div>
        <img src={htmlLogoPage} alt="logo" className="img-fluid bg_logo logo1"/>
        <img src={bootstrapLogo} alt="logo" className="img-fluid bg_logo logo2"/>
        <img src={cssLogo} alt="logo" className="img-fluid bg_logo logo3"/>
        <img src={figmaLogo} alt="logo" className="img-fluid bg_logo logo4"/>
        <img src={reactLogo} alt="logo" className="img-fluid bg_logo logo5"/>
        <img src={jsLogo} alt="logo" className="img-fluid bg_logo logo6"/>
    </section>
    )
}
export default AboutPage1