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

const caseStudies = [
  {
    name: 'Discover ⬖ ',
    title: 'Discovery research',
    color: 'var(--bs-primary-bg-subtle)',
    labelColor: 'var(--bs-primary)',
    body: "Teams can set product strategy with confidence when they understand what users need. I start with the research the organization already has. Then I interview the leaders shaping the direction. And then I talk to the users living with the product. From this work, teams can design and build with purpose.",
    href: '/user-research/discovery',
    linkText: 'Read about how I inform product strategy',
  },
  {
    name: 'Design ⬗',
    title: 'Concept testing',
    color: 'var(--bs-primary)',
    body: "Concept testing shows whether a design direction has real potential. I run sessions on wireframes, sketches, or mockups. I probe past first reactions to find out what users are ready to adopt. These findings help when changing course is still cheap.",
    href: '/user-research/concept-testing',
    linkText: 'Read about how I test designs with users',
  },
  {
    name: 'Develop ⬖',
    title: 'Usability testing',
    color: 'var(--bs-primary)',
    body: "Usability testing shows teams what is actually causing friction. I run unmoderated and moderated studies with real end users. I rate issues against established heuristics to guide backlog prioritization. Teams get a ranked set of fixes with accompanying video clips to help make the problems tangible for the people who decide the next steps.",
    href: '/user-research/usability-testing',
    linkText: 'Read about how I work with dev teams',
  },
  {
    name: 'Deliver ⬗',
    title: 'Benchmarking',
    color: 'var(--bs-primary)',
    body: "Benchmarking turns user behaviour into numbers leadership can act on. I run task-based studies with the same protocol on legacy products and redesigns. This way, teams see exactly what improved and what declined over time.",
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
                  Products are often designed around the voices already at the table. 
                  My work in usability, accessibility, and privacy has shown me how easily people can be forgotten in product decisions.
                  Today, I help organizations make better decisions by connecting user needs with product strategy. 
                  I mix qualitative depth with quantitative rigour to bring overlooked perspectives into the decisions that shape products and services. </p>
              </Col>
              <Col md={4}>
                <div className='border-start ps-3 h-100 position-relative'>
                  <h2 className='text-uppercase small text-muted fw-normal lh-base mb-2'>AI in my work</h2>
                  <p className='small mb-2'>
                    I've have researched people's attitudes and expectations around AI's role in healthcare technology. I use AI to acclerate my research work responsibly. I experiment with AI to understand it deeply.
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
                      <CardTitle as='h3' className='h4'>{stage.title}</CardTitle>
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

            {/* Featured: Accessibility research */}
            <Row>
              <h2>Accessibility Research</h2>
            </Row>
            <Row className='mb-2'>
              <Col>
                <div className='bg-light rounded-3 p-4 p-md-5'>
                  <Row className='g-4'>
                    <Col md={5}>
                      <h3>&ldquo;I&rsquo;m Literally Just Hoping This Will Work:&rdquo; Obstacles Blocking the Online Security and Privacy of Users with Visual Disabilities</h3>
                      <p className='text-uppercase small fw-bold text-primary mb-3'>SOUPS 2021 &middot; Peer-reviewed</p>
                      <p className='display-5 fw-bold mb-0'>34</p>
                      <p className='text-muted small mb-3'>citations</p>
                      <p className='text-uppercase small fw-bold text-muted mb-1'>Outcome</p>
                      <p className='small mb-0'>Serious usability issues identified across Gmail, Amazon, and a phishing site, plus four states of security and privacy users experience during sensitive tasks.</p>
                    </Col>
                    <Col md={7}>
                      <p className='fw-bold mb-3'>Accessibility barriers prevent users with visual disabilities from perceiving the security and privacy information they need to manage online threats.</p>
                      <p className='mb-0'>
                        We observed how these users protect their online security while interacting with Gmail, Amazon, and a phishing site mimicking CNIB.
                        When users can&rsquo;t access the cues that signal a threat, they can misinterpret how secure they actually are.
                      </p>
                      <p className='mb-0'>
                        <a href='https://www.usenix.org/conference/soups2021/presentation/napoli' target='_blank' rel='noopener noreferrer' title='A link to the USENIX website. Opens in a new tab.' className='mt-2 d-inline-block'>Read the full paper on USENIX</a>
                      </p>
                      <p className='mb-0'>
                        <a href='https://www.youtube.com/watch?v=wPes4YF4bxY' target='_blank' rel='noopener noreferrer' title='Conference talk on YouTube. Opens in a new tab.' className='mt-2 d-inline-block'>Watch the conference talk</a>
                      </p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row className='mb-2'>
              <Col>
                <div className='bg-light rounded-3 p-4 p-md-5'>
                  <Row className='g-4'>
                    <Col md={5}>
                      <h3>Developing Accessible and Usable Security (ACCUS) Heuristics</h3>
                      <p className='text-uppercase small fw-bold text-primary mb-3'>CHI 2018 &middot; Extended abstract</p>
                      <p className='display-5 fw-bold mb-0'>25</p>
                      <p className='text-muted small mb-3'>citations</p>
                      <p className='text-uppercase small fw-bold text-muted mb-1'>Outcome</p>
                      <p className='small mb-0'>A set of heuristics merging usable security and web accessibility, applied to ten websites to uncover issues that stop users from following standard security advice.</p>
                    </Col>
                    <Col md={7}>
                      <p className='fw-bold mb-3'>Usable security and web accessibility are often treated as separate issues, leaving a gap in how users with vision loss secure their online experiences.</p>
                      <p className='mb-0'>
                        We created heuristics that bring both fields together and used them to evaluate ten websites.
                        The evaluation uncovered multiple issues that prevent users with vision loss from following standard security advice.
                      </p>
                      <p className='mb-0'>
                        <a href='https://dl.acm.org/doi/abs/10.1145/3170427.3180292' target='_blank' rel='noopener noreferrer' title='A link to the ACM Digital Library. Opens in a new tab.' className='mt-2 d-inline-block'>Read the full paper on the ACM Digital Library</a>
                      </p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row className='mb-5'>
              <Col className='text-end'>
                <a href='/academic'>Read more about my academic work</a>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}

export default Home;
