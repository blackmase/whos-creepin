import React from 'react';
import './App.css';
import Header from "./components/header.js";
import Aside from "./components/aside.js";
import Main from "./components/main.js";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      view: {
        page: 'home',
        pageTitle: 'Creepin'
      },
      formInputs: {
        name: null,
        email: null,
        comment: null,
        id: null
      }
    }
  }
  handleView = (view, postData) => {
    let pageTitle= '';
    let formInputs = {
      name: '',
      email: '',
      comment: '',
      id: null
    }
    switch(view) {
      case 'home':
      pageTitle = 'Creepin'
      break
      case 'addPost':
      pageTitle = 'Tell me about a Creeper'
      break
      case 'editPost':
      pageTitle = 'Edit this creeper info'
      formInputs = {
        name: postData.name,
        email: postData.email,
        comment: postData.comment,
        id: postData.id
      }
      break
      default:
      break
    }
    this.setState({
      view: {
        page: view,
        pageTitle: pageTitle
      },
      formInputs: formInputs
    })
  }
  render() {
    return (
      <div>
      <Header/>
      <Aside handleView={this.handleView}/>
      <Main
      handleView={this.handleView}
      view={this.state.view}
      formInputs={this.state.formInputs}/>
      </div>
    )
  }
}

export default App;
