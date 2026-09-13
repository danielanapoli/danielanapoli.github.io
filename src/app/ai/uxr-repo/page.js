export const metadata = {
  title: 'UXR Repository Prototype',
  description: 'An interactive prototype of a UX research repository: findings as first-class records, provenance that travels with every citation, and gaps treated as evidence.',
  alternates: { canonical: '/ai/uxr-repo' },
  openGraph: {
    title: 'UXR Repository Prototype | Daniela Napoli, PhD',
    description: 'An interactive prototype of a UX research repository: findings as first-class records, provenance that travels with every citation, and gaps treated as evidence.',
  },
};

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PROTOTYPE_URL = '/prototypes/uxr-repo/index.html';

function UXRRepoPrototype() {
  return (
    <div className='UXRRepoPrototype'>
      <section id='content'>
        <Container fluid='md'>

          {/* Prototype frame */}
          <Row className='mb-3'>
            <Col>
              <div className='d-flex flex-wrap justify-content-between align-items-center gap-2 mb-2'>
                <h2 className='h5 mb-0'>Try the prototype</h2>
                <a
                  className='btn btn-outline-primary btn-sm'
                  href={PROTOTYPE_URL}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Open full screen &#8599;
                </a>
              </div>

              <div className='ratio ratio-16x9 border rounded-3 overflow-hidden shadow-sm'>
                <iframe
                  src={PROTOTYPE_URL}
                  title='UXR Repository interactive prototype'
                  loading='lazy'
                  style={{ border: 0 }}
                />
              </div>

              <p className='text-muted small mt-2 mb-0'>
                Interactive prototype with realistic but fictional data. Best viewed full screen on a
                wider display.{' '}
                <a href={PROTOTYPE_URL} target='_blank' rel='noopener noreferrer'>
                  Open it in its own tab
                </a>
                .
              </p>
            </Col>
          </Row>

        </Container>
      </section>
    </div>
  );
}

export default UXRRepoPrototype;
