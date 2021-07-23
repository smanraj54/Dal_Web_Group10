/*
Author: Narendran Krishnakumar
Page Function: adds the item to the existing store
*/
import React, { useState, useEffect } from "react";
import '../css/AdminStyles.css';
import Axios from 'axios'
import { Redirect, Route, withRouter } from "react-router-dom";

function AddItem(props) {



    var isAdmin = localStorage.getItem('admin');
    console.log(isAdmin);
  
    // checking whether the user is logged in or not.
    // if user is not logged in then they will be redirected to login.
   
    useEffect(() => {
      if(!isAdmin){
        props.history.push('/admin/login');
      }
    },[]);
  

    const [storeName, setStoreName] = useState('')
    const [itemName, setItemName] = useState('')
    const [itemQty, setItemQty] = useState('')
    const [itemPrice, setItemPrice] = useState('')
    const [itemDesc, setItemDesc] = useState('')
    const [itemImage, setItemImage] = useState('')


    const terminateSession=()=>{
        localStorage.setItem('admin',null);
        props.history.push('/admin/login');
    }
    
//API Call
    const submitAdd = () => {

        if(storeName===''||itemName==='' || itemQty===''|| itemPrice==='' ||itemDesc===''||itemImage===''){
            alert("Please enter all the fields");
          }
          else{
            Axios.post("https://group10projectbackend.herokuapp.com/api/addItem", {
                storeName: storeName,
                itemName: itemName,
                itemQty: itemQty,
                itemPrice: itemPrice,
                itemDesc: itemDesc,
                itemImage: itemImage,
            }).then((response) => {
                if(response.data==="success"  || response.data.changedRows===1||response.data.affectedRows===1 ||response.status===200){
          
                    alert("Item Successfully added");
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
                    <p class="alignleft" id="boldify">Volunteer Mart</p>
                    <p class="alignright2"><a href="#" id="link1" onClick={terminateSession}>Logout</a></p>
                    <p class="alignright">Welcome Admin</p>
                </div>
                <br></br>

                <hr></hr>

                <p class="alignleftz3"><a  class = "current" href="https://group10proposalweb.herokuapp.com/AddItem" tabindex="1" id="link4"> AddItem</a></p>
                <p class="alignleftz2"><a href="https://group10proposalweb.herokuapp.com/UpdateItem" tabindex="1" id="link3"> UpdateItem</a></p>
                <p class="alignleftz2"><a href="https://group10proposalweb.herokuapp.com/RemoveStore" tabindex="1" id="link5"> Remove Store</a></p>
                <p class="alignleftz2"><a href="https://group10proposalweb.herokuapp.com/RemoveItem" tabindex="1" id="link6"> Remove Item</a></p>
                <p class="alignleftz1"><a href="https://group10proposalweb.herokuapp.com/AdminPanel" tabindex="1" id="link2">Create Store</a></p>


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


                    {/*Image*/}

                    <div>
                        <b>  <label class="lab"> Image </label></b> &nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                            name="itemImage"
                            placeholder="Enter the URL of the image"
                            class="form-control" onChange={(e) => {
                                setItemImage(e.target.value)
                            }} required
                        />

                    </div>

                    <br></br>
                    <div class="center">
                        <button type="submit" onClick={submitAdd} >Add</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://group10proposalweb.herokuapp.com/AddItem"><button type="button" >Cancel</button> </a>
                    </div>

                </div>
            </div>

            <div id="footer">

                <p>©Volunteer Mart 2021. All Rights Reserved.</p>
            </div>

        </body>
    );
}

export default withRouter(AddItem) ;