import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import apiCall from '../../functions'
import { baseUrl, apiKey } from '../../constants'
import { GameDetails } from './GameDetails'
export const Game = () => {
    const {query:{id}} = useRouter()
    const [game, setGame]=useState(null)
    const [screenshots, setScreenshots]=useState(null)

    useEffect(()=>{
        const getSources = async() => {
            const resultGame = await apiCall({url:`${baseUrl}games/${id}?key=${apiKey}`})
            const resultScreenshots = await apiCall({url:`${baseUrl}games/${id}/screenshots?key=${apiKey}`})
            setGame(resultGame) 
            setScreenshots(resultScreenshots) 
        }
        if(id!=undefined){
            getSources()
        } 
    },[id])

    if(!game){return null}
    return (
        <>
            {
                game.name!=null ?
                <GameDetails data={game} screenshots={screenshots}/> :
                <span>Cargando...</span>
            }
        </>
    )
}
