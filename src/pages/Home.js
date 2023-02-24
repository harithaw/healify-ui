import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
	const navigate = useNavigate();
	return (
		<div className="mainDiv">
        <div className="headDiv">Sign In</div>
        <div className="inputDiv"><input type="text" className="inputFields" /></div>
        <div className="inputDiv"><input type="text" className="inputFields" /></div>
        <div className="btnDiv"><button>Sign In</button></div>
      </div>
	);
};

export default Home;
