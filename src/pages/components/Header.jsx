import { LuBell } from "react-icons/lu";

export default function Header (){
    return(
        <header className="my__pets__header">
            <img src="/assets/avatar.png" alt="profil image" />
            <nav>
                <p>New York</p>
            </nav>
            <div className="bell__icon"><LuBell/></div>
            <nav className="pets__categories"></nav>
        </header>
    )
}