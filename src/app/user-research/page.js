export const metadata = {
  title: 'User Research Services for Product Teams',
  description: 'UX research for product teams: discovery, usability benchmarking, concept testing, and large-scale surveys. PhD researcher, Ontario.',
  alternates: { canonical: '/user-research' },
  openGraph: {
    title: 'User Research Services for Product Teams | Daniela Napoli, PhD',
    description: 'UX research for product teams: discovery, usability benchmarking, concept testing, and large-scale surveys. PhD researcher, Ontario.',
  },
};

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const productWork = [
  {
    title: 'Requirements discovery',
    badge: 'Qualitative',
    description: 'Exploring user needs and pain points to guide future design work.',
    methods: 'Interviews, journey mapping, focus groups, design studio workshops',
    link: '/user-research/discovery',
  },
  {
    title: 'Large-scale surveys',
    badge: 'Quantitative',
    description: 'Driving product decisions with data from large-scale surveys of needs and attitudes.',
    methods: 'SUS, SUPR-Q, UX-Lite, NPS, descriptive statistics, chi-square',
    link: '/user-research/surveys',
  },
  {
    title: 'Usability benchmarking',
    badge: 'Quantitative',
    description: 'How iterative design updates influence usability over time. On cihi.ca: +20% task success, +395% on methodology-finding tasks.',
    methods: 'Task-based testing, metadata analysis, t-tests, ANOVA, thematic analysis',
    link: '/user-research/benchmarking',
  },
  {
    title: 'Concept testing',
    badge: 'Qualitative',
    description: 'De-risking design decisions by validating needs with wireframes and prototypes.',
    methods: 'First-impression capture, conceptual walkthroughs, laddering, comparative evaluations',
    link: '/user-research/concept-testing',
  },
  {
    title: 'Usability testing',
    badge: 'Qualitative',
    description: 'Uncovering pain points and improvement opportunities through product assessments.',
    methods: 'Think-aloud, task observation, post-task questionnaires, affinity mapping, severity ranking',
    link: '/user-research/usability-testing',
  },
  {
    title: 'Persona integration',
    badge: 'Technical',
    description: 'An automation module that processes user data and metadata to group insights and inform personas.',
    methods: 'Python, data scraping, standardization, natural language processing',
    link: '/user-research/automation',
  },
  {
    title: 'Service design case study',
    badge: 'Qualitative',
    description: 'Investigating design, dev, and PM workflows to recommend cross-functional improvements.',
    methods: 'Collaborator interviews, scenario mapping, dot-voting, affinity diagramming, service blueprinting',
    link: '/user-research/workflows',
  },
];

const productWorkColumns = [
  { heading: 'Quantitative', badge: 'Quantitative' },
  { heading: 'Qualitative', badge: 'Qualitative' },
  { heading: 'Technical', badge: 'Technical' },
].map((col) => ({
  ...col,
  entries: productWork.filter((entry) => entry.badge === col.badge),
}));

const academicEntries = [
  {
    title: 'Paper publications',
    description: 'Peer-reviewed contributions on human-centered design and usable security.',
    link: '/academic/publications',
  },
  {
    title: 'Talks & workshops',
    description: 'Invited talks and presentations at HCI conferences and workshops.',
    link: '/academic/talks',
  },
  {
    title: 'Remote healthcare toolkit',
    description: 'A design toolkit guiding remote healthcare technology for older adults.',
    link: '/academic/toolkit',
  },
];

function UserResearch() {
  return (
    <div className='UserResearch'>
      <section id='content'>
        <Container fluid='md'>
          <Row className='mb-4'>
            <Col>
              <h1 className='display-4 fw-bold'>User research</h1>
              <p className='fs-5'>
                High-impact research that I contribute to product teams.
                More details about my work experience are available on my <a href='/resume' rel='noopener noreferrer' title="A link to Daniela's online resume.">resume</a>.
                You can also explore my <a href='/academic' rel='noopener noreferrer' title="The academic research portfolio page of Daniela's website.">academic projects</a>.
                Feel free to connect if you'd like to talk more about anything listed here!
              </p>
            </Col>
          </Row>
          <Row className='py-4'>
            <h2>Industry</h2>
            {productWorkColumns.map((col) => (
              <Col key={col.heading} xs={12} md={4} className='mb-4 mb-md-0'>
                <h3 className='h5 text-uppercase mb-3'>{col.heading}</h3>
                {col.entries.map((entry, i) => (
                  <div key={entry.title} className={i < col.entries.length - 1 ? 'mb-4' : ''}>
                    <h4 className='mb-1'>{entry.title}</h4>
                    <p className='mb-1'>{entry.description}</p>
                    <p className='work-methods mb-1'>{entry.methods}</p>
                    <a href={entry.link}>Explore {entry.title.toLowerCase()}</a>
                  </div>
                ))}
              </Col>
            ))}
          </Row>

          <hr />

          <Row className='py-4'>
            <Col xs={12} md={3} className='mb-4 mb-md-0'>
              <h2>Academic</h2>
              <p className='work-methods mt-1'>Specialized in accessibility and usable security &amp; privacy.</p>
            </Col>
            {academicEntries.map((entry, i) => (
              <Col key={entry.title} xs={12} md={3} className={i < academicEntries.length - 1 ? 'mb-4 mb-md-0' : ''}>
                <h3 className='mb-1'>{entry.title}</h3>
                <p className='work-methods mb-1'>{entry.description}</p>
                <a href={entry.link}>Explore {entry.title.toLowerCase()}</a>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default UserResearch;
