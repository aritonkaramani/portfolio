import "./menu.scss";
import {GitHub,LinkedIn} from "@material-ui/icons";

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " +(menuOpen && "active")}>
            <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#aboutMe">About me</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#designs">Designs</a>
            </li>
            <li className="projects" onClick={()=>setMenuOpen(false)}>
                <a href="#projects">Projects</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}> 
                <a href="#contact">Contact</a>
            </li>
            <li>
            <GitHub className="icon git" onClick={()=>{
                            window.open("https://www.github.com/aritonkaramani","_blank");
                        }}/>
            <LinkedIn className="icon linkedIn" onClick={()=>{
                            window.open("https://www.linkedin.com/in/aritonkaramani","_blank");
                        }}/>
            </li>
            </ul>
        </div>
    )
}

//fixa så att onClick={()=>setMenuOpen(false)} är en component som du kallar på istället.
