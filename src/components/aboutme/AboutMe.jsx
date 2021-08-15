import "./aboutMe.scss"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {ReactComponent as Javasvg} from '../../assets/javasvg.svg';
import {ReactComponent as JSsvg} from '../../assets/javascriptsvg.svg';
import {ReactComponent as Sassvg} from '../../assets/icons8-sass.svg';
import {ReactComponent as HTMLsvg} from '../../assets/htmlsvg.svg';
import {ReactComponent as Reactsvg} from '../../assets/reactsvg.svg';
import {ReactComponent as Git8} from '../../assets/icons8-git.svg';
import CVFoto from '../../assets/CV-Foto-Farg.jpeg';

export default function AboutMe() {
    return (
        <div className="aboutMe" id="aboutMe">
                    <h2>About me</h2>
                <div className="bottom">
                    <div className="bottomleft">
                    
                        <div className="right">
                            <img src={CVFoto} alt=""/>
                        </div>
                        </div>
                    <div className="bottomright">
                        <div className="border">
                        <div className="topbottomright">

                        </div>
                        <div className="botbottomright">
                            <div className="info">
                                <p>I am a front end developer with a passion for creating and coding. 
                                    I do mostly frontend but I'm always willing to expand my knowledge in unknown areas.
                                    Feel free to look at my projects if you scroll down or if you have seen enough  
                                </p>
                                <a href="#contact" className="CTA">Lets Talk</a>
                            </div>
                            <div className="techstack">


                            <div className="javas">
                                <Javasvg className="Ikon"/>
                                Java
                            </div>
                            <div className="jss">
                                <JSsvg className="Ikon"/>
                                JavaScript</div>
                            <div className="htmls">
                                <HTMLsvg className="Ikon"/>
                                HTML5</div>
                            <div className="reacts">
                                <Reactsvg className="Ikon"/>
                                React</div>
                            <div className="sass">
                                <Sassvg className="Ikon"/>
                                SASS</div>
                            <div className="git">
                                <Git8 className="Ikon"/>
                                Git
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#designs">
                    <ExpandMoreIcon className="icon"/>
                </a>
            </div>
    )
}
