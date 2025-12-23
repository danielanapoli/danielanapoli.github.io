import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { steps } from '../content/steps';

export function Answers({ options, onClick}) {
  return (
    <Row className="justify-content-md-center">
      {
        options.map((option, index) => (
          <Col key={index} md="auto" className='text-center'>
            <Button variant='light' onClick={() => onClick(option)}>
              {getButtonText(option)}
            </Button>
          </Col>
        ))
      }
    </Row>
  )
}

function getButtonText(option) {
  return steps[option]?.display ?? option ?? '[ERROR LOADING OPTION]';
}