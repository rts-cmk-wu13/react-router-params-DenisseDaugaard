import { Link } from "react-router"
import Button from "./components/Button"

export default function Home(){
    return(
        <article className="home">
            <figure>
                <img src="/assets/Animal.svg" alt="image of a cat" />
            </figure>

            <section className="header">
                <h1>My Pets</h1>
                <p>Taking care of a pet is my favorite, it helps me to gaimr stress and fatigue.</p>
            </section>
          
           <Link to="my-pets">
            <button className="main__btn">Skip</button>
           </Link>
           
        </article>
    )
}