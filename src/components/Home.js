import React from 'react';
import { Container, Row, Col, Button,Card } from 'react-bootstrap';

const Home = () => {
    const listItemStyle = {
        textAlign: 'center',
        marginBottom: '10px',
      };
    const toursHeadingStyle = {
        fontFamily: 'cursive',
        textAlign: 'center',
      };
  return (
    <Container>
      <Row>
        <Col>
        <Card style={{ width: '100rem',height: '15rem' }}  bg='secondary'>
          <h1 className="text-center">The Generics</h1>
          <h2 className="text-center">Get our Latest Album</h2>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col >
        <h3 style={toursHeadingStyle}>TOURS</h3>
        <ul style={{ listStyleType: 'none', padding: 2 }}>
            <li style={listItemStyle}>
              <strong>JUL16</strong> - DETROIT, MI    - DTE ENERGY MUSIC THEATRE -   <Button variant="info">BUY TICKETS</Button>
            </li>
            <hr/>
            <li style={listItemStyle}>
              <strong>JUL19</strong> - TORONTO, ON - BUDWEISER STAGE - <Button variant="info">BUY TICKETS</Button>
            </li>
            <hr/>
            <li style={listItemStyle}>
              <strong>JUL 22</strong> - BRISTOW, VA - JIGGY LUBE LIVE - <Button variant="info">BUY TICKETS</Button>
            </li>
            <hr/>
            <li style={listItemStyle}>
              <strong>JUL 29</strong> - PHOENIX, AZ - AK-CHIN PAVILION - <Button variant="info">BUY TICKETS</Button>
            </li>
            <hr/>
            <li style={listItemStyle}>
              <strong>AUG 2</strong> - LAS VEGAS, NV - T-MOBILE ARENA - <Button variant="info">BUY TICKETS</Button>
            </li>
            <hr/>
            <li style={listItemStyle}>
              <strong>AUG 7</strong> - CONCORD, CA - CONCORD PAVILION - <Button variant="info">BUY TICKETS</Button>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
        <Card style={{ width: '100rem',height: '8rem' }}  bg='info' class="mt-8">
          <h1 className="text-center">The Generics</h1>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;