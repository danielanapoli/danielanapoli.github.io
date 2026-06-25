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
import { SubstackFeed, SubstackFeedEntry } from '@/components/SubstackFeed/SubstackFeed';

function Home() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <div className='Home'>
        <section id='content'>
          <Container fluid='md'>

            {/* Hero */}
            <Row className='mb-5'>
              <Col>
                <p className='text-muted small mb-2'>Daniela Napoli. Mixed-methods UX researcher, Ontario.</p>
                <h1 className='display-4 fw-bold'>For ten years, one question:<br />Whose voice is missing?</h1>
                <p className='fs-5 mt-3'>
                  I started in accessibility and privacy research. 
                  Now I lead mixed-methods user research with product teams. 
                  The form keeps changing. The curiosity does not. 
                  I build the research tools I need. I run mixed method studies with qualitative depth and quantitative rigor. 
                  And I explore where AI fits responsibly into research practice.</p>
              </Col>
            </Row>

            {/* Featured work */}
            <Row className='mb-4'>
              <Col>
                <Card className='border-0 bg-light p-2'>
                  <CardBody>
                    <p className='text-uppercase small fw-bold text-primary mb-2'>Featured Work</p>
                    <h2>Benchmarking cihi.ca redesigns</h2>
                    <p>Large-scale redesign investments need to be justified. Did it actually get better for users?</p>
                    <Row className='my-3'>
                      <Col xs={12} sm={6} md={4}>
                        <p className='display-5 fw-bold mb-0'>20%</p>
                        <p className='text-muted small'>lift in overall task success</p>
                      </Col>
                      <Col xs={12} sm={6} md={5}>
                        <p className='display-5 fw-bold mb-0'>395%</p>
                        <p className='text-muted small'>improvement on tasks about how CIHI calculates its metrics</p>
                      </Col>
                    </Row>
                    <a href='/user-research/benchmarking/case-study'>Read the benchmarking case study</a>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            {/* Discovery + Recent thinking */}
            <Row className='mb-5'>
              <Col xs={12} md={6} className='mb-4 mb-md-0'>
                <Card className='p-2 h-100'>
                  <CardBody>
                    <h2>The gap between trust and usability</h2>
                    <p>
                      CIHI set out to modernize their products. They needed a research-grounded strategy for what came next, built from actual user needs. 
                      Research surfaced a clear message: Existing usability problems don't land on everyone equally.
                      Future designs focused on the teams who'd already found workarounds meant leaving everyone else behind.
                    </p>
                    <a href='/user-research/discovery/case-study'>Read the discovery case study</a>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <SubstackFeed feedUrl='https://hellodaniela.substack.com/feed' limit={3}>
                  <SubstackFeedEntry
                    title="Five Websites, One Claude Skill, and the Thing Prompts Can't Fix"
                    href='https://www.substack.com/@hellodaniela'
                  />
                  <SubstackFeedEntry
                    title='Using AI Responsibly for User Knowledge Mobilization'
                    href='https://www.substack.com/@hellodaniela'
                  />
                </SubstackFeed>
              </Col>
            </Row>

            <Row className='mb-4'>
              <Col className='d-flex justify-content-end gap-4'>
                <a href='/work'>View all work &rarr;</a>
                <a href='/blog'>Read more writing &rarr;</a>
              </Col>
            </Row>

          </Container>
        </section>
      </div>
    </>
  );
}

export default Home;
