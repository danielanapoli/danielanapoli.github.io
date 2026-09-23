const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Daniela Napoli, PhD',
  url: 'https://danielanapoli.com',
  jobTitle: 'UX Researcher',
  description: 'Mixed-methods UX researcher in Ontario. Qualitative depth and quantitative rigour — connecting user needs to product strategy.',
  email: 'hello@danielanapoli.com',
  address: { '@type': 'PostalAddress', addressRegion: 'Ontario', addressCountry: 'CA' },
  sameAs: [
    'https://linkedin.com/in/danielanap/',
    'https://scholar.google.com/citations?user=qdH8ZZcAAAAJ&hl=en',
    'https://www.substack.com/@hellodaniela',
    'https://github.com/danielanapoli',
  ],
};

export const metadata = {
  title: { absolute: 'Mixed-Methods UX Researcher Ontario | Daniela Napoli, PhD' },
  description: 'Mixed-methods UX researcher in Ontario. Qualitative depth and quantitative rigour — connecting user needs to product strategy.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Mixed-Methods UX Researcher Ontario | Daniela Napoli, PhD',
    description: 'Mixed-methods UX researcher in Ontario. Qualitative depth and quantitative rigour — connecting user needs to product strategy.',
  },
};

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/CardBody';
import CardSubtitle from 'react-bootstrap/CardSubtitle';
import CardTitle from 'react-bootstrap/CardTitle';
import CardText from 'react-bootstrap/CardText';
import CardLink from 'react-bootstrap/CardLink';
import { SubstackFeed } from '@/components/SubstackFeed/SubstackFeed';

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

const caseStudies = [
  {
    name: 'Discover ⬖ ',
    title: 'Discovery research',
    color: 'var(--bs-primary-bg-subtle)',
    labelColor: 'var(--bs-primary)',
    body: "Teams set product strategy with confidence when they understand what users need. I start with the research the organization already has. Then I interview the leaders shaping the direction and the users living with the product. Teams get requirements developers can build against. I stay involved through early design so the findings reach real decisions.",
    href: '/user-research/discovery',
    linkText: 'Read about how I inform product strategy',
  },
  {
    name: 'Design ⬗',
    title: 'Concept testing',
    color: 'var(--bs-primary)',
    body: "Concept testing shows whether a design direction has real potential. I run moderated sessions on wireframes, sketches, or mockups. I probe past first reactions to find out what users are ready to adopt. Teams learn this while changing course is still cheap. Findings shape what gets built next.",
    href: '/user-research/concept-testing',
    linkText: 'Read about how I test designs with users',
  },
  {
    name: 'Develop ⬖',
    title: 'Usability testing',
    color: 'var(--bs-primary)',
    body: "Usability testing shows teams what is actually causing friction. I run moderated and unmoderated studies with real end users. I rate each issue against established heuristics to guide backlog prioritization. Teams get a ranked set of fixes and video clips to help make the problems tangible for the people who decide what to build.",
    href: '/user-research/usability-testing',
    linkText: 'Read about how I work with dev teams',
  },
  {
    name: 'Deliver ⬗',
    title: 'Benchmarking',
    color: 'var(--bs-primary)',
    body: "Benchmarking turns user behaviour into numbers leadership can act on. I run task-based studies with the same protocol on the legacy product and the redesign. Teams see exactly how much the experience improved. Repeat the study and the numbers become a trend line. Leaders can track how the product performs over time.",
    href: '/user-research/benchmarking',
    linkText: 'Read about how I monitor product performance over time',
  },
];

function Home() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <div className='Home'>
        <section id='content'>
          <Container fluid='md'>

            {/* Hero */}
            <Row className='mb-5 g-4'>
              <Col md={8}>
                <p className='text-muted small mb-2'>Mixed-methods UX researcher. Ontario, Canada.</p>
                <h1 className='display-4 fw-bold'>For ten years, one question:<br />Whose voice is missing?</h1>
                <p className='fs-5 mt-3'>
                  Products often get designed only for the voices already at the table.
                  I've worked in usability, accessibility, and privacy, where that exclusion shows up first.
                  Now, I support decisions in the public and private sectors with research that connects user needs to product strategy.
                  I mix qualitative depth and quantitative rigour to make sure people's voices are heard.
                  </p>
              </Col>
              <Col md={4}>
                <div className='border-start ps-3 h-100 position-relative'>
                  <p className='text-uppercase small text-muted mb-2'>AI in my work</p>
                  <p className='small mb-2'>
                    Artificial intelligence shows up in my practice and my work. I have researched people's attitudes and expectations around AI's role in healthcare technology. I use AI to acclerate my research work responsibly. I experiment with AI to understand it deeply.
                  </p>
                  <a href='/ai' className='stretched-link small'>Read more on my AI page</a>
                </div>
              </Col>
            </Row>

            {/* Case studies */}
            <Row>
              <h2>Product Research</h2>
            </Row>
            <Row className='mb-5 g-3'>
              {caseStudies.map((stage) => (
                <Col key={stage.name} xs={12} md={6} lg={3}>
                  <Card
                    className='p-2 h-100 diamond-card'
                    style={{ '--stage-color': stage.color, '--stage-label-color': stage.labelColor ?? stage.color }}
                  >
                    <CardBody className='d-flex flex-column'>
                      <CardSubtitle className='text-uppercase small fw-bold mb-2 stage-label'>
                        {stage.name}
                      </CardSubtitle>
                      <CardTitle as='h4'>{stage.title}</CardTitle>
                      <CardText>{stage.body}</CardText>
                      {stage.stats && (
                        <Row className='my-2'>
                          {stage.stats.map((stat) => (
                            <Col xs={6} key={stat.label}>
                              <p className='fw-bold mb-0'>{stat.value}</p>
                              <p className='text-muted small'>{stat.label}</p>
                            </Col>
                          ))}
                        </Row>
                      )}
                      <CardLink href={stage.href} className='stretched-link mt-auto'>{stage.linkText}</CardLink>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
            <hr/>
            <Row className='mb-5'>
              <Col xs={12} md={3} className='mb-4 mb-md-0'>
                <h2>Academic Research</h2>
              </Col>
              {academicEntries.map((entry, i) => (
                <Col key={entry.title} xs={12} md={3} className={i < academicEntries.length - 1 ? 'mb-4 mb-md-0' : ''}>
                  <h4 className='mb-1'>{entry.title}</h4>
                  <p className='work-methods mb-1'>{entry.description}</p>
                  <a href={entry.link}>Explore {entry.title.toLowerCase()}</a>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}

export default Home;
