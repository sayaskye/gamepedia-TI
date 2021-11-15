import { Tab } from '@headlessui/react'

import { Header } from '../common/gamedetail/Header';
import { TabList } from '../common/gamedetail/TabList';
import { General } from '../common/gamedetail/General';
import { Ratings } from '../common/gamedetail/Ratings';
import { Specs } from '../common/gamedetail/Specs';
import { Screenshots } from '../common/gamedetail/Screenshots';
import { GenresTags } from '../common/gamedetail/GenresTags';
import { Error } from '../common/Error';

export const GameDetails = ({ data, screenshots }) => {
    return (
    <div className="text-houm-black flex flex-col">
        {data.name?
        <>
            <Header data={data}/>
            <div className="bg-houm-white rounded-2xl mx-3 mb-5">
                <Tab.Group defaultIndex={0}>
                    <TabList/>
                    <Tab.Panels className="rounded-b-2xl p-5 border-[1px] border-houm-red ">
                        <General data={data}/>
                        <Ratings data={data}/>
                        <Specs data={data}/>
                        <Screenshots data={data} screenshots={screenshots}/>
                        <GenresTags data={data}/>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </>:
        <Error></Error>
        }
    </div>
    )
}
