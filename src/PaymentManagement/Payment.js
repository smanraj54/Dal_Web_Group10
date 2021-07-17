import React from 'react';
import App from './CardDetails';
import Cash from './Cash';
import { Container, Card, Button, Row, Col, CardGroup,CardDeck} from 'react-bootstrap';

class Payment extends React.Component{
    state={
        payment:'',
        viewForm:false
    };

    credit(){
        console.log("in credit");
        this.setState({ viewForm: true })
        this.paymentForm = <App nameOfCard="Credit"/>;

    }
    debit(){
        console.log("in debit");
        this.setState({ viewForm: true })
        this.paymentForm = <App nameOfCard="Debit"/>;
    }

    cash(){
        console.log("in cash");
        this.setState({ viewForm: true })
        this.paymentForm = <Cash nameOfType="Cash on Delivery"/>;
    }
    points(){
        console.log("in cash");
        this.setState({ viewForm: true })
        this.paymentForm = <Cash nameOfType="Redeem Points option"/>;
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
                <Card className="mb-20" style={{color: "#000"}}>
                <Card.Header style={{size:"20px" ,color:"#000", textAlign:"center", paddingTop:"10px"}}>ORDER DETAILS</Card.Header>
                        <Card.Body>
                        Detail....

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