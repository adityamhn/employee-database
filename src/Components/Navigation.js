import React from 'react';

const Navigation = ({onRouteChange,route}) => {
	if (route === 'home') {
	return (
      <nav style={{display: 'flex' , justifyContent: 'flex-end'}}>
      <p onClick={() => onRouteChange()}className='f3 link dim black pa3 pointer'>Add Employee</p>
      </nav>
		);
} else {
	return (
	 <nav style={{display: 'flex' , justifyContent: 'flex-end'}}>
      <p onClick={() => onRouteChange()}className='f3 link dim black pa3 pointer'>Home</p>
      </nav>
      );

}
}

export default Navigation;