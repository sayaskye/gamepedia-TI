import Head from 'next/head'
import { Main } from '../../components/layout/Main'
import { Game } from '../../components/layout/Game'
const GamesID = () => {
    return (
        <>
			<Head>
				<title>Houm TI Gamepedia</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="bg-scroll bg-cover bg-bgBubles">
				<Main title="Details page, Click here to go back">
                    <Game/>
				</Main>
			</div>
		</>
    )
}
export default GamesID;