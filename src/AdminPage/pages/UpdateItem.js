/*
Author: Narendran Krishnakumar
Page Function: Updates the item details in the db
*/
import React, { useState, useEffect } from "react";
import '../css/AdminStyles.css';
import Axios from 'axios'

function UpdateItem() {


    const [storeName, setStoreName] = useState('')
    const [itemName, setItemName] = useState('')
    const [itemQty, setItemQty] = useState('')
    const [itemPrice, setItemPrice] = useState('')
    const [itemDesc, setItemDesc] = useState('')
    const [success, setSuccess] = useState([])

//API Call


const fetchData=()=>{
    if(storeName===''){
        alert("Please enter the store name first");
    }
    else{
        Axios.get(`http://localhost:3001/api/getItemNames/${storeName}`).then((response)=>{
            setSuccess(response.data);
            })
    }
   
}

    const submitAdd = () => {

        if(storeName===''||itemName==='' || itemQty===''|| itemPrice==='' ||itemDesc===''){
            alert("Please enter all the fields");
          }
          else{
            Axios.put("http://localhost:3001/api/updateItem", {
                storeName: storeName,
                itemName: itemName,
                itemQty: itemQty,
                itemPrice: itemPrice,
                itemDesc: itemDesc,
    
            }).then((response) => {
                console.log(response)
                if(response.data==="success"  || response.data.changedRows===1||response.data.affectedRows===1 ||response.status===200){
          
                    alert("Item Information Successfully Updated");
                    window.location.reload();
                   
              
                  }
                  else{
                    alert("Something went wrong");
                  }
                  
                }) 
                .catch((err) =>{
                  console.log(err)
                })
          }
     
    }

   

    return (
        <body id="body">
            <div id="header">
                <div>
                    <p class="alignleft">Volunteer Mart</p>
                    <p class="alignright2"><a href="#" id="link1">Logout</a></p>
                    <p class="alignright">Welcome Admin</p>
                </div>
                <br></br>

                <hr></hr>

                <p class="alignleftz3"><a href="http://localhost:3000/AddItem" tabindex="1" id="link4"> AddItem</a></p>
       <p class="alignleftz2"><a  class = "current" href="http://localhost:3000/UpdateItem" tabindex="1" id="link3"> UpdateItem</a></p>
       <p class="alignleftz2"><a href="http://localhost:3000/RemoveStore" tabindex="1" id="link5"> Remove Store</a></p>
       <p class="alignleftz2"><a href="http://localhost:3000/RemoveItem" tabindex="1" id="link6"> Remove Item</a></p>
        <p class="alignleftz1"><a href="http://localhost:3000/AdminPanel" tabindex="1" id="link2">Create Store</a></p>


            </div>


            <div class="container">
                <div class="childContainer">
                    
                    <br></br>
                    {/*Store Name*/}

                    <div >

                        <b>  <label class="lab"> Store Name</label> </b> &nbsp;&nbsp;&nbsp;&nbsp;

                        <input
                            id="storeName"
                            placeholder=""
                            class="form-control" onChange={(e) => {
                                setStoreName(e.target.value)
                            }} required
                        />
<button id="greenFetch" type="button" onClick={fetchData} >↻</button>
                    </div>

                    {/*Item Name */}

                    <div >

                        <b>   <label class="lab">Item Name</label> </b>&nbsp;&nbsp;&nbsp;&nbsp;

                        <input
                            name="itemName"
                            placeholder=""
                            class="form-control" onChange={(e) => {
                                setItemName(e.target.value)
                            }} required
                        />

                    </div>

                    {/*Item Quantity */}

                    <div >

                        <b>   <label class="lab"> Quantity</label> </b>&nbsp;&nbsp;&nbsp;&nbsp;

                        <input
                            name="itemQuantity"
                            placeholder=""
                            class="form-control" onChange={(e) => {
                                setItemQty(e.target.value)
                            }} required
                        />

                    </div>

                    {/*Item Price */}

                    <div >

                        <b>   <label class="lab">Price</label> </b>&nbsp;&nbsp;&nbsp;&nbsp;

                        <input
                            name="itemName"
                            placeholder="Enter price in CAD"
                            class="form-control" onChange={(e) => {
                                setItemPrice(e.target.value)
                            }} required
                        />

                    </div>

                    {/*Item Description*/}
                    <div >

                        <b>   <label class="lab">  Description</label> </b>&nbsp;&nbsp;&nbsp;&nbsp;



                        <textarea name="itemDesc" placeholder="Enter full item description" class="form-control" onChange={(e) => {
                            setItemDesc(e.target.value)
                        }} required>

                        </textarea>
                    </div>


                

                    <br></br>
                    <div class="center">
                        <button type="submit" onClick={submitAdd} >Update</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="http://localhost:3000/UpdateItem"><button type="button" >Cancel</button> </a>
                    </div>
                    {success.map((val)=>{
                                return (
                                    
                                    <h5>Item Name: {val.item_name} | Item Qty: {val.item_qty} | Item Price: {val.item_price} |  Item Desc: {val.item_desc}</h5> 
                                   
                                ) ;
                            })}
                </div>
            </div>

            <div id="footer">

                <p>©Volunteer Mart 2021. All Rights Reserved.</p>
            </div>

        </body>
    );
}

export default UpdateItem;