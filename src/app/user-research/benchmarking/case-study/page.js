'use client'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CustomBreadcrumb from '@/components/BreadCrumb/BreadCrumb';

function BenchmarkingCaseStudy() {
  return (
    <div className="BenchmarkingCaseStudy">
      <section id="content">
        <Container fluid="md">
          <CustomBreadcrumb />
          <Row fluid='true' className="mb-3">
            <Col className='fs-5'>
              <h1 className='display-4 fw-bold'>Measuring what a redesign actually changed</h1>
              <p className='text-muted'>Canadian Institute for Health Information, 2026</p>
              <p className='fs-5'>
                CIHI runs a publicly available tool that gives health system advisors, journalists, and patient advocates access to pre-analyzed healthcare data across all 13 Canadian provinces and territories.
              </p>
              <p className='fs-5'>
                When CIHI migrated it to their main site and rebuilt the experience from the ground up, the investment needed justification: Did it actually get better for users?
              </p>

              <h2>The study</h2>
              <p>
                I ran two parallel unmoderated usability tests in Loop11. One in the legacy product and one in the redesign. Both had identical protocols and eight tasks built around validated user needs. I then compared task success rates, abandonment, time on task, pages viewed, and ease ratings across both conditions.
              </p>
              <p>
                Two constraints shaped the design. CIHI had already retired the legacy product by the time this study ran, so testing took place in a UAT environment. I recruited internal CIHI staff who with data analyst expertise as to serve as proxies for our target audience.
              </p>

              <h2>What we found</h2>
              <p>
                The redesign showed a 20% overall improvement in task success. For methodology-finding tasks, the improvement was 395%.
              </p>
              <p>
                That number has a story. In the legacy product, the methodology lived in a secondary drawer, so users had trouble locating it. The redesign gave the methodology dedicated, visible space. Users who consistently failed that task before have now succeeded.
              </p>
              <p>
                Some tasks scored lower in the redesign because content hadn't migrated yet. These gaps were anticipated, but the study added quantified evidence of their impact on real users, moving them higher on the roadmap.
              </p>

              <h2>What it moved</h2>
              <p>
                Results went to the redesign team, product owners, and organizational directors accountable for the program. Collaborators got confirmation that the investment paid off. The gaps in the data surfaced are actively being addressed.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default BenchmarkingCaseStudy;
