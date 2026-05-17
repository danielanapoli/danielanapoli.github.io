export const metadata = {
  title: 'User Research Services',
  description: 'UX research services for product teams. Discovery, benchmarking, usability testing, large-scale surveys, and concept testing by Daniela Napoli.',
};

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomCard from '@/components/CustomCard/CustomCard';

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
              <CustomCard
                cardImage='/img/project.png'
                cardTitle='Requirements Discovery'
                cardText='Exploring user needs and pain points. Formulating actionable recommendations to guide the direction of future design work.'
                cardSubtitle='Qualitative methods:'
                cardSubtext='User interviews, stakeholder interviews, journey mapping, cross-department focus groups, design studio workshops'
                cardLink='/user-research/discovery'
                cardLinkText='Read more'
              />
            </Col>
            <Col xs={12} md={4}>
              <CustomCard
                cardImage='/img/statistics.png'
                cardTitle='Usability Benchmarking'
                cardText='Assessing how iterative design updates influenced usability and SEO metrics over time.'
                cardSubtitle='Quantitative methods:'
                cardSubtext='Unmoderated task-based usability testing, metadata analysis, descriptive statistics, t-tests, ANOVA, chi-square tests, thematic analysis'
                cardLink='/user-research/benchmarking'
                cardLinkText='Read more'
              />
            </Col>
            <Col xs={12} md={4}>
              <CustomCard
                cardImage='/img/satisfaction.png'
                cardTitle='Usability Testing'
                cardText='Uncovering user pain points and improvement opportunities through product assessments.'
                cardSubtitle='Qualitative methods:'
                cardSubtext='Think-aloud protocol, task completion observation, non-verbal cue observation, post-task questionnaires, affinity mapping, severity ranking'
                cardLink='/user-research/usability-testing'
                cardLinkText='Read more'
              />
            </Col>
            <Col xs={12} md={4}>
              <CustomCard
                cardImage='/img/pie-chart.png'
                cardTitle='Large-scale Surveys'
                cardText='Driving product decisions with data from large-scale surveys of user needs and attitudes.'
                cardSubtitle='Quantitative methods:'
                cardSubtext='User surveys, SUS, SUPR-Q, UX-Lite, NPS, descriptive statistics, chi-square tests'
                cardLink='/user-research/surveys'
                cardLinkText='Read more'
              />
            </Col>
            <Col xs={12} md={4}>
              <CustomCard
                cardImage='/img/website-template.png'
                cardTitle='Concept Testing'
                cardText='De-risking design decisions by validating user needs with wireframes and prototypes.'
                cardSubtitle='Qualitative methods:'
                cardSubtext='First impression capturing, conceptual walkthroughs, laddering, comparative evaluations'
                cardLink='/user-research/concept-testing'
                cardLinkText='Read more'
              />
            </Col>
            <Col xs={12} md={4}>
              <CustomCard
                cardImage='/img/python.png'
                cardTitle='Persona Integration'
                cardText='Creating an automation module for processing user data and website metadata to thematically group insights and inform persona implementation.'
                cardSubtitle='Technical skills:'
                cardSubtext='Python programming, data scraping, data standardization, natural language processing'
                cardLink='/user-research/automation'
                cardLinkText='Read more'
              />
            </Col>
            <Col xs={12} md={4}>
              <CustomCard
                cardImage='/img/team.png'
                cardTitle='Service Design Case Study: Improving Interdisciplinary Workflows'
                cardText='Investigating design, development, and product manager workflows to uncover challenges. Formulating recommendations for cross-functional improvement.'
                cardSubtitle='Qualitative methods:'
                cardSubtext='Stakeholder interviews, as-is scenario mapping, dot-voting, affinity diagramming, service blueprinting'
                cardLink='/user-research/workflows'
                cardLinkText='Read more'
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Industry;
