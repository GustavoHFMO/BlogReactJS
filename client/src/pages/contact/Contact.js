import "./contact.css"

export default function Contact(){
    return(
        <div className="contact">
            <span className="contactTitle">Contact Us</span>
            <span className="contactMessage">Got a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</span>

            <form className="contactForm">
                <label className="contactLabel">Name</label>
                <input type="text" className="contactInput" placeholder="Enter your name..." />

                <label className="contactLabel">Email adresses</label>
                <input type="text" className="contactInput" placeholder="Enter your email..." />

                <label className="contactLabel">Description</label>
                <textarea type="text" className="contactInputDescription" placeholder="Enter your message..." />
            </form>

            <button className="contactButton">
                    Send Message
            </button>

        </div>
    )
}