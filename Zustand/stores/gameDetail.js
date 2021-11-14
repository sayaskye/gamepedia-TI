import create from "zustand";
import apiCall from "../../functions";
import { baseUrl, apiKey } from "../../constants";

const useGameDetailStore = create(
    (set,get)=>({
        getGameDetail : async (id)=>{
            if(!id) return;
            try {
                set({isLoading:true, hasError:false,})
                const resultGame = await apiCall({url:`${baseUrl}games/${id}?key=${apiKey}`})
                const resultScreenshots = await apiCall({url:`${baseUrl}games/${id}/screenshots?key=${apiKey}`})
                set({game:resultGame, screenshots:resultScreenshots})
            } catch (error) {
                set({game:{}, screenshots:{}, hasError:true})
            } finally {
                set({isLoading:false})
            }
        },
        game:{},
        screenshots:{},
        isLoading:false,
        hasError:false,
    })
);

export default useGameDetailStore;