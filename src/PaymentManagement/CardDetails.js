import React from 'react';
import { Row,Col, Form, Button, Container, Card} from 'react-bootstrap';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

var namePattern = new RegExp('^[a-zA-Z]*$');
var numberPattern = new RegExp('^[0-9]+$');

class App extends React.Component{


  constructor(props) {
    super(props);
    this.state = { totalPrice: props.pricefinal,
      cardHolderName:'',
      cardNumber:'',
      cvv:'',
      expiryMonth:'',
      expiryYear:'',
      redirect:'',
      nameValidity:false,
      cardNumberValidity:false,
      cvvValidity:false,
      expiryMonthValidity:false,
      expiryYearValidity:false,
      setRedirect:false
    }
  }

    handleName = (event) => {
        const value = !namePattern.test(event.target.value);
        this.setState({cardHolderName: event.target.value});
        this.setState({nameValidity:value});
      }
    handleCardNumber = (event) => {
     const value = (numberPattern.test(event.target.value) && event.target.value.length === 16);
     this.setState({cardNumber: event.target.value});
     this.setState({cardNumberValidity:!value});
      }
    handleCvv = (event) => {
      const value = numberPattern.test(event.target.value) && event.target.value.length === 3;
      this.setState({cvv: event.target.value});
      this.setState({cvvValidity:!value});
      }
      handleExpiryMonth = (event) => {
        const value = numberPattern.test(event.target.value) && event.target.value <=12 && event.target.value >=1;
        this.setState({expiryMonth: event.target.value});
        this.setState({expiryMonthValidity:!value});
        }
        handleExpiryYear = (event) => {
            const value = numberPattern.test(event.target.value)&& (event.target.value >= new Date().getFullYear()) && (event.target.value.length === 4);
            this.setState({expiryYear: event.target.value});
            this.setState({expiryYearValidity:!value});
            }

    
      handleSubmit=(event)=> {

        const form = event.currentTarget;
        console.log(form);
          if (this.state.nameValidity || this.state.cardNumberValidity || this.state.cvvValidity || this.state.expiryMonthValidity || this.state.expiryYearValidity){
            event.preventDefault();
            event.stopPropagation();
            alert("Input should be valid!");
          }
          else {
            this.cancelOrder();
            event.preventDefault();
            this.setState({setRedirect:true});
            this.information()
            this.setState({cardHolderName:'',
            cardNumber:'',
            cvv:'',
            expiryMonth:'',
            expiryYear:''})
          }
      };

      information = async()=>{
        var baseUrl = "https://group10projectbackend.herokuapp.com";
        var deleteUrl = baseUrl + "/cart/delete/";
        var finalOrderPrice = this.props.pricefinal
        console.log(this.props.pricefinal)
        console.log(this.state.cardHolderName);
        console.log(this.state.cardNumber);
        console.log(this.state.expiryMonth);
        console.log(this.state.expiryYear);
        const { cardHolderName, cardNumber, expiryMonth, expiryYear  } = this.state;
        if(this.state.totalPrice!= 0){
        alert("Order Placed!");
        const response = await axios.post("https://backend-nodeapp.herokuapp.com/payment", { cardHolderName, cardNumber, expiryMonth, expiryYear,finalOrderPrice}).then(result => {
          this.setState({totalPrice:0})
        });
        this.props.clearInfo();
        // const deleteCart = await axios.post("/payment", { cardHolderName, cardNumber, expiryMonth, expiryYear,finalOrderPrice}).then(result => {
          
        // });
      }
      else{
        alert("order total is 0. Cannot place order")
      }
      }
      cancelCardOrder= ()=>{
        var proceed = window.confirm("Are you sure you want to cancel the order?");
        if (proceed) {
        alert("order cancelled")      
        }
        this.cancelOrder();
      }

      cancelOrder= ()=>{
        var baseUrl = "https://group10projectbackend.herokuapp.com";
        var truncateURL = baseUrl + "/cart/truncate";
        axios.put(truncateURL).then(res => {
          
          this.setState({cardHolderName:'',
          cardNumber:'',
          cvv:'',
          expiryMonth:'',
          expiryYear:''})
        });
        this.props.clearInfo();
      }
        
    render(){
        return(<div className="container">
          <Container fluid="md">

            <Form controlId="form1" onSubmit={this.handleSubmit}>                 
                    <Form.Group controlId="formCardHolderName">
                    <Form.Label className="margin-top margin-bottom" style={{width:'150px',margintop:'500px'}}>Card Holder Name:</Form.Label>
                    <Form.Control value={this.state.cardHolderName} isInvalid={this.state.nameValidity} onChange={this.handleName} type="text" placeholder="Enter name" style={{width:'500px'}} required/>
                    <Form.Control.Feedback type="invalid">Should only contain Alphabets</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formCardNumber">
                    <Form.Label className="margin-top margin-bottom">{this.props.nameOfCard} Card Number:</Form.Label>
                    <Form.Control value={this.state.cardNumber} isInvalid={this.state.cardNumberValidity} onChange={this.handleCardNumber} type="text" placeholder="Enter card number" maxLength="16" style={{width:'500px'}} required/>
                    <Form.Control.Feedback type="invalid">Should only contain 16 Numeric characters</Form.Control.Feedback>

                    </Form.Group>
              
                    <Form.Group controlId="formCvv">
                    <Form.Label className="margin-top margin-bottom">CVV:</Form.Label>
                    <Form.Control value={this.state.cvv} isInvalid={this.state.cvvValidity} onChange={this.handleCvv} type="text" placeholder="Enter cvv" maxLength="3" style={{width:'200px'}} required/>
                    <Form.Control.Feedback type="invalid">Should only contain 3 Numeric characters</Form.Control.Feedback>

                    </Form.Group>
                    <Row>
                    <Form.Group controlId="formExpiry">
                    <Form.Label className="margin-top margin-bottom">Expiry:</Form.Label>
                    </Form.Group>
                    <Col xs="auto" md={{ span: 3}}>
                    <Form.Group controlId="formMonth">
                    <Form.Control value={this.state.expiryMonth} isInvalid={this.state.expiryMonthValidity} onChange={this.handleExpiryMonth} type="text" placeholder="MM" maxLength="2" style={{width:'80px'}} required/>
                    <Form.Control.Feedback type="invalid">Please enter a valid month</Form.Control.Feedback>

                    </Form.Group>
                    </Col>
                    <Col xs="auto" md={{ span: 3}}>
                    <Form.Group controlId="formYear">
                    <Form.Control value={this.state.expiryYear} isInvalid={this.state.expiryYearValidity} onChange={this.handleExpiryYear} type="text" placeholder="YYYY" maxLength="4" style={{width:'85px'}} required/>
                    <Form.Control.Feedback type="invalid">Please enter a valid year</Form.Control.Feedback>

                    </Form.Group>
                    </Col>
                    </Row>

                <Button className="margin-top" variant="outline-success" type="submit" size="lg">
                Place Order
                </Button>
                <Button className="margin-top margin-left" variant="outline-danger" type="button" size="lg" onClick={this.cancelCardOrder}>
                Cancel Order
                </Button>
            </Form>
            </Container>
            
            </div>
        );
    }
  }

export default App;