import React from 'react';

class Usercards extends React.Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return( 
            <div>
                {this.props.usersList}
            </div>
            );
    }
}

export default Usercards;