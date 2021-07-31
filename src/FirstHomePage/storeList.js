/*
Author: Kishan Rakeshbhai Patel
Dal Id: B00882970
email id: kishanp@dal.ca
*/
import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import UserHeader from '../UserManagement/components/UserHeader';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';

function StoreList(props) {

    const history = useHistory();
    const [storeList, setList] = useState([]);
    const url = "http://localhost:3001/getStores";

    useEffect(() => {
        fetchComplains();
    }, []);

    //get all the complaints submitted by the current user
    async function fetchComplains() {
        await axios.get(url).then((res) => {
            console.log(res.data.data);
            setList(res.data.data);
        });
    }

    function showProducts(store) {
        history.push({
            pathname: "/home",
            state: { data: store }
        });
    }

    return (
        <div>
            <UserHeader />
            <Row xs={1} md={3} className="g-4">
                {Array.from(storeList).map((store, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Body>
                                <Card.Title onClick={() => showProducts(store)}>{store.store_name}</Card.Title>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {storeList.map((store, index) => (
                <Row key={index}>
                    <Col>
                        <button style={{ backgroundColor: '#8EE4AF', width: '200px' }} onClick={() => showProducts(store)}>{store.store_name}</button>
                    </Col>
                </Row>
            ))}
        </div>
    );

}

export default StoreList;