import { Card, Row, Col, Button} from 'react-bootstrap';
//import Apple from '../../FruitImages/Apple3.jpg';


export const CardComponent = (props) =>{
    return (

      
<Card>
<Row>
  <Col>
    <Card.Body>
      <Card.Img className="w-50" variant="Left" src={props.image}/>
    </Card.Body>
  </Col>
  <Col>
     <h2>{props.heading}</h2>
     <h3>
       {props.quantity} 
     </h3>
     
  </Col>
  </Row>
  <Row>
    <Col>
    <Button style={{margin:'20px'}} variant="outline-danger" className="float-right"onClick = {() => {
                        alert("Removed This Item"); 
                    }}>Remove Item</Button>
    </Col>
  </Row>
</Card>
    );
}
