import Image from 'next/image'
import Link from 'next/link'

export const MainItemCard = ({image,title,score,platform,release,url}) => {
    const plats = platform.map((plat)=>(
        <div key={plat.platform.id}>
            {plat.platform.name==="PC"&&<Image src="/icons/pc.svg" width="30" height="30" alt="PC SVG"/>}
            {plat.platform.name==="PlayStation"&&<Image src="/icons/ps.svg" width="30" height="30" alt="PS SVG"/>}
            {plat.platform.name==="Xbox"&&<Image src="/icons/xbox.svg" width="30" height="30" alt="XBOX SVG"/>}
            {plat.platform.name==="Nintendo"&&<Image src="/icons/switch.svg" width="30" height="30" alt="NINTENDO SVG"/>}
            {plat.platform.name==="iOS"&&<Image src="/icons/ios.svg" width="30" height="30" alt="IOS SVG"/>}
            {plat.platform.name==="Android"&&<Image src="/icons/android.svg" width="30" height="30" alt="ANDROID SVG"/>}
            {plat.platform.name==="Apple Macintosh"&&<Image src="/icons/mac.svg" width="30" height="30" alt="MAC SVG"/>}
            {plat.platform.name==="Linux"&&<Image src="/icons/linux.svg" width="30" height="30" alt="Linux SVG"/>}
            {plat.platform.name==="Atari"&&null}
            {plat.platform.name==="Commodore / Amiga"&&null}
            {plat.platform.name==="SEGA"&&null}
            {plat.platform.name==="3DO"&&null}
            {plat.platform.name==="Neo Geo"&&null}
            {plat.platform.name==="Web"&&null}
        </div>
    ))
    return (
        <Link href={`/games/${url}`} >
            <a className="bg-houm-beige hover:bg-houm-salmon rounded-xl overflow-hidden flex flex-col relative text-houm-black transition duration-300 border-[1px]border-houm-gayBorder hover:border-houm-red group hover:scale-[1.02] shadow-lg">
                <div className="w-full overflow-hidden">
                    <Image src={image} width="1920" height="1080"  alt="ffxiv" className="object-cover absolute hover:scale-110 transition duration-300"/>  
                </div>
                {score&&<span className="m-2 absolute top-0 right-0 text-houm-red bg-houm-white group-hover:bg-houm-salmon group-hover:border-houm-red border-4 rounded-full flex items-center justify-center transition duration-300 pt-1 h-10 w-10">
                    {score}
                </span>}
                <div className="flex flex-col justify-between">
                    <span className="my-2 text-center text-houm-black font-bold text-lg">
                        {title}
                    </span>
                    <div className="flex flex-row overflow-hidden items-center justify-evenly">
                        {plats}
                    </div>
                    <span className="my-2 text-center text-gray-500">
                        Release date: {release}
                    </span>
                </div>
            </a>
        </Link>
    )
}
