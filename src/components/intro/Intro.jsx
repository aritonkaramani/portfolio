import "./intro.scss";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'; //Down arrow
import { init } from 'ityped';
import { useEffect, useRef } from "react";
export default function Intro() {
    const textRef = useRef();

    var dots = 69;
    const final = [];

    for (let i = 0; i<dots; i++){
        final.push(<div key={i + 'h'} className="circle-container">
            <div className="circle" id={i} key={i}></div>
        </div>
            )
    }
    
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
                {final}
                <div className="wrapper">
                    
                    
                    <div className="title">
                        <h2>Hello! My name is</h2>
                        <h1>Ariton Karamani</h1>
                        <h3>
                            <span ref={textRef}></span>
                        </h3>
                    </div>
                </div>
                <a href="#aboutMe">
                    <ExpandMoreIcon className="icon"/>
                </a>
        </div>
    )
}
