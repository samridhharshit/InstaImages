import React from 'react';

import { db } from '../firebase';

class Images extends React.Component {

    state = {
        headerImage: "",
        headerImageId: null,
        headerImageUrl: "",
        image: "",
    };

    componentDidMount() {

        // fetching the username from the url
        var username = this.props.match.params.username;
        console.log(username);

        db.collection("info")
            .doc(username)
            .get()
            .then(querySnapshot => {
                console.log(querySnapshot.data().access_token);

                fetch(
                    `https://graph.instagram.com/me/media?fields=id,username,media_url,media_type&access_token=${querySnapshot.data().access_token}`
                )
                    .then(res => res.json())
                    .then(data => {
                        console.log(data.data);

                        // storing all the urls of the images in the "image" state
                        this.setState({ image: data.data }, async () => {
                            await console.log(this.state.image);
                        });
                    })
                    .catch(error => {
                        throw error;
                    });
            });
    }

    render() {
        const { image } = this.state;

        return (
            <>
                <div>
                <div className="row big-picture">
                    <div className="col-sm-12 item">
                        <img className="header_img" src="https://cdn.pixabay.com/photo/2016/08/05/09/31/banner-1571858__340.jpg" alt="banner" />
                        <h1 className="banner-text">Your Insta Images!</h1>
                    </div>
                </div>
                <div className="display container">

                    <div className="row grid-pictures">
                        {this.state.image
                            ? image.map(element => {
                                return element.media_type === "IMAGE" ? (
                                    <div key={element.id} className="col-md-5 col-sm-12 item">
                                        <img src={element.media_url} alt="" />
                                    </div>
                                ) : null;
                            })
                            : null}
                    </div>
                </div>
                </div>
            </>
        );
    }
}

export default Images;