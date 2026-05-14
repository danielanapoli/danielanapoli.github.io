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
import { SupascribeFeed } from '@/components/SupascribeFeed/SupascribeFeed';

function Home() {
  return(
  <div className='Home'>
  <section id='content'>
        <Container fluid='md'>
          <Row className='justify-content-md-center'>
            <h1 className='hero'>Hi, I'm Daniela</h1>
            <p className='fs-5'>
              I'm a mixed-method <strong>User Researcher</strong> based in Ontario, Canada. 
              I combine qualitative depth with quantitative rigour to help multi-disciplinary teams embed user needs into product strategy; here's where I can make an impact. 
            </p>
          </Row>
          <Row>
            <Col md={9}>
            <div className='bg-light border rounded p-3'>
              <h2 className='fs-3'>How I can help</h2>
              <CardGroup>
                <Card className='border-0 m-1 card-hover'>
                  <CardBody>
                    <Row>
                      <Col md={5}>
                      <CardTitle>Performance benchmarking</CardTitle>
                      <CardImg src="./img/statistics.png" className='card-img-standard'/>
                      </Col>
                      <Col md={7}>
                      <CardText>Quantify product design ROI and shifts in competitive advantages over time.</CardText>
                      <CardLink className='stretched-link' href='/user-research/benchmarking'>My benchmarking work</CardLink>
                      </Col>
                    </Row>  
                  </CardBody>
                </Card>
                <Card className='border-0 m-1 card-hover'>
                  <CardBody>
                    <Row>
                      <Col md={5}>
                      <CardTitle>Large-scale surveys</CardTitle>
                      <CardImg src="./img/pie-chart.png" className='card-img-standard'/>
                      </Col>
                      <Col md={7}>
                      <CardText>Drive product decisions with data from large-scale surveys of user needs and attitudes.</CardText>
                      <CardLink className='stretched-link' href='/user-research/surveys'>My survey work</CardLink>
                      </Col>
                    </Row>  
                  </CardBody>
                </Card>
              </CardGroup>
              <CardGroup>
                <Card className='border-0 m-1 card-hover'>
                  <CardBody>
                    <Row>
                      <Col md={5}>
                      <CardTitle>Requirements discovery</CardTitle>
                      <CardImg src="./img/project.png" className='card-img-standard'/>
                      </Col>
                      <Col md={7}>
                      <CardText>Inform early product directions through in-depth exploration of problem spaces.</CardText>
                      <CardLink className='stretched-link' href='/user-research/discovery'>My discovery work</CardLink>
                      </Col>
                    </Row>  
                  </CardBody>
                </Card>
                <Card className='border-0 m-1 card-hover'>
                  <CardBody>
                    <Row>
                      <Col md={5}>
                      <CardTitle>Concept testing</CardTitle>
                      <CardImg src="./img/website-template.png" className='card-img-standard'/>
                      </Col>
                      <Col md={7}>
                      <CardText>De-risk design decisions by validating user needs with wireframes and prototypes.</CardText>
                      <CardLink className='stretched-link' href='/user-research/concept-testing'>My concept testing work</CardLink>
                      </Col>
                    </Row>  
                  </CardBody>
                </Card>
              </CardGroup>
              <CardGroup>
                <Card className='border-0 m-1 card-hover'>
                  <CardBody>
                    <Row>
                      <Col md={4}>
                      <CardTitle>Usability testing</CardTitle>
                      <CardImg src="./img/satisfaction.png" className='card-img-standard'/>
                      </Col>
                      <Col md={7}>
                      <CardText>Uncover user pain points and improvement opportunities through product assessments.</CardText>
                      <CardLink className='stretched-link' href='/user-research/usability-testing'>My usability testing work</CardLink>
                      </Col>
                    </Row>  
                  </CardBody>
                </Card>
                <Card className='border-0 m-1 card-hover'>
                  <CardBody>
                    <Row>
                      <Col md={4}>
                      <CardTitle>Research science</CardTitle>
                      <CardImg src="./img/paper.png" className='card-img-standard'/>
                      </Col>
                      <Col md={7}>
                      <CardText className='fs-5'>Leverage expertise from academia for your most complex product challenges.</CardText>
                      <CardLink className='stretched-link' href='/academic'>My research foundations</CardLink>
                      </Col>
                    </Row>  
                  </CardBody>
                </Card>
              </CardGroup>
            </div>
            
            </Col>
            <Col md={3}>
              <div className='bg-light border rounded p-3'>
                  <h2 className='fs-3'>From my blog</h2>
                  <SupascribeFeed
                    embedId="578213045745"
                    loaderSrc="https://js.supascribe.com/v1/loader/ytFSFZOVCvWHW0C399390pc70ND3.js"
                  />
              </div>
            </Col>
          </Row>    
        <br/>
    </Container>
    </section>
  </div>
  );
}

export default Home;