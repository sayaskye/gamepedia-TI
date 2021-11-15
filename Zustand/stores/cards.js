import create from "zustand";
import apiCall from "../../functions";
import { baseUrl, apiKey } from "../../constants";

const useCardsStore = create(
    (set,get)=>({
        getMainCards : async ()=>{
            try {
                set({isLoading:true, hasError:false,})
                const result = await apiCall({url:`${baseUrl}games/lists/popular?key=${apiKey}&page_size=20`})
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
        getSearchCards : async (params)=>{
            if(!params) return;
            try {
                set({isLoading:true, hasError:false,})
                const result = await apiCall({url:`${baseUrl}search?key=${apiKey}&page_size=20&search=${params}`})
                set({cards:result.results})
            } catch (error) {
                set({cards:[], hasError:true})
            } finally {
                set({isLoading:false})
            }
        },
        getDatesCards : async (params)=>{
            if(!params) return;
            try {
                set({isLoading:true, hasError:false,})
                const result = await apiCall({url:`${baseUrl}games?key=${apiKey}&page_size=20&dates=${params}`})
                set({cards:result.results})
            } catch (error) {
                set({cards:[], hasError:true})
            } finally {
                set({isLoading:false})
            }
        },
        getGenreCards : async (params)=>{
            if(!params) return;
            try {
                set({isLoading:true, hasError:false,})
                const result = await apiCall({url:`${baseUrl}games?key=${apiKey}&page_size=20&genres=${params}`})
                set({cards:result.results})
            } catch (error) {
                set({cards:[], hasError:true})
            } finally {
                set({isLoading:false})
            }
        },
        getTagCards : async (params)=>{
            if(!params) return;
            try {
                set({isLoading:true, hasError:false,})
                const result = await apiCall({url:`${baseUrl}games?key=${apiKey}&page_size=20&tags=${params}`})
                set({cards:result.results})
            } catch (error) {
                set({cards:[], hasError:true})
            } finally {
                set({isLoading:false})
            }
        },
    })
);

export default useCardsStore;