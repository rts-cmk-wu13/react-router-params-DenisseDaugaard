import { useEffect, useState } from "react";
import Header from "./components/Header";
import { Link } from "react-router";

export default function MyPets() {
    const [users, setUsers] = useState(null);
    const [dogs, setDogs] = useState(null);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        Promise.all([
            fetch("http://localhost:4000/user").then(res => res.json()),
            fetch("http://localhost:4000/dogs").then(res => res.json())
        ])
        .then(([userData, dogData]) => {
            setUsers(userData);
            setDogs(dogData);
        })
        .finally(() => setIsloading(false));
    }, []);

    console.log(dogs);
    

    if (isLoading) return <p>Loading ...</p>;

    return (
        <>
            <Header img={users.image} text={users.location} />
      
          
                {dogs.map((dog) => (
                    <section  key={dog.id}  className="dog__card">
                     <Link to ={`/my-pets/${dog.id}`}>
                    <div>
                        <h2>{dog.breed}</h2>
                        <span>{dog.location}</span>
                        <p>{dog.short_description}</p>
                    </div>
                    
                    <img src={dog.image} alt='image of a dog '/>
                    
                    </Link>
                 </section>
                ))}
           
        </>
    );
}
