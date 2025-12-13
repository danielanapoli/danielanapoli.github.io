import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function ResearchTools() {
  return (
    <div className='Tools'> 
      <section id='content'>
          <Container fluid='md'>
            <Row>
              <Col>
              <h1>Formula Builder</h1>
              </Col>
            </Row>
            <Row>
              <Col>
              Even when you're a statistical wizard, it's hard to remember which test best suits specific UX research data. Just tell the formula builder what you’re working with, and it points you toward the right method to use.
              </Col>
            </Row>
            <br/>
            <Row className="justify-content-md-center">
              <Col md="auto" className='text-center'>
                <h3>What kind of data are you analyzing?</h3>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md="auto" className='text-center'><Button variant='light'>Categorical</Button></Col>
              <Col md="auto" className='text-center'><Button variant='light'>Numerical</Button></Col>
            </Row>
            <br/>
            <Row className="justify-content-md-center">
              <Col md="auto" className='text-center'>
                <h3>What kind of <strong>categorical</strong> data?</h3>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md="auto" className='text-center'><Button variant='light'>Nominal</Button></Col>
              <Col md="auto" className='text-center'><Button variant='light'>Ordinal</Button></Col>
            </Row>
            <br/>
            <Row className="justify-content-md-center">
              <Col md="auto" className='text-center'>
                <h3>What do you want to know about the <strong>numerical</strong> data?</h3>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md="auto" className='text-center'><Button variant='light'>Differences</Button></Col>
              <Col md="auto" className='text-center'><Button variant='light'>Relationships</Button></Col>
            </Row>
            <br/>

          </Container>
      </section>
    </div>
  );
}

export default ResearchTools;