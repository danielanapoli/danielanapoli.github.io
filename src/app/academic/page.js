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

function Academic() {
  return (
  <div className="Academic">
    <section id="content">
      <Container fluid='md'>
        <Row>
          <Col>
            <h1>Academic Portfolio</h1>
            <p>
              Some of my favourite academic works focused on <strong>accessibility</strong> and <strong>usable security</strong>.
              You can learn more about my other academic publications by visiting <a href="https://scholar.google.com/citations?user=qdH8ZZcAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" title="Daniela's profile on Google Scholar. Opens in a new tab.">Google Scholar</a>.
              You can also explore my <a href="/industry" rel="noopener noreferrer" title="The industry research portfolio page of Daniela's website.">industry portfolio</a> or my <a href="/resume" rel="noopener noreferrer" title="A link to Daniela's online resume.">resume</a>.
              Feel free to connect if you'd like to talk more about anything listed here!
            </p>
          </Col>
        </Row>
        <br/>
        <Row className="justify-content-md-center">
          <CardGroup>
            <Card style={{ width: '100%' }} bg='light' className='border-0 m-4 p-4'>
              <CardImg variant='top' src='/img/paper.png' className='p-2' alt=''/>
              <CardBody>
                <CardTitle>Paper Publications</CardTitle>
                <CardText>
                  Some peer-reviewed contributions to academic literature on human-centered design and usable security.
                </CardText>
                <Button className='stretched-link' variant="secondary" href="/academic/publications">Read more</Button>
              </CardBody>
            </Card>
            <Card style={{ width: '100%' }} bg="light" className='border-0 m-4 p-4'>
              <CardImg variant='top' src='/img/podium.png' className='p-2' alt=''/>
              <CardBody>
                <CardTitle>Talks and Workshops</CardTitle>
                <CardText>
                  Highlights from some of my invited talks and presentations at HCI conferences and workshops.
                </CardText>
                <Button className='stretched-link' variant="secondary" href="/academic/talks">Read more</Button>
              </CardBody>
            </Card>  
            <Card style={{ width: '100%' }} bg="light" className='border-0 m-4 p-4'>
               <CardImg variant='top' src='/img/tool.png' className='p-2' alt=''/>
              <CardBody>
                <CardTitle>Remote Healthcare Technology<br/>Design Toolkit</CardTitle>
                <CardText>
                  Samples of our design toolkit to guide the development of remote healthcare technology for older adults.
                </CardText>
                <Button className='stretched-link' variant="secondary" href="/academic/toolkit">Read more</Button>
              </CardBody>
            </Card>          
          </CardGroup>
        </Row>
      </Container>      
    </section>
    </div>
  );
}

export default Academic;
