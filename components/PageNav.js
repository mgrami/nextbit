export default function PageNav({ page, setPage }) {
	return (
		<div style={{textAlign: "center", margin: "1em"}}>
			<button onClick={() => +page>1 && setPage(+page-1)} className="prev">prev</button>
			<input type="number" value={page} onChange={e => setPage(e.target.value)}
			style={{margin: "0.5em", width: "4em", textAlign: "center"}}/>
			<button onClick={() => setPage(+page+1)} className="next">next</button>
		</div>
	)
}
