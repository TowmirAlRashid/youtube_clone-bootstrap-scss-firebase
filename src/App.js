import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './components/screens/HomeScreen/HomeScreen'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './_app.scss'
import LoginScreen from './components/screens/loginScreen/LoginScreen'

const Layout = ({children}) => {
  const [sidebar, toggleSidebar] = useState(false)

  const handleToggleSidebar = () => toggleSidebar((value) => !value)

  return (
    <div>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />

        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </div>
  )
}

const App = () => {
  
  
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Layout>
              <HomeScreen />
            </Layout>
          }
        />

        <Route exact path="/auth" element={<LoginScreen />} />

        <Route
          exact
          path="/search"
          element={
            <Layout>
              <h1>Search Results</h1>
            </Layout>
          }
        />

        <Route
          path="*"
          element={
            <Layout>
              <HomeScreen />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App