import {Card, Row, Col } from 'react-bootstrap';
//import SecondPage from './SecondPage';


export const CardComponent2 = (Props) => {
    return (
        
            <Card style = {{color: '#000'}} >
                <Row>
                    <Col>
                        <Card.Img variant="Left" src = {Props.data.picture} width = "75%"/>
                    </Col>
                    <Col>
                    <Row>
                        <Card.Title>
                            Welcome {Props.data.title}. {Props.data.firstName}
                        </Card.Title>
                    </Row>
                    <Row>
                        <Card.Body>
                            <Row>
                                ID : {Props.data.id}<br/>
                            </Row>
                            <Row>
                                FirstName : {Props.data.firstName}<br/>
                            </Row>
                            <Row>
                                LastName : {Props.data.lastName}<br/>
                            </Row>
                            <Row>
                                Email : {Props.data.email}<br/>
                            </Row>
                        </Card.Body>
                    </Row>
                    </Col>
                </Row>
            
            </Card>
        
    );
}
