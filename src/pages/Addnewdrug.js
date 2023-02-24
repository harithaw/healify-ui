import React from 'react'
import { useNavigate } from 'react-router-dom'
import './css/Addnewdrug.css'

import {useState,useEffect} from 'react'
import axios from 'axios'

const Addnewdrug = () => {
	const navigate = useNavigate();

    //getting data from backend
    const [listOfMedicines,setListOfMedicines]=useState([])

    useEffect(()=>{
      axios.get("https://healify-api.onrender.com/medicines/all").then((response)=>{
        setListOfMedicines(response.data)
      })
    },[])

    //pushing data to backend
    const [name, setName] = useState("");
    const [manufacture, setManufacture] = useState("");
    const [supplier, setSupplier] = useState("");
    const [NDC, setNDC] = useState("");
    const [expdate, setExpdate] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");

    const createMedicine = () => {
      axios.post("https://healify-api.onrender.com/inventories/add", {mName:name, mManufacture: manufacture, mSupplier: supplier, mNDC: NDC, mExpDate: expdate, mQuantity: quantity, mPrice: price}).then((response)=>{
        alert("medicine created");
      });
    };  

	return (
        <div>
            <table>
        <form />
        <tbody><tr className="row">
            <td className="col1">
              <select className="box1" name="drugname" id="new" onChange={(event)=>{setName(event.target.value);}}>
                {listOfMedicines.map((medicine)=>{
                  return(
                      <option value={medicine.mName}>{medicine.mName}</option>
                  )
                })}
              </select>
            </td>
            <td/>
            <td/>
            <td/>
            <td>
              <input className="box" type="text" placeholder="Manifacturer" id="manifacturer" onChange={(event)=>{setManufacture(event.target.value);}}/>
            </td>
          </tr>
          <tr className="row">
            <td className="col"><input className="box" type="text" placeholder="Supplier" id="Supplier" onChange={(event)=>{setSupplier(event.target.value);}} />
            </td><td />
            <td />
            <td />
            <td className="col"><input className="box" type="text" placeholder="NCD(National Drug Code)" id="NCD" onChange={(event)=>{setNDC(event.target.value);}} /></td>
          </tr>
          <tr className="row">
            <td className="col"><input className="box" placeholder="Type Date" type="date" onfocus="(this.type = 'date')" id="date" onChange={(event)=>{setExpdate(event.target.value);}} />
            </td><td>
            </td>
            <td />
            <td />
            <td className="col"><input className="box" type="number" placeholder="Quantity in Hand" id="qnt" onChange={(event)=>{setQuantity(event.target.value);}}/></td>
          </tr>
          <tr className="row">
            <td className="col"><input className="box" type="text" placeholder="Unit Price" id="price" onChange={(event)=>{setPrice(event.target.value);}}/>
            </td><td>
            </td></tr>
          <tr className="row">
            <td />
            <td />
            <td><button className="button1" type="Submit" name="final" onClick={createMedicine}>Add Drug</button></td>
            <td />
            <td />
          </tr>
        </tbody></table>
        </div>
    )
};

export default Addnewdrug;