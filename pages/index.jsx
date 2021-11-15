import Head from 'next/head'

import { Main } from '../components/layout/Main'
import { MainCards } from '../components/layout/MainCards'
export default function Home() {
	return (
		<>
			<Head>
				<title>Houm TI Gamepedia</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="bg-scroll bg-cover bg-bgBubles">
				<Main title="Welcome to the Houm TI Gamepedia!">
				<MainCards></MainCards>
				</Main>
			</div>
		</>
	)
}
