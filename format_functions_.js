export	function format_int_number(value){
		if(!value) return '?'
		return value.toLocaleString()
	}

export function format_price(value){
	if(!value) return '?'
	return '$' + value.toLocaleString('en-US', {maximumSignificantDigits: 3})
}

export function format_pcp(value){
	if(!value) return '?'
	return value.toFixed(2) + '%'
}

export	function format_cap(value){
		if(!value) return '?'
		if(value>=1000000000) return ((value/1000000000).toFixed(1)).toLocaleString()+' B'
		if(value<1000000000 && value>=1000000) return ((value/1000000).toFixed(1)).toLocaleString()+' M'
		if(value<1000000 && value>=1000) return ((value/1000).toFixed(1)).toLocaleString()+' K'
		return '$'+value
	}
