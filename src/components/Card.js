import React from 'react';

//JSX file, 用{}
//tachyons defines format
//props 类似于attribute
const Card = (props) => {
	return (
		<div className='bg-light-green dib br3 ma2 grow shadow-5'>
		 <img alt='robots' src={`https://robohash.org/${props.id}?200*200`}/>
		 <div>
		 	<h2>{props.name}</h2>	 	
		 	<p>{props.email}</p>
		 </div>
		</div>
		);
}

export default Card;