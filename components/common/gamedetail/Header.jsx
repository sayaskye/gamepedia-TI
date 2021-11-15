import Image from 'next/image'

export const Header = ({data}) => {
    if(!data.description){return null}
    return (
        <>
            <div className="flex flex-col justify-center items-center relative px-1">
                <Image src={ data.background_image } 
                    alt={ data.name } 
                    width="1140" height="450" 
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
        </>
    )
}
