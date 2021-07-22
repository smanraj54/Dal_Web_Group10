import { useEffect, useState } from 'react';
import {Container, Row, Col , Form} from 'react-bootstrap';

import axios from 'axios';
import {CardComponent} from './Components/CardComponent';

/*
    Homepage items are fetched from the database with their detials and rendered on the browser screen
 */

function HomePageCatalogue(){
    console.log("Third Page");

    //const baseUrl = 'https://homepagebackend.herokuapp.com';
    const baseUrl = 'https://group10projectbackend.herokuapp.com';
    //const baseUrl = 'http://localhost:2000';
    const getUrl = baseUrl+'/homepage/items';
    const [records, setRecords] = useState([]); 
    const [searchFilter, setSearchFilter] = useState('');
    const [cartData, setCartData] = useState([]);
    

    /*items fetched from database once the page is loaded 
    using apis exposed from backend api 
    */
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
        <Container fluid='md' className = 'm-5' style = {{padding: "10px"}}>
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


 