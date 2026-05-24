const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Daniela Napoli',
  url: 'https://danielanapoli.com',
  jobTitle: 'UX Researcher',
  description: 'Mixed-method UX and user researcher based in Ontario, Canada.',
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
  title: { absolute: 'Daniela Napoli | UX & User Researcher Ontario' },
  description: 'UX and user researcher based in Ontario, Canada. Qualitative and quantitative research that connects user needs to product strategy and business outcomes.',
};

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomCard from '@/components/CustomCard/CustomCard';
import { SupascribeFeed } from '@/components/SupascribeFeed/SupascribeFeed';

function Home() {
  return(
  <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
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
                Explore my <a href='/academic' rel='noopener noreferrer' title="The academic research portfolio page of Daniela's website.">academic projects</a> and <a href='/resume' rel='noopener noreferrer' title="A link to Daniela's online resume.">resume</a> for more details. Want to connect? <a href='/contact' rel='noopener noreferrer' title="Daniela's contact page.">Get in touch</a> — I'm happy to dive into anything listed here.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={9}>
              <div>
                <h2 className='fs-3'>How I can help</h2>
                <Row className='g-3'>
                  <Col xs={12} md={4}>
                    <CustomCard
                      cardImage='./img/statistics.png'
                      cardTitle='Usability benchmarking'
                      cardText='Quantify product design ROI and shifts in competitive advantages over time.'
                      cardLink='/user-research/benchmarking'
                      cardLinkText='My benchmarking work'
                      cardClassName='card-hover'
                    />
                  </Col>
                  <Col xs={12} md={4}>
                    <CustomCard
                      cardImage='./img/project.png'
                      cardTitle='Requirements discovery'
                      cardText='Inform early product directions through in-depth exploration of problem spaces.'
                      cardLink='/user-research/discovery'
                      cardLinkText='My discovery work'
                      cardClassName='card-hover'
                    />
                  </Col>
                  <Col xs={12} md={4}>
                    <CustomCard
                      cardImage='./img/pie-chart.png'
                      cardTitle='Large-scale surveys'
                      cardText='Drive product decisions with data from large-scale surveys of user needs and attitudes.'
                      cardLink='/user-research/surveys'
                      cardLinkText='My survey work'
                      cardClassName='card-hover'
                    />
                  </Col>
                  <Col xs={12} md={4}>
                    <CustomCard
                      cardImage='./img/website-template.png'
                      cardTitle='Concept testing'
                      cardText='De-risk design decisions by validating user needs with wireframes and prototypes.'
                      cardLink='/user-research/concept-testing'
                      cardLinkText='My concept testing work'
                      cardClassName='card-hover'
                    />
                  </Col>
                  <Col xs={12} md={4}>
                    <CustomCard
                      cardImage='./img/satisfaction.png'
                      cardTitle='Usability testing'
                      cardText='Uncover user pain points and improvement opportunities through product assessments.'
                      cardLink='/user-research/usability-testing'
                      cardLinkText='My usability testing work'
                      cardClassName='card-hover'
                    />
                  </Col>
                  <Col xs={12} md={4}>
                    <CustomCard
                      cardImage='./img/paper.png'
                      cardTitle='Research science'
                      cardText='Leverage expertise from academia for complex product challenges.'
                      cardLink='/academic'
                      cardLinkText='My research foundations'
                      cardClassName='card-hover'
                    />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <h2 className='fs-3'>From my blog</h2>
                <SupascribeFeed
                  embedId="578213045745"
                  loaderSrc="https://js.supascribe.com/v1/loader/ytFSFZOVCvWHW0C399390pc70ND3.js"
                  blogHref="https://www.substack.com/@hellodaniela"
                />
                </div>
            </Col>
          </Row>
        </Container>
    </section>
  </div>
  </>
  );
}

export default Home;
