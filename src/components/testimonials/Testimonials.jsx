import "./testimonials.scss"
import ArrowBack from '@material-ui/icons/ArrowBackIos';
import ArrowForward from '@material-ui/icons/ArrowForwardIos';
import { useState } from "react";

export default function Testimonials() {
    const [currentSlide,setCurrentSlide] = useState(0);
    const data = [{
        id: "1",
        icon: "",
        title: "My Portfolio",
        desc:
        "My Portfolio project that is the website you're currently looking at. Made using Javascript, SASS, React, HTML and Material UI ",
        img: "",
        git: "",
        preview: "",
    },
    {
        id: "2",
        icon: "",
        title: "Pharmacy Landing Page",
        desc:
        "A pharmacy landing page I made for a local pharmacy, the page utilizes SASS, React, HTML, Javascript and Material UI",
        img: "",
        git: "",
        preview: "",
    },
    {
        id: "3",
        icon: "",
        title: "React To-DO list",
        desc: 
        "A TO-DO list created with react",
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
        <div className="testimonials" id="testimonials">
            <div 
            className="slider" 
            style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map(d =>(
                    <div className="container">
                    <div className="item">
                    <div className="left">
                        <div className="leftContainer">
                            <div className="imgContainer">
                                <img src={d.img} alt="" />
                            </div>
                            <h2>{d.title}</h2>
                            <p>{d.desc}</p>
                            <span>Projects</span>
                        </div>
                    </div>
                    <div className="right">
                        <img src="" alt="" />
                    </div>
                    </div>
                </div>
                ))}
            </div>
            <ArrowBack className="arrow Left" onClick={()=>handleClick("left")}/>
            <ArrowForward className="arrow Right" onClick={()=>handleClick("right")}/>
        </div>
    )
}
