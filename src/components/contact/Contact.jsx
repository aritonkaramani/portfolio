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
                <h2>Contact</h2>
                <form action="mail.php" method="post" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Your name"/>
                    <input type="email" name="emailaddress" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I will reply as soon as possible</span>}
                </form>
            </div>
            </div>
        </div>
    )
}
