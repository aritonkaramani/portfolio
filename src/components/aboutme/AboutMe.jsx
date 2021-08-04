import "./aboutMe.scss"

export default function AboutMe() {
    return (
        <div className="aboutMe" id="aboutMe">
            <div className="container">
                <div className="bottom">
                <div className="bottomleft">
                       <p>Hi! I'm Ariton, a 25 year old front end developer with a passion for tech. I love to solve problems using
                           code and I love working with projects and companies that are very close to the customer. To the right you can see
                           my skillset and I would love to hear more from you, so <button className="CTA">Lets Talk!</button>
                       </p>
                    </div>
                <div className="bottomright">
                        <ul>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>SASS</li>
                            <li>HTML</li>
                        </ul>
                    </div>
                    </div>
            </div>
        </div>
    )
}
