import { useState, useEffect } from 'react'
import Search from './Search.js'

export default function Header() {
	const [coins_list, set_coins_list] = useState([])

	async function get_coins_list(){
		let coins_list_ = []
		for(let i=1; i<=5; i++){
			try {
				let res = await fetch('https://api.coingecko.com/api/v3/coins/markets?' + 
					new URLSearchParams({vs_currency: 'usd', per_page: 250, page: i})
				)		
				coins_list_ = [...coins_list_, ...await res.json()]
				set_coins_list(coins_list_)
			} catch {}
		}
	}

	useEffect(() => get_coins_list(), []) // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<Search coins_list={coins_list} />
	)
}