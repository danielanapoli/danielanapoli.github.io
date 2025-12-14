import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

/**
 * @param {number} stepNumber - Number indicating the position of this step in the sequence of steps
 * @param {string[]} options - String array of answer options 
 */
export function Answers({ stepNumber, options, onClick}) {
  return (
    <Row className="justify-content-md-center">
      {
        options.map((option, index) => (
          <Col key={index} md="auto" className='text-center'>
            <Button variant='light' onClick={() => onClick(stepNumber, option)}>{option}</Button>
          </Col>
        ))
      }
    </Row>
  )
}