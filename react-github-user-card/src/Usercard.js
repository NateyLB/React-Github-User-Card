import React from 'react';


class Usercard extends React.Component {

    render() {
        return (
            <div>
                <div class="card">
                    <img src={image url of user} />
                        <div class="card-info">
                        <h3 class="name">{this.props.name}</h3>
                        <p class="username">{this.props.username}</p>
                        <p>Location: {this.props.location}</p>
                        <p>Profile:
                        <a href={this.props.html_url}>GitHub</a>
    </p>
                            <p>Followers: {this.props.followers}}</p>
                    <p>Following: {this.props.following}</p>
                    <p>Bio: {this.props.bio}</p>
                </div>
            </div>
            </div >
        )
    }
}