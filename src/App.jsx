import ReactPlayer from 'react-player';
import { Container, Row, Col, Card } from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <div className="portfolio">
      <Container fluid>
        <Row>
          <Col md={3} className="banner">
            <div className="banner-inner">
              <img src="https://via.placeholder.com/150" alt="banner" />
              <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
              </ul>
              <p>Your banner text goes here.</p>
            </div>
          </Col>
          <Col md={9}>
            <h1>My Portfolio</h1>
            <p>Welcome to my portfolio. Here you can find my latest videos.</p>
            <Row>
              <Col md={6} lg={4}>
                <Card className="card">
                  <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="react-player" />
                  <Card.Body>
                    <Card.Title>Video Title</Card.Title>
                    <Card.Text>Description of the video goes here.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={4}>
                <Card className="card">
                  <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="react-player" />
                  <Card.Body>
                    <Card.Title>Video Title</Card.Title>
                    <Card.Text>Description of the video goes here.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={4}>
                <Card className="card">
                  <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="react-player" />
                  <Card.Body>
                    <Card.Title>Video Title</Card.Title>
                    <Card.Text>Description of the video goes here.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
