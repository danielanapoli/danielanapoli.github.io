export const metadata = {
  title: 'Blog',
  description: 'Writing by Daniela Napoli, PhD on the practice of UX research — AI tools built and tested, the limits prompts can\'t fix, and what stays irreplaceable about the researcher\'s role.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | Daniela Napoli, PhD',
    description: 'Writing by Daniela Napoli, PhD on the practice of UX research — AI tools built and tested, the limits prompts can\'t fix, and what stays irreplaceable about the researcher\'s role.',
  },
};

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SupascribeFeed } from '@/components/SupascribeFeed/SupascribeFeed';

function Blog() {
  return (
    <div className='Blog'>
      <section id='content'>
        <Container fluid='md'>
          <Row>
            <Col className='prose-content'>
              <h1>Thinking Outloud</h1>
              <p className='fs-5'>
                I explore UX research, AI inside the practice, and the role of human-led expertise. My writing is inspired by work in the field and other ideas rattling around in my head.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <SupascribeFeed
                embedId="578213045745"
                loaderSrc="https://js.supascribe.com/v1/loader/ytFSFZOVCvWHW0C399390pc70ND3.js"
                blogHref="https://www.substack.com/@hellodaniela"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Blog;
