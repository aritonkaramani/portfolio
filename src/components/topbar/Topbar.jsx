import "./topbar.scss"
import {GitHub,LinkedIn} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Home</a> 
                    <div className="itemContainer">
                        <GitHub className="icon git" onClick={()=>{
                            window.open("https://www.github.com/aritonkaramani","_blank");
                        }}/>
                        <LinkedIn className="icon linkedIn" onClick={()=>{
                            window.open("https://www.linkedin.com/in/aritonkaramani","_blank");
                        }}/>
                    </div>
                </div>
                <div className="right">
                    <ul>
                        <li><a href="#aboutMe">About me</a></li>
                        <li><a href="#designs">Works</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    
                    
                    
                    
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
