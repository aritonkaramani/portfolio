import "./testimonials.scss"
import ArrowBack from '@material-ui/icons/ArrowBackIos';
import ArrowForward from '@material-ui/icons/ArrowForwardIos';
import { useState } from "react";
import { LocalPharmacy } from "@material-ui/icons";
import { List } from "@material-ui/icons";
import { Work } from "@material-ui/icons";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { GitHub } from "@material-ui/icons";
import { Visibility } from "@material-ui/icons";
import webportimg from '../../assets/webport-min.jpg';
import apotekjoni from '../../assets/apotekjoni-min.jpg';

export default function Testimonials() {
    const [currentSlide,setCurrentSlide] = useState(0);
    const data = [{
        id: "1",
        icon: <Work/>,
        title: "My Portfolio",
        desc:
        "The portfolio website currently being browsed. Made using Javascript, SASS, React, HTML and Material UI ",
        img: webportimg,
        git: "https://github.com/aritonkaramani/portfolio",
        preview: "https://aritonkaramani.github.io/portfolio",
    },
    {
        id: "2",
        icon: <LocalPharmacy/>,
        title: "Pharmacy Landing Page",
        desc:
        "A pharmacy landing page I made for a local pharmacy, the page utilizes SASS, React, HTML, Javascript and Material UI",
        img: apotekjoni,
        git: "https://github.com/aritonkaramani/apotekjoni",
        preview: "https://aritonkaramani.github.io/apotekjoni",
    },
    {
        id: "3",
        icon: <List/>,
        title: "React To-DO list",
        desc: 
        "A TO-DO list created with React. Utilizes SASS, JavaScript",
        img: "",
        git: "",
        preview: "",
    },
];

    const handleClick = (way)=>{
        way === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2)
        : setCurrentSlide(currentSlide < data.length -1 ? currentSlide +1 : 0)
    };
    return (
        <div className="testimonials" id="projects">
            <div 
            className="slider" 
            style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map(d =>(
                    <div className="container">
                    <div className="item">
                    <div className="left">
                        <div className="leftContainer">
                            <div className="imgContainer">
                                {d.icon}
                            </div>
                            <h2>{d.title}</h2>
                            <p>{d.desc}</p>
                            <span>
                                <GitHub className="iconLink" onClick={(e)=> {
                                    window.open(d.git,"_blank");
                                }}/>
                                <Visibility className="iconLink" onClick={(e)=>{
                                    window.open(d.preview,"_blank");
                                 } }/>
                            </span>
                        </div>
                    </div>
                    <div className="right">
                        <img src={d.img} alt="" />
                    </div>
                    </div>
                </div>
                ))}
            </div>
            <ArrowBack className="arrow Left" onClick={()=>handleClick("left")}/>
            <ArrowForward className="arrow Right" onClick={()=>handleClick("right")}/>
            <a href="#contact">
                    <ExpandMoreIcon className="icon"/>
            </a>
        </div>
    )
}
