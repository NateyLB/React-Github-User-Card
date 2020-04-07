import React from 'react';


class Usercard extends React.Component {

    render() {
        return (
            <div>
                <div className="card" key={this.props.key}>
                    <img src={this.props.img} />
                    <div className="card-info">
                        <h3 className="name">{this.props.name}</h3>
                        <p className="username">{this.props.user}</p>
                        <p>Location: {this.props.location}</p>
                        <p>Profile: <a href={this.props.url}>GitHub</a></p>
                        <p>Followers: {this.props.followers}</p>
                        <p>Following: {this.props.following}</p>
                        <p>Bio: {this.props.bio}</p>
                    </div>
                </div>
            </div >
        )
    }
}

export default Usercard;