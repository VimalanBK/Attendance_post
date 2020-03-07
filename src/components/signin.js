import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import './../styles/signin.css';


class Signin extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            error: '',
      }
      this.handlePassChange = this.handlePassChange.bind(this);
      this.handleUserChange = this.handleUserChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.dismissError = this.dismissError.bind(this);
  }
  dismissError() {
    this.setState({ error: '' });
}

handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
        return this.setState({ error: 'Enter valid Username ' });
    }

    else if (!this.state.password) {
        return this.setState({ error: 'Enter valid Password' });
    }
    else {
        this.setState({ error: '' });
        axios.get('http://localhost:5001/posts?name_like'+ this.state.username +'&password_like='+ this.state.password ).then(resp => {

            console.log(resp.data);
            if(resp.data.length===0)
            {
                return this.setState({ error: 'USER DOES NOT EXIST' });
            }
            else
            {
                console.log(this.props.history);
                this.props.history.push("/dashboard")
                sessionStorage.setItem("userdata",resp.data);
            }
        }).catch(error => {

            console.log(error);
        });
    }
}

handleUserChange(evt) {
    this.setState({
        username: evt.target.value,
    });
};

handlePassChange(evt) {
    this.setState({
        password: evt.target.value,
    });
}

    test = (e) =>{
        console.log(this.props.history);
        this.props.history.push("/dashboard")
      
    }
    render() {
        return (
            <div className="container">
                <h1 class='title'>SIGN-IN</h1>
                <form onSubmit={this.handleSubmit}>
                    {
                        this.state.error &&
                        <h3 data-test="error" onClick={this.dismissError}>
                            {this.state.error}
                        </h3>
                    }
                    <p class='inp'>
                    <h1 class='val'>Username:<br /><input type='text' data-test="username" value={this.state.username} onChange={this.handleUserChange}></input></h1>
                    <h1 class='val'>Password:<br /><input type='password' data-test="password" value={this.state.password} onChange={this.handlePassChange}></input></h1><br />
                    <button class='btn'>SIGN-IN</button>
                    </p>                
                    </form>

            </div>
        );
    }
}
export default Signin;