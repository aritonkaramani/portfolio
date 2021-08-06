import "./contact.scss"
import { useState } from "react";
import {ReactComponent as MeetingIcon} from '../../assets/meetingicon.svg';

export default function Contact() {
    const [message,setMessage] = useState(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className="contact" id="contact">
            <div className="card">
                <div className="left">
                    <MeetingIcon className="icon"/>

             </div>
                <div className="right">
                    <h2>Get in Touch</h2>
                    <div id="contact-form">
                        <form action="https://formspree.io/f/mrgryjgj" method="POST">
                        <input type="hidden" name="_subject" value="Contact request from Portfolio Website" />
                        <input type="name" name="_name" placeholder="Your name" required/>
                        <input type="email" name="_replyto" placeholder="Your email" required/>
                        <textarea name="message" placeholder="Type your message" required></textarea>
                        <button type="submit">Send</button>
                        </form>
                    </div>
            </div>
        </div>
    </div>
    )
}
/*  {message && <span>Thanks, I will reply as soon as possible</span>} */