import "./portfolio.scss";
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
            title: "Websites",
        },
        {
            id: "test3",
            title: "Cards",
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
        <div className="portfolio" id="designs">
            <h2>Designs</h2>
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

            </div>
    )
}
