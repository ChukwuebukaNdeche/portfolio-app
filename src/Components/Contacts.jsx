function Contacts() {

    return (
        <section id="contacts" className="py-5 contact_section">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-6 mb-5">
                        <h2 className="about_sec_head mb-3">Contact Me</h2>
                        <h6 className="contact_sub mb-2">Feel free to reach out for collaborations, project
                            inquiries, or a contract</h6>
                        <div className="left_contact_bg">
                            <div className="mt-2 left_contact">
                                <h5>Contact Methods</h5>
                                <div className="mb-1">
                                    <strong>Email:</strong> <a
                                        href="mailto:emmanuelndeche@gmail.com" target="_blank" rel="noopener noreferrer">emmanuelndeche@gmail.com</a>
                                </div>
                                <div className="mb-1">
                                    <strong>Phone Number:</strong> <a href="tel:+2438087332264" target="_blank" rel="noopener noreferrer">+234 808 733 2264</a>
                                </div>
                                <div className="mb-1">
                                    <p><strong>Location:</strong> Awka, Anambra state. Nigeria</p>
                                </div>
                            </div>
                            <div className="mt-4 left_contact">
                                <h5>Social Media Links</h5>
                                <div className="mb-1">
                                    <a href="https://www.linkedin.com/in/chukwuebuka-ndeche-aa3867291/" target="_blank" rel="noopener noreferrer">
                                        <div className="about_icons mb-2"><i className="fab fa-linkedin"></i><span
                                            className="ms-2 fw-bold lhead">LinkedIn</span></div>
                                    </a>
                                </div>
                                <div className="mb-1">
                                    <a href="https://github.com/ChukwuebukaNdeche" target="_blank" rel="noopener noreferrer">
                                        <div className="about_icons mb-2"><i className="fab fa-github"></i><span
                                            className="ms-2 fw-bold lhead">GitHub</span></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className="right_contact">
                            <h5 className="mb-3">Contact form</h5>
                            <form action="https://formspree.io/f/xnnqwnjq" method="post" className="contact_form">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Full Name</label>
                                    <input type="text" name="name" id="name" placeholder="Enter your full name"
                                        className="form-control" required
                                        onInvalid={(e) => e.target.setCustomValidity('Please enter your name')}
                                        onInput={(e) => e.target.setCustomValidity('')} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Enter your email"
                                        className="form-control" required
                                        onInvalid={(e) => e.target.setCustomValidity('Please enter a valid email address')}
                                        onInput={(e) => e.target.setCustomValidity('')} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea name="message" id="message" rows="4" placeholder="Write your message"
                                        className="form-control" required
                                        onInvalid={(e) => e.target.setCustomValidity('Message cannot be empty')}
                                        onInput={(e) => e.target.setCustomValidity('')}></textarea>
                                </div>
                                <button type="submit" className="hero_btn">Submit</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contacts