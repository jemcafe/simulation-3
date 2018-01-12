import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Auth0Lock from 'auth0-lock';

import { connect } from 'react-redux';
import { login } from '../../redux/ducks/reducer';  // frome redux

class Login extends Component {
    constructor () {
        super();
        this.state = {

        };
        this.lock = null;
        this.login = this.login.bind( this );
    }

    componentDidMount () {
        this.lock = new Auth0Lock( process.env.REACT_APP_AUTH0_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN );
        this.lock.on( 'authenticated', authResult => {
            this.lock.getUserInfo( authResult.accessToken, ( error, user ) => {
                console.log('user', user);
                // axios.post('/login', { userId: user.sub } ).then( response => {
                //     this.props.login( response.data.user );
                //     this.props.history.push('/user')
                // });
            });
        });
    }

    login () {
        this.lock.show();
    }

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

const mapDispatchToProps = {
    login: login
}

export default connect( null, mapDispatchToProps )( Login );