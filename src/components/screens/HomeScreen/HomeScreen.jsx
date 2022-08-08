import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CatagoriesBar from '../../catagoriesBar/CatagoriesBar'
import Videos from '../../vidoes/Videos'

const HomeScreen = () => {
  return (
    <Container>
      <CatagoriesBar />

      <Row>
        {
          [...new Array(20)].map(() => (<Col lg={3} md={4}>
            <Videos />
          </Col>)
        )}
      </Row>
    </Container>
  )
}

export default HomeScreen