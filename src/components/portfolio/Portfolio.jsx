import "./portfolio.scss";
import FeaturedPortfolioWebsite from "../../assets/portfolioweb.png";
import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from "react";
import { featuredPortfolio, webAppPortfolio, worksPortfolio } from "../../data";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function Portfolio({popUp,setPopUp}) {

    const [selected,setSelected] = useState("featured");
    const [data, setData] = useState([])
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "webPortfolio",
            title: "Web App",
        },
        {
            id: "test3",
            title: "WIP",
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

            default:
                setData(featuredPortfolio);
        }
            },[selected])

    return (
        <div className="portfolio" id="portfolio">
             <div className="card">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList 
                    title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected}
                    id={item.id}/>
                ))}
            </ul>
            
                <div className="container">
                    {data.map(d=>(
                        <div className="item">
                            {d.img}
                        <h3>{d.title}</h3>
                        </div>
                    ))}           
                </div>
            </div>
            <a href="#testimonials">
                    <ExpandMoreIcon className="icon"/>
            </a>
        </div>
    )
}
