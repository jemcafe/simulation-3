import React, { Component } from 'react';
import homeLogo from '../../assets/home.png';
import searchLogo from '../../assets/search.png';
import { Link } from 'react-router-dom';

class UserAccount extends Component {
    render () {
        return (
            <div className="useraccount">
                <div className="useraccount-container">
                    {/* <div>USERACCOUNT</div> */}
                    
                    <div className="header">
                        <div className="header-container .panel">
                            {/* <div>HEADER</div> */}

                            <div className="nav">
                                <div className="site-name">Helo</div>
                                <Link to="/user/"><img src={ homeLogo } alt="Home"/></Link>
                                <Link to="/user/search"><img src={ searchLogo } alt="Search"/></Link>
                                {/* <img src="" alt="Friends"/> */}
                            </div>
                            <div>PAGE TITLE</div>
                            <div>Logout</div>

                        </div>
                    </div>

                    <div className="main">
                        <div className="main-container">

                            { this.props.children }

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default UserAccount;