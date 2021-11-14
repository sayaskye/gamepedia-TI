import { Tab } from "@headlessui/react"
export const Specs = ({data}) => {
    if(!data.description){return null}
    return (
        <Tab.Panel>
            {data.platforms.map((plat)=>(
                <div key={plat.platform.id}>
                    <p className="text-houm-red">{plat.platform.name}</p>
                    <div className="grid grid-cols-2 gap-4">
                    {
                        plat.requirements?.minimum ? 
                        <p className="col-span-2 md:col-span-1">{ plat.requirements?.minimum }</p> : 
                        <span>Minimum: Nothing found</span>
                    }
                    { 
                        plat.requirements?.recommended ? 
                        <p className="col-span-2 md:col-span-1">{ plat.requirements?.recommended }</p> : 
                        <span>Recommended: Nothing found</span>
                    }
                    </div>
                </div>
            ))}
        </Tab.Panel>
    )
}
