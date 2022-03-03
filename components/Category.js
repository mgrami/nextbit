export default function Category({ category, setCategory }) {
	return (
		<div style={{margin: '1em', padding: '0.5em'}}>
			<label style={{display: 'inline-block', marginBottom: '0.5em', marginRight: '0.5em',}}>
				Category : 
			</label>
			<select id="category" style={{color: '#888'}} value={category} 
				onChange={e => setCategory(e.target.value)}>
				<option value="all">all</option>
				<option value="meme-token">meme</option>
				<option value="non-fungible-tokens-nft">nft</option>
				<option value="gaming">gaming</option>
				<option value="metaverse">metaverse</option>
				<option value="stablecoins">stablecoins</option>
				<option value="oracle">oracle</option>
				<option value="decentralized-exchange">dex</option>
				<option value="centralized-exchange-token-cex">cex</option>
				<option value="decentralized-finance-defi">defi</option>
				<option value="lending-borrowing">lending / borrowing</option>
				<option value="yield-farming">yield farming</option>
				<option value="synthetic-assets">synthetic assets</option>
				<option value="privacy-coins">privacy</option>
				<option value="cardano-ecosystem">cardano ecosystem</option>
				<option value="rebase-tokens">rebase tokens</option>
				<option value="decentralized-derivatives">derivatives</option>
				<option value="decentralized-perpetuals">perpetuals</option>
				<option value="dot-ecosystem">polkadot ecosystem</option>
				<option value="cosmos-ecosystem">cosmos ecosystem</option>
				<option value="binance-smart-chain">bsc ecosystem</option>
				<option value="avalanche-ecosystem">avalanche ecosystem</option>
				<option value="polygon-ecosystem">polygon ecosystem</option>
				<option value="solana-ecosystem">solana ecosystem</option>
				<option value="terra-ecosystem">terra ecosystem</option>
				<option value="storage">storage</option>
			</select>
		</div>
	)
}
