import React from 'react'
import { useNavigate } from 'react-router-dom'
import './css/inventory.css'
import { FaPen,FaTrashAlt } from 'react-icons/fa';

import { Outlet, Link } from "react-router-dom";
import {useState,useEffect} from 'react'
import axios from 'axios'

const Inventory = () => {
	const navigate = useNavigate();

  //getting data from backend
  const [listOfInventories,setListOfInventories]=useState([])

  useEffect(()=>{
    axios.get("https://healify-api.onrender.com/inventories/all").then((response)=>{
      setListOfInventories(response.data)
    })
  },[])

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
              {listOfInventories.map((inventory)=>{
                return(
                  <tr>
                    <td>{inventory.mId}</td>
                    <td>{inventory.mName}</td>
                    <td>{inventory.mManufacture}</td>
                    <td>{inventory.mSupplier}r</td>
                    <td>{inventory.mNDC}</td>
                    <td>{inventory.mExpDate}</td>
                    <td>{inventory.mQuantity}</td>
                    <td>{inventory.mPrice}</td>
                    <td><button><FaPen/></button><button><FaTrashAlt/></button></td>
                  </tr>
                )
              })}
            </tbody>
            </table>
            </div>

            
			);
};

export default Inventory;