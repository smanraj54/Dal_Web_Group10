import { useEffect, useState } from 'react';
import {Container, Row, Col , Form} from 'react-bootstrap';
//import { useLocation } from 'react-router-dom';
import axios from 'axios';
import {CardComponent} from '../Components/CardComponent';
function ThirdPage(){
        console.log("Third Page");
        //const location = useLocation();
        //const email = location.state.email;
        //const password = location.state.password;
        //console.log(email);
        //console.log(password);
        const getUrl = 'https://tutorial4-api.herokuapp.com/api/users/';
        const [records, setRecords] = useState([]); 
        const [sortDirection, setSortDirection] = useState("NoFilter");
        const [searchFilter, setSearchFilter] = useState('');
        
        useEffect( () =>{
            async function fetchData(){
                await axios.get(getUrl)
                .then(response => {
                    //console.log(JSON.stringify(response));
                    setRecords(response.data.data);
                    
                })
                .catch(error => {
                    //console.log(error);
                });

                // console.log("Records");
                //console.log(records);
                
            }
            fetchData();
        });

        const sortArray = (Type) =>{
            const Types = {
                NoFilter: "id",
                FirstName: "firstName",
                LastName: "lastName" 
            };
            const sortProperty = Types[Type];
            const temp = records;
            const sorted = temp.sort((a,b) => a[sortProperty].localeCompare(b[sortProperty]));
            //console.log(Type);
            //console.log(sortProperty);
            //console.log(records[0][sortProperty]);
            //records = null;
            setRecords(sorted);
            console.log(temp);
            setSortDirection(Type);

            
        }

        const filterArray = (event) => {
            setSearchFilter(event.target.value);
        }
                    

    return (<div>
        <Container fluid='md' className = 'm-5' padding = "10">
             <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Search Bar</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name:" value = {searchFilter} onChange={filterArray}/>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                <select onChange={(e) => sortArray(e.target.value)}>
                    <option value="NoFilter">Select Sortby option:</option>
                    <option value="FirstName">First Name</option>
                    <option value="LastName">Last Name</option>
                </select>
                </Col>
            </Row>
            {records.filter(name => (((name.firstName).toUpperCase()).includes(searchFilter.toUpperCase()) || ((name.lastName).toUpperCase()).includes(searchFilter.toUpperCase()))).map((record) => {
                return (
                <Row>
                    <Col>
                        <CardComponent ID = {record.id} title = {record.title} firstName = {record.firstName} lastName = {record.lastName} picture = {record.picture} email = {record.email} sortDirection = {sortDirection}/>
                    </Col>
                </Row>
                );
            })}
        </Container>
    </div>);
}

export default ThirdPage;