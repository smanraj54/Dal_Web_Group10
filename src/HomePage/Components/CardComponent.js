import {Card, Row, Col, Button} from 'react-bootstrap';
//import SecondPage from './SecondPage';
import { useHistory } from 'react-router-dom'; 
import axios from 'axios';
import { useEffect, useState } from 'react';


export const CardComponent = (Props) => {
    const [usedQuantity, setUsedQuantity] = useState(0);
    var baseUrl = "https://homepagebackend.herokuapp.com";
    const data = {
        "ID": Props.record.item_id,
        "picture": Props.record.item_image,
        "name": Props.record.item_name,
        "available_quntity": Props.record.item_qty,
        "price": Props.record.item_price,
        "description": Props.record.item_desc,
        "store": Props.record.store_name,
        "used_quantity": 0
    }
    
    async function fetchData(){
        console.log("Fetching Data");
        await axios.get(baseUrl+'/cart/items/'+data.ID)
        .then(response => {
            //console.log(JSON.stringify(response));
            data.used_quantity = response.data.item_qty;
            setUsedQuantity(data.used_quantity);
            console.log("Used Quantity" + data.used_quantity);
        })
        .catch(error => {
            console.log(error);
        });

    }
    useEffect( () => {
        fetchData();
    },[]);

    const handleAddItem = () =>{
        const AddItemURL = baseUrl+'/cart/add';
        fetchData();
        console.log("inside onClick = {handleSignUp}");
        axios.post(AddItemURL, Props.record)
            .then(response => {
                console.log(response);
                if(response.status === 200 ){
                    console.log("Item Added !!!!");
                    fetchData();
                    //history.push("ThirdPage");
                }
                else{
                    //history.push("Wrong");
                    console.log("Item Not Added ERROR !!!!");
                }
            })
            .catch(error => {
                console.log(error);
                //history.push("Wrong")
            }
        );
        

    }

    


    return (
        
            <Card style = {{color: '#000'}} >
                <Row>
                    <Col>
                        <Card.Img variant="Left" src = {data.picture} width = "100%"/>
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
                                Available Items : {data.available_quntity}
                            </Col>
                            <Col>
                                Added Items : {usedQuantity}
                            </Col>
                            
                        </Row>
                        <Row>
                            <Button onClick = {handleAddItem}>Add Item</Button>
                        </Row>
                    </Col>
                </Row>
            
            </Card>
        
    );
}

export default CardComponent;