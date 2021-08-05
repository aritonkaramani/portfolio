import "./aboutMe.scss"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ComputerIcon from '@material-ui/icons/Computer';
import {ReactComponent as Compsvg} from '../../assets/computersvgs.svg';
import {ReactComponent as Javasvg} from '../../assets/javasvg.svg';
import {ReactComponent as JSsvg} from '../../assets/javascriptsvg.svg';
import {ReactComponent as Sassvg} from '../../assets/sasssvg.svg';
import {ReactComponent as HTMLsvg} from '../../assets/htmlsvg.svg';
import {ReactComponent as Reactsvg} from '../../assets/reactsvg.svg';

export default function AboutMe() {
    return (
        <div className="aboutMe" id="aboutMe">
            <div className="container">
                <div className="bottom">
                    <div className="bottomleft">
                        <div className="left">
                            about me
                        </div>
                        <div className="right">
                            <ul>
                                <li>Name: <span>Ariton Karamani</span></li>
                                <li>Email: <span>ariton.karamani@gmail.com</span></li>
                                <li>Phone: <span>+46707548727</span></li>
                                <li>Date of birth: <span>1995/11/16</span></li>
                            </ul>
                        </div>
                        </div>
                    <div className="bottomright">
                        <div className="border">
                        <div className="topbottomright">
                            <h1>Tech Stack</h1>
                            <Compsvg className="logoIcon"/>
                        </div>
                        <div className="botbottomright">
                            <div className="javas">
                                <Javasvg />
                                Java
                            </div>
                            <div className="jss">
                                <JSsvg className="jsIkon"/>
                                JavaScript</div>
                            <div className="htmls">
                                <HTMLsvg className="htmlIkon"/>
                                HTML5</div>
                            <div className="reacts">
                                <Reactsvg className="reactIkon"/>
                                React</div>
                            <div className="sass">
                                <Sassvg className="sassIkon"/>
                                SASS</div>
                            </div>
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
