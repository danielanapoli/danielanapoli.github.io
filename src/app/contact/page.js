export const metadata = {
  title: 'Contact',
  description: 'Contact Daniela Napoli, a UX and user researcher based in Ontario, Canada. Available for research consulting, collaboration, and speaking engagements.',
};

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Contact() {
  return (
    <div className='Contact'> 
      <section id='content'>
          <Container fluid='md'>
            <Row>
              <Col className='prose-content'>
              <h1>Get in Touch</h1>
                <p className='fs-5'>
                  I am not currently looking for new opportunities, but I am always open to connecting with other professionals in the UX and user research community. 
                  Want to talk more? For my fastest response, email me at <a href='mailto:hello@danielanapoli.com'>hello@danielanapoli.com</a> or connect with me on{' '}
                  <a href='https://linkedin.com/in/danielanap/' target='_blank' rel='noopener noreferrer' title="Daniela's LinkedIn profile. Opens in a new tab.">LinkedIn</a>.
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

export default Contact;