import React from 'react'
import { useNavigate } from 'react-router-dom'
import './css/Search.css'

const Search = () => {
	const navigate = useNavigate();
	return (
		<div>
        <form id="form"> 
          <input className="box" type="search" id="query" name="q" placeholder="Search..." />
          <button className="button1">Search</button>
        </form>
        <div className="main">
          <div className="card-wrapper">
            <div className="card-body">
              <h4>Drug Name:</h4>
              <div>
                <ul>
                  <li>Pharmacy Name:</li>
                  <li>Location:</li>
                  <li>Unit Price:</li>
                  <li>Quantity:</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card-body">
              <h4>Drug Name:</h4>
              <div>
                <ul>
                  <li>Pharmacy Name:</li>
                  <li>Location:</li>
                  <li>Unit Price:</li>
                  <li>Quantity:</li>
                </ul>
              </div>
            </div>
          </div>		</div>
      </div>
	);
};

export default Search;
