export const metadata = {
  title: 'About',
  description: 'About Daniela Napoli, a mixed-methods UX researcher based in Ontario, Canada.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About | Daniela Napoli, PhD',
    description: 'About Daniela Napoli, a mixed-methods UX researcher based in Ontario, Canada.',
  },
};

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function About() {
  return (
    <div className='About'>
      <section id='content'>
        <Container fluid='md'>
          <Row>
            <Col className='prose-content'>
              <h1 className='display-4 fw-bold'>About</h1>
              <p className='fs-5'>
                When I look back at the last decade of my research, one thing keeps surfacing: Curiosity around who gets left behind as technology changes.
              </p>
              <p className='fs-5'>
                My master&rsquo;s thesis was about the{' '}
                <a href='https://www.usenix.org/conference/soups2021/presentation/napoli' target='_blank' rel='noopener noreferrer' title='Opens in a new tab.'>privacy concerns of people who are blind and visually impaired</a>.
                My PhD looked at{' '}
                <a href='https://link.springer.com/chapter/10.1007/978-3-031-92840-6_5' target='_blank' rel='noopener noreferrer' title='Opens in a new tab.'>what helps older adults trust their privacy and well-being will be protected when using healthcare technology</a>.
                A lot of them mentioned fear and hesitation around AI, which I didn&rsquo;t go in looking for. It just kept coming up.
              </p>
              <p className='fs-5'>
                When I moved from academic research into industry, the form of the work changed. The curiosity did not.
              </p>
              <p className='fs-5'>
                Right now I&rsquo;m leading modernization work at CIHI. The work is about making healthcare data available to the people who need it most. I find myself vouching for the little guys. Like teams in the northern territories with lean budgets, working with what they have.
              </p>
              <p className='fs-5'>
                Future projects will explore AI more. In the meantime, I{' '}
                <a href='https://github.com/danielanapoli/ux-heuristic-evaluation' target='_blank' rel='noopener noreferrer' title='Opens in a new tab.'>built a Claude skill for heuristic evaluations and open-sourced it</a>.
                I write{' '}
                <a href='https://hellodaniela.substack.com/' target='_blank' rel='noopener noreferrer' title="Daniela's Substack. Opens in a new tab.">on Substack</a>{' '}
                about what I&rsquo;m learning. Not just what people need from AI tools, but how AI fits responsibly into research practice itself, so the work continues to support the ones who need it most.
              </p>
              <p className='fs-5'>
                If any of this resonates, I&rsquo;d be{' '}
                <a href='/contact'>glad to hear from you</a>.
              </p>
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col sm='auto' xs='auto' md='auto' lg='6' className='text-center'>
              <Image width='60%' alt='Photo of smiling Daniela wearing a bucket hat' src='/img/daniela.jpg' roundedCircle thumbnail/>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default About;
