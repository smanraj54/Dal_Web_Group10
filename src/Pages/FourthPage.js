import {Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { CardComponent2 } from '../Components/CardComponent2';
//import { CardComponent } from '../Components/CardComponent';
import { useEffect, useState } from 'react';
import axios
 from 'axios';
function FourthPage(){
        console.log("Fourth Page");
        const location = useLocation();
        const ID  = location.state.ID.ID;
        const[record, setRecord] = useState([]);
        console.log("PageFour!!!");
        //console.log(location.state);
        const getUrl = "https://tutorial4-api.herokuapp.com/api/users/"+ ID;
        console.log(getUrl);
        useEffect( () =>{

            async function fetchData(){
                await axios.get(getUrl)
                .then(response => {
                    console.log(JSON.stringify(response));
                    setRecord(response.data.data);
                    
                })
                .catch(error => {
                    console.log(error);
                });

                console.log("Record!!!!");
                console.log(record);
            }
            fetchData();
        });
        
    return (<div>
        <Container fluid Width = "100%" className = 'm-5' padding = "10">
            <Row>
                <Col>
                    <h2>Profile Details:</h2>
                </Col>
            </Row>
            <Row>
            { <CardComponent2 data = {record}/> }
            </Row>
        </Container>
    </div>);
}

export default FourthPage;