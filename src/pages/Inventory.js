import React from 'react'
import { useNavigate } from 'react-router-dom'
import './css/inventory.css'
import { FaPen,FaTrashAlt } from 'react-icons/fa';
import './LendRequest'
import { Outlet, Link } from "react-router-dom";


const Inventory = () => {
	const navigate = useNavigate();
	return (<div>
        <h1 >Inventory</h1>
        <button className='btn'><Link to="/Addnewdrug">Add New Drug</Link></button>
        <button className='btn'><Link to="/UpdateDrug">Update Drug</Link></button>
        <table>
          <tbody><tr><th>ID</th>
              <th>Drug Name</th>
              <th>Manufacturer</th>
              <th>Supplier</th>
              <th>NDC</th>
              <th>Expiration date</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Actions</th>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><button> <FaPen/></button>
                <button><FaTrashAlt/></button></td>
              </tr>
            </tbody>
            </table>
            </div>

            
			);
};

export default Inventory;