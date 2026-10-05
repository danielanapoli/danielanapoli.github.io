'use client'

import Container from 'react-bootstrap/Container';
import BackButton from '@/components/BackButton/BackButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ExpandableImage from '@/components/ExpandableImage/ExpandableImage';

import CustomBreadcrumb from '@/components/BreadCrumb/BreadCrumb';

function DiscoveryCaseStudy() {
  return (
    <div className="DiscoveryCaseStudy">
      <section id="content">
        <Container fluid="md">
          <CustomBreadcrumb />
          <BackButton />
          <Row fluid='true' className="mb-3">
            <Col className='fs-5'>
              <h1 className='display-4 fw-bold'>What users need from a product that doesn't exist</h1>
              <p className='text-muted'>Canadian Institute for Health Information, 2026</p>
              <p className='fs-5'>
                When CIHI decided to retire its legacy data-sharing product, the team needed a strategy grounded in user needs. The current product distributes data in files to analysts and researchers across the country. The data helps users plan and deliver care.
              </p>
              <p className='fs-5'>
                The replacement would have to serve both people and automated systems. The data had to be machine-readable so that other software (and AI) could read it. We had to design for the sometimes contradictory needs of humans and machines.
              </p>
              </Col>
            </Row>
            <Row fluid='true' className="mb-3">
              <Col className='fs-5'>
                <ExpandableImage src="/img/discovery-process.png" alt="Diagram showing how the discovery research narrowed from breadth to one strategy. A Canada-wide survey of 86 people mapped how analysts and researchers use the product and their major pain points. 20 interviews explored context and mapped workflows for the key tasks. 8 concept testing sessions confirmed the problem and pressure-tested early design concepts. The outcome was one strategy, a balance point rather than a trade-off: serve both people and machines, show rich context progressively to reduce cognitive load, and focus on the least-resourced teams first." />
              </Col>
            </Row>
            <Row fluid='true' className="mb-3"> 
              <Col className='fs-5'>
              <h2>How I set it up</h2>
              <p>
                I led three connected studies to explore this challenge. A Canada-wide survey (n=86) mapped what users were doing with the data and where the experience broke down. Semi-structured interviews (n=20) added context and surfaced workflows. A concept exploration (n=8) put early directions in front of users to see whether the proposed solutions addressed the challenges our research had uncovered.
              </p>
              <p>
                In the final phase, we confirmed the problem and pressure-tested our early directions.
              </p>

              <h2>What I found</h2>
              <p>
                Users trust CIHI's data to support them in tracking and comparing their performance with others in the system. This information informs policies and budgeting decisions that affect health care for all Canadians.
              </p>
              <p>
                Our research surfaced a gap. The legacy product carries rich context that makes the data trustworthy, and that same context makes the data cognitively demanding to work with. We had to balance the two.
              </p>
              <p>
                Usability problems also don't affect everyone equally. Lean teams with tight budgets struggle hardest when a product gets in their way. Well-resourced teams have room to absorb friction, though even they felt it when their own workflows outgrew what the product supported without manual tweaks.
              </p>

              <h2>Where it's going</h2>
              <p>
                Currently, the Discovery findings are shaping the technical requirements and product direction. The risk is treating modernization as the only goal.
              </p>
              <p>
                My top priority is to make sure lean teams get what they need as the product changes, and to keep them from becoming an afterthought once the technology takes priority. This work involves advocating for users on tightly resourced teams in discussions on product directions and implementation decisions.
              </p>

              <h2>What I carry forward</h2>
              <p>
                Research at this stage sets direction and names risk while the team is still defining the vision, when findings are easiest to act on. That lets us push back with data on specific ways a future product could fail users, and argue for the users most likely to go unheard.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default DiscoveryCaseStudy;
