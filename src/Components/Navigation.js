import React from 'react';

const Navigation = ({onRouteChange,route}) => {
	if (route === 'home') {
	return (
      <nav style={{display: 'flex' , justifyContent: 'flex-end'}}>
      <p onClick={() => onRouteChange('addForm')}className='f3 link dim white pa3 pointer'>Add Employee</p>
      </nav>
		);
} else {
	return (
	 <nav style={{display: 'flex' , justifyContent: 'flex-end'}}>
      <p onClick={() => onRouteChange('home')}className='f3 link dim white pa3 pointer'>Home</p>
      </nav>
      );

}
}

export default Navigation;