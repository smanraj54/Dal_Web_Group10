import axios from 'axios';
import { Card, Row, Col, Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


export const CardComponent = (Props) =>{
  var baseUrl = "http://localhost:2007";
  var deleteUrl = baseUrl + "/cart/delete/";
  const history = useHistory();

  const data = {
    "ID": Props.record.item_id,
    "picture": Props.record.item_image,
    "name": Props.record.item_name,
    "used_quantity": Props.record.item_qty,
    "price": Props.record.item_price,
    "description": Props.record.item_desc,
    "store": Props.record.store_name
  };

  const handleRemoveThisItem = () => {
    axios.delete(deleteUrl+data.ID)
        .then(response => {
            //console.log(JSON.stringify(response));
        })
        .catch(error => {
            console.log(error);
        });
  }


return (      
<Card>
  <Row>
    <Col>
      <Card.Body>
        <Card.Img className="w-50" variant="Left" src={data.picture}/>
      </Card.Body>
    </Col>
    <Col>
      <Row>
        <Card.Title>
          {data.name}
        </Card.Title>
      </Row>
      <Row>
        <Card.Body>
          <Row>
            Price : {data.price}<br/>
          </Row>
          <Row>
            Description : {data.description}<br/>
          </Row>
        </Card.Body>
      </Row>
      <Row>
        <Col>
          Added Items : {data.used_quantity}
        </Col>         
      </Row>
    </Col>
  </Row>
  <Row>
    <Col>
    <Button style={{margin:'20px'}} variant="outline-danger" className="float-right"onClick = {handleRemoveThisItem}>Remove Item</Button>
    </Col>
  </Row>
</Card>
);

}
