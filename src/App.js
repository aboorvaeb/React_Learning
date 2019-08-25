import React, { Component } from 'react';
import axios from 'axios';
import Contacts from './components/contacts';

//const API_URL = 'https://jsonplaceholder.typicode.com';

class App extends Component {
state = {
  contacts :[]
}

componentDidMount() {
  fetch('http://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then((data) => {
    this.setState({ contacts: data })
  })
  .catch(console.log)
}

/*componentDidMount(){
const url = 'https://jsonplaceholder.typicode.com/contacts';
  //const url = '/users/';
  axios.get(url).then(respone => Response.data)
  .then((data) => {
    this.setState({ users : data})
    console.log(this.state.users)
  })
}*/
  render() { 
    return ( 
    <Contacts contacts = {this.state.contacts} />
    
      )
}
}
 
export default App;