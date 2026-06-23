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
                When CIHI decided to retire a long-standing product for sharing publicly available healthcare data, the team needed more than a redesign plan. They needed a research-grounded strategy for what came next, built from actual user needs rather than assumptions about them.
              </p>
              <p className='fs-5'>
                The product had been distributing healthcare data in files for data analysts and advisors across Canada. These users depend on it for day-to-day decision-making. CIHI had also committed to a strategic goal beyond those users: making the replacement product machine-readable, so data could flow to external systems through automated, system-to-system connections. The replacement would need to serve both human and automated consumption. The question was what it would actually take to serve either of them well.
              </p>

              <h2>The research</h2>
              <p>
                I led three connected generative studies to build that picture before the design direction was set.
              </p>
              <p>
                A Canada-wide survey (n=86) went first. Participants were data analysts and advisors who use the legacy product in their work. The survey mapped the user need landscape, specifically what they were doing with the data, how often, and where the experience was working or breaking down. It gave enough signal to know where to dig deeper.
              </p>
              <p>
                The interviews (n=20) dug deeper. Semi-structured conversations focused on workflows, challenges, and how people actually use this data in practice, not in theory. Those conversations gave texture to what the survey had outlined and surfaced the specifics that only come up when you give someone room to walk you through their work.
              </p>
              <p>
                The third study (n=8) brought early prototypes to users in a concept exploration phase. With clearer research findings in hand, we put potential directions in front of participants to understand whether the underlying redesign approaches would actually address what the earlier research had uncovered.
              </p>

              <h2>What we found</h2>
              <p>
                Users trust CIHI's data. They integrate it into critical tasks and decision-making processes that matter. That's a strong foundation for a product trying to expand its reach.
              </p>
              <p>
                What research surfaced was the gap between trust and usability. The workbooks provided data alongside rich, detailed context designed to support interpretation. That context has real value. It's part of what makes CIHI data worth using in the first place. But the packaging made the data cognitively demanding to work with, and the workbooks were large and not standardized across topics. Finding and extracting exactly what you needed, quickly, was close to impossible.
              </p>
              <p>
                That's not a problem you solve by removing the context. It's a design problem. How do you preserve the depth that makes CIHI data trustworthy while making it genuinely usable?
              </p>
              <p>
                The usability problems also don't land on everyone equally. Some teams across Canada are lean and working on tight budgets. They have less time and less support to push through when a product gets in their way. The workbook problems hit hardest here.
              </p>
              <p>
                Other teams sit in the opposite position. They are sophisticated, well-resourced, and modernizing their own workflows. They have flexibility when a product doesn't suit them, but their frustration grows when CIHI lags behind what they are already building on their end.
              </p>
              <p>
                The concept exploration helped validate that some of the proposed redesign directions were on the right track.
              </p>

              <h2>Where it goes</h2>
              <p>
                We are working closely with the implementation team, and research findings are now informing technical requirements for the replacement product.
              </p>
              <p>
                Integrating research into the product vision means deciding what actually gets built. That means holding the variation in user contexts as part of the decision, not after it. The real risk is narrowing the frame to modernization alone. The teams who haven't gotten there yet get left behind.
              </p>
              <p>
                Getting research into a product is its own phase of work. That phase is underway.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default DiscoveryCaseStudy;
