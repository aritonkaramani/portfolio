import "./aboutMe.scss"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ComputerIcon from '@material-ui/icons/Computer';

export default function AboutMe() {
    return (
        <div className="aboutMe" id="aboutMe">
            <div className="container">
                <div className="bottom">
                    <div className="bottomleft">
                        <h1>About Me</h1>
                            <p>Hi! I'm Ariton, a 25 year old front end developer with a passion for tech. I love to solve problems using
                           code and I love working with projects and companies that are very close to the customer. To the right you can see
                           my skillset and I would love to hear more from you, so <button className="CTA">Lets Talk!</button>
                            </p>
                        </div>
                    <div className="bottomright">
                        <div className="topbottomright">
                            <h1>Skills</h1>
                            <ComputerIcon className="logoIcon"/>
                        </div>
                        <div className="botbottomright">
                            <div className="javas">Java</div>
                            <div className="jss">JavaScript</div>
                            <div className="htmls">HTML</div>
                            <div className="reacts">React</div>
                            <div className="sass">SASS</div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#portfolio">
                    <ExpandMoreIcon className="icon"/>
            </a>
        </div>
    )
}
