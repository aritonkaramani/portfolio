import "./menu.scss"

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
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#projects">Projects</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}> 
                <a href="#contact">Contact</a>
            </li>
            </ul>
            
        </div>
    )
}

//fixa så att onClick={()=>setMenuOpen(false)} är en component som du kallar på istället.
