import React from 'react'
import { useNavigate } from 'react-router-dom'
import './css/inventory.css'
import { FaPen,FaTrashAlt } from 'react-icons/fa';


const Inventory = () => {
	const navigate = useNavigate();
	return (<div>
        <h1 >Inventory</h1>
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