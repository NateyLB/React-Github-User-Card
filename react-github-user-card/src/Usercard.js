import React from 'react';
import GitHubCalendar from 'github-calendar';
import { v4 as uuid } from 'uuid';


class Usercard extends React.Component {
    constructor(){
        super()
        this.state={id: uuid(),
                    class: `.calendar ${this.id}`}
    }

    componentDidMount(){
        console.log(this.state.id)
        GitHubCalendar(document.querySelector(`.calendar`), this.props.user, {proxy: function(string) {return `https://cors-anywhere.herokuapp.com/${string}`}}, { responsive: true });
    }
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
                        <div className=".calendar">
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Usercard;