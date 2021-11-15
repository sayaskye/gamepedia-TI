import Link from 'next/link'
import { SearchBar } from "../common/SearchBar"
export const Main = ({children, title}) => {
    return (
        <>
            <Link href="/"><a><h1 className=" text-center text-houm-white text-4xl md:text-6xl py-10 bg-houm-red px-4">{title}</h1></a></Link>
            <hr className="border-houm-red rounded-xl"/>
            <div className="container mx-auto grid grid-cols-4 my-10 gap-4">
                <div className="col-span-4 lg:col-span-1 bg-houm-white/40 backdrop-blur-sm rounded-xl">
                    <SearchBar/>
                </div>
                <div className="col-span-4 lg:col-span-3 bg-houm-white/40 backdrop-blur-sm rounded-xl">
                    {children}
                </div>
            </div>
            <div className="w-full bg-houm-red py-10 flex flex-col justify-center items-center text-houm-white">
                <p>The data used come from: </p>
                <a href="https://rawg.io/apidocs" target="_blank" rel="noopener noreferrer">https://rawg.io/apidocs</a>
            </div>
        </>
    )
}
