/* eslint-disable react/no-unescaped-entities */
import { Tab } from '@headlessui/react'
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/bundle';

export const GameDetails = ({ data, screenshots }) => {
    return (
    <div className="text-houm-black flex flex-col">
        <div className="flex flex-col justify-center items-center relative">
            <Image src={ data.background_image } 
                alt={ data.name } 
                width="1920" height="600" 
                placeholder="blur" blurDataURL={ data.background_image } 
                className="rounded-xl object-cover object-top" 
                priority
            />
            {
            data.metacritic &&
            <div className="absolute top-3 right-3 bg-houm-white rounded-2xl h-20 w-20 lg:h-30 lg:w-30 flex justify-center items-center text-3xl lg:text-5xl text-houm-red">
                { data.metacritic }
            </div>
            }
        </div>
        <h2 className="text-center text-2xl lg:text-6xl text-houm-red my-5 font-bold">
            { data.name }
        </h2>
        <div className="bg-houm-white rounded-2xl mx-3 mb-5">
        <Tab.Group defaultIndex={0}>
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
                    Specs
                </Tab> 
                <hr className="block md:hidden border-[1px] border-houm-salmon w-[90%] mx-auto rounded-full"/>
                <Tab className=" w-full hover:bg-houm-redHover py-3 md:py-4 transition duration-300 border-r-0 md:border-r-2 border-houm-salmon ">
                    Screenshots
                </Tab> 
                <hr className="block md:hidden border-[1px] border-houm-salmon w-[90%] mx-auto rounded-full"/>
                <Tab className=" w-full hover:bg-houm-redHover py-3 md:py-4 transition duration-300">
                    Genres
                </Tab> 
            </Tab.List>
            <Tab.Panels className="rounded-b-2xl p-5 border-[1px] border-houm-red ">
                <Tab.Panel>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 justify-items-center">
                        <div className="col-span-3  ">
                            <p className="text-center text-3xl text-houm-red font-bold mb-4">
                                Description:
                            </p>
                            <div className="prose-lg" dangerouslySetInnerHTML={{__html: data.description}} ></div>
                        </div>
                        <div className="flex flex-col col-span-2"> 
                            <p className="text-center text-3xl text-houm-red font-bold mb-4">
                                General info
                            </p>
                            <p className="mb-2">
                                Publisher: 
                                <span className="text-houm-red">
                                    { data?.publishers[0]?.name!=null ? data?.publishers[0]?.name : <span>Not found</span> }
                                </span>
                            </p>
                            <p className="my-2">
                                Developer: 
                                <span className="text-houm-red">
                                    { data?.developers[0]?.name!=null ? data?.developers[0]?.name : <span>Not found</span> }
                                </span>
                            </p>
                            <p className="my-2">
                                Classification: 
                                <span className="text-houm-red">
                                    { data.esrb_rating?.name ? data.esrb_rating?.name : <span>Not found</span> }
                                </span>
                            </p>
                            <p className="my-2">
                                Release date: 
                                <span className="text-houm-red">
                                    { data.released }
                                </span>
                            </p>
                            <p className="my-2">
                                Web site: 
                                {
                                    data.website!=null ?
                                    <a href={data.website} target="_blank" rel="noopener noreferrer" className="mx-2 text-houm-red">Here.</a> :
                                    <span>Not found</span>
                                }
                            </p>
                        </div>
                    </div>
                </Tab.Panel>
                <Tab.Panel>
                    <div className="flex flex-col md:flex-row  justify-evenly">
                        {data.ratings.map((rating)=>(
                            <div key={rating.id} className="flex flex-col border-2 rounded-xl border-houm-red p-2 my-2 mx-1 md:my-0">
                                <p className="uppercase text-center">
                                    <span className="font-bold text-houm-red"> { rating.title } </span>
                                </p>
                                <p className=" text-center">
                                    <span className="font-bold"> { rating.count } </span> Votes in total
                                </p>
                                <p className=" text-center">
                                    <span className="font-bold"> { rating.percent }% </span> 
                                    of users voted this.
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="my-5 mx-0 md:mx-12 group relative">
                        What is this? &#x1F6C8;
                        <div className=" absolute hidden group-hover:block bg-houm-black text-houm-white p-5 rounded-xl">
                            <p>
                                <span className="font-bold text-houm-red"> Exceptional </span> is equal to 4 of 4⭐
                            </p>
                            <p>
                                <span className="font-bold text-houm-red"> Recommended </span> is equal to 3 of 4⭐
                            </p>
                            <p>
                                <span className="font-bold text-houm-red"> Meh </span> is equal to 2 of 4⭐
                            </p>
                            <p>
                                <span className="font-bold text-houm-red"> Skip </span> is equal to 1 of 4⭐
                            </p>
                        </div>
                    </div>
                </Tab.Panel>
                <Tab.Panel>
                    {data.platforms.map((plat)=>(
                        <div key={plat.platform.id}>
                            <p className="text-houm-red">{plat.platform.name}</p>
                            <div className="grid grid-cols-2 gap-4">
                            {
                                plat.requirements?.minimum ? 
                                <p className="">{ plat.requirements?.minimum }</p> : 
                                <span>Minimum: Nothing found</span>
                            }
                            { 
                                plat.requirements?.recommended ? 
                                <p className="">{ plat.requirements?.recommended }</p> : 
                                <span>Recommended: Nothing found</span>
                            }
                            </div>
                        </div>
                    ))}
                </Tab.Panel>
                <Tab.Panel className="">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        className="rounded-xl overflow-hidden"
                    >
                    {screenshots?.results.map((img)=>(
                        <SwiperSlide key={img.id} className="flex items-center justify-center">
                            <Image src={img.image} alt={data.name}
                                width="1280" height="720" 
                                placeholder="blur" blurDataURL={img.image} 
                                className="rounded-xl object-cover w-full" 
                            />
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </Tab.Panel>
                <Tab.Panel>
                    Genres
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
        </div>
    </div>
    )
}
