import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/CardImg';
import CardBody from 'react-bootstrap/CardBody';
import CardTitle from 'react-bootstrap/CardTitle';
import CardSubtitle from 'react-bootstrap/CardSubtitle';
import CardText from 'react-bootstrap/CardText';
import CardLink from 'react-bootstrap/CardLink';

function Industry() {
  return (
    <div className='Industry'>
      <section id='content'>
        <Container fluid='md'>
          <Row className="mb-3">
            <Col className='prose-content'>
              <h1>User Research</h1>
              <p className='fs-5'>
                More details of high-impact research that I offer to product teams.
                More details about my work experience are available on my <a href='/resume' rel='noopener noreferrer' title="A link to Daniela's online resume.">resume</a>.
                You can also explore my <a href='/academic' rel='noopener noreferrer' title="The academic research portfolio page of Daniela's website.">academic projects</a>.
                Feel free to connect if you'd like to talk more about anything listed here!
              </p>
            </Col>
          </Row>
          <Row className='g-3'>
            <Col xs={12} md={4}>
              <Card bg='light' className='border-0 h-100'>
                <CardImg variant='top' src='/img/project.png' className='p-2 card-img-index d-none d-md-block'/>
                <CardBody>
                  <CardTitle>Requirements Discovery</CardTitle>
                  <CardText>
                    Exploring user needs and pain points. Formulating actionable recommendations to guide the direction of future design work.
                  </CardText>
                  <CardSubtitle>Qualitative methods:</CardSubtitle>
                  <CardText>
                    User interviews, stakeholder interviews, journey mapping, cross-department focus groups, design studio workshops
                  </CardText>
                  <CardLink className='stretched-link' href='/user-research/discovery'>Read more</CardLink>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card bg='light' className='border-0 h-100'>
                <CardImg variant='top' src='/img/statistics.png' className='p-2 card-img-index d-none d-md-block'/>
                <CardBody>
                  <CardTitle>Usability Benchmarking</CardTitle>
                  <CardText>
                    Assessing how iterative design updates influenced usability and SEO metrics over time.
                  </CardText>
                  <CardSubtitle>Quantitative methods:</CardSubtitle>
                  <CardText>
                    Unmoderated task-based usability testing, metadata analysis, descriptive statistics, t-tests, ANOVA, chi-square tests, thematic analysis
                  </CardText>
                  <CardLink className='stretched-link' href='/user-research/benchmarking'>Read more</CardLink>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card bg='light' className='border-0 h-100'>
                <CardImg variant='top' src='/img/satisfaction.png' className='p-2 card-img-index d-none d-md-block'/>
                <CardBody>
                  <CardTitle>Usability Testing</CardTitle>
                  <CardText>
                    Uncovering user pain points and improvement opportunities through product assessments.
                  </CardText>
                  <CardSubtitle>Qualitative methods:</CardSubtitle>
                  <CardText>
                    Think-aloud protocol, task completion observation, non-verbal cue observation, post-task questionnaires, affinity mapping, severity ranking
                  </CardText>
                  <CardLink className='stretched-link' href='/user-research/usability-testing'>Read more</CardLink>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card bg='light' className='border-0 h-100'>
                <CardImg variant='top' src='/img/pie-chart.png' className='p-2 card-img-index d-none d-md-block'/>
                <CardBody>
                  <CardTitle>Large-scale Surveys</CardTitle>
                  <CardText>
                    Driving product decisions with data from large-scale surveys of user needs and attitudes.
                  </CardText>
                  <CardSubtitle>Quatitative methods:</CardSubtitle>
                  <CardText>
                    User surveys, SUS, SUPR-Q, UX-Lite, NPS, descriptive statistics, chi-square tests
                  </CardText>
                  <CardLink className='stretched-link' href='/user-research/surveys'>Read more</CardLink>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card bg='light' className='border-0 h-100'>
                <CardImg variant='top' src='/img/website-template.png' className='p-2 card-img-index d-none d-md-block'/>
                <CardBody>
                  <CardTitle>Concept Testing</CardTitle>
                  <CardText>
                    De-risking design decisions by validating user needs with wireframes and prototypes.
                  </CardText>
                  <CardSubtitle>Qualitative methods:</CardSubtitle>
                  <CardText>
                    First impression capturing, conceptual walkthroughs, laddering, comparative evaluations
                  </CardText>
                  <CardLink className='stretched-link' href='/user-research/concept-testing'>Read more</CardLink>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card bg='light' className='border-0 h-100'>
                <CardImg variant='top' src='/img/python.png' className='p-2 card-img-index d-none d-md-block'/>
                <CardBody>
                  <CardTitle>Persona Integration</CardTitle>
                  <CardText>
                    Creating an automation module for processing user data and website metadata to thematically group insights and inform persona implementation.
                  </CardText>
                  <CardSubtitle>Technical skills:</CardSubtitle>
                  <CardText>
                    Python programming, data scraping, data standardization, natural language processing
                  </CardText>
                  <CardLink className='stretched-link' href='/user-research/automation'>Read more</CardLink>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card bg='light' className='border-0 h-100'>
                <CardImg variant='top' src='/img/team.png' className='p-2 card-img-index d-none d-md-block'/>
                <CardBody>
                  <CardTitle>Service Design Case Study: Improving Interdisciplinary Workflows</CardTitle>
                  <CardText>
                    Investigating design, development, and product manager workflows to uncover challenges. Formulating recommendations for cross-functional improvement.
                  </CardText>
                  <CardSubtitle>Qualitative methods:</CardSubtitle>
                  <CardText>
                    Stakeholder interviews, as-is scenario mapping, dot-voting, affinity diagramming, service blueprinting
                  </CardText>
                  <CardLink className='stretched-link' href='/user-research/workflows'>Read more</CardLink>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Industry;
