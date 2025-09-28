import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/CardImg';
import CardBody from 'react-bootstrap/CardBody';
import CardGroup from 'react-bootstrap/CardGroup';
import CardTitle from 'react-bootstrap/CardTitle';
import CardSubtitle from 'react-bootstrap/CardSubtitle';
import CardText from 'react-bootstrap/CardText';
import Button from 'react-bootstrap/Button';

function Industry() {
  return (
    <div className='Industry'>
      <section id='content'>
          <Container fluid='md'>
            <Row>
              <Col>
                <h1>Industry Portfolio</h1>
                <p>
                  Most recent high-impact research that I've done with UX teams. 
                  More details about my work experience are available on my <a href='/resume' rel='noopener noreferrer' title="A link to Daniela's online resume.">resume</a>. 
                  You can also explore my <a href='/academic' rel='noopener noreferrer' title="The academic research portfolio page of Daniela's website.">academic projects</a>. 
                  Feel free to connect if you'd like to talk more about anything listed here!
                </p>
              </Col>
            </Row>
            <br/>            
            <Row fluid='true' className='justify-content-md-center'>
                <CardGroup> 
                  <Card style={{ width: '100%' }} bg='light' className='border-0 m-2'>
                    <CardImg variant='top' src='/img/project.png' className='p-2'/>
                    <CardBody>
                      <CardTitle>Requirements Discovery</CardTitle>
                      <CardText>
                        Exploring user needs and pain points. Formulating actionable recommendations to guide the direction of future design work.  
                      </CardText>
                      <CardSubtitle>Qualitative methods:</CardSubtitle>
                      <CardText>
                        user interviews, stakeholder interviews, journey mapping, cross-department focus groups, design studio workshops
                      </CardText>
                    <Button className='stretched-link' variant='secondary' href='/industry/requirements'>Read more</Button>
                    </CardBody>
                  </Card>
                  <Card style={{ width: '100%' }} bg='light' className='border-0 m-2'>
                  <CardImg variant='top' src='/img/pie-chart.png' className='p-2'/>
                  <CardBody>
                    <CardTitle>Persona Automation</CardTitle>
                    <CardText>
                      Creating an automation module for processing user data and website metadata to thematically group insights and inform persona implementation.
                    </CardText>
                    <CardSubtitle>Technical skills:</CardSubtitle>
                    <CardText>
                      Python programming, data scraping, data standardization, natural language processing
                    </CardText>
                  <Button className='stretched-link' variant='secondary' href='/industry/automation'>Read more</Button>
                  </CardBody>
                </Card>
                <Card style={{ width: '100%' }} bg='light' className='border-0 m-2'>
                  <CardImg variant='top' src='/img/statistics.png' className='p-2'/>
                  <CardBody>
                    <CardTitle>Usability Benchmarking</CardTitle>
                    <CardText>
                      Assessing how iterative design updates influenced usability and SEO metrics over time.
                    </CardText>
                    <CardSubtitle>Mixed methods:</CardSubtitle>
                    <CardText>
                      task-based usability testing, metadata analysis, descriptive statistics, t-tests, ANOVA, chi-square tests, thematic analysis
                    </CardText>
                  <Button className='stretched-link' variant='secondary' href='/industry/benchmarking'>Read more</Button>
                  </CardBody>
                </Card>
                <Card style={{ width: '100%' }} bg='light'  className='border-0 m-2'>
                  <CardImg variant='top' src='/img/team.png' className='p-2'/>
                  <CardBody>
                    <CardTitle>Improving Interdisciplinary Workflows</CardTitle>
                    <CardText>
                      Investigating design, development, and product manager workflows to uncover challenges. Formulating recommendations for cross-functional improvement.
                    </CardText>
                    <CardSubtitle>Qualitative methods:</CardSubtitle>
                    <CardText>
                      stakeholder interviews, as-is scenario mapping, dot-voting, affinity diagramming, service blueprinting
                    </CardText>
                  <Button className='stretched-link' variant='secondary' href='/industry/workflows'>Read more</Button>
                  </CardBody>
                </Card>                 
              </CardGroup>  
            </Row>
            <br/>
          </Container>
      </section>
    </div>
  );
}

export default Industry;