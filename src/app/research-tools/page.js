import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/CardBody';
import CardTitle from 'react-bootstrap/CardTitle';
import CardText from 'react-bootstrap/CardText';
import CardLink from 'react-bootstrap/CardLink';

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
        <Row className='g-3'>
          <Col xs={12} md={4}>
            <Card bg='light' className='border-0 h-100'>
              <CardBody>
                <CardTitle>Stats Formula Wizard</CardTitle>
                <CardText>
                  A handy tool to remember which statistical tests are best suited for your research data. Based on the statistical tests, the tool provides a formula to plug-in to your Excel sheet.
                </CardText>
                <CardLink className='stretched-link' href="/research-tools/formula-builder">Read more</CardLink>
              </CardBody>
            </Card>
          </Col>
        </Row>
          </Container>
      </section>
    </div>
  );
}

export default ResearchTools;
