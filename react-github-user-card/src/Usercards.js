import React from 'react';
import Usercard from "./Usercard.js"

class Usercards extends React.Component {
    render() {
        return (
            <div>
                {this.props.usersList.map(element => {
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