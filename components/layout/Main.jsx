import { SearchBar } from "../common/SearchBar"
export const Main = ({children}) => {
    return (
        <div>
            <h1 className="w-full text-center text-houm-logo text-6xl py-10">Welcome to the Houm TI Gamepedia!</h1>
            <hr className="border-houm-red rounded-xl"/>
            <div className="container mx-auto grid grid-cols-4 my-10 gap-4">
                <div className="col-span-4 lg:col-span-1 bg-houm-white/40 backdrop-blur-sm rounded-xl pb-10 flex flex-col items-center ">
                    <SearchBar/>
                </div>
                <div className="col-span-4 lg:col-span-3 bg-houm-white/40 backdrop-blur-sm rounded-xl">
                    {children}
                </div>
            </div>
        </div>
    )
}
