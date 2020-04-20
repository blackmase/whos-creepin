import React from 'react';
import './App.css';

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
}

export default App;
