import { useEffect, useState } from "react";
import api from "../../services/api";
//URL DA API: /movie/now_playing?api_key=012df55dd5a1c36d9914c9c76b0294e5&language=pt-BR

function Home(){
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes(){
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: '012df55dd5a1c36d9914c9c76b0294e5',
          language: "pt-BR",
          page: 1,
        }
      })
      
      console.log(response.data.results)
    
    }

    loadFilmes();
  }, [])
  return (
    <h1> Bem Vindo a Home</h1>
  )
}

export default Home;