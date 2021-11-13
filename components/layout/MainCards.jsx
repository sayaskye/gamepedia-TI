import { useEffect, useState } from "react"
import { MainItemCard } from "../common/MainItemCard"
import apiCall from "../../functions"
import { baseUrl, apiKey } from "../../constants"
export const MainCards = () => {
    const [games, setGames]=useState([])
    useEffect(()=>{
        const getGames = async() => {
            const result = await apiCall({url:`${baseUrl}games?key=${apiKey}`})
            setGames(result.results)
        }
        getGames(); 
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-2">
            {games.map((game)=>(
                <MainItemCard 
                    key={game.id} 
                    image={game.background_image} 
                    title={game.name} 
                    score={game.metacritic} 
                    platform={game.parent_platforms} 
                    release={game.released} 
                    url={game.slug}
                />
            ))}
        </div>
    )
}
