import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

class Login extends Component {
    render () {
        return (
            <div className="login">
                <div className="login-container">

                    {/* <div>LOGIN</div> */}

                    <div className="container">
                        <img src={ logo } alt="Winky face"/>
                        <h1 className="title">Helo</h1>
                        <Link to="/user"><button>Login / Register</button></Link>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Login;