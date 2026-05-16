import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/CardBody';
import CardTitle from 'react-bootstrap/CardTitle';
import CardText from 'react-bootstrap/CardText';
import CardLink from 'react-bootstrap/CardLink';
import CardImg from 'react-bootstrap/CardImg';
import { SupascribeFeed } from '@/components/SupascribeFeed/SupascribeFeed';

function Home() {
  return(
  <div className='Home'>
  <section id='content'>
        <Container fluid='md'>
          <Row className='justify-content-md-center'>
            <Col className='prose-content'>
              <h1 className='hero'>Hi, I'm Daniela</h1>
              <p className='fs-5'>
                I'm a mixed-method <strong>User Researcher</strong> based in Ontario, Canada.
                I combine qualitative depth with quantitative rigour to help multi-disciplinary teams embed user needs into product strategy. My website gives more details about the types of research I do, how I do it, and the impact it has on product decisions.
              </p>
              <p className='fs-5'>
                Explore my <a href='/academic' rel='noopener noreferrer' title="The academic research portfolio page of Daniela's website.">academic projects</a> and <a href='/resume' rel='noopener noreferrer' title="A link to Daniela's online resume.">resume</a> for more details. Want to connect? I'm happy to dive into anything listed here.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={9}>
              <div className='bg-light border rounded p-3'>
                <h2 className='fs-3'>How I can help</h2>
                <Row className='g-3'>
                  <Col xs={12} md={4}>
                    <Card className='border-0 card-hover h-100'>
                      <CardImg variant='top' src="./img/statistics.png" className='p-2 card-img-index d-none d-md-block'/>
                      <CardBody>
                        <CardTitle>Performance benchmarking</CardTitle>
                        <CardText>Quantify product design ROI and shifts in competitive advantages over time.</CardText>
                        <CardLink className='stretched-link' href='/user-research/benchmarking'>My benchmarking work</CardLink>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs={12} md={4}>
                    <Card className='border-0 card-hover h-100'>
                      <CardImg variant='top' src="./img/pie-chart.png" className='p-2 card-img-index d-none d-md-block'/>
                      <CardBody>
                        <CardTitle>Large-scale surveys</CardTitle>
                        <CardText>Drive product decisions with data from large-scale surveys of user needs and attitudes.</CardText>
                        <CardLink className='stretched-link' href='/user-research/surveys'>My survey work</CardLink>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs={12} md={4}>
                    <Card className='border-0 card-hover h-100'>
                      <CardImg variant='top' src="./img/project.png" className='p-2 card-img-index d-none d-md-block'/>
                      <CardBody>
                        <CardTitle>Requirements discovery</CardTitle>
                        <CardText>Inform early product directions through in-depth exploration of problem spaces.</CardText>
                        <CardLink className='stretched-link' href='/user-research/discovery'>My discovery work</CardLink>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs={12} md={4}>
                    <Card className='border-0 card-hover h-100'>
                      <CardImg variant='top' src="./img/website-template.png" className='p-2 card-img-index d-none d-md-block'/>
                      <CardBody>
                        <CardTitle>Concept testing</CardTitle>
                        <CardText>De-risk design decisions by validating user needs with wireframes and prototypes.</CardText>
                        <CardLink className='stretched-link' href='/user-research/concept-testing'>My concept testing work</CardLink>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs={12} md={4}>
                    <Card className='border-0 card-hover h-100'>
                      <CardImg variant='top' src="./img/satisfaction.png" className='p-2 card-img-index d-none d-md-block'/>
                      <CardBody>
                        <CardTitle>Usability testing</CardTitle>
                        <CardText>Uncover user pain points and improvement opportunities through product assessments.</CardText>
                        <CardLink className='stretched-link' href='/user-research/usability-testing'>My usability testing work</CardLink>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs={12} md={4}>
                    <Card className='border-0 card-hover h-100'>
                      <CardImg variant='top' src="./img/paper.png" className='p-2 card-img-index d-none d-md-block'/>
                      <CardBody>
                        <CardTitle>Research science</CardTitle>
                        <CardText>Leverage expertise from academia for complex product challenges.</CardText>
                        <CardLink className='stretched-link' href='/academic'>My research foundations</CardLink>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
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
        </Container>
    </section>
  </div>
  );
}

export default Home;
