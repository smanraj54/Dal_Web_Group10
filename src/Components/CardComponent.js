import {Card, Row, Col } from 'react-bootstrap';
//import SecondPage from './SecondPage';
import { useHistory } from 'react-router-dom'; 


export const CardComponent = (Props) => {
    const history  = useHistory();
    const data = {
        "email": Props.email,
        "ID": Props.ID,
        "title": Props.title,
        "firstName": Props.firstName,
        "lastName": Props.lastName,
        "picture": Props.picture
    }
    const ID = data.ID;

    const handleClick = () =>{
        //alert("Clicked");
        console.log("Clicked Card");
        //history.push('FourthPage');
        history.push({pathname : "FourthPage",
            state : {ID: {ID}}
        });
    }

    return (
        
            <Card style = {{color: '#000'}} onClick = {() => {
                handleClick()
            }}>
                <Row>
                    <Col>
                        <Card.Img variant="Left" src = {data.picture} width = "100%"/>
                    </Col>
                    <Col>
                    <Row>
                        <Card.Title>
                            {Props.title}. {data.firstName}
                        </Card.Title>
                    </Row>
                    <Row>
                        <Card.Body>
                            <Row>
                                FirstName : {data.firstName}<br/>
                            </Row>
                            <Row>
                                LastName : {data.lastName}<br/>
                            </Row>
                            <Row>
                                Counter : {Props.Counter}<br/>
                            </Row>
                        </Card.Body>
                    </Row>
                    </Col>
                </Row>
            
            </Card>
        
    );
}

export default CardComponent;