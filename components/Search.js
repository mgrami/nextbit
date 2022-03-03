import { useState, useEffect } from 'react'

export default function Search({ coins_list }) {
	const [search, setSearch] = useState('')
	const [results, setResults] = useState([])

	function results_(){
		if (search==='') {
			setResults([])
			return
		}
		setResults(coins_list.filter((coin) => {
			if( coin.id.toLowerCase().indexOf(search.toLowerCase())===0 || 
				coin.symbol.toLowerCase().indexOf(search.toLowerCase())===0 || 
				coin.name.toLowerCase().indexOf(search.toLowerCase())===0)
				return true
			return false
		}))
	}
	useEffect(results_, [search]) // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div className="search-container">
		<div>
			<input type="text" placeholder="Search" className="search-input"
			value={search} 
			onChange={e => setSearch(e.target.value)}/>
			<div className="search-results">
				{results.map(result => (
					<a href={"#/coins/"+result.id} target="_blank" rel="noreferrer" 
					style={{textDecoration: "none", color: "#555"}} key={result.id}>
					<span className="single-search-result">
						<img src={(result.image).replace('large','thumb')} alt="" width="20vw" height="20vw"/>
						<div style={{marginLeft: "7px"}}>
							<div>{result.name} ({result.symbol}) #{result.market_cap_rank}</div>
						</div>
					</span>
					</a>
				))}
			</div>
		</div>
		</div>
	)
}