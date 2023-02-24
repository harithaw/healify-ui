import React from 'react'
import { useNavigate } from 'react-router-dom'



const Profile = () => {
	const navigate = useNavigate();
	return (
        <div>
        <div className="mainDiv">
          <div className="headPanel">Pharmacy Information</div>
          <div className="leftDiv">
            <label className="formLabel">Pharmacy's Name</label>
            <input type="text" className="inputFields" />
            <label className="formLabel">Phone Number</label>
            <input type="text" className="inputFields" />
            <label className="formLabel">Website Name</label>
            <input type="text" className="inputFields" />
            <label className="formLabel">Pharmacy license</label>
            <input type="text" className="inputFields" />
          </div>
          <div className="rightDiv">
            <label className="formLabel">Address</label>
            <input type="text" className="inputFields" />
            <label className="formLabel">Email</label>
            <input type="text" className="inputFields" />
            <label className="formLabel">Operating Hours</label>
            <input type="text" className="inputFields" />
          </div>
        </div>
        <div className="mainDiv">
          <div className="headPanel">
            <div className="leftDiv">Owner Information</div>
            <label className="formLabel">Name</label>
            <input type="text" className="inputFields" />
            <label className="formLabel">Owner's Phone Number</label>
            <input type="text" className="inputFields" />
            <label className="formLabel">Owner NIC</label>
            <input type="text" className="inputFields" />
          </div>
          <div className="rightDiv">
            <label className="formLabel">Address</label>
            <input type="text" className="inputFields" />
            <label className="formLabel">Owner Email</label>
            <input type="text" className="inputFields" />
          </div>
        </div>
        <div className="btnDiv">
          <button className="btn">Save</button>
        </div>
      </div>
			);
};

export default Profile;