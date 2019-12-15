import React from 'react';

import { Button, Form } from 'reactstrap';


class SignIn extends React.Component {
    render() {

        let signIn = () => {
            // window.location.assign('https://api.instagram.com/oauth/authorize\n' +
            //     '  ?app_id=464152924481142\n' +
            //     '  &redirect_uri=http://localhost:3000\n' +
            //     '  &scope=user_profile,user_media\n' +
            //     '  &response_type=code');
        };

        return (
            <div className="row">
                <div className="col"></div>
                <div className="col-lg-6 col-sm-12">
                    <Form>
                        <Button onClick={signIn} id="signin" className="instagram" color="primary">SignIn with Instagram/Facebook</Button>
                    </Form>
                </div>
                <div className="col"></div>
            </div>
        )
    }
}

export default SignIn;