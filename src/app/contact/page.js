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
              <h1>Contact</h1>
              </Col>
            </Row>
            <Row>
              <Col className='text-center'>
                <p>
                  Want to talk more? For my fastest response, email me at <strong>hello@danielanapoli.com</strong>
                  <br/> More ways to connect are down below.
                </p>
              </Col>
            </Row>
            <Row className='justify-content-center'>
              <Col sm='auto' xs='auto' md='auto' lg='6' className='text-center'>
                <Image width='50%' alt='Photo of smiling Daniela wearing a buckethat' src='/img/daniela.jpg' roundedCircle thumbnail/>
              </Col>
            </Row>
          </Container>
      </section>
    </div>
  );
}

export default Contact;