import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'

const Card = ({name,email,id,job_title,DOB,onRouteChange,cardInfo}) => {

	return (
      <div className="tc system-sans-serif bg-lightest-blue dib br2 pa3 ma2 grow bw2 shadow-5 w5">
            <FontAwesomeIcon 
            className="shadow-1 pa1 br2 grow pointer" 
            onClick={() => {onRouteChange('editForm')
            cardInfo(name,email,id,job_title,DOB)
      }
      } 
            icon={faUserEdit} />
      <img  className="ba bw1 b--navy br-100"src={`https://robohash.org/${id}?size=150x150`} alt="user robot" />
      <div>
            <p className="gray">{`#${id}`}</p>
      <h2 className="ttc mb0">{name}</h2>
      <p className="ttc mt2 gray">{job_title}</p>
      </div>
      </div>
		);
}

export default Card;
