
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header.js'
import Row from '../components/Row.js'
import RowHeader from '../components/RowHeader.js'
import PageNav from '../components/PageNav.js'
import PerPage from '../components/PerPage.js'
import Category from '../components/Category.js'

export const getStaticProps = async () => {
	let coins = []
	try {
		let res = await fetch('https://api.coingecko.com/api/v3/coins/markets?' + 
			new URLSearchParams({
				vs_currency: 'usd', 
				price_change_percentage: '1h,24h,7d,14d,30d,200d,1y',
				per_page: 50,
				page: 1,
			})
		)
		coins = await res.json()
	} catch {}

	return {
		props: { coins }
	}
}

export default function CoinsBoard(props) {
	console.log('props?.coins?.length: ', props?.coins?.length)
	const [coins, setCoins] = useState(props?.coins)
	const [perpage, setPerpage] = useState(50)
	const [page, setPage] = useState(1)
	const [category, setCategory] = useState('all')
	const [showId, setShowId] = useState('')


	function getCoins() {
		fetch('https://api.coingecko.com/api/v3/coins/markets?' + 
			new URLSearchParams({
				vs_currency: 'usd', 
				price_change_percentage: '1h,24h,7d,14d,30d,200d,1y',
				per_page: perpage,
				page: page,
				...(category !== 'all' && {category: category}),
			})
		)
		.then(res => {
			if(res.ok) return res.json()
			else console.log("An error happened.")
		})
		.then(data => setCoins(data))
		.catch(err => console.log(err))
	}

	function sort_col(key, order) {
		let arr = coins
		arr = arr.sort((a, b) => {
			let x = a[key]
			let y = b[key]
			if(order>0) return x>y ? -1 : (x<y ? 1 : 0)
			if(order<0) return x>y ? 1 : (x<y ? -1 : 0)
			return 0
		})
		arr = [...arr]
		setCoins(arr)
	}

	function handleShowId(id) {showId !== id ? setShowId(id) : setShowId('');}
	// useEffect(() => console.log(showId), [showId])

	useEffect(getCoins, [page, perpage, category])

	return (
		<>
		<Head>
			<title>Create Next App</title>
			<meta name="description" content="Generated by create next app" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<div>
			<Category category={category} setCategory={setCategory}/>
			<PerPage perpage={perpage} setPerpage={setPerpage}/>
			<span className="refresh" onClick={getCoins} >&#8635;</span>
			<RowHeader sort_col={sort_col}/>
			{coins && coins.map(coin => {
				return (
					<Row coin={coin} key={coin.id} show={showId === coin.id} handleShowId={handleShowId} />
				)
			})}
			<PageNav page={page} setPage={setPage}/>
		</div>
		</>
	)
}


