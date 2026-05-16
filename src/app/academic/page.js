export const metadata = {
  title: 'Academic Portfolio',
  description: 'Academic portfolio of Daniela Napoli, PhD. Peer-reviewed research on accessible design, usable security, and privacy for users with visual disabilities.',
};

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardLink from 'react-bootstrap/CardLink';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/CardImg';
import CardBody from 'react-bootstrap/CardBody';
import CardTitle from 'react-bootstrap/CardTitle';
import CardText from 'react-bootstrap/CardText';

function Academic() {
  return (
  <div className="Academic">
    <section id="content">
      <Container fluid='md'>
        <Row className="mb-3">
          <Col className='prose-content'>
            <h1>Academic Portfolio</h1>
            <p className='fs-5'>
              Some of my favourite academic works focused on <strong>accessibility</strong> and <strong>usable security</strong>.
              You can learn more about my other academic publications by visiting <a href="https://scholar.google.com/citations?user=qdH8ZZcAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" title="Daniela's profile on Google Scholar. Opens in a new tab.">Google Scholar</a>.
              You can also explore my <a href="/user-research" rel="noopener noreferrer" title="The industry research portfolio page of Daniela's website.">industry portfolio</a> or my <a href="/resume" rel="noopener noreferrer" title="A link to Daniela's online resume.">resume</a>.
              Feel free to connect if you'd like to talk more about anything listed here!
            </p>
          </Col>
        </Row>
        <Row className='g-3'>
          <Col xs={12} md={4}>
            <Card bg='light' className='border-0 h-100'>
              <CardImg variant='top' src='/img/paper.png' className='p-2 card-img-index d-none d-md-block' alt=''/>
              <CardBody>
                <CardTitle>Paper Publications</CardTitle>
                <CardText>
                  Some peer-reviewed contributions to academic literature on human-centered design and usable security.
                </CardText>
                <CardLink className='stretched-link' href="/academic/publications">Read more</CardLink>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card bg='light' className='border-0 h-100'>
              <CardImg variant='top' src='/img/podium.png' className='p-2 card-img-index d-none d-md-block' alt=''/>
              <CardBody>
                <CardTitle>Talks and Workshops</CardTitle>
                <CardText>
                  Highlights from some of my invited talks and presentations at HCI conferences and workshops.
                </CardText>
                <CardLink className='stretched-link' href="/academic/talks">Read more</CardLink>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card bg='light' className='border-0 h-100'>
              <CardImg variant='top' src='/img/tool.png' className='p-2 card-img-index d-none d-md-block' alt=''/>
              <CardBody>
                <CardTitle>Remote Healthcare Technology<br/>Design Toolkit</CardTitle>
                <CardText>
                  Samples of our design toolkit to guide the development of remote healthcare technology for older adults.
                </CardText>
                <CardLink className='stretched-link' href="/academic/toolkit">Read more</CardLink>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>      
    </section>
    </div>
  );
}

export default Academic;
