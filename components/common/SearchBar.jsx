import { useEffect, useState } from "react";
import { ButtonLink } from "./ButtonLink";
import { useForm } from "../hooks/useForm"
import apiCall from "../../functions";
import { baseUrl, apiKey } from "../../constants";
export const SearchBar = () => {
    const [categories, setCategories]=useState([])
    useEffect(()=>{
        const getCategories = async() => {
            const result = await apiCall({url:`${baseUrl}genres?key=${apiKey}`})
            setCategories(result.results)
        }
        getCategories(); 
    },[])

    const [ { search }, handleInputChange, reset ] = useForm( { search: '' } );

    const handleSubmitText = (e) => {
        e.preventDefault();
        if ( search.trim().length <= 1 ) {
            return;
        }
        //TODO add logic here once design is done
        reset();
    }

    const handleSubmitDate = (e) => {
        e.preventDefault();

        //TODO add logic here once design is done
        alert("Inicio: "+start.value + " " + "Final: " +end.value)
    } 
    
    return (
        <>
            <form className="pt-10 w-full flex flex-col  justify-center" onSubmit={ handleSubmitText }>
                <span className="text-center text-houm-black font-bold text-xl mb-2">Search with text</span>
                <input 
                    className="border-houm-red/50 border-2 rounded-lg p-2 bg-houm-beige text-houm-black w-[80%] mx-auto focus:outline-none"
                    type="text" 
                    name="search" 
                    placeholder="Search..."
                    value={ search }
                    onChange={ handleInputChange }
                />
            </form>
            <form className="bg-houm-beige border-houm-red/50 border-2 w-[80%] mt-10 rounded-lg flex flex-col p-3" onSubmit={ handleSubmitDate }>
                <span className="text-center text-houm-black font-bold text-xl mb-2">Search with dates</span>
                <input 
                    className="rounded-lg p-3 focus:outline-none cursor-text"
                    type="date" id="start" name="trip-start" 
                />
                <input 
                    className="rounded-lg p-3 focus:outline-none cursor-text mt-2"
                    type="date" id="end" name="trip-end" 
                />

                <input 
                    className="text-houm-black hover:text-houm-salmon bg-houm-salmon hover:bg-houm-red  rounded-lg transition duration-300 mt-2 py-2 cursor-pointer" 
                    type="submit" value="Send"
                />
            </form> 
            <div className="border-houm-red/50 border-2 bg-houm-beige w-[80%] mt-10 rounded-lg flex flex-col p-2">
                <span className="text-center text-houm-black font-bold text-xl mb-2">Search with categories</span>
                {categories.map((genre)=>(
                        <ButtonLink key={genre.id} url={genre.slug} name={genre.name}/>
                    ))}
            </div>
        </>
    )
}