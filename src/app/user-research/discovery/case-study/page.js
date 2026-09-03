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
              <h1 className='display-4 fw-bold'>What users need from a product that doesn't exist</h1>
              <p className='text-muted'>Canadian Institute for Health Information, 2026</p>
              <p className='fs-5'>
                When CIHI decided to retire its legacy data-sharing product, the team needed a grounded strategy in what users actually need. The current product distributes data in files to analysts and researchers across the country. The data helps users plan and deliver care.
              </p>
              <p className='fs-5'>
                Moving forward, the replacement would have to serve both people and automated systems. The data had to be machine-readable so that other software (and AI) could read it. Our challenge was determining how to design for the sometimes contradictory needs of humans and machines.
              </p>

              <h2>How I set it up</h2>
              <p>
                I led three connected studies to explore this challenge. A Canada-wide survey (n=86) mapped what users were doing with the data and where the experience broke down. Semi-structured interviews (n=20) added context and surfaced real workflows. A concept exploration (n=8) put early directions in front of users to see whether the proposed solutions could address the challenges our research had uncovered.
              </p>
              <p>
                In the final phase, the point was not to test a product; instead, we simultaneously confirmed the problem was real and pressure-tested our envisioned directions.
              </p>

              <h2>What I found</h2>
              <p>
                Users trust CIHI's data and build it into their decisions. The actions of CIHI's audience have real consequences in health care. Trust is foundational.
              </p>
              <p>
                But our research surfaced a gap. While the legacy product carries rich context to make data trustworthy, it also makes the data cognitively demanding to work with. Then, a critical step for our team was to strike a balance between contextualized depth and easy use.
              </p>
              <p>
                Also, the findings shown usability problems don't affect everyone equally. Lean teams with tight budgets struggle hardest when a product gets in their way. While well-resourced teams have room to absorb friction. However, even these teams felt the friction of usability issues when their own workflows outgrew what the product supported without manual tweaks.
              </p>

              <h2>Where it's going</h2>
              <p>
                Currently, the Discovery findings are shaping the technical requirements and product direction. The real risk from here is treating modernization as the only goal.
              </p>
              <p>
                My top priority is to ensure the least-resourced teams get what they need from the product as it changes and avoid these groups from becoming an afterthought once the dust from futuristic technology settles.
              </p>

              <h2>What I carry forward</h2>
              <p>
                The value of this research is in its timing.
              </p>
              <p>
                Studies like these set direction and name risk while the team was still defining the vision. It enables specific, data-driven pushback on ways a future product can fail users. It is especially critical to support advocacy for the users who are at most risk of being left unheard.
              </p>
              <p>
                At this stage, findings like these are a lot harder to wave off and a lot easier to integrate.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default DiscoveryCaseStudy;
