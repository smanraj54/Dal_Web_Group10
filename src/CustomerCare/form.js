import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
          type: 'select',
          description: '',
          error:''
        };  
        this.validate = this.validate.bind(this);
        this.updateVariable = this.updateVariable.bind(this);

      }

      updateVariable = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        console.log(val);
        this.setState({[nam]: val});
    }

    validate = (e) => {
        e.preventDefault();
        if(this.state.type.match('select')){
            this.setState({error :'Please select a category'});
        }else if(this.state.description.trim().length === 0){
            this.setState({error : 'Please add description of the complaint'});
        }else{
            this.setState({error : ''});
            alert("submitted!");
        }
    }

    render() {
        return (
            <div className="rounded pt-3 pb-3 pr-3 pl-3 mt-3 mr-3" style={{'backgroundColor':'#8EE4AF'}}>
            <form onSubmit={this.validate}>
                <h6 style={{ 'margin-top': 20 }}>Complaint type</h6>
                <div className="mb-3 mr-3">
                    <select className="form-control" name="type" onChange={this.updateVariable}>
                        <option value="select">Select a category</option>
                        <option value="order">Order</option>
                        <option value="refund">Return & Refund</option>
                        <option value="payment">Payment</option>
                    </select>
                </div>
                <h6 style={{ 'margin-top': 20 }}>Description</h6>
                <div class="form-outline mb-3 mr-3">
                    <textarea className="form-control" name="description" rows="4" placeholder="Description" onChange={this.updateVariable}></textarea>
                </div>
                <div class="text-right mr-3">
                <h4>{this.state.error}</h4>
                <button type="submit" class="btn pr-5 pl-5 mb-3 mt-2" style={{backgroundColor:'#05386B',color:'#EDF5E1'}}>Submit</button>
                </div>
            </form>
            </div>
        );
    }
}
export default Form;