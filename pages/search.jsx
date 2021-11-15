import { useRouter } from 'next/router';
import Head from 'next/head'

import { Main } from '../components/layout/Main'
import { MainCards } from '../components/layout/MainCards'
const Search = () => {
    const router = useRouter();
    const { query: { search , dates, genre, tag }} = router;
    return ( 
        <>
			<Head>
				<title>Houm TI Gamepedia</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="bg-scroll bg-cover bg-bgBubles">
				{search&&<Main title={`Searching by text, Click here to go back`}>
				    <MainCards search={search}/>
				</Main>}
                {dates&&<Main title={`Searching by dates, Click here to go back`}>
				    <MainCards dates={dates}/>
				</Main>}
                {tag&&<Main title={`Searching by tag, Click here to go back`}>
				    <MainCards tag={tag}/>
				</Main>}
                {genre&&<Main title={`Searching by genre, Click here to go back`}>
				    <MainCards genre={genre}/>
				</Main>}
			</div>
		</>
     );
}
 
export default Search;