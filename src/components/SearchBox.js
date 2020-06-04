import React from 'react';

// every time the onchange event is triggered call the search change function.
//And if you remember the search change function which is a prop is the on search change function that
//is defined in the app.
const SearchBox = ({ searchfield, searchChange}) => {
	return (

		<input 
			type='search' 
			placeholder='search robots' 
			onChange = {searchChange}
		/>
		);
}

export default SearchBox;