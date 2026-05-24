import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <div className='NotFound'>
      <Container fluid='md'>
        <section id='content'>
          <Row className='justify-content-md-center' style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
            <Col className='prose-content text-center'>
              <p style={{ fontSize: '4rem', lineHeight: 1 }}>404</p>
              <h1 className='mb-3'>Page not found</h1>
              <p className='fs-5 mb-4'>
                The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
              </p>
              <Link href='/' className='btn btn-dark'>
                Go to home page
              </Link>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
}
