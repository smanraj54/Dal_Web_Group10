import React from "react";
import './MyApp.css';


const initialState = {
  storeName: "",
  category: "",
  fileUpload: "",
  address: "",
  storeNameErr: "",
  categoryErr: "",
  fileUploadErr: "",
  addressErr: "",
 stateSuccess:""

};

export default class AdminPanel extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let storeNameErr = "";
    let categoryErr = "";
    let fileUploadErr = "";
    let addressErr = "";
    
   


    if (!this.state.storeName || this.state.storeName.includes("~")|| this.state.storeName.includes("~")||this.state.storeName.includes("!")||this.state.storeName.includes("#")||this.state.storeName.includes("$")||this.state.storeName.includes("%")||
    this.state.storeName.includes("^")||this.state.storeName.includes("&")||this.state.storeName.includes("*")||this.state.storeName.includes("(")||this.state.storeName.includes(")")||this.state.storeName.includes("-")||
    this.state.storeName.includes("+")||this.state.storeName.includes("=")||this.state.storeName.includes("<")||this.state.storeName.includes(">")||this.state.storeName.includes(",")||
    this.state.storeName.includes("/")||this.state.storeName.includes("?")||this.state.storeName.includes("{")||this.state.storeName.includes("}")||this.state.storeName.includes("[")||
    this.state.storeName.includes("]")||this.state.storeName.includes(":")||this.state.storeName.includes("|")||this.state.storeName.includes(";")||this.state.storeName.includes("\"")||
    this.state.storeName.includes("\\") || this.state.storeName.includes("@")) {
      storeNameErr = "Store Name cannot be blank/Invalid Characters";
    }

    

    if ((!this.state.category) ) {
      categoryErr = "Select a Category";
    }

    if(!this.state.fileUpload ){
      fileUploadErr = "Upload a file";
    }


    if(!this.state.address ){
      addressErr = "Address cannot be left blank";
    }

    
   

    if (categoryErr || storeNameErr || fileUploadErr || addressErr) {
      this.setState({ storeNameErr, categoryErr, fileUploadErr, addressErr });
      return false;
    }
    
    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      let stateSuccess = "Successful";
      this.setState(initialState);
      this.setState({stateSuccess});
      
    }
  };

  render() {

   
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
      
 <p class="alignleftz3"><a href="#" id="link4">Update Product</a></p>
  <p class="alignleftz2"><a href="#" id="link3">Add Product </a></p>
  
  <p class="alignleftz1"><a href="#" id="link2">Create Store</a></p>
  
  
</div>
  



<div class="container">
      <form onSubmit={this.handleSubmit} id="mainElement">
          
          <br></br><br></br><br></br><br></br>
          {/*Store Name*/}

        <div >
       
          <label class = "lab"> Store Name</label> &nbsp;&nbsp;&nbsp;&nbsp;
       
          <input
            name="storeName"
            placeholder=""
            value={this.state.storeName}
            onChange={this.handleChange} class="form-control"
          />
         
     
          <div style={{ fontSize: 15, color: "darkred" }}>
            {this.state.storeNameErr}
          </div>
        </div>

        <br></br>
            {/*Address*/}
        <div >
        
        <label class = "lab"> Address</label> &nbsp;&nbsp;&nbsp;&nbsp;
       
    
          
<textarea   name="address" value={this.state.address}
            onChange={this.handleChange} Placeholder = "Enter Address with Postal Code" class="form-control">

</textarea>
<div style={{ fontSize: 15, color: "darkred" }}>
            {this.state.addressErr}
          </div>
        </div>

            <br></br>
            {/*Select Store*/}

        <div>
        <label class = "lab"> Category</label> &nbsp;&nbsp;&nbsp;&nbsp;

        <select name="category" value={this.state.category}
            onChange={this.handleChange}>
<option value="Electronics">--Select--</option>
  <option value="Electronics">Electronics</option>
  <option value="Multipurpose">Multipurpose</option>
  <option value="Indica">Indica</option>
  <option value="Grocery">Grocery</option>
  </select>

  <div style={{ fontSize: 15, color: "darkred" }}>
            {this.state.categoryErr}
          </div>
        </div>
        <br></br>
        {/*Logo*/}

        <div>
        <label class = "lab"> Logo</label> &nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="file"
            name="fileUpload"
            placeholder="Password"
            value={this.state.fileUpload}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 15, color: "darkred" }}>
            {this.state.fileUploadErr}
          </div>
        </div>

        <br></br>
        
        <button type="submit">Add</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button">Cancel</button>
        

        
        <div style={{ fontSize: 18, color: "green"  }} class ="fontsw">
        
            {this.state.stateSuccess}
          </div>

      </form>
  
      </div>

      <div id="footer">

  <p>©Volunteer Mart 2021. All Rights Reserved.</p>
</div>

</body>



    );
  }
}