import React, {Component} from 'react'

import {PostData} from '../../utils/auth_api'

import {FormGroup,Button,Form,Label,Input} from 'reactstrap'
import { FacebookLoginButton,GoogleLoginButton } from 'react-social-login-buttons';

class SignIn extends Component{
    state={
        email:'',
        password:'',
       
    }
    handleChange=(e)=>{
       this.setState({
           [e.target.id]:e.target.value
       })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        const {email,password}=this.state;
        return(
            
          <Form onSubmit={this.handleSubmit} className="login-form">
             
              <h2 className="text-center">Login</h2>
              <FormGroup>
                  <Label>Email</Label>
                  <Input type="email"id="email" placeholder="Email" onChange={this.handleChange}></Input>
              </FormGroup>
              <FormGroup>
                  <Label>Password</Label>
                  <Input type="password"  id="password" placeholder="Password" onChange={this.handleChange}></Input>
              </FormGroup>
              <Button className="btn-lg btn-dark btn-block" >
                Login
              </Button>
              <div className="text-center pt-3">
                  Or continue with your social account
              </div>
              <FacebookLoginButton className="mt-3 mb-3"></FacebookLoginButton> <span><GoogleLoginButton className=" mt-3 mb-3"></GoogleLoginButton></span>
              <div className="text-center">
                  <a href="./signup">Sign up</a>
                  <span className="p-2">|</span>
                  <a href="#">Forgot Password</a>
              </div>
          </Form>
          
         
        )
    }
}

export default SignIn;