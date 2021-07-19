import {Container, Row, Col, Button} from 'react-bootstrap';
import {CardComponent} from './Components/CardComponent';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';


export const Cart = () =>{

    var baseUrl = "https://homepagebackend.herokuapp.com";
    const [toggle, setToggle] = useState(true);
    var getUrl = baseUrl + "/cart/items";
    const [records, setRecords] = useState([]);
    const history = useHistory();

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
        fetchData();
    }, []);

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
    

    return(
        <Container fluid='md' className = 'm-5'>
            {records.map((record) => {
                return (
                <Row>
                    <Col>
                        <CardComponent record = {record} toggle = {toggle}/>
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