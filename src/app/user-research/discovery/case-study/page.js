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
                When CIHI decided to retire its legacy data-sharing product, the team needed a grounded strategy for what came next. The goal was clear: understand what users actually need, not guess what to build.
              </p>
              <p className='fs-5'>
                The legacy product distributes healthcare data files to analysts and researchers across Canada who build them into decisions about how to plan and deliver care. The replacement would have to serve both people and automated systems, through machine-readable connections that other software can pull from directly. The question was how to do both well without losing the people who depend on the current product. That decision sets the terms for how users across the country get their data for years, so building on assumptions was a real risk.
              </p>

              <h2>How I set it up</h2>
              <p>
                I led three connected studies to answer that question. A Canada-wide survey (n=86) mapped what users were doing with the data and where the experience broke down. Semi-structured interviews (n=20) added texture and surfaced the specifics of real workflows. A concept exploration (n=8) put early redesign directions in front of users to check whether the proposed solutions addressed what the research had uncovered.
              </p>
              <p>
                The catch was that the replacement didn't exist yet. The point was not to test a product, only potential directions. So the concept exploration had to do double duty, confirm the problem was real and pressure-test the response at the same time.
              </p>

              <h2>What I found</h2>
              <p>
                Users trust CIHI's data and build it into decisions that carry real consequences in health care. That trust is foundational. But the research surfaced a gap. The product carried rich context that made the data trustworthy, and that same packaging made the data cognitively demanding to work with. The design challenge wasn't stripping the context out. It was keeping the depth and making it usable.
              </p>
              <p>
                The usability problems don't affect everyone equally. Lean teams with tight budgets struggle hardest when a product gets in their way, for example, the analysts in northern territories working without much slack. Well-resourced teams have room to absorb friction, but even they feel it when their own workflows outgrow what the product supports without manual tweaks.
              </p>
              <p>
                Though the concept exploration was small, it was enough to confirm that our design direction pointed to a real potential to serve a variety of unmet needs.
              </p>

              <h2>Where it's going</h2>
              <p>
                Currently, the findings are shaping the technical requirements for what the team builds. The real risk from here is treating modernization as the only goal. The priority I hold is that the least-resourced teams keep getting what they need from the product as it modernizes, not as an afterthought once the machine-readable pieces land.
              </p>

              <h2>What I carry forward</h2>
              <p>
                The value of this research is in its timing. It set direction and named risk while the team was still defining the vision, before either one hardened into what the team built. The pushback that moved the room wasn't a principle about equity. It was specific users and the specific ways the current product fails them, which is a lot harder to wave off.
              </p>
              <p>
                As a product modernizes, the teams with the least time and money are the easiest to leave out. They were the voice most at risk of going missing, and keeping them in the requirements is what the research was for.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default DiscoveryCaseStudy;
