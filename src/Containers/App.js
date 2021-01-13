import React, {useState, useEffect} from 'react';
import Particles from 'react-particles-js';
import CardList from './../Components/CardList';
import SearchBox from './../Components/SearchBox';
import Scroll from './../Components/Scroll';
import ErrorBoundry from './../Components/ErrorBoundry';
import './App.css';
import AddEmployeeForm from '../Components/AddEmployeeForm';
import Navigation from '../Components/Navigation';


const particlesOptions = {
	particles: {
	  number: {
		value:100,
		density:{
		  enable:true,
		  value_area:800
		}
	  }
	}
  }

function App () {
	// constructor() {
	// 	super()
	// 	this.state = {
	// 		robots: [],
	//         searchfield: ' '
	// 	}
	// }
	const [route,setRoute] = useState("home")
	const [robots,setRobots] = useState([])
	const [searchfield,setSearchfield] = useState("")

	// componentDidMount() {
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 	.then(response =>response.json())
	// 	.then(users => {this.setState({robots: users})});
	// }

	// useEffect(() => {
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 	.then(response => response.json())
	// 	.then(users => {setRobots(users)})
	// 	// .then(console.log);
	// },[])

	useEffect(() => {
		fetch('http://localhost:3000/')
		.then(response => response.json())
		.then(users => {setRobots(users)})
	},[])
    
const onSearchChange = (event) => {
    	setSearchfield(event.target.value)
		}

const onRouteChange = () => {
	if (route === 'home') {
		setRoute("form")
	} else if (route === 'form') {
		setRoute("home")
	}
}

const filteredRobots = robots.filter(robot => {
    		return (robot.name.toLowerCase().includes(searchfield.toLowerCase()) || robot.email.toLowerCase().includes(searchfield.toLowerCase()) || robot.id.toString().includes(searchfield));
		});
		
		return  (<div>
			<Particles className="particles" params={particlesOptions}/>
			<Navigation onRouteChange={onRouteChange} route={route} />
            {route === 'home' ? (robots.length === 0 ?
		<div>
        <h1 className="tc">LOADING!!</h1></div> :
		<div className="tc">
		<h1 className="f1">EMPLOYEES</h1>
		<SearchBox onSearchChange={onSearchChange}/>
		<Scroll>
		<ErrorBoundry>
        <CardList robots={filteredRobots} />
        </ErrorBoundry>
          </Scroll>
			
     </div>
			 ) : <div>
				 <AddEmployeeForm  onRouteChange={onRouteChange}/>
				 </div> }
			
	 </div>
		);
	  
	}

export default App;