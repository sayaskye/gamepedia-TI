import { Tab } from '@headlessui/react'

export const TabList = () => {
    return (
        <Tab.List className="flex flex-col md:flex-row justify-evenly bg-houm-red rounded-t-2xl text-houm-beige border-[1px] border-houm-red overflow-hidden">
            <Tab className=" w-full hover:bg-houm-redHover py-3 md:py-4 transition duration-300 border-r-0 md:border-r-2 border-houm-salmon ">
                General
            </Tab> 
            <hr className="block md:hidden border-[1px] border-houm-salmon w-[90%] mx-auto rounded-full"/>
            <Tab className=" w-full hover:bg-houm-redHover py-3 md:py-4 transition duration-300 border-r-0 md:border-r-2 border-houm-salmon ">
                Ratings
            </Tab> 
            <hr className="block md:hidden border-[1px] border-houm-salmon w-[90%] mx-auto rounded-full"/>
            <Tab className=" w-full hover:bg-houm-redHover py-3 md:py-4 transition duration-300 border-r-0 md:border-r-2 border-houm-salmon ">
                Specs and Platforms
            </Tab> 
            <hr className="block md:hidden border-[1px] border-houm-salmon w-[90%] mx-auto rounded-full"/>
            <Tab className=" w-full hover:bg-houm-redHover py-3 md:py-4 transition duration-300 border-r-0 md:border-r-2 border-houm-salmon ">
                Screenshots
            </Tab> 
            <hr className="block md:hidden border-[1px] border-houm-salmon w-[90%] mx-auto rounded-full"/>
            <Tab className=" w-full hover:bg-houm-redHover py-3 md:py-4 transition duration-300">
                Genres and tags
            </Tab> 
        </Tab.List>
    )
}
