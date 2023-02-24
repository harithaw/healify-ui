import React from 'react'
import { useNavigate } from 'react-router-dom'
import './css/inventory.css'

const LendRequest = () => {
	const navigate = useNavigate();
	return (
		<div class="container">
  <h2>Inventory <small>by healify</small></h2>
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1">ID</div>
      <div class="col col-4">Drug Name</div>
      <div class="col col-4">Manufactur</div>
      <div class="col col-4">Supplier</div>
	  <div class="col col-4">NDC</div>
	  <div class="col col-4">Expiration Date</div>
	  <div class="col col-4">Quantity</div>
	  <div class="col col-4">Unit price</div>
	  <div class="col col-4">Action</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Job Id"></div>
      <div class="col col-2" data-label="Customer Name"></div>
      <div class="col col-3" data-label="Amount"></div>
      <div class="col col-4" data-label="Payment Status"></div>
	  <div class="col col-5" data-label="Payment Status"></div>
	  <div class="col col-6" data-label="Payment Status"></div>
	  <div class="col col-7" data-label="Payment Status"></div>
	  <div class="col col-8" data-label="Payment Status"></div>
	  <div class="col col-9" data-label="Payment Status"></div>
    </li>
    
  </ul>
</div>
			);
};

export default LendRequest;