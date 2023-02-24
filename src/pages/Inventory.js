import React from 'react'
import { useNavigate } from 'react-router-dom'
import './css/inventory.css'

const Inventory = () => {
	const navigate = useNavigate();
	return (<div>
        <h1 className='primary'>Inventory</h1>
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
            </tbody>
            </table>
            </div>
			);
};

export default Inventory;