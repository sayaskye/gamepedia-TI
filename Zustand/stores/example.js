import create from "zustand";
import apiCall from "../../functions";
import { baseUrl, apiKey } from "../../constants";

const useExampleStore = create(
    (set,get)=>({
        getExamples : async (id)=>{
            if(!id) return;
            try {
                set({isLoading:true, errorMessage:"", hasError:false,})
                const exampleResult = await apiCall({url:`${baseUrl}games?key=${apiKey}`})
                set({examples:exampleResult})
            } catch (error) {
                set({examples:{}, hasError:true, errorMessage:"Algo ha pasado, verifica tu conexión..."})
            } finally {
                set({isLoading:false})
            }
        },
        examples:{},
        isLoading:false,
        errorMessage:"",
        hasError:false,
    })
);

export default useExampleStore;