import { Tab } from "@headlessui/react"
export const Ratings = ({data}) => {
    if(!data.description){return null}
    return (
        <Tab.Panel>
            <div className="flex flex-col md:flex-row  justify-evenly">
                {data.ratings.map((rating)=>(
                    <div key={rating.id} className="flex flex-col border-2 rounded-xl border-houm-red p-2 my-2 mx-1 md:my-0 text-center hover:bg-houm-salmon transition duration-300">
                        <p className="uppercase">
                            <span className="font-bold text-houm-red"> { rating.title } </span>
                        </p>
                        <p>
                            <span className="font-bold"> { rating.count } </span> Votes in total
                        </p>
                        <p>
                            <span className="font-bold"> { rating.percent }% </span> of users voted this.
                        </p>
                    </div>
                ))}
            </div>
            <div className="my-5 mx-0 md:mx-12 group relative ">
                What is this? &#x1F6C8;
                <div className=" absolute hidden group-hover:block  bg-houm-black text-houm-white p-5 rounded-xl">
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
    )
}
