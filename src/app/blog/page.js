export const metadata = {
  title: 'Writing',
  description: 'Writing by Daniela Napoli, PhD on the practice of UX research — AI tools built and tested, the limits prompts can\'t fix, and what stays irreplaceable about the researcher\'s role.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Writing | Daniela Napoli, PhD',
    description: 'Writing by Daniela Napoli, PhD on the practice of UX research — AI tools built and tested, the limits prompts can\'t fix, and what stays irreplaceable about the researcher\'s role.',
  },
};

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SubstackFeed } from '@/components/SubstackFeed/SubstackFeed';

function Blog() {
  return (
    <div className='Blog'>
      <section id='content'>
        <Container fluid='md'>
          <Row className='mb-4'>
            <Col>
            <h1 className='display-4 fw-bold'>Writing on Research Practice</h1>
              <p className='fs-5'>
                I explore UX research, AI inside the practice, and the role of human-led expertise. My writing is inspired by work in the field and other ideas rattling around in my head. 
                Published on {' '}
                <a href='https://hellodaniela.substack.com' target='_blank' rel='noopener noreferrer'>Substack</a>.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <SubstackFeed feedUrl='https://hellodaniela.substack.com/feed' limit={10} variant='card' />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Blog;
