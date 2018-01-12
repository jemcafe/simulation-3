import React, { Component } from 'react';
import homeLogo from '../../assets/home.png';
import searchLogo from '../../assets/search.png';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { updatePageTitle } from '../../redux/ducks/reducer';

class UserAccount extends Component {
    render () {
        const { updatePageTitle } = this.props;

        return (
            <div className="useraccount">
                <div className="useraccount-container">
                    {/* <div>USERACCOUNT</div> */}
                    
                    <div className="header">
                        <div className="header-container">
                            {/* <div>HEADER</div> */}

                            <div className="nav">
                                <div className="site-name">Helo</div>
                                <Link to="/user/"><img src={ homeLogo } alt="Home" onClick={ () => updatePageTitle('Dashboard') }/></Link>
                                <Link to="/user/search"><img src={ searchLogo } alt="Search" onClick={ () => updatePageTitle('Search') }/></Link>
                                {/* <img src="" alt="Friends"/> */}
                            </div>
                            <div className="page-title">{ this.props.pageTitle }</div>
                            <div>Logout</div>

                        </div>
                    </div>

                    <div className="main">
                        <div className="main-container panel">

                            { this.props.children }

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = ( state ) => {
    return { pageTitle: state.pageTitle };
}

const mapDispatchToProps = {
    updatePageTitle: updatePageTitle
}

export default connect( mapStateToProps, mapDispatchToProps )( UserAccount );