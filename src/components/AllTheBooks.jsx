import Card from 'react-bootstrap/Card'
import fantasy from '../books/fantasy.json'
import history from '../books/history.json'
import horror from '../books/horror.json'
import romance from '../books/romance.json'
import scifi from '../books/scifi.json'
import { Container, Row, Col } from 'react-bootstrap'

function AllTheBooks() {
  return (
    <Container>
      <Row>
        {fantasy.map((books) => (
          <Col md={3} key={books.asin}>
            <Card className="h-100">
              <Card.Img variant="top" src={books.img} className="h-75" />
              <Card.Body>
                <Card.Title>{books.title}</Card.Title>
                <Card.Text>{books.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        {history.map((books) => (
          <Col md={3} key={books.asin}>
            <Card className="h-100">
              <Card.Img variant="top" src={books.img} className="h-75" />
              <Card.Body>
                <Card.Title>{books.title}</Card.Title>
                <Card.Text>{books.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        {horror.map((books) => (
          <Col md={3} key={books.asin}>
            <Card className="h-100">
              <Card.Img variant="top" src={books.img} className="h-75" />
              <Card.Body>
                <Card.Title>{books.title}</Card.Title>
                <Card.Text>{books.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        {romance.map((books) => (
          <Col md={3} key={books.asin}>
            <Card className="h-100">
              <Card.Img variant="top" src={books.img} className="h-75" />
              <Card.Body>
                <Card.Title>{books.title}</Card.Title>
                <Card.Text>{books.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        {scifi.map((books) => (
          <Col md={3} key={books.asin}>
            <Card className="h-100">
              <Card.Img variant="top" src={books.img} className="h-75" />
              <Card.Body>
                <Card.Title>{books.title}</Card.Title>
                <Card.Text>{books.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default AllTheBooks
