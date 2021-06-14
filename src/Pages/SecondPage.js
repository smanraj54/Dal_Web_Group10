import { Form, Button, Container, Card} from 'react-bootstrap';
// import reactDom from 'react-dom';
//import ThirdPage from './ThirdPage';
import React, {useState} from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';

function SecondPage(){

    const history = useHistory();
    const [passwordValue, setPasswordValue] = useState('');
    //const [redirectPage, setRedirectPage] = useState('SecondPage');
    const [email, setEmail] = useState('');
    const data = {
        "email": email,
        "password":passwordValue
    };
    const handleLogin = (event) => {
        event.preventDefault();
        console.log({email});
        console.log({passwordValue});
        const postUrl = 'https://tutorial4-api.herokuapp.com/api/users/login';
        
        axios.post(postUrl, data)
            .then(response => {
                console.log(response);
                if(response.status === 200 ){
                    console.log("login Successful !!!!");
                    history.push("ThirdPage");
                }
                else{
                    history.push("Wrong")
                }
            })
            .catch(error => {
                console.log(error);
                history.push("Wrong")
            }
        );
        // history.push({pathname : "ThirdPage",
        //     state : {email: {email}, password: {passwordValue}}
        // });
        console.log("Second Page");
        //console.log({history});
        // console.log("Email Value:" + {event});
        
        
    }

    const handleEmail = (event) =>{
            setEmail(event.target.value);
    }
    const handlePassword = (event) =>{
        setPasswordValue(event.target.value);
}

    return (
        <div>
            {
                
                // redirectPage === 'ThirdPage' ? <ThirdPage password = {passwordValue} email = {email}/> :
                
                <Container fluid>
                    <Card style = {{color: '#000'}}>
                    <Card.Img src = 'https://picsum.photos/id/237/1000/500'/>
                    <Card.Body>
                        <Card.Title>
                        Please Login here :
                        </Card.Title>
                    </Card.Body>
                    </Card>
                    <Form onSubmit={handleLogin}>
                        <Form.Group controlId = "formEmail" value = {email} onChange = {handleEmail}>
                            <Form.Label>
                                EmailAddress
                            </Form.Label>
                            <Form.Control required type="text" placeholder="Email"/>
                        </Form.Group>
                        <Form.Group controlId = "formPassword" value = {passwordValue} onChange = {handlePassword}>
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control required type="password" placeholder="Enter Password!!!"/>
                        </Form.Group>
                    <Button type='submit'>
                        Login
                    </Button>
                    </Form>
                </Container>
                
                
            }
        </div>

    );
}
export default SecondPage;