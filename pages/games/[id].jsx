import Head from 'next/head'
import { Main } from '../../components/layout/Main'
import { Game } from '../../components/layout/Game'
const GamesID = () => {
    return (
        <>
			<Head>
				<title>Houm TI Games</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="bg-scroll bg-cover bg-bgBubles pb-1">
				<Main title="Back to Houm! (Home)">
                    <Game/>
				</Main>
			</div>
		</>
    )
}
export default GamesID;