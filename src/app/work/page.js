export const metadata = {
  title: 'Work',
  description: 'UX research for product teams, organized by stage of the process — discovery, evaluation, and build. With a decade of academic work on accessibility and usable security.',
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Work | Daniela Napoli, PhD',
    description: 'UX research for product teams, organized by stage of the process — discovery, evaluation, and build. With a decade of academic work on accessibility and usable security.',
  },
};

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const industryGroups = [
  {
    section: 'Discovery & strategy',
    entries: [
      {
        title: 'Requirements Discovery',
        badge: 'Qualitative',
        description: 'Exploring user needs and pain points to guide future design work.',
        methods: 'Interviews, journey mapping, focus groups, design studio workshops',
        link: '/user-research/discovery',
      },
      {
        title: 'Large-scale Surveys',
        badge: 'Quantitative',
        description: 'Driving product decisions with data from large-scale surveys of needs and attitudes.',
        methods: 'SUS, SUPR-Q, UX-Lite, NPS, descriptive statistics, chi-square',
        link: '/user-research/surveys',
      },
    ],
  },
  {
    section: 'Evaluation & testing',
    entries: [
      {
        title: 'Usability Benchmarking',
        badge: 'Quantitative',
        description: 'How iterative design updates influence usability over time. On cihi.ca: +20% task success, +395% on methodology-finding tasks.',
        methods: 'Task-based testing, metadata analysis, t-tests, ANOVA, thematic analysis',
        link: '/user-research/benchmarking',
      },
      {
        title: 'Concept Testing',
        badge: 'Qualitative',
        description: 'De-risking design decisions by validating needs with wireframes and prototypes.',
        methods: 'First-impression capture, conceptual walkthroughs, laddering, comparative evaluations',
        link: '/user-research/concept-testing',
      },
      {
        title: 'Usability Testing',
        badge: 'Qualitative',
        description: 'Uncovering pain points and improvement opportunities through product assessments.',
        methods: 'Think-aloud, task observation, post-task questionnaires, affinity mapping, severity ranking',
        link: '/user-research/usability-testing',
      },
    ],
  },
  {
    section: 'Build & service design',
    entries: [
      {
        title: 'Persona Integration',
        badge: 'Technical',
        description: 'An automation module that processes user data and metadata to group insights and inform personas.',
        methods: 'Python, data scraping, standardization, natural language processing',
        link: '/user-research/automation',
      },
      {
        title: 'Service Design Case Study',
        badge: 'Qualitative',
        description: 'Investigating design, dev, and PM workflows to recommend cross-functional improvements.',
        methods: 'Collaborator interviews, scenario mapping, dot-voting, affinity diagramming, service blueprinting',
        link: '/user-research/workflows',
      },
    ],
  },
];

const academicEntries = [
  {
    title: 'Paper Publications',
    description: 'Peer-reviewed contributions on human-centered design and usable security.',
    link: '/academic/publications',
  },
  {
    title: 'Talks & Workshops',
    description: 'Invited talks and presentations at HCI conferences and workshops.',
    link: '/academic/talks',
  },
  {
    title: 'Remote Healthcare Toolkit',
    description: 'A design toolkit guiding remote healthcare technology for older adults.',
    link: '/academic/toolkit',
  },
];

function Work() {
  return (
    <div className='Work'>
      <section id='content'>
        <Container fluid='md'>
          <Row className='mb-4'>
            <Col>
              <h1 className='display-4 fw-bold'>Work in User Research</h1>
              <p className='fs-5'>
                High-impact research that I offer to product teams.
                More details about my work experience are available on my <a href='/resume' rel='noopener noreferrer' title="A link to Daniela's online resume.">resume</a>.
                You can also explore my <a href='/academic' rel='noopener noreferrer' title="The academic research portfolio page of Daniela's website.">academic projects</a>.
                Feel free to connect if you'd like to talk more about anything listed here!
              </p>
            </Col>
          </Row>

          {industryGroups.map((group) => (
            <div key={group.section}>
              <hr />
              <Row className='py-4'>
                <Col xs={12} md={3}>
                  <h2>{group.section}</h2>
                </Col>
                <Col xs={12} md={9}>
                  {group.entries.map((entry, i) => (
                    <div key={entry.title} className={i < group.entries.length - 1 ? 'mb-4' : ''}>
                      <h3 className='mb-1'>
                        {entry.title}
                        <span className='work-badge'>{entry.badge}</span>
                      </h3>
                      <p className='mb-1'>{entry.description}</p>
                      <p className='work-methods mb-1'>{entry.methods}</p>
                      <a href={entry.link}>Read more</a>
                    </div>
                  ))}
                </Col>
              </Row>
            </div>
          ))}

          <hr />

          <Row className='py-4'>
            <Col xs={12} md={3}>
              <h2>Academic</h2>
              <p className='work-methods mt-1'>Specialized in accessibility and usable security &amp; privacy.</p>
            </Col>
            {academicEntries.map((entry) => (
              <Col key={entry.title} xs={12} md={3}>
                <h3 className='mb-1'>{entry.title}</h3>
                <p className='work-methods mb-1'>{entry.description}</p>
                <a href={entry.link}>Read more</a>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Work;
