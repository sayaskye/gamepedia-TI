import Router from "next/router";
import { useEffect } from "react";
import { ButtonLink } from "./ButtonLink";
import { Spinner } from "./Spinner";
import { Error } from "./Error";
import { useForm } from "../hooks/useForm"

import useUiStore from "../../Zustand/stores/ui";
import shallow from 'zustand/shallow'

export const SearchBar = () => {

    const {menu, menuState, cats, getCats, isLoading, hasError} = useUiStore(state => ({
        menu:state.menu, 
        menuState:state.menuState, 
        cats:state.cats, 
        getCats:state.getCats, 
        isLoading:state.isLoading, 
        hasError:state.hasError
    }),shallow)

    useEffect(()=>{
        if(!cats.length>0){getCats().catch(null)}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const [ { search }, handleInputChange, reset ] = useForm( { search: '' } );

    const handleSubmitText = (e) => {
        e.preventDefault();
        if ( search.trim().length <= 1 ) return;
        
        Router.push({
            pathname: '/search', 
            query: { search : search.toLowerCase()}
        })

        reset();
    }

    const handleSubmitDate = (e) => {
        e.preventDefault();
        const dataDates = `${start.value},${end.value}`
        
        Router.push({
            pathname: '/search', 
            query: { dates : dataDates}
        }) 
    } 

    return (
        <div className="flex flex-col justify-center items-center">
            <button 
            className="lg:hidden flex justify-center items-center w-10/12 justify-self-center h-12 bg-houm-red rounded-xl text-houm-white hover:bg-houm-redHover transition duration-300" 
            onClick={()=>{menuState(!menu)}}
            > 
                { 
                    menu?
                    <span className="w-full">Close menu</span>:
                    <span className="w-full">Open menu</span> 
                } 
            </button>
            <div className={menu?'flex flex-col items-center pb-10 w-full':'hidden'}>
                <form className="mt-4 w-full flex flex-col  justify-center" onSubmit={ handleSubmitText }>
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
                <form className="bg-houm-beige border-houm-red/50 border-2 w-[80%] mt-10 rounded-lg flex flex-col justify-center items-center p-3" onSubmit={ handleSubmitDate }>

                    <span className="text-center text-houm-black font-bold text-xl mb-2 flex flex-col justify-center items-center">Search with dates</span>

                    <input className="rounded-lg p-3 focus:outline-none cursor-text w-full"
                        type="date" id="start" name="trip-start"  />
                    <input className="rounded-lg p-3 focus:outline-none cursor-text mt-2 w-full"
                        type="date" id="end" name="trip-end"  />

                    <input className= "w-full text-houm-black hover:text-houm-salmon bg-houm-salmon hover:bg-houm-red  rounded-lg transition duration-300 mt-2 py-2 cursor-pointer" 
                        type="submit" value="Send"  />
                </form> 
                { !isLoading ? 
                <div className="border-houm-red/50 border-2 bg-houm-beige w-[80%] mt-10 rounded-lg flex flex-col p-2 ">
                    <span className="text-center text-houm-black font-bold text-xl mb-2">Search by genre</span>
                    {cats.map((genre)=>(
                        <ButtonLink key={genre.id} url={genre.slug} name={genre.name}/>
                    ))}
                    {hasError && <Error/>}
                </div> :
                <Spinner/> }
            </div>
        </div>
    )
}