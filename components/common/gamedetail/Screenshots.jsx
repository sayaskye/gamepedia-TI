import Image from "next/image";
import { Tab } from "@headlessui/react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/bundle';
export const Screenshots = ({data,screenshots}) => {
    if(!data.name){return null}
    if(!screenshots?.results[0].id){return null}
    return (
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
    )
}
