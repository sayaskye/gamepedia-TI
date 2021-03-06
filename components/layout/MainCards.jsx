import { useEffect } from 'react'
import { MainItemCard } from '../common/MainItemCard'
import { Spinner } from '../common/Spinner'
import { Error } from '../common/Error'

import useCardsStore from '../../Zustand/stores/cards'
import shallow from 'zustand/shallow'

export const MainCards = ({ search, dates, genre, tag }) => {
    const {cards, getMainCards, getSearchCards, getDatesCards, getGenreCards, getTagCards, getInfiniteCards, isLoading, isLoadingMore, hasError} = useCardsStore(state => ({
        cards:state.cards, 
        getMainCards:state.getMainCards, 
        getSearchCards:state.getSearchCards,
        getDatesCards:state.getDatesCards,
        getGenreCards:state.getGenreCards,
        getTagCards:state.getTagCards,
        getInfiniteCards:state.getInfiniteCards,
        isLoading:state.isLoading, 
        isLoadingMore:state.isLoadingMore, 
        hasError:state.hasError
    }),shallow)

    useEffect(()=>{
        if(search!=undefined){
            getSearchCards(search).catch(null)
        }else{
            if(dates!=undefined){ 
                getDatesCards(dates).catch(null)
            }else{
                if(genre!=undefined){ 
                    getGenreCards(genre).catch(null)
                }else{
                    if(tag!=undefined){ 
                        getTagCards(tag).catch(null)
                    }else{
                        getMainCards().catch(null) 
                    }
                } 
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[search,dates,genre,tag])
    return (
        <>
            {!isLoading?
            <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-2">
                    {hasError && <Error/>}
                    {cards.length>0?
                        <>
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
                        </>:
                        <div className="col-span-full">
                            <Error/>
                        </div>
                    }
                </div>
                <div className="flex flex-col justify-center items-center">
                    {!isLoadingMore&&<button 
                    className="text-houm-white bg-houm-red hover:bg-houm-redHover rounded-lg transition duration-300 px-4 py-2 text-center my-10"
                    onClick={()=>{getInfiniteCards()}}>
                        Load more
                    </button>}
                    {isLoadingMore&&<Spinner/>}
                </div>
            </>:
            <Spinner/>}
        </>
    )
}
