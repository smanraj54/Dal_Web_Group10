import { useEffect, useState } from 'react';
import {Container, Row, Col , Form} from 'react-bootstrap';

import axios from 'axios';
import {CardComponent} from './Components/CardComponent';

function HomePageCatalogue(){
    console.log("Third Page");
    const baseUrl = 'https://homepagebackend.herokuapp.com';
    const getUrl = baseUrl+'/homepage/items';
    const [records, setRecords] = useState([]); 
    const [searchFilter, setSearchFilter] = useState('');
    const [cartData, setCartData] = useState([]);
    
    useEffect( () =>{
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
        fetchData();
    }, []);

    return (<div>
        <Container fluid='md' className = 'm-5' padding = "10" margin = "20">
             <Row>
                <Col>
                </Col>
            </Row>
            {/* <Row>
                <Col>
                <select onChange={(e) => sortArray(e.target.value)}>
                    <option value="NoFilter">Select Sortby option:</option>
                    <option value="FirstName">First Name</option>
                    <option value="LastName">Last Name</option>
                </select>
                </Col>
            </Row> */}
            {records.map((record) => {
                return (
                <Row>
                    <Col>
                        <CardComponent record = {record}/>
                    </Col>
                </Row>
                );
            })}
        </Container>
    </div>);
}

export default HomePageCatalogue;


 