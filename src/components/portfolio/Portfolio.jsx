import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from "react";
import { featuredPortfolio, webAppPortfolio, worksPortfolio, webApps } from "../../data";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Slide } from "react-awesome-reveal";

export default function Portfolio() {


    const [selected,setSelected] = useState("featured");
    const [data, setData] = useState([])
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "webPortfolio",
            title: "Websites",
        },
        {
            id: "test3",
            title: "Cards",
        },
        {
            id:"webApps",
            title: "Web Apps"
        }
    ];

    useEffect(()=> {
        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "webPortfolio":
                setData(webAppPortfolio);
                break;
            case "test3":
                setData(worksPortfolio);
                break;
            case "webApps":
                setData(webApps);
                break;

            default:
                setData(featuredPortfolio);
        }
            },[selected])

    return (
        <div className="portfolio" id="designs">
            <h2>Designs</h2>
            <ul>
                
                {list.map((item,index)=>(
                    <PortfolioList 
                    title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected}
                    id={item.id}
                    key={index}/>
                ))}
            </ul>
            
            <Slide duration="2000">
                <div className="container">
                    {data.map(d=>(
                        <div className="item">
                            {d.img}
                        <h3>{d.title}</h3>
                        <div className="smallContain">
                        <div className="git" onClick={()=>{
                            window.open(d.git,"_blank")
                        }
                            
                        }>GitHub</div>
                        <div className="live" onClick={()=>{
                            window.open(d.live,"_blank")
                        }
                            
                        }>Live Preview</div>
                        </div>
                        </div>
                    ))}
                </div>
                </Slide>
                <a href="#projects">
                    <ExpandMoreIcon className="icon"/>
                </a>

            </div>
    )
}
