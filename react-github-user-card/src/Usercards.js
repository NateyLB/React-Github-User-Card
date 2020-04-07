import React from 'react';
import Usercard from "./Usercard.js"

class Usercards extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div>
                {this.props.usersList.map(element => {
                    // console.log(element,"inUsers")
                    return (
                        <Usercard 
                            key={element.id}
                            img={element.img}
                            name={element.name}
                            user={element.user}
                            location={element.location}
                            url={element.url}
                            followers={element.followers}
                            following={element.following}
                            bio={element.bio} />
                    )
                })}
            </div>
        );
    }
}

export default Usercards;