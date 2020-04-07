import React from 'react';
import './App.css';
import axios from 'axios';
import Usercards from "./Usercards.js"


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      urlList: [],
      usersList: []
    }
  }


  componentDidMount() {
    this.setState({urlList:["https://api.github.com/users/nateylb"]})
    axios.get(`https://api.github.com/users/nateylb/followers`)
      .then(response => {
        var followersList = response.data.map(element => element.url)
        this.setState({urlList:[...this.state.urlList, ...followersList]})
      })
      .catch(err => {
        console.log("Error:", err);
      })
  }

  // componentDidUpdate(){
  //   this.state.urlList.forEach(element => {
  //     axios.get("https://api.github.com/users/nateylb")
  //       .then(response => {
  //         const obj = {
  //           user: response.data.login,
  //           name: response.data.name,
  //           id: response.data.id,
  //           img: response.data.avatar_url,
  //           location: response.data.location,
  //           bio: response.data.bio,
  //           url: response.data.html_url,
  //           followers: response.data.followers,
  //           following: response.data.following
  //         }
  //         this.setState({
  //           usersList: [...this.state.usersList, obj]
  //         })
  //       })
  //       .catch(err => {
  //         console.log("Error:", err);
  //       })
  //   })
  // }

  render() {

    return (
      <div>

      </div>
    );
  }
}

export default App;
