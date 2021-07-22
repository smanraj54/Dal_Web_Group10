//Author: Robinder Jasdev Singh Dhillon


import React from 'react';
import App from './CardDetails';
import Cash from './Cash';
import { Container, Card, Button, Row, Col, CardGroup,CardDeck} from 'react-bootstrap';
import axios from 'axios';
import { Table } from 'reactstrap';

class Payment extends React.Component{
    state={
        payment:'',
        viewForm:false,
        datainfo:[],
        pricetotal:0
    };

        clearInfo=()=> {
            this.setState({datainfo:[], pricetotal: 0})
            // console.log('cleareddddddddddddddddd')
            // alert(this.state.pricetotal)
    }
    
    componentDidMount() {

        this.informationOrder();       
    }
    

    credit(){
        console.log("in credit");
        this.setState({ viewForm: true })
        this.paymentForm = <App nameOfCard="Credit" clearInfo={this.clearInfo} pricefinal={this.state.pricetotal}/>;

    }
    debit(){
        console.log("in debit");
        this.setState({ viewForm: true })
        this.paymentForm = <App nameOfCard="Debit" clearInfo={this.clearInfo} pricefinal={this.state.pricetotal}/>;
    }

    cash(){
        console.log("in cash");
        this.setState({ viewForm: true })
        this.paymentForm = <Cash nameOfType="Cash on Delivery" clearInfo={this.clearInfo} pricefinal={this.state.pricetotal}/>;
    }
    points(){
        console.log("in redeem points");
        this.setState({ viewForm: true })
        this.paymentForm = <Cash nameOfType="Redeem Points option" clearInfo={this.clearInfo} pricefinal={this.state.pricetotal}/>;
    }
    
    informationOrder = async()=>{
        var baseUrl = "https://group10projectbackend.herokuapp.com";
        var getUrlInfo = baseUrl + "/cart/items";
        console.log('in information order')
        var price = 0

        try{
      const responses = await axios.get(getUrlInfo).then(result => {
        var finaldata = result.data.data
        // this.setState({pricetotal:result.data.data.item_price})
        this.setState({datainfo:finaldata})
        console.log("responses.data")
        console.log(this.state.datainfo)
        console.log(result.data.data.item_id)
        for(let i=0;i<finaldata.length;i++){
            price = price +(finaldata[i].item_price*finaldata[i].item_qty)
        }
        console.log(price)
        this.setState({pricetotal:price})
    });
    }   
    catch(err){
        console.log(err)
      } 
    }


    render(){
        return(
            <div>
            <Container fluid ='md'>  
            <CardDeck>
                <Row>
            <Col className="container-fluid mt-4">                             
                <Card className="mb-20" style={{color: "#000"}}>
                <Card.Header style={{size:"20px" ,color:"#000", textAlign:"center", paddingTop:"10px"}}>PAYMENT</Card.Header>
                    <Card.Title style={{size:"20px" ,color:"#4a54f1", textAlign:"center", paddingTop:"30px"}}>Choose a PAYMENT METHOD</Card.Title>
                    <Card.Body style={{width:"600px"}}>
                    <Row className="margin-bottom-buttons">
                    <Col md={{ span: 1, offset: 2}} >
                        <Button type="submit" size="lg" variant="outline-dark" onClick={()=>{this.credit()}}>Credit</Button>
                    </Col>
                    <Col md={{ span: 1, offset: 1 }}>
                        <Button type="submit" size="lg" variant="outline-dark" onClick={()=>{this.debit()}}>Debit</Button>
                    </Col>
                    <Col md={{ span: 1, offset: 1}}>
                        <Button type="submit" size="lg" variant="outline-dark" onClick={()=>{this.cash()}}>Cash</Button>
                    </Col>
                    <Col md={{ span: 1, offset: 1 }}>
                        <Button type="submit" size="lg" variant="outline-dark" onClick={()=>{this.points()}}>Points</Button>
                    </Col>
                    </Row>
                    <div className='form-container'>
                        {(this.state.viewForm) ?
                        this.paymentForm : ''} 
                
                    </div>
                    </Card.Body>
                </Card>
                </Col>

                <Col className="container-fluid mt-4">                 
                <Card style={{color: "#000"}}>
                <Card.Header style={{size:"20px" ,color:"#000", textAlign:"center", paddingTop:"10px"}}>ORDER DETAILS</Card.Header>
                        <Card.Body>
                        ORDER DETAILS
                        <Table>
                            <thead>
                                <tr>
                                <th>Item Name</th>
                                <th>Item Price</th>
                                <th>Item Quantity</th>
                                <th>Total Price</th>
                                </tr>
                            </thead>
                            <tbody>                       
                             {this.state.datainfo.map(item => {
                            return(
                            <tr>
                            <th>{item.item_name}</th>
                                <td>{item.item_price}</td>
                                <td>{item.item_qty}</td>
                                <td>{item.item_price*item.item_qty}</td>
                                </tr>
                                )
                                                                                     
                          })}

                            </tbody>
                            </Table>

                        Order Total:
                        <ul>{this.state.pricetotal}</ul> 

                        </Card.Body>
                </Card> 
                </Col>
                </Row>
                </CardDeck> 
            </Container>
            </div>
                   
        );
    }

}

export default Payment;