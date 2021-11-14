import create from "zustand";
import apiCall from "../../functions";
import { baseUrl, apiKey } from "../../constants";

const useUiStore = create(
    (set,get)=>({
        menuState : (value)=>{
            set({menu:value})
        },
        getCats : async()=>{
            try {
                set({isLoading:true, errorMessage:"", hasError:false,})
                const result = await apiCall({url:`${baseUrl}genres?key=${apiKey}`})
                set({cats:result.results})
            } catch (error) {
                set({cats:[], hasError:true})
            } finally {
                set({isLoading:false})
            }
            
        },
        menu:true,
        cats:[],
        isLoading:false,
        hasError:false,
    })
);

export default useUiStore;