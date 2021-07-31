//Author: Robinder Jasdev Singh Dhillon

import React from 'react';
import {Form, Button} from 'react-bootstrap';
import App from './CardDetails';
import axios from 'axios'


class Cash extends React.Component{

  constructor(props) {
    super(props);
    this.state = { totalPrice: props.pricefinal}
  }

    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.props.nameOfType)
        //props value indicating type of payment
        const values = this.props.nameOfType
          this.informationCash()
          this.placeOrder();
          
        
    }
//code to be executed if order is cancelled
    placeOrder= ()=>{
        this.placeThisOrder();
        this.cancelOrder();
      }

      cancelCashOrder= ()=>{
        var proceed = window.confirm("Are you sure you want to cancel the order?");
        if (proceed) {
        alert("order cancelled")      
        }
        this.cancelOrder();
      }

//emptying the cart if order is cancelled by calling API
      cancelOrder = () => {
        this.props.clearInfo();
        //var baseUrl = 'https://homepagebackend.herokuapp.com';
        var baseUrl = "https://group10projectbackend.herokuapp.com";
        //var baseUrl = 'http://localhost:2000';
        var truncateURL = baseUrl + "/cart/truncate";
        axios.put(truncateURL).then(res => {
          this.props.clearInfo();
        });
      }

      placeThisOrder = () => {
        this.props.clearInfo();
        var baseUrl = 'https://group10projectbackend.herokuapp.com';
        var orderDetails = baseUrl + "/orders/add";
        axios.post(orderDetails).then(res => {
          this.props.clearInfo();
        });
      }

//code to be executed if order is successful, to add details in database
      informationCash = ()=>{
        var finalOrderPrice = this.props.pricefinal
          console.log('in information cash')

          const type = this.props.nameOfType;
          if(this.state.totalPrice!= 0){
            alert("Order Placed!");
            //API called to insert data in db table
        const response = axios.post("https://backend-nodeapp.herokuapp.com/payment", {type,finalOrderPrice}).then(result => {
          console.log("cash/points payment in frontend")
          console.log(type)
          this.setState({totalPrice:0})
        });
      }
      else{
        alert("order total is 0. Cannot place order")
      }
      }

    render(){
      // frontend for cash/points payment
        return(<div className="container">
            <Form onSubmit={this.handleSubmit}>
                <h6 className="margin-top margin-bottom">You have selected {this.props.nameOfType}.
                    Click on "Place Order to place your order!"</h6>
                <Button className="margin-top margin-left-cash" variant="outline-success" type="submit" size="lg" >
                Place Order
                </Button>
                <Button className="margin-top margin-left-cash" variant="outline-danger" type="button" size="lg" onClick={this.cancelCashOrder}>
                Cancel Order
                </Button>
                </Form>
        </div>
        )
    }
}

export default Cash;