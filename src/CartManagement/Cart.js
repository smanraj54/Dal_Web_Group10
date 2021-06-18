import {Container, Row, Col, Button} from 'react-bootstrap';
import {CardComponent} from './Components/CardComponent';
import Apple from './FruitImages/Apple3.jpg';
import Banana from './FruitImages/Banana3.jpg';
import Pineapple from './FruitImages/Pineapple3.jpg';

export const Cart = () =>{
    return(
        <Container fluid='md' className = 'm-5'>
            <Row>
                <Col>
                    <CardComponent image = {Apple} heading = '$4.74 APPLES: Royal' quantity = 'quantity: 3KG'/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardComponent image = {Banana} heading = '$5.97 Banana: From Maysaur' quantity = 'quantity: 5KG'/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardComponent image = {Pineapple} heading = '$9.47 Pineapple: Dubai' quantity = 'quantity: 1KG'/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="outline-danger" className="float-left" style = {{width: 200}} onClick = {() => {
                        alert("Removed All Items"); 
                    }}>Remove All</Button>
                </Col>
            
                <Col>
                    <Button variant="primary" className="float-right" style = {{width: 200}} onClick = {() => {
                        alert("Payment Page"); 
                    }}>Payment</Button>
                </Col>
            </Row>
            
        </Container>
    );
}