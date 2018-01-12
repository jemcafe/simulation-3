const axios = require('axios');

module.exports = {
    login ( req, res ) {
        const { userId } = req.body;
        const auth0Url = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/users/${userId}`;

        const body = { 
            headers: { 
                Authorization: 'Bearer ' + process.env.AUTH0_MANAGEMENT_ACCESS_TOKEN 
            } 
        };

        axios.get(auth0Url, body).then( response => {
            const userData = response.data;

            req.session.user = {
                auth0_id: userData.user_id,
                name: userData.name,
                email: userData.email
            }

            res.json({ user: req.session.user });

            app.get('db').find_user( userData.user_id ).then( users => {
                if ( !users.length ) {
                    // The user is created in the database. Nothing needs to happen in '.then()'
                    app.get('db').create_user( [userData.user_id, userData.name, userData.email] ).then().catch( error => console.log( 'error', error ) );
                }
            });
        }).catch( error => { 
            console.log( 'error', error );
            res.status(200).json({ message: 'problem' });
        });
    },

    logout ( req, res ) {
        req.session.destroy();
        
    }
}