import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './components/screens/HomeScreen/HomeScreen'

import './_app.scss'
import LoginScreen from './components/screens/loginScreen/LoginScreen'

const App = () => {
  const [sidebar, toggleSidebar] = useState(false)

  const handleToggleSidebar = () => toggleSidebar((value) => !value)
  
  return (
    <div>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />

        <Container fluid className="app__main">
          <HomeScreen />
        </Container>
      </div>
    </div>
    // <LoginScreen />
  );
}

export default App