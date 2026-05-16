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
              <Col>
              <h1>Get in Touch</h1>
              </Col>
            </Row>
            <Row>
              <Col className='text-center prose-content'>
                <p className='fs-5'>
                  Want to talk more? For my fastest response, email me at <strong>hello@danielanapoli.com</strong>. More ways to connect are down below.
                </p>
              </Col>
            </Row>
            <Row className='justify-content-center'>
              <Col sm='auto' xs='auto' md='auto' lg='6' className='text-center'>
                <Image width='60%' alt='Photo of smiling Daniela wearing a buckethat' src='/img/daniela.jpg' roundedCircle thumbnail/>
              </Col>
            </Row>
          </Container>
      </section>
    </div>
  );
}

export default Contact;