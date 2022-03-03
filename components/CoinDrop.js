import { format_cap, format_int_number } from '../util/format_functions.js'

export default function CoinDrop({ coin }) {
	return (
		<div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", fontSize: "0.9em"}}>
			<div className="small-table">
				<div className="small-row">
					<span style={{fontWeight: "bold"}}>Market Cap:</span>
					<span>{format_cap(coin.market_cap)}</span>
				</div>
				<div className="small-row">
					<span style={{fontWeight: "bold"}}>Total Volume:</span>
					<span>{format_cap(coin.total_volume)}</span>
				</div>
				<div className="small-row">
					<span style={{fontWeight: "bold"}}>Fully Diluted Market Cap:</span>
					<span>{format_cap(coin.fully_diluted_valuation)}</span>
				</div>
				<div className="small-row">
					<span style={{fontWeight: "bold"}}>Circulating Supply:</span>
					<span>{format_int_number(coin.circulating_supply)}</span>
				</div>
				<div className="small-row">
					<span style={{fontWeight: "bold"}}>Max Supply:</span>
					<span>{format_int_number(coin.max_supply)}</span>
				</div>
				<div className="small-row">
					<span style={{fontWeight: "bold"}}>Circulating/Max:</span>
					<span>
				{ coin.circulating_supply && coin.max_supply && coin.max_supply !== 0 ? 
					(coin.circulating_supply/coin.max_supply).toFixed(4)*100 + '%' : '?'
				}
					</span>
				</div>
			</div>
			<div className="small-table">
				<div className="small-row">
					<span style={{fontWeight: "bold"}}>All-Time High:</span>
					<span>${coin.ath}
						<span style={{marginLeft: "0.5em", fontSize: "0.75em"}} 
						className={coin.ath_change_percentage<0 ? 'tr':'tg'}>
						{(coin.ath_change_percentage||0).toFixed(2)}%
						</span>
					</span>
				</div>
				<div className="small-row">
					<span style={{fontWeight: "bold"}}>All-Time High Date:</span>
					<span>{new Date(coin.ath_date || 0).toDateString()}</span>
				</div>
				<div className="small-row">
					<span style={{fontWeight: "bold"}}>24h High:</span>
					<span>${coin.high_24h}</span>
				</div>
				<div className="small-row">
					<span style={{fontWeight: "bold"}}>24h Low:</span>
					<span>${coin.low_24h}</span>
				</div>
			</div>
			<div className="small-table">
				<div className="small-row">
					<span style={{fontWeight: "bold"}}>1h Change:</span>
					<span className={coin.price_change_percentage_1h_in_currency<0 ? 'tr':'tg'}>
					{(coin.price_change_percentage_1h_in_currency || 0).toFixed(2)} %
					</span>
				</div>
				<div className="small-row">
					<span style={{fontWeight: "bold"}}>24h Change:</span>
					<span className={coin.price_change_percentage_24h<0 ? 'tr':'tg'}>
					{(coin.price_change_percentage_24h || 0).toFixed(2)} %
					</span>
				</div>
				<div className="small-row">
					<span style={{fontWeight: "bold"}}>7d Change:</span>
					<span className={coin.price_change_percentage_7d_in_currency<0 ? 'tr':'tg'}>
					{(coin.price_change_percentage_7d_in_currency || 0).toFixed(2)} %
					</span>
				</div>
				<div className="small-row">
					<span style={{fontWeight: "bold"}}>30d Change:</span>
					<span className={coin.price_change_percentage_30d_in_currency<0 ? 'tr':'tg'}>
					{(coin.price_change_percentage_30d_in_currency || 0).toFixed(2)} %
					</span>
				</div>
				<div className="small-row">
					<span style={{fontWeight: "bold"}}>1y Change:</span>
					<span className={coin.price_change_percentage_1y_in_currency<0 ? 'tr':'tg'}>
					{(coin.price_change_percentage_1y_in_currency || 0).toFixed(2)} %
					</span>
				</div>
			</div>
		</div>
	)
}