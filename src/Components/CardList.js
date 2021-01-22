import React from 'react';
import Card from './Card';


const CardList = ({robots,onRouteChange,cardInfo}) => {
const CardComponent = robots.map((user,i) => {
	return (
		<Card 
		cardInfo={cardInfo}
		key={i} 
		id={robots[i].id} 
		name={robots[i].name} 
		email={robots[i].email}
		DOB={robots[i].date_of_birth}
		job_title={robots[i].job_title}
		department={robots[i].department}
		onRouteChange={onRouteChange}
		/>
		);
})	
	return (
		<div>
   {CardComponent}
    </div> 
		);
}

export default CardList;