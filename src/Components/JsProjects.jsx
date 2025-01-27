import black from '../assets/images/blackjack.png'
import people from '../assets/images/people_counter.png'
import nav from '../assets/images/Navbar.png'
import ProjectCardVideo from './ProjectCardVideo.jsx'
import ProjectCard from "./ProjectCard.jsx"

function JsProjects() {

    return(
        <section className="mt-4 pb-5">
            <div className="container">
                <div className="project_lines mb-3"></div>
                <div className="row">
                    <div className="js_headins">
                        <h5>JavaScript Showcase</h5>
                        <p className="js_project_sub">
                            This section highlights projects I built while honing my JavaScript skills. Each project
                            demonstrates my growing
                            expertise and practical experience with JavaScript.
                        </p>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mb-2">
                        <ProjectCardVideo
                            vid="https://player.vimeo.com/video/1050517006?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;autoplay=1&amp;muted=1&amp;&loop=1&amp;controls=0&amp;player_id=0&amp;app_id=58479"
                            title='Video Project'
                            text='A dynamic video background that can be paused or played with the click of a
                                button. This project highlights the integration of HTML,
                                CSS, and JavaScript to create an interactive and engaging user experience.'
                            href1="https://chukwuebukandeche.github.io/video_project/"
                            href2="https://github.com/ChukwuebukaNdeche/video_project"
                            link1='View Live' link2='Source Code' />
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mb-2">
                        <ProjectCardVideo
                            vid="https://player.vimeo.com/video/1050529524?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;autoplay=1&amp;muted=1&amp;&loop=1&amp;controls=0&amp;player_id=0&amp;app_id=58479"
                            title='Modal Project'
                            text='An interactive modal window that opens with a button click and closes with a close
                                    button. This project demonstrates the use of HTML, CSS, and JavaScript
                                    to enhance user interaction with a clean and functional design.'
                            href1="https://chukwuebukandeche.github.io/modal/"
                            href2="https://github.com/ChukwuebukaNdeche/modal"
                            link1='View Live' link2='Source Code' />
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mb-2">
                        <ProjectCardVideo
                            vid="https://player.vimeo.com/video/1050517400?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;autoplay=1&amp;muted=1&amp;&loop=1&amp;controls=0&amp;player_id=0&amp;app_id=58479"
                            title='About Page Project'
                            text='A responsive about page featuring sections for history, vision, and goals. Designed
                                with HTML, CSS, JavaScript and Bootstrap. This project demonstrates a clean
                                layout and interactive design to enhance user engagement.'
                            href1="https://chukwuebukandeche.github.io/About_project/"
                            href2="https://github.com/ChukwuebukaNdeche/About_project"
                            link1='View Live' link2='Source Code' />
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mb-2">
                        <ProjectCard
                            img={black}
                            title='BlackJack Project'
                            text='Experience the thrill of the casino with this dynamic Blackjack game! Built using
                                  HTML, CSS, and JavaScript, this project combines sleek design with interactive
                                    gameplay, allowing users to test their luck and strategy in a fun and engaging
                                    environment'
                            href1="https://chukwuebukandeche.github.io/black_jack/"
                            href2="https://github.com/ChukwuebukaNdeche/black_jack"
                            link1='View Live' link2='Source Code' />

                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mb-2">
                        <ProjectCardVideo
                            vid="https://player.vimeo.com/video/1050518867?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;autoplay=1&amp;muted=1&amp;&loop=1&amp;controls=0&amp;player_id=0&amp;app_id=58479"
                            title='Color Flipper Project'
                            text='Add a splash of color to your day with this interactive color picker! Built using
                                    HTML, CSS, and JavaScript, this project changes the background to a random color at
                                    the click of a button and displays its RGB code, combining functionality with vibrant
                                    design.'
                            href1="https://chukwuebukandeche.github.io/color_flipper/"
                            href2="https://github.com/ChukwuebukaNdeche/color_flipper"
                            link1='View Live' link2='Source Code' />

                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mb-2">
                        <ProjectCard
                            img={people}
                            title='People Counter Project'
                            text='Keep track with ease using this intuitive People Counter! Built with
                                    HTML, CSS, and JavaScript, this project allows users to count and manage entries
                                    effortlessly, showcasing clean design and practical functionality'
                            href1="https://chukwuebukandeche.github.io/people_counter/"
                            href2="https://github.com/ChukwuebukaNdeche/people_counter"
                            link1='View Live' link2='Source Code' />

                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mb-2">
                        <ProjectCardVideo
                            vid="https://player.vimeo.com/video/1050519617?badge=0&amp;autopause=0&amp;autoplay=1&amp;muted=1&amp;&loop=1&amp;controls=0&amp;player_id=0&amp;app_id=58479"
                            title='Counter Project'
                            text='A simple counter application that increases or decreases and resets the count with
                                    button clicks. Built using HTML, CSS, and JavaScript, it dynamically updates the 
                                    displayed value as users interact with the buttons.'
                            href1="https://chukwuebukandeche.github.io/counter/"
                            href2="https://github.com/ChukwuebukaNdeche/counter"
                            link1='View Live' link2='Source Code' />

                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mb-2">
                        <ProjectCardVideo
                            vid="https://player.vimeo.com/video/1050528710?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;autoplay=1&amp;muted=1&amp;&loop=1&amp;controls=0&amp;player_id=0&amp;app_id=58479"
                            title='Image Slider Project'
                            text='An interactive image slider that showcases a sequence of images with smooth transitions.
                                    Built using HTML, CSS, and JavaScript, it offers a visually engaging way to navigate
                                    through content.'
                            href1="https://chukwuebukandeche.github.io/image_slider/"
                            href2="https://github.com/ChukwuebukaNdeche/image_slider"
                            link1='View Live' link2='Source Code' />

                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mb-2">
                        <ProjectCard
                            img={nav}
                            title='Navbar Project'
                            text='A fully responsive navigation bar built using HTML, CSS, and JavaScript. Designed to
                                    adapt seamlessly across different screen sizes, it ensures smooth navigation and a
                                    user-friendly experience.'
                            href1="https://chukwuebukandeche.github.io/About_project/"
                            href2="https://github.com/ChukwuebukaNdeche/About_project"
                            link1='View Live' link2='Source Code' />

                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mb-2">
                        <ProjectCardVideo
                            vid="https://player.vimeo.com/video/1050487829?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;autoplay=1&amp;muted=1&amp;&loop=1&amp;controls=0&amp;player_id=0&amp;app_id=58479"
                            title='Emoji Project'
                            text='An interactive emoji project that changes the displayed emoji with every click. Built
                                    using HTML, CSS, and JavaScript, it adds a fun and engaging touch to user interaction.'
                            href1="https://chukwuebukandeche.github.io/Emoji/"
                            href2="https://github.com/ChukwuebukaNdeche/Emoji"
                            link1='View Live' link2='Source Code' />

                    </div>
                </div>
            </div>
        </section>
    )
}
export default JsProjects