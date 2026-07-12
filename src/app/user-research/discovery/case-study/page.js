'use client'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CustomBreadcrumb from '@/components/BreadCrumb/BreadCrumb';

function DiscoveryCaseStudy() {
  return (
    <div className="DiscoveryCaseStudy">
      <section id="content">
        <Container fluid="md">
          <CustomBreadcrumb />
          <Row fluid='true' className="mb-3">
            <Col className='fs-5'>
              <h1 className='display-4 fw-bold'>What users need from a product that doesn't exist yet</h1>
              <p className='text-muted'>Canadian Institute for Health Information, 2026</p>
              <p className='fs-5'>
                When CIHI decided to retire its legacy data-sharing product, the team needed a research-grounded strategy for what came next — one built from actual user needs, not assumptions.
              </p>
              <p className='fs-5'>
                The legacy product distributed healthcare data files to analysts and advisors across Canada who depend on it for day-to-day decisions. The replacement would need to serve both humans and automated systems through machine-readable connections. The question was how to do both well.
              </p>

              <h2>The research</h2>
              <p>
                The research I led included three connected studies to answer that question. A Canada-wide survey (n=86) mapped what users were doing with the data and where the experience broke down. Semi-structured interviews (n=20) added texture and surfaced specifics of real workflows. A concept exploration (n=8) put early redesign directions in front of users to validate whether proposed solutions would address what research had uncovered.
              </p>

              <h2>What we found</h2>
              <p>
                Users trust CIHI's data and integrate it into critical decisions. That's foundational. But research surfaced a gap: the workbooks provided rich context that made the data trustworthy, but the packaging made it cognitively demanding to work with. The design challenge wasn't removing the context — it was preserving depth while making it usable.
              </p>
              <p>
                That problem doesn't affect everyone equally. Lean teams with tight budgets struggle hardest when a product gets in their way. Well-resourced teams have flexibility, but friction grows when the product doesn't keep pace with their modernizing workflows.
              </p>
              <p>
                The concept exploration validated that the proposed directions were addressing these real variations in user needs.
              </p>

              <h2>Where it goes</h2>
              <p>
                Research findings are now informing technical requirements.
              </p>
              <p>
                The real risk is narrowing the frame to modernization alone. The priority is keeping less-resourced teams well served as the product modernizes. Integrating research into product decisions means holding that variation in user contexts throughout, not discovering it afterward.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default DiscoveryCaseStudy;
