import { useParams } from "react-router"
import { useEffect, useState } from "react";

export default function Details (){
    const {id} = useParams()

    //console.log( id);

    const [pet , setPet] = useState();
    const [isLoading , setIsLoading] = useState(true);

     useEffect(() => {
      
        fetch(`http://localhost:4000/dogs/${id}`)
        .then(res => res.json())
        .then((dogData) => {
            setPet(dogData);
        })
        .finally(() => setIsLoading(false));
    }, []);

    //console.log(pet);
    

    return isLoading ? (<p>Loading ....</p>) : (
      <>
      <h2>{pet.breed}</h2>
      <img src={pet.image} alt={`image of a ${pet.name}`} />

      </>

    )
}