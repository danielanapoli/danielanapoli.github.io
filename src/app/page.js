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
import { SubstackFeed } from '@/components/SubstackFeed/SubstackFeed';

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
                <p className='text-muted small mb-2'>Mixed-methods UX researcher. Ontario, Canada.</p>
                <h1 className='display-4 fw-bold'>For ten years, one question:<br />Whose voice is missing?</h1>
                <p className='fs-5 mt-3'>
                  Products often get designed only for the voices already at the table.
                  I work in usability, accessibility, and privacy, where that exclusion shows up first.
                  I use mixed methods to avoid a narrow approach that leaves something out.
                  And I am exploring how AI fits into UX research without leaving critical voices behind.
                  </p>
              </Col>
            </Row>

            {/* Featured work */}
            <Row className='mb-5'>
              <Col>
                <Card className='border-0 bg-light p-2'>
                  <CardBody>
                    <p className='text-uppercase small fw-bold text-primary mb-2'>Featured</p>
                    <h2>Designing a research repository people will actually use</h2>
                    <p>Directors and managers had questions user research could answer, but no idea where to find them. The obvious fix was findability. The real challenge was facilitating the confidence people needed to actually use the repository.</p>
                    <Row className='my-3'>
                      <Col xs={12} sm={6} md={4}>
                        <p className='display-5 fw-bold mb-0'>36</p>
                        <p className='text-muted small'>staff listening sessions</p>
                      </Col>
                      <Col xs={12} sm={6} md={5}>
                        <p className='display-5 fw-bold mb-0'>vibe coded</p>
                        <p className='text-muted small'>prototype to share user needs</p>
                      </Col>
                    </Row>
                    <a href='/user-research/automation/case-study' className='stretched-link'>Read the research repository case study</a>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            {/* Discovery + Surveys + Benchmarking case studies */}
            <Row className='mb-3'>
              <Col xs={12} md={4} className='mb-4 mb-md-0'>
                <Card className='p-2 h-100'>
                  <CardBody>
                    <h2>Benchmarking redesigns</h2>
                    <p>Large-scale redesign investments need to be justified. Did it actually get better for users?</p>
                    <Row className='my-3'>
                      <Col xs={6}>
                        <p className='display-5 fw-bold mb-0'>20%</p>
                        <p className='text-muted small'>lift in overall task success</p>
                      </Col>
                      <Col xs={6}>
                        <p className='display-5 fw-bold mb-0'>395%</p>
                        <p className='text-muted small'>improvement on tasks about how CIHI calculates its metrics</p>
                      </Col>
                    </Row>
                    <a href='/user-research/benchmarking/case-study' className='stretched-link'>Read the benchmarking case study</a>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={4} className='mb-4 mb-md-0'>
                <Card className='p-2 h-100'>
                  <CardBody>
                    <h2>Transforming data into insight</h2>
                    <p>
                      My doctoral work included a national survey on remote healthcare technology. We surfaced a clear trust gap by age.
                      An end-to-end process made every cleaning and validation decision traceable, so teams could stand behind the findings with confidence.
                    </p>
                    <a href='/user-research/surveys/case-study' className='stretched-link'>Read about my data processing work</a>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <Card className='p-2 h-100'>
                  <CardBody>
                    <h2>Easy to trust, hard to use</h2>
                    <p>
                      CIHI set out to modernize their products. They needed a research-grounded strategy for what came next, built from actual user needs.
                      Research surfaced a clear message: Existing usability problems don't land on everyone equally.
                      If future designs focused on the teams who'd already found workarounds that would leave everyone else behind.
                    </p>
                    <a href='/user-research/discovery/case-study' className='stretched-link'>Read about my discovery work</a>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row className='mb-5'>
              <Col className='d-flex justify-content-start gap-4'>
                <a href='/work'>View all my work &rarr;</a>
              </Col>
            </Row>

            {/* Recent writing */}
            <Row className='mb-3'>
              <Col>
              <h2>Recent writing</h2>
                <SubstackFeed feedUrl='https://hellodaniela.substack.com/feed' limit={3} variant='list' />
              </Col>
            </Row>
            <Row className='mb-5'>
              <Col className='d-flex justify-content-start gap-4'>
                <a href='/blog'>Read more of my blog &rarr;</a>
              </Col>
            </Row>

          </Container>
        </section>
      </div>
    </>
  );
}

export default Home;
