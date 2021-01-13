import React from 'react';
const Card = ({name,email,id,job_title}) => {
	return (
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?100x100`} alt="user robot" />
      <div>
            <h4>{`id: ${id}`}</h4>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{job_title}</p>
      </div>
      </div>
		);
}

export default Card;