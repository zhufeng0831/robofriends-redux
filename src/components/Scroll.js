import React from 'react'

//props object has children, 这里是cardlist
const Scroll = (props) => {
	return (
		<div style={{overflowY:'scroll', border:'1px solid black', height:'500px'}}>
			{props.children}
		</div>
		)	
}

export default Scroll