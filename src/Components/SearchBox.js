import React from 'react';

const SearchBox = ({onFilterChange, onSearchChange}) => {
	return (
		<div className="pa2 flex justify-center ">
		<input 
		className="pa3 ba b--green bg-lightest-blue br4 w-50 mr4" 
		type="search" 
		placeholder="search employees " 
		onChange={onSearchChange}/>
		<select onChange={onFilterChange} className="pa3 ba b--green bg-lightest-blue br4 input-reset" id="department" name="department">
          <option value="all" selected>Any department</option>
            <option value="human resource">Human Resource</option>
            <option value="accounting">Accounting</option>
            <option value="management">Management</option>
            <option value="financial">Financial</option>
            <option value="billing">Billing</option>
            <option value="construction">Construction</option>
            <option value="information technology">Information Technology</option>
            <option value="insurance">Insurance</option>
          </select>
		</div>
		);
}



export default SearchBox;