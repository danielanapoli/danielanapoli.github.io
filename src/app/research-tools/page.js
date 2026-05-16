export const metadata = {
  title: 'Research Tools',
  description: 'Free UX research tools for practitioners. A statistical formula wizard to help researchers select the right tests and generate Excel-ready formulas.',
};

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomCard from '@/components/CustomCard/CustomCard';

function ResearchTools() {
  return (
    <div className='Tools'>
      <section id='content'>
          <Container fluid='md'>
            <Row>
              <Col>
              <h1>Research Tools</h1>
              </Col>
            </Row>
        <Row className='g-3'>
          <Col xs={12} md={4}>
            <CustomCard
              cardTitle='Stats Formula Wizard'
              cardText='A handy tool to remember which statistical tests are best suited for your research data. Based on the statistical tests, the tool provides a formula to plug-in to your Excel sheet.'
              cardLink='/research-tools/formula-builder'
              cardLinkText='Read more'
            />
          </Col>
        </Row>
          </Container>
      </section>
    </div>
  );
}

export default ResearchTools;
