import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/**
 * @param {string | html} question - String or HTML of of the question to display 
 */
export function Question({ question }) {
  return (
    <Row className="justify-content-md-center">
      <Col md="auto" className='text-center'>
        <h3>{question}</h3>
      </Col>
    </Row>
  )
}

