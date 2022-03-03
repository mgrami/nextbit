import Image from 'next/image'
import { format_cap, format_int_number, format_pcp, format_price } from '../util/format_functions.js'
import CoinDrop from './CoinDrop'

export default function Row({ coin, show, handleShowId }) {
	return (
		<>
		<div className="row">
			<span className="cell rank" style={{display: 'flex', cursor: "pointer"}} 
			onClick={() => handleShowId(coin.id)}>
				{ show ? <>&#x025B4;</> : <>&#x025BE;</> }
				{format_int_number(coin['market_cap_rank'])}
			</span>

			<a href={"/coins/"+coin.id} target="_blank" rel="noreferrer"
			className="cell name"
			style={{cursor: 'pointer', textDecoration: 'none', color: '#555'}}>
			<span style={{display: 'inline-flex'}}>
				{/*<img src={(coin.image).replace('large','thumb')} alt="alt.png" width="30vw" height="30vw"></img>*/}
				<Image src={(coin.image).replace('large','thumb')} width="33" height="30" />
				<div style={{marginLeft: '7px'}}>
					<div style={{fontWeight: 'bold'}}>{coin.symbol}</div>
					<div style={{fontSize: '0.8em', overflowWrap: 'break-word'}}>{coin.name}</div>
				</div>
			</span>
			</a>

			<span className="cell price">{format_price(coin['current_price'])}</span>

			<span className={`cell pchange chip hide-on-mobile 
			${coin['price_change_percentage_1h_in_currency']>=0 ? 'green':'red'}`}>
				{format_pcp(coin['price_change_percentage_1h_in_currency'])}
			</span>

			<span className={`cell pchange chip ${coin['price_change_percentage_24h']>=0 ? 'green':'red'}`}>
				{format_pcp(coin['price_change_percentage_24h'])}
			</span>

			<span className={`cell pchange chip hide-on-mobile 
			${coin['price_change_percentage_7d_in_currency']>=0 ? 'green':'red'}`}>
				{format_pcp(coin['price_change_percentage_7d_in_currency'])}
			</span>

			<span className="cell mcap hide-on-mobile">{format_cap(coin['market_cap'])}</span>
			<span className="cell tvolume hide-on-mobile">{format_cap(coin['total_volume'])}</span>
		</div>
		{show && <CoinDrop coin={coin}/>}
		</>
	)
}
