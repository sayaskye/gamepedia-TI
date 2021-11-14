import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { GameDetails } from './GameDetails'

import useGameDetailStore from '../../Zustand/stores/gameDetail'
import shallow from 'zustand/shallow'

import { Error } from '../common/Error'
import { Spinner } from '../common/Spinner'
export const Game = () => {
    const {query:{id}} = useRouter()
    const {game, screenshots, getGameDetail, isLoading, hasError} = useGameDetailStore(state => ({
        game:state.game,
        screenshots:state.screenshots,
        getGameDetail:state.getGameDetail,
        isLoading:state.isLoading, 
        hasError:state.hasError
    }),shallow)

    useEffect(()=>{
        if(id!=undefined){
            getGameDetail(id).catch(null)
        } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])

    if(!game){return null}
    if(!screenshots){return null}
    return (
        <>
            {
                !isLoading ?
                <>
                    <GameDetails data={game} screenshots={screenshots}/>
                    {hasError&&<Error/>}
                </> :
                <Spinner/>
            }
        </>
    )
}
