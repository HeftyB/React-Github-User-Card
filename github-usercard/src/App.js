import React, { Component } from 'react';
import axios from "axios";
import Cards from "./components/Cards";
import Forms from "./components/Forms";
import './App.css';

const initialUsers = ["HeftyB", "bigknell", "tetondan", "dustinmyers", "justsml", "luishrd"];

export class App extends Component {

  state = {
    currentUsers: [],
    formData: ""
  }

 addGit = userName => {
    axios.get(`https://api.github.com/users/${userName}`)
      .then( datas => {
        console.log(datas.data)
        this.setState({
          currentUsers: [...this.state.currentUsers, datas.data]
        })
        console.log(this.state.currentUsers)
      })
      .catch( data => {
        console.log(data);
        debugger
      })
  }
  
  onInputChange = event => {
    this.setState({formData: event.target.value})}

  onFormSumbit = event => {
    event.preventDefault()
    this.addGit(this.state.formData)}

  addDefaultUsers = () => initialUsers.forEach( item => {
    this.addGit(item);
  })

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <h1>Github User Cards:</h1>
          <Cards
            currentUsers={this.state.currentUsers}/>
          <hr/>
          <Forms
            formData={this.formData}
            onInputChange={this.onInputChange}
            onFormSumbit={this.onFormSumbit}
            addDefaultUsers={this.addDefaultUsers}/>
        </div>
    </div>
    )
  }
}