import {Container, Card } from 'react-bootstrap';
//import SecondPage from './SecondPage';


function ThirdPage(Props){
    return (<div>
        <Container fluid>
            <Card style = {{color: '#000'}}>
            <Card.Img src = 'https://picsum.photos/id/237/1000/500'/>
            <Card.Body>
                <Card.Title>
                Welcome {Props.firstName}
                </Card.Title>
                <Card.Body>
                    Your FirstName : {Props.firstName}<br/>
                    Your LastName : {Props.lastName}<br/>
                    Your Email : {Props.email}<br/>
                </Card.Body>
            </Card.Body>
            </Card>
        </Container>
    </div>);
}

export default ThirdPage;