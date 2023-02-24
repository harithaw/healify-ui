import React from 'react'
import { useNavigate } from 'react-router-dom'
import './css/Addnewdrug.css'

const Addnewdrug = () => {
	const navigate = useNavigate();
	return (
        <div>
            <table>
        <form />
        <tbody><tr className="row">
            <td className="col1">
              <select className="box1" name="drugname" id="new">
                <option value={1}>Select Drug Name</option>
                <option value={1}>Paracetamole</option>
                <option value={1}>Paracetamole</option>
                <option value={1}>Paracetamole</option>
              </select>
            </td>
            <td />
            <td />
            <td />
            <td>
              <input className="box" type="text" placeholder="Manifacturer" id="manifacturer" />
            </td>
          </tr>
          <tr className="row">
            <td className="col"><input className="box" type="text" placeholder="Supplier" id="Supplier" />
            </td><td />
            <td />
            <td />
            <td className="col"><input className="box" type="text" placeholder="NCD(National Drug Code)" id="NCD" /></td>
          </tr>
          <tr className="row">
            <td className="col"><input className="box" placeholder="Type Date" type="date" onfocus="(this.type = 'date')" id="date" />
            </td><td>
            </td>
            <td />
            <td />
            <td className="col"><input className="box" type="number" placeholder="Quantity in Hand" id="qnt" /></td>
          </tr>
          <tr className="row">
            <td className="col"><input className="box" type="text" placeholder="Unit Price" id="price" />
            </td><td>
            </td></tr>
          <tr className="row">
            <td />
            <td />
            <td><button className="button1" type="Submit" name="final">Add Drug</button></td>
            <td />
            <td />
          </tr>
        </tbody></table>
        </div>
    )
};

export default Addnewdrug;