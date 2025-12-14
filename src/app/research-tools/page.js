import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/CardImg';
import CardGroup from 'react-bootstrap/CardGroup';
import CardBody from 'react-bootstrap/CardBody';
import CardTitle from 'react-bootstrap/CardTitle';
import CardText from 'react-bootstrap/CardText';

function ResearchTools() {
  return (
    <div className='Tools'> 
      <section id='content'>
          <Container fluid='md'>
            <Row>
              <Col>
              <h1>Research Tools</h1>
              </Col>
            </Row>
        <Row className="justify-content-md-center">
          <CardGroup>
            <Card style={{ width: '100%' }} bg='light' className='border-0 m-4 p-4'>
              <CardImg variant='top' src='' className='p-2' alt=''/>
              <CardBody>
                <CardTitle>Form Builder</CardTitle>
                <CardText>
                  Some peer-reviewed contributions to academic literature on human-centered design and usable security.
                </CardText>
                <Button className='stretched-link' variant="secondary" href="/research-tools/formula-builder">Read more</Button>
              </CardBody>
            </Card>       
          </CardGroup>
        </Row>
          </Container>
      </section>
    </div>
  );
}

export default ResearchTools;