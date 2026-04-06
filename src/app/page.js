import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/CardBody';
import CardTitle from 'react-bootstrap/CardTitle';
import CardText from 'react-bootstrap/CardText';
import CardGroup from 'react-bootstrap/CardGroup';
import CardLink from 'react-bootstrap/CardLink';
import { CardImg } from 'react-bootstrap';

function Home() {
  return(
  <div className='Home'>
  <section id='content'>
        <Container fluid='md'>           
          <Row className='justify-content-md-center'>
            <h1 className='hero'>Hi, I'm Daniela</h1>
          </Row>
          <Row className='align-items-center'>
            <p className='fs-5'>
              I'm a mixed-method <strong>User Researcher</strong> based in Ontario, Canada. 
              I combine qualitative depth with quantitative rigour to help multi-disciplinary teams embed user needs into product strategy; here's where I can make an impact. 
            </p>
            <br/>
          </Row>
          <Row className='justify-content-md-center'>
            <Col>
            <CardGroup>
              <Card bg='light' className='border-0 m-1'>
                <CardBody>
                  <Row>
                    <Col xs={4}>
                    <CardTitle className='fs-3'>Performance benchmarking</CardTitle>
                    <CardImg src="./img/statistics.png" className='w-75'/>
                    </Col>
                    <Col xs={7}>
                    <CardText className='fs-5'>Quantify product design ROI and shifts in competitive advantages over time.</CardText>
                    <CardLink className='stretched-link' href='/user-research/benchmarking'>My benchmarking work</CardLink>
                    </Col>
                  </Row>  
                </CardBody>
              </Card>
              <Card bg='light' className='border-0 m-1'>
                <CardBody>
                  <Row>
                    <Col xs={4}>
                    <CardTitle className='fs-3'>Large-scale surveys</CardTitle>
                    <CardImg src="./img/pie-chart.png" className='w-75'/>
                    </Col>
                    <Col xs={7}>
                    <CardText className='fs-5'>Drive product decisions with data from large-scale surveys of user needs and attitudes.</CardText>
                    <CardLink className='stretched-link' href='/user-research/surveys'>My survey work</CardLink>
                    </Col>
                  </Row>  
                </CardBody>
              </Card>
            </CardGroup>
            <CardGroup>
              <Card bg='light' className='border-0 m-1'>
                <CardBody>
                  <Row>
                    <Col xs={4}>
                    <CardTitle className='fs-3'>Requirements discovery</CardTitle>
                    <CardImg src="./img/project.png" className='w-75'/>
                    </Col>
                    <Col xs={7}>
                    <CardText className='fs-5'>Inform early product directions through in-depth exploration of problem spaces.</CardText>
                    <CardLink className='stretched-link' href='/user-research/discovery'>My discovery work</CardLink>
                    </Col>
                  </Row>  
                </CardBody>
              </Card>
              <Card bg='light' className='border-0 m-1'>
                <CardBody>
                  <Row>
                    <Col xs={4}>
                    <CardTitle className='fs-3'>Concept testing</CardTitle>
                    <CardImg src="./img/website-template.png" className='w-75'/>
                    </Col>
                    <Col xs={7}>
                    <CardText className='fs-5'>De-risk design decisions by validating user needs with wireframes and prototypes.</CardText>
                    <CardLink className='stretched-link' href='/user-research/concept-testing'>My concept testing work</CardLink>
                    </Col>
                  </Row>  
                </CardBody>
              </Card>
            </CardGroup>
            <CardGroup>
              <Card bg='light' className='border-0 m-1'>
                <CardBody>
                  <Row>
                    <Col xs={4}>
                    <CardTitle className='fs-3'>Usability testing</CardTitle>
                    <CardImg src="./img/satisfaction.png" className='w-75'/>
                    </Col>
                    <Col xs={7}>
                    <CardText className='fs-5'>Uncover user pain points and improvement opportunities through product assessments.</CardText>
                    <CardLink className='stretched-link' href='/user-research/usability-testing'>My usability testing work</CardLink>
                    </Col>
                  </Row>  
                </CardBody>
              </Card>
              <Card bg='light' className='border-0 m-1'>
                <CardBody>
                  <Row>
                    <Col xs={4}>
                    <CardTitle className='fs-3'>Research science</CardTitle>
                    <CardImg src="./img/paper.png" className='w-75'/>
                    </Col>
                    <Col xs={7}>
                    <CardText className='fs-5'>Leverage expertise from academia for your most complex product challenges.</CardText>
                    <CardLink className='stretched-link' href='/academic'>My research foundations</CardLink>
                    </Col>
                  </Row>  
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