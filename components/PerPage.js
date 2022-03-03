export default function PerPage({ perpage, setPerpage }) {
	return (
		<span style={{marginLeft: '1.5em'}}>
			<span>Coins Per Page: </span>
			<input type="number" value={perpage} className="perpage" 
			onChange={e => setPerpage(e.target.value)}/>
		</span>
	)
}
