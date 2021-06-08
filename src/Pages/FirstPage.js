import { Button, Container, Card } from 'react-bootstrap';
import SecondPage from './SecondPage';
import React, {useState} from 'react';

function FirstPage(){
    
    const [redirectPage, setRedirectPage] = useState('FirstPage');
    const handleSignUp = () =>{
        setRedirectPage('SecondPage');
    }


    return (<div>
        {
            redirectPage === 'SecondPage' ? <SecondPage/> :
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