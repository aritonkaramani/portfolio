import "./intro.scss";
import Logo from '../../assets/CV-Foto-Farg.jpeg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'; //Down arrow
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();
    
    useEffect(() =>{
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            typeSpeed: 100,
            strings: ["Front End Developer", "Tech Enthusiast", "Freelancer"]
        })
    },[])
    return (
        <div className="intro" id="intro">
            
            <div className="left">
                <div className="imgContainer">
                <img src={Logo} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello! I am</h2>
                    <h1>Ariton Karamani</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href="#aboutMe">
                    <ExpandMoreIcon className="icon"/>
                </a>
            </div>
        </div>
    )
}
