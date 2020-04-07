import React from 'react';

class Search extends React.Component{
    constructor(){
        super();
        this.state = {user:""};
    }

    onChange = event => {
        this.setState({user: event.target.value});
    }


    render(){
        return(
        <div>
            <form onSubmit={event => this.props.submit(event, this.state.user)}>
                <input type="text" onChange={this.onChange} />
                <button>Search for a user </button>
            </form>

        </div>
        )
    }
}

export default Search;