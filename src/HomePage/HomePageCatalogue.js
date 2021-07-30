
/*
Author: Manraj Singh
Dal Id: B00877934
email id: mn697903@dal.ca
*/

import { useEffect, useState } from 'react';
import {Container, Row, Col , Form} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {CardComponent} from './Components/CardComponent';
import UserHeader from '../UserManagement/components/UserHeader';
import { useLocation } from "react-router-dom";

/*
    Homepage items are fetched from the database with their detials and rendered on the browser screen
 */

function HomePageCatalogue(props){
    console.log("Third Page");
    const location = useLocation();
    const [store,setStore] = useState(location.state.data);
    console.log(location.state.data);

    //const baseUrl = 'https://homepagebackend.herokuapp.com';
    const baseUrl = 'https://group10projectbackend.herokuapp.com';
    //const baseUrl = 'http://localhost:2000';
    const getUrlCatagory = 'http://localhost:3001/getCatagories';
    const getUrlitems = 'http://localhost:3001/getItems';
    
    const getUrl = baseUrl+'/homepage/items';
    const [records, setRecords] = useState([]); 
    const [searchFilter, setSearchFilter] = useState('');
    const [cartData, setCartData] = useState([]);
    const [catagory, setCatagory] = useState([]);
    const [filtered, setFiltered] = useState([]);

    /*items fetched from database once the page is loaded 
    using apis exposed from backend api 
    */
    useEffect( () =>{
        async function fetchData(){
            const data = new URLSearchParams();
            data.set('store_name', store.store_name);
            await axios.post(getUrlitems,data)
            .then(response => {
                //console.log(JSON.stringify(response));
                setRecords(response.data.data);
                setFiltered(response.data.data);
                console.log(response.data);
                fetchCatagory();
            })
            .catch(error => {
                console.log(error);
            });
            console.log("Records");
            console.log(records);   
        }
        async function fetchCatagory(){
            await axios.get(getUrlCatagory)
            .then(response => {
                //console.log(JSON.stringify(response));
                setCatagory(response.data.data);
                console.log(response.data);
            
            })
            .catch(error => {
                console.log(error);
            });
            console.log("catagories");
            console.log(catagory);   
        }
        fetchData();
    }, []);

    function showFilteredItems(category){
        let filteredArray = [];
        for ( var i in records){
            var item = records[i];

            if(item.category === category){
                filteredArray.push(item);
            }
        }
        setFiltered(filteredArray);
    }

    return (<div>
    <UserHeader/>
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

            {
                catagory.map((cat, index) => (
                <Row key={index}>
                    <Col>
                        <button style={{ backgroundColor: '#8EE4AF', width: '200px' }} onClick={() => showFilteredItems(cat.category)}>{cat.category}</button>
                    </Col>
                </Row>
            ))
            }
            <h6>------------------</h6>
            {filtered && filtered.length > 0
                    ? filtered.map((record) => {
                return (
                <Row>
                    <Col>
                        <CardComponent record = {record}/>
                    </Col>
                </Row>
                );
            }) :
            <h2>No item in this category!!</h2>}
        </Container>
    </div>);
}

export default HomePageCatalogue;


 