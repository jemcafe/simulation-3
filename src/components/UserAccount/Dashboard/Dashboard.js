import React, { Component } from 'react';

class Dashboard extends Component {
    render () {
        return (
            <div className="dashboard ">
                <div className="dashboard-container">
                    {/* <div>DASHBOARD</div> */}
                    
                    <div className="info">
                        <div className="info-container">
                            <div>
                                <div>Avatar</div>
                            </div>
                            <div>First Name</div>
                            <div>Last Name</div>
                            <button>Edit Profile</button>
                        </div>
                    </div>

                    <div className="greeting">
                        <div className="greeting-container">
                            Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!
                        </div>
                    </div>

                    <div className="recommended">
                        <div className="recommended-container">
                            <div>Recommened Friends</div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Dashboard;