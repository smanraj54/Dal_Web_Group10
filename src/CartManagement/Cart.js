import {Container, Row, Col, Button, Card} from 'react-bootstrap';
//import {CardComponent} from './Components/CardComponent';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';


export const Cart = () =>{

    var baseUrl = "https://homepagebackend.herokuapp.com";
    var deleteUrl = baseUrl + "/cart/delete/";
    const [toggle, setToggle] = useState(true);
    var getUrl = baseUrl + "/cart/items";
    const [records, setRecords] = useState([]);
    const history = useHistory();
    const [itemID, setItemID] = useState(0);

    async function fetchData(){
        await axios.get(getUrl)
        .then(response => {
            //console.log(JSON.stringify(response));
            setRecords(response.data.data);
            console.log(response.data);
        
        })
        .catch(error => {
            console.log(error);
        });

        console.log("Records");
        console.log(records);
        
    }

    useEffect( () =>{
        handleRemoveThisItem();
        fetchData();
    }, [itemID]);

    const handleRemoveAll = () => {
        axios.put(baseUrl+"/cart/truncate")
        .then(response => {
            //console.log(JSON.stringify(response));
            fetchData();
        
        })
        .catch(error => {
            console.log(error);
        });
    };
    const handleRemoveThisItem = () => {
        axios.delete(deleteUrl+itemID)
            .then(response => {
                //console.log(JSON.stringify(response));
                fetchData();
                
            })
            .catch(error => {
                console.log(error);
            });
      }
    

    return(
        <Container fluid='md' className = 'm-5'>
            {records.map((record) => {
                const data = {
                    "ID": record.item_id,
                    "picture": record.item_image,
                    "name": record.item_name,
                    "used_quantity": record.item_qty,
                    "price": record.item_price,
                    "description": record.item_desc,
                    "store": record.store_name
                  };
                return (
                <Row>
                    <Col>
                    <Card className = "w-90 h-30 p-10">
                        <Row>
                            <Col>
                            <Card.Body>
                                <Card.Img style = {{height: '10rem'}} className="w-50 p-100" variant="Left" src={data.picture}/>
                            </Card.Body>
                            </Col>
                            <Col>
                            <Row>
                                <Card.Title style = {{
                                    color: "black",
                                    backgroundColor: "lightgreen",
                                    padding: "10px",
                                    fontFamily: "Arial"}}>
                                {data.name}
                                </Card.Title>
                            </Row>
                            <Row>
                                <Card.Body>
                                <Row style = {{
                                    color: "black",
                                    padding: "10px",
                                    fontFamily: "Arial"}}>
                                    Price : ${data.price}<br/>
                                </Row>
                                <Row  style = {{
                                    color: "black",
                                    padding: "10px",
                                    fontFamily: "Arial"}}>
                                    Description : {data.description}<br/>
                                </Row>
                                </Card.Body>
                            </Row>
                            <Row>
                                <Col  style = {{
                                    color: "black",
                                    padding: "10px",
                                    fontFamily: "Arial"}}>
                                Added Items : {data.used_quantity}
                                </Col>         
                            </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <Button style={{margin:'20px'}} variant="outline-danger" className="float-right"onClick = {() => {
                                setItemID(data.ID);
                                handleRemoveThisItem();
                            }}>Remove Item</Button>
                            </Col>
                        </Row>
                    </Card>
                    </Col>
                </Row>
                );
            })}
            <Row>
                <Col>
                    <Button variant="outline-danger" className="float-left" style = {{width: 200}} onClick = {
                        handleRemoveAll 
                    }>Remove All</Button>
                </Col>
            
                <Col>
                    <Button variant="primary" className="float-right" style = {{width: 200}} onClick = {() => {
                        history.push("Payment"); 
                    }}>Payment</Button>
                </Col>
            </Row>
            
        </Container>
    );
}