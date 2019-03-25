import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'

import MainContent from './Components/MainContent'

class App extends Component {
  render() {
    return (
      <Container fluid>
        <MainContent />
      </Container>
    )
  }
}

export default App;