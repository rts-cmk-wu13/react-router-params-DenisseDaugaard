import { LuBell } from "react-icons/lu";

export default function Header ({text, img}){
    return(
        <header className="my__pets__header">
            <img src={img} alt="profil image" />
            <nav>
                <p>{text}</p>
            </nav>
            <div className="bell__icon"><LuBell/></div>
            <nav className="pets__categories">
                <ul>
                    <li className="category">Cats</li>
                    <li className="category">Dogs</li>
                    <li className="category">Birds</li>
                    <li className="category">Others</li>
                </ul>
            </nav>
        </header>
    )
}