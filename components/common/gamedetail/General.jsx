import { Tab } from "@headlessui/react"

export const General = ({data}) => {
    if(!data.description){return null}
    return (
        <Tab.Panel>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 justify-items-center">
                <div className="col-span-5 md:col-span-3  ">
                    <p className="text-center text-3xl text-houm-red font-bold mb-4">
                        Description:
                    </p>
                    <div className="prose-lg" dangerouslySetInnerHTML={{__html: data.description}} ></div>
                </div>
                <div className="flex flex-col col-span-5 md:col-span-2 "> 
                    <p className="text-center text-3xl text-houm-red font-bold mb-4">
                        General info
                    </p>
                    <p className="mb-2">
                        Publisher: 
                        <span className="text-houm-red mx-1">
                            { data?.publishers[0]?.name!=null ? data?.publishers[0]?.name : <span>Not found</span> }
                        </span>
                    </p>
                    <p className="my-2">
                        Developer: 
                        <span className="text-houm-red mx-1">
                            { data?.developers[0]?.name!=null ? data?.developers[0]?.name : <span>Not found</span> }
                        </span>
                    </p>
                    <p className="my-2">
                        Classification: 
                        <span className="text-houm-red mx-1">
                            { data.esrb_rating?.name ? data.esrb_rating?.name : <span>Not found</span> }
                        </span>
                    </p>
                    <p className="my-2">
                        Release date: 
                        <span className="text-houm-red mx-1">
                            { data.released }
                        </span>
                    </p>
                    <p className="my-2">
                        Web site: 
                        {
                            data.website!=null ?
                            <a href={data.website} target="_blank" rel="noopener noreferrer" className="mx-1 text-houm-red">Here.</a> :
                            <span>Not found</span>
                        }
                    </p>
                </div>
            </div>
        </Tab.Panel>
    )
}
