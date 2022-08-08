import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './components/screens/HomeScreen/HomeScreen'

import './_app.scss'

const App = () => {
  return (
    <div>
      <Header />
      <div className='app__container border border-info'>
        <Sidebar />

        <Container fluid className='app__main border border-warning'>
          <HomeScreen />
        </Container>
      </div>
    </div>
  )
}

export default App