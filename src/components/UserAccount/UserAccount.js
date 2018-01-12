import React, { Component } from 'react';
import homeLogo from '../../assets/home.png';
import searchLogo from '../../assets/search.png';

class UserAccount extends Component {
    render () {
        return (
            <div className="useraccount">
                <div className="useraccount-container">

                    <div>USERACCOUNT</div>
                    
                    <div classname="header">
                        <div classname="header-container">

                            <div>HEADER</div>
                            <div>Helo</div>
                            <img src={ homeLogo } alt="Home"/>
                            <img src={ searchLogo } alt="Search"/>
                            {/* <img src="" alt="Friends"/> */}
                            <div>Dashboard</div>

                        </div>
                    </div>

                    <div classname="main">
                        <div classname="main-container">

                            <div>MAIN</div>

                            { this.props.children }

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default UserAccount;