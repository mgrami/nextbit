import { useState } from 'react'

export default function RowHeader({ sort_col }) {

	const [col_1, setCol_1] = useState(1)
	const [col_3, setCol_3] = useState(1)
	const [col_4, setCol_4] = useState(1)
	const [col_5, setCol_5] = useState(1)
	const [col_6, setCol_6] = useState(1)
	const [col_7, setCol_7] = useState(1)
	const [col_8, setCol_8] = useState(1)

	return (
		<div className="row" style={{cursor: 'default'}}>
			<span className="cell pointer rank" 
			onClick={() => {setCol_1(v => -v); sort_col('market_cap_rank', col_1)}}>
				#{ col_1 > 0 ? <>&#x025BE;</> : <>&#x025B4;</> }
			</span>
			<span className="cell pointer name">Name</span>
			<span className="cell pointer price"
			onClick={() => {setCol_3(v => -v); sort_col('current_price', col_3)}}>
				Price{ col_3 > 0 ? <>&#x025BE;</> : <>&#x025B4;</> }
			</span>
			<span className="cell pointer pchange"
			onClick={() => {setCol_4(v => -v); sort_col('price_change_percentage_1h_in_currency', col_4)}}>
				1h{ col_4 > 0 ? <>&#x025BE;</> : <>&#x025B4;</> }
			</span>
			<span className="cell pointer pchange hide-on-mobile"
			onClick={() => {setCol_5(v => -v); sort_col('price_change_percentage_24h', col_5)}}>
				24h{ col_5 > 0 ? <>&#x025BE;</> : <>&#x025B4;</> }
			</span>
			<span className="cell pointer pchange hide-on-mobile"
			onClick={() => {setCol_6(v => -v); sort_col('price_change_percentage_7d_in_currency', col_6)}}>
				7d{ col_6 > 0 ? <>&#x025BE;</> : <>&#x025B4;</> }
			</span>
			<span className="cell pointer mcap hide-on-mobile"
			onClick={() => {setCol_7(v => -v); sort_col('market_cap', col_7)}}>
				Mrkt Cap{ col_7 > 0 ? <>&#x025BE;</> : <>&#x025B4;</> }
			</span>
			<span className="cell pointer tvolume hide-on-mobile"
			onClick={() => {setCol_8(v => -v); sort_col('total_volume', col_8)}}>
				Volume{ col_8 > 0 ? <>&#x025BE;</> : <>&#x025B4;</> }
			</span>
		</div>
	)
}
