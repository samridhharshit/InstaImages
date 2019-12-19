import React from "react";
import { Redirect } from 'react-router';

import { db } from "../firebase";

class Display extends React.Component {
    state = {
        redirectRoute: null
    };

    componentDidMount() {
        console.log(this.props.location.search);
        var hashCode = new URLSearchParams(this.props.location.search);
        var code = hashCode.get("code");
        console.log(code);

        // creating acces token
        var formData = new FormData();
        var queryBody = {
            app_id: "840025923096459",
            app_secret: "c9ada601143b271232eb185b39a62f88",
            grant_type: "authorization_code",
            redirect_uri: "https://instaimages.herokuapp.com/images",
            code: code
        };

        for (var key in queryBody) {
            formData.append(key, queryBody[key]);
        }

        // fetching access_token and rendering images of the user
        fetch("https://api.instagram.com/oauth/access_token", {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(access => {
                //  access token generated
                console.log(access);

                //accessing username
                fetch(`https://graph.instagram.com/me?fields=id,username&access_token=${access.access_token}`)
                    .then(res => res.json())
                    .then(async data => {
                        console.log(data);

                        // saving access_token in database
                        db.collection("info")
                            .doc(data.username.toString())
                            .set({
                                access_token: access.access_token,
                                id: data.id
                            })
                            .then(console.log("data saved!"))
                            .catch(err => {
                                throw err;
                            });

                        //redirecting to the sharable images page
                        await this.setState({redirectRoute: data.username});

                    })
                    .catch(onerror => console.log(onerror));


                // this.setState({ userInfo: data }, async () => {
                //     await console.log(this.state.image);
                // });
                // console.log(this.state.userInfo);

                // try {
                //
                // } catch {
                //     // redirecting to signUp Page
                //     window.location = `https://instaimages.herokuapp.com/`;
                // }
            })
            .catch(error => {
                throw error;
            });
    }

    render() {
        var route;
        if (this.state.redirectRoute) {
            route = "/images/" + this.state.redirectRoute;
            // console.log(route);
            return <Redirect push to={route} />;
        }
        return (
            <div className="display">

            </div>
        )
    }
}

export default Display;
