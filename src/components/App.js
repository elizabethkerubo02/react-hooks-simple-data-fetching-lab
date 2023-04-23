// create your App component here
import react, {useEffect, useState} from "react";

function App()  {
    const [dogImg, setDogImg] = useState(null);
    const [loading, setLoading] = useState(true);

 useEffect(() =>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then (data =>{
        setDogImg(data.message);
        setLoading(false);
    });

 }, []);

 if (loading) {
    return (
    <p>Loading ...</p>)
 }


    return ( 
        <div className="dog">
            <img src={dogImg} alt="A Random Dog" />
        </div>
     );
}
 
export default App;