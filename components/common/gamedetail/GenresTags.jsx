import { Tab } from "@headlessui/react"
import Link from 'next/link';
export const GenresTags = ({data}) => {
    if(!data.description){return null}
    return (
        <Tab.Panel>
            <div className="grid grid-cols-2 gap-4 ">
                <div className="flex flex-col items-center col-span-2 md:col-span-1">
                    <p className="text-center text-3xl text-houm-red font-bold mb-4">Genres:</p>
                    { data.genres.map((genre)=>(
                        <Link key={genre.id} href={ `/search?genre=${genre.slug}` }>
                            <a className="underline">
                                { genre.name }
                            </a>
                        </Link>
                    )) }
                </div>
                <div className="flex flex-col items-center col-span-2 md:col-span-1">
                    <p className="text-center text-3xl text-houm-red font-bold mb-4">Tags:</p>
                    { data.tags.map((tag)=>(
                        <Link key={tag.id} href={ `/search?tag=${tag.slug}` }>
                            <a className="underline">
                                { tag.name }
                            </a>
                        </Link>
                    )) }
                </div>
            </div> 
        </Tab.Panel>
    )
}
