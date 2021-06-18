import React, {Component} from 'react'
import Grocery from './grocery.png'

class Main extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            username:'',
            email:'',
            pwd:'',
            confirmPwd:'',
            question:'',
            answer:'',
            error: ''
        };
    }

    validation = (event) => {
        event.preventDefault();

        var errorTxt = '';
        if(this.state.username.trim() ==='')
        {
            errorTxt = "Please Enter Username.";
        }
        else if(/[^a-zA-Z0-9]/.test(this.state.username))
        {
            errorTxt = "Username accepts alpha-numeric characters only.";
        }
        else if(this.state.email.trim() ==='')
        {
            errorTxt = "Please Enter E-mail.";
        }
        else if(!/^[a-zA-z0-9]+[_]*[a-zA-Z0-9]+\@[a-zA-Z0-9]+\.[a-zA-Z]+$/.test(this.state.email))
        {
            errorTxt = "Enter Valid Email";
        }
        else if(this.state.pwd.trim().length < 8)
        {
            errorTxt = "Password should be of min 8 characters.";
        }
        else if(/[^A-Za-z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(this.state.pwd))
        {
            errorTxt = "Password should only contain alpha-numeric and special characters.";
        }
        else if(this.state.confirmPwd.trim().length < 8)
        {
            errorTxt = "Confirm Password.";
        }
        else if(this.state.pwd !== this.state.confirmPwd)
        {
            errorTxt = "Password do not match.";
        }
        else if(this.state.question.trim() ==='')
        {
            errorTxt = "Please Enter Question.";
        }
        else if(/[^a-zA-Z]/.test(this.state.question))
        {
            errorTxt = "Question should have alphabets only.";
        }
        else if(this.state.answer.trim() ==='')
        {
            errorTxt = "Please Enter Answer.";
        }
        else if(/[^a-zA-Z0-9]/.test(this.state.answer))
        {
            errorTxt = "Answer accepts aplhabets only.";
        }
        else
        {
            // this.props.history.push({
            //     pathname : '/profile',
            // });
        }
        this.setState({error: errorTxt});
        
    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }

    render(){
        return(
            <main>
                <div className="gap-3"><h1></h1></div>
                <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col col-lg-5">
                        <img src={Grocery} className="img-fluid" alt="grocery image"/>
                    </div>
                    <div className="col col-lg-5">
                        <form onSubmit={this.validation}>
                            <div className="container">
                                <div className="text-center">
                                    <h4>Sign Up</h4>
                                </div>
                                    <div className="mb-3">
                                        <label for="Username" className="form-label">Username</label>
                                        <input type="text" className="form-control" name="username" placeholder="Username" onChange={this.handleChange}/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="Email" className="form-label">Email address</label>
                                        <input type="text" className="form-control" name="email" placeholder="E-mail" onChange={this.handleChange}/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="Password" className="form-label">Password</label>
                                        <input type="password" className="form-control" name="pwd" placeholder="Password" onChange={this.handleChange}/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="confirmPassword" className="form-label">Confirm Password</label>
                                        <input type="password" className="form-control" name="confirmPwd" placeholder="Confirm Password" onChange={this.handleChange}/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="question" className="form-label">Enter Security Question</label>
                                        <input type="text" className="form-control" name="question" placeholder="Security Question" onChange={this.handleChange}/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="answer" className="form-label">Answer</label>
                                        <input type="text" className="form-control" name="answer" placeholder="Answer" onChange={this.handleChange}/>
                                    </div>
                                    <div className="text-center">
                                        <h6 style={{color: 'blue'}}>{this.state.error}</h6>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                        <h1></h1>
                                    </div>
                                </div>
                
                        </form>
                    </div>
                </div>
                </div>
            </main>
        )
    }
}

export default Main;