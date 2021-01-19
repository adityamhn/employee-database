import React from 'react';

const SearchBox = ({searchfeild, onSearchChange}) => {
	return (
		<div className="pa2">
		<input 
		className="pa3 ba b--green bg-lightest-blue br4 w-50" 
		type="search" 
		placeholder="search employees " 
		onChange={onSearchChange}/>
		</div>
		);
}



export default SearchBox;