import { Form, Button, Container, Card} from 'react-bootstrap';
// import reactDom from 'react-dom';
import ThirdPage from './ThirdPage';
import React, {useState} from 'react';

var nameValidationPattern = new RegExp('^[0-9A-Za-z]*$');
var passwordValidationPattern = new RegExp('^[0-9A-Za-z$_@]*$');
var emailValidationPattern = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');

function SecondPage(){
    
    const [emailValidation, setEmailValidation] = useState(false);
    const [firstNameValidation, setFirstNameValidation] = useState(false);
    const [lastNameValidation, setLastNameValidation] = useState(false);
    const [passwordValidation, setPasswordValidation] = useState(false);
    const [confirmPasswordValidation, setConfirmPasswordValidation] = useState(false);
    const [completeValidation, setCompleteValidation] = useState(false);
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
    const [redirectPage, setRedirectPage] = useState('SecondPage');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    
    const handleCompleteValidation = (event) => {
        const flag = (emailValidation || firstNameValidation || lastNameValidation || passwordValidation || confirmPasswordValidation);
        setCompleteValidation(!flag);
        if(flag){
            event.preventDefault();
            event.stopPropagation();
            alert("Please Check the Entered Values!!!");
        }
        else{
            event.preventDefault();
            setRedirectPage('ThirdPage');
        }
        
        
        
    }
    const handleConfirmPasswordValidation = (event) => {
        setConfirmPasswordValue(event.target.value);
        const flag  = event.target.value === passwordValue;
        setConfirmPasswordValidation(!flag);

    }
    const handlePasswordValidation = (event) => {
        const flag = (passwordValidationPattern.test(event.target.value) && event.target.value.length >= 7);
        setPasswordValue(event.target.value);
        console.log(flag);
        console.log(event.target.value);
        
        setPasswordValidation(!flag);
        if(confirmPasswordValue){
            const flag2 = event.target.value === confirmPasswordValue;
        setConfirmPasswordValidation(!flag2);
    }

    }
    const handleFirstNameValidation = (event) => {

        const flag = nameValidationPattern.test(event.target.value);
        setFirstNameValidation(!flag);
        setFirstName(event.target.value);

    }
    const handleLastNameValidation = (event) =>{

        const flag = nameValidationPattern.test(event.target.value);
        setLastNameValidation(!flag);
        setLastName(event.target.value);
    }
    const handleEmailValidation = (event) =>{

        const flag = emailValidationPattern.test(event.target.value);
        setEmailValidation(!flag);
        setEmail(event.target.value);
        
    }



    
    return (
        <div>
            {
                
                redirectPage === 'ThirdPage' ? <ThirdPage firstName = {firstName} lastName = {lastName} email = {email}/> :
                
                <Container fluid>
                    <Card style = {{color: '#000'}}>
                    <Card.Img src = 'https://picsum.photos/id/237/1000/500'/>
                    <Card.Body>
                        <Card.Title>
                        Please Sign-Up here :
                        </Card.Title>
                    </Card.Body>
                    </Card>
                    <Form validated={completeValidation} onSubmit={handleCompleteValidation}>
                    <Form.Group controlId = "formFirstName">
                            <Form.Label>
                                FirstName
                            </Form.Label>
                            <Form.Control required isInvalid = {firstNameValidation} onChange = {handleFirstNameValidation} type="text" placeholder="FirstName"/>
                            <Form.Control.Feedback type='invalid'>FirstName should be an alfhanumeric value!!! </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId = "formLastName">
                            <Form.Label>
                                LastName
                            </Form.Label>
                            <Form.Control required isInvalid = {lastNameValidation} onChange = {handleLastNameValidation} type="text" placeholder="LastName"/>
                            <Form.Control.Feedback type='invalid'>LastName should be an alfhanumeric value!!! </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId = "formEmail">
                            <Form.Label>
                                EmailAddress
                            </Form.Label>
                            <Form.Control required isInvalid = {emailValidation} onChange = {handleEmailValidation} type="text" placeholder="UserName"/>
                            <Form.Control.Feedback type='invalid'>Enter Correct Email format !!!!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId = "formPassword">
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control required isInvalid = {passwordValidation} onChange = {handlePasswordValidation} value = {passwordValue} type="password" placeholder="Enter Unique Password!!!"/>
                            <Form.Control.Feedback type = 'invalid'>Please Enter 7 Characters with special characters and capital letter in it</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId = "formConfirmPassword">
                            <Form.Label>
                                Confirm Password
                            </Form.Label>
                            <Form.Control required isInvalid = {confirmPasswordValidation} onChange = {handleConfirmPasswordValidation} value = {confirmPasswordValue} type="password" placeholder="Confirm Password"/>
                            <Form.Control.Feedback type='invalid'>Password is not Matching!!!!</Form.Control.Feedback>
                        </Form.Group>
                    <Button type='submit'>
                        Submit
                    </Button>
                    </Form>
                </Container>
                
                
            }
        </div>

    );
}
export default SecondPage;