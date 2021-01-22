import React, {useState, useEffect} from 'react';
import Particles from 'react-particles-js';
import CardList from './../Components/CardList';
import SearchBox from './../Components/SearchBox';
import Scroll from './../Components/Scroll';
import ErrorBoundry from './../Components/ErrorBoundry';
import './App.css';
import AddEmployeeForm from '../Components/AddEmployeeForm';
import EditEmployeeForm from '../Components/EditEmployeeForm';
import Navigation from '../Components/Navigation';


// const particlesOptions = {
// 	particles: {
// 	  number: {
// 		value:100,
// 		density:{
// 		  enable:true,
// 		  value_area:800
// 		}
// 	  }
// 	}
//   }

const particlesOptions =   {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.3,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
  "config_demo": {
    "hide_card": false,
    "background_color": "#b61924",
    "background_image": "",
    "background_position": "50% 50%",
    "background_repeat": "no-repeat",
    "background_size": "cover"
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
  const [filter,setFilter] = useState("all")
	const [user,setUser] = useState([])

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
    .then(users => {setRobots(users);
    console.log(users);})
	},[])
    
const onSearchChange = (event) => {
    	setSearchfield(event.target.value)
    }
  
const onFilterChange = (event) => {
  setFilter(event.target.value)
}

const onRouteChange = (view) => {
	if (view === 'home') {
		setRoute('home')
	} else if (view === 'addForm') {
		setRoute('addForm')
	} else if (view === 'editForm') {
		setRoute('editForm')
	}
	
}

const cardInfo = (name,email,id,job_title,date_of_birth,department) => {
	setUser([name,email,id,job_title,date_of_birth,department])
}


const filteredRobots = robots.filter(robot => {
  if (filter === 'all') {
        return (robot.name.toLowerCase().includes(searchfield.toLowerCase()) || robot.email.toLowerCase().includes(searchfield.toLowerCase()) || robot.id.toString().includes(searchfield));
  } else {
    return ((robot.department.toLowerCase().includes(filter.toLowerCase())) && (robot.name.toLowerCase().includes(searchfield.toLowerCase()) || robot.email.toLowerCase().includes(searchfield.toLowerCase()) || robot.id.toString().includes(searchfield)))
  }
		});
		
		return  (
			<div>
			<Particles className="particles" params={particlesOptions}/>
			<Navigation onRouteChange={onRouteChange} route={route} />
            {route === 'home' ? (robots.length === 0 ?
		<div>
        <h1 className="tc">LOADING!!</h1></div> :
		<div className="tc">
		<h1 className="f1">EMPLOYEES</h1>
		<SearchBox onFilterChange={onFilterChange} onSearchChange={onSearchChange}/>
		<Scroll>
		<ErrorBoundry>
        <CardList cardInfo={cardInfo} robots={filteredRobots} onRouteChange={onRouteChange} />
        </ErrorBoundry>
          </Scroll>
			
     </div>
			 ) : (route === 'addForm' ? <div>
				 <AddEmployeeForm onRouteChange={onRouteChange}/>
				 </div> : 
				 <div>
					 <EditEmployeeForm user={user} onRouteChange={onRouteChange} />
					 </div>) }
			
	 </div>
		);
	  
	}

export default App;