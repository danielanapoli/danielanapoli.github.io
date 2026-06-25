export const metadata = {
  title: { absolute: 'Academic Contributions | Daniela Napoli, PhD' },
  description: 'Academic research by Daniela Napoli, PhD. Peer-reviewed publications, HCI conference talks, and design work on usable security and inclusive UX.',
  alternates: { canonical: '/academic' },
  openGraph: {
    title: 'Academic Contributions | Daniela Napoli, PhD',
    description: 'Academic research by Daniela Napoli, PhD. Peer-reviewed publications, HCI conference talks, and design work on usable security and inclusive UX.',
  },
};

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomCard from '@/components/CustomCard/CustomCard';

function Academic() {
  return (
  <div className="Academic">
    <section id="content">
      <Container fluid='md'>
        <Row className="mb-3">
          <Col className='prose-content'>
            <h1 className='display-4 fw-bold'>Academic Contributions</h1>
            <p className='fs-5'>
              Some of my favourite academic works focused on <strong>accessibility</strong> and <strong>usable security</strong>.
              You can learn more about my other academic publications by visiting <a href="https://scholar.google.com/citations?user=qdH8ZZcAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" title="Daniela's profile on Google Scholar. Opens in a new tab.">Google Scholar</a>.
              You can also explore my <a href="/user-research" rel="noopener noreferrer" title="Daniela's user research portfolio. Opens in the same tab.">user research portfolio</a> or my <a href="/resume" rel="noopener noreferrer" title="A link to Daniela's online resume.">resume</a>.
              Feel free to connect if you'd like to talk more about anything listed here!
            </p>
          </Col>
        </Row>
        <Row className='g-3'>
          <Col xs={12} md={4}>
            <CustomCard
              cardImage='/img/paper.webp'
              cardTitle='Paper Publications'
              cardText='Some peer-reviewed contributions to academic literature on human-centered design and usable security.'
              cardLink='/academic/publications'
            />
          </Col>
          <Col xs={12} md={4}>
            <CustomCard
              cardImage='/img/podium.png'
              cardTitle='Talks and Workshops'
              cardText='Highlights from some of my invited talks and presentations at HCI conferences and workshops.'
              cardLink='/academic/talks'
            />
          </Col>
          <Col xs={12} md={4}>
            <CustomCard
              cardImage='/img/tool.png'
              cardTitle={<>Remote Healthcare Technology<br/>Design Toolkit</>}
              cardText='Samples of our design toolkit to guide the development of remote healthcare technology for older adults.'
              cardLink='/academic/toolkit'
              cardLinkText='Explore the remote healthcare technology design toolkit'
            />
          </Col>
        </Row>
      </Container>      
    </section>
    </div>
  );
}

export default Academic;
