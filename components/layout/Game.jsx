import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import apiCall from '../../functions'
import { baseUrl, apiKey } from '../../constants'
import { GameDetails } from './GameDetails'
export const Game = () => {
    const {query:{id}} = useRouter()
    const [game, setGame]=useState(null)

    useEffect(()=>{
        const getGame = async() => {
            const result = await apiCall({url:`${baseUrl}games/${id}?key=${apiKey}`})
            setGame(result) 
        }
        if(id!=undefined){
            getGame();
        } 
    },[id])
    if(!game){return null}
    return (
        <>
            {game.name!="UNDEFINED"
            ?
            <GameDetails data={game}/>
            :
            <span>Cargando...</span>}
        </>
    )
}
