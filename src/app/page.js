import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/CardBody';
import CardTitle from 'react-bootstrap/CardTitle';
import CardText from 'react-bootstrap/CardText';
import CardGroup from 'react-bootstrap/CardGroup';
import CardLink from 'react-bootstrap/CardLink';
import Image from 'react-bootstrap/Image';

function Home() {
  return(
  <div className='Home'>
  <section id='content'>
        <Container fluid='md'>           
          <Row className='justify-content-md-center'>
            <h1 className='hero'>Hi, I'm Daniela</h1>
          </Row>
          <Row className='align-items-center'>
            <Col lg='4'>
              <p>
                I'm a <strong>Usability/UX Researcher</strong> from Ontario, Canada.
                On multi-disciplinary teams, I can be your go-to for embedding users' needs in technological visions.
                With years of industry experience and a PhD in Computer Science, I'm well-versed in leveraging UX methods in agile environments.
              </p>
              <p>
                I've uncovered impactful insights for companies in the tech, healthcare, and aviation sectors. 
                I have a passion for <strong>inclusive design</strong> with specialties in accessibility, usable security, and privacy.
              </p>
              <p>
                Thank you for spending some time here. Each case study highlights the full arc of research: the framing of key questions, the selection of appropriate methodologies, and the actionable insights that drove product decisions. If you have any questions, feel free to email me at <a href='mailto:hello@danielanapoli.com'>hello@danielanapoli.com</a>.
              </p>
              <br/>
            </Col>
            <Col>
            <Image width={'100%'} src={'/img/hero-doodle.png'} className='pb-5' alt='Image of Daniela scribbling on a piece of paper with a marker in a room of other people.'/>
            </Col>
          </Row>
          <Row className='justify-content-md-center'>
            <Col>
              <CardGroup>
                <Card bg='light' className='border-0 m-4'>
                  <CardBody className='text-center'>
                    <CardTitle>Industry Projects</CardTitle>
                    <CardText>
                      Driving data-based changes to products and teams, my industry projects transform user experiences into actionable insights.
                    </CardText>
                    <CardLink className='stretched-link' href='/industry'>Read more</CardLink>
                  </CardBody>                  
                </Card>
                <Card bg='light' className='border-0 m-4'>
                  <CardBody className='text-center'>
                    <CardTitle>Academic Projects</CardTitle>
                    <CardText>
                      Uncovering novel insights through rigorous research methods, my published works contribute to the HCI knowledge base.
                    </CardText>
                    <CardLink className='stretched-link' href='/academic'>Read more</CardLink>
                  </CardBody>                
                </Card>
                <Card  bg='light' className='border-0 m-4'>
                  <CardBody className='text-center'>
                    <CardTitle>Resume</CardTitle>
                    <CardText>
                      Summarizing key experiences and expertise, my resume highlights my professional development as a UX researcher.
                    </CardText>
                    <CardLink className='stretched-link' href='/resume'>Read more</CardLink>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        <br/>
    </Container>
    </section>
  </div>
  );
}

export default Home;