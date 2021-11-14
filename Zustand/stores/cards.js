import create from "zustand";
import apiCall from "../../functions";
import { baseUrl, apiKey } from "../../constants";

const useCardsStore = create(
    (set,get)=>({
        getMainCards : async ()=>{
            try {
                set({isLoading:true, hasError:false,})
                const result = await apiCall({url:`${baseUrl}games?key=${apiKey}`})
                //const result = await apiCall({url:`${baseUrl}games?developers=nintendo&key=${apiKey}`})
                set({cards:result.results})
            } catch (error) {
                set({cards:[], hasError:true})
            } finally {
                set({isLoading:false})
            }
        },
        cards:[],
        isLoading:false,
        hasError:false,
    })
);

export default useCardsStore;