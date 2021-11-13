/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Image from "next/image"
export const GameDetails = ({data}) => {
    return (
        <div className="text-houm-black flex flex-col">
            <div className="flex flex-col justify-center items-center relative">
                <Image src={data.background_image} alt={data.name} width="1920" height="600" className="rounded-xl object-cover object-top" priority/>
                {data.metacritic&&<div className="absolute top-3 right-3 bg-houm-white rounded-2xl h-20 w-20 lg:h-30 lg:w-30 flex justify-center items-center text-3xl lg:text-5xl text-houm-red">
                    {data.metacritic}
                </div>}
            </div>
            <h2 className="text-center text-2xl lg:text-6xl text-houm-red my-5 font-bold">{data.name}</h2>
            <div className="bg-houm-white rounded-2xl mx-3 mb-5">
            <Tab.Group defaultIndex={0}>
                <Tab.List className="flex flex-col md:flex-row justify-evenly bg-houm-red rounded-t-2xl text-houm-beige border-[1px] border-houm-red overflow-hidden">
                    <Tab className=" w-full border-r-0 md:border-r-2 border-houm-salmon hover:bg-houm-redHover py-2 md:py-4 transition duration-300">General</Tab> 
                    <hr className="block md:hidden border-[1px] border-houm-salmon w-[90%] mx-auto rounded-full"/>
                    <Tab className=" w-full border-r-0 md:border-r-2 border-houm-salmon hover:bg-houm-redHover py-2 md:py-4 transition duration-300">Ratings</Tab> 
                    <hr className="block md:hidden border-[1px] border-houm-salmon w-[90%] mx-auto rounded-full"/>
                    <Tab className=" w-full border-r-0 md:border-r-2 border-houm-salmon hover:bg-houm-redHover py-2 md:py-4 transition duration-300">Specs</Tab> 
                    <hr className="block md:hidden border-[1px] border-houm-salmon w-[90%] mx-auto rounded-full"/>
                    <Tab className=" w-full border-r-0 md:border-r-2 border-houm-salmon hover:bg-houm-redHover py-2 md:py-4 transition duration-300">Screenshots</Tab> 
                    <hr className="block md:hidden border-[1px] border-houm-salmon w-[90%] mx-auto rounded-full"/>
                    <Tab className=" w-full border-r-0 md:border-r-2 border-houm-salmon hover:bg-houm-redHover py-2 md:py-4 transition duration-300">Genres</Tab> 
                    <hr className="block md:hidden border-[1px] border-houm-salmon w-[90%] mx-auto rounded-full"/>
                    <Tab className=" w-full                                               hover:bg-houm-redHover py-2 md:py-4 transition duration-300">Reviews</Tab>
                </Tab.List>
                <Tab.Panels className="rounded-b-2xl p-5 border-[1px] border-houm-red ">
                    <Tab.Panel>
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                            <div className="col-span-3 prose-lg " dangerouslySetInnerHTML={{__html: data.description}} ></div>
                            <div className="flex flex-col col-span-2"> 
                                <p className="text-center text-3xl text-houm-red font-bold">General info</p>
                                <p className="my-2">Publisher: <span className="text-houm-red">{data.publishers[0].name}</span></p>
                                <p className="my-2">Developer: <span className="text-houm-red">{data.developers[0].name}</span></p>
                                <p className="my-2">Classification: <span className="text-houm-red">{data.esrb_rating.name}</span></p>
                                <p className="my-2">Release date: <span className="text-houm-red">{data.released}</span></p>
                                <p className="my-2">Web site: 
                                    <a href={data.website} target="_blank" rel="noopener noreferrer"
                                    className="mx-2 text-houm-red"> 
                                        Here.
                                    </a> 
                                </p>
                            </div>
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        Ratings
                    </Tab.Panel>
                    <Tab.Panel>
                        <p className=" text-houm-red text-3xl py-4">
                            Note! API is kinda messy in this part, sometimes it will just show a string, sometimes it will show a list.
                        </p>
                        {data.platforms.map((plat)=>(
                            <div key="plat.id">
                                {plat.platform.name=="PC"&&
                                <>
                                    <p className="text-houm-red">{plat.platform.name}</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        {plat.requirements?.minimum ? <p className="">{plat.requirements?.minimum}</p> : <span>Minimum: Nothing found</span>}
                                        {plat.requirements?.recommended ? <p className="">{plat.requirements?.recommended}</p> : <span>Recommended: Nothing found</span>}
                                    </div>
                                </>
                                }
                            </div>
                        ))}
                    </Tab.Panel>
                    <Tab.Panel>
                        Screenshots
                    </Tab.Panel>
                    <Tab.Panel>
                        Genres
                    </Tab.Panel>
                    <Tab.Panel>
                        Reviews
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
            </div>
        </div>
    )
}
