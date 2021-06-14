import { Button, Container, Card } from 'react-bootstrap';
import React from 'react';
import { useHistory } from 'react-router-dom';


function FirstPage(){
    const history = useHistory();

    const handleSignUp = () =>{
        history.push("SecondPage");
    }


    return (<div>
        {
            <Container fluid>
                <Card style = {{color: '#000'}}>
                <Card.Img src = 'https://picsum.photos/id/237/1000/500'/>
                <Card.Body>
                    <Card.Title>
                    Welcome To the Page :
                    </Card.Title>
                    <Button type = 'submit' onClick = {handleSignUp}>SignUp</Button>
                </Card.Body>
                </Card>
            </Container>
        }
    </div>);
}

export default FirstPage;