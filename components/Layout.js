import Header from './Header.js'
export default function Layout({ children }) {
	return (
		<>
		<Header/>
		{ children }
		</>
	)
}

// import { Children, cloneElement, useState } from 'react'
// import Header from './Header.js'
// export default function Layout({ children }) {
// 	const [coins_list] = useState([])
// 	return (
// 		<>
// 		<Header/>
// 		{ Children.map(children, child => cloneElement(child, {...child.props, coins_list})) }
// 		</>
// 	)
// }