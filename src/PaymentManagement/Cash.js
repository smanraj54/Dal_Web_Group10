import React from 'react';
import {Form, Button} from 'react-bootstrap';
import App from './CardDetails';

class Cash extends React.Component{

    handleSubmit(event){
        event.preventDefault();
        alert("Order Placed!");
    }
    cancelCashOrder= ()=>{
        var proceed = window.confirm("Are you sure you want to cancel the order?");
        if (proceed) {
        alert("order cancelled")
        
        }
      }

    render(){
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