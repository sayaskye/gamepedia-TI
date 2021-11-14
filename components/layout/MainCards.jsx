import { useEffect } from 'react'
import { MainItemCard } from '../common/MainItemCard'
import { Spinner } from '../common/Spinner'
import { Error } from '../common/Error'

import useCardsStore from '../../Zustand/stores/cards'
import shallow from 'zustand/shallow'

export const MainCards = () => {
    const {cards, getMainCards, isLoading, hasError} = useCardsStore(state => ({
        cards:state.cards, 
        getMainCards:state.getMainCards, 
        isLoading:state.isLoading, 
        hasError:state.hasError
    }),shallow)

    useEffect(()=>{
        getMainCards().catch(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <>
            {!isLoading?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-2">
                {hasError && <Error/>}
                {cards.map((game)=>(
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
            </div>:
            <Spinner/>}
        </>
    )
}
