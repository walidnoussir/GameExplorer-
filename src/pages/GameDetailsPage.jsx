import axios from "axios";
import {useParams} from "react-router-dom"
import { useEffect ,useState } from "react";



function GameDetailsPage() {
  const [game ,setGeme] = useState()
  const {id} =useParams()

  useEffect(() =>{
async function fetchGeme(){

  const response = await axios.get(
   `https://api.rawg.io/api/games/${id}/`
  )
  setGeme(response.data)
  console.log(response);
  
}
fetchGeme()
} , [id])

 if(!game){
  return( <h3>Loading...</h3>)
 }
 return (<div>
  <h1>{game.name}</h1>
  </div>)
}

export default GameDetailsPage;
