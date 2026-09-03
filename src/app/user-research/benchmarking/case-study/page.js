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
                CIHI redesigned their public data tool that health system advisors, journalists, and patient advocates used to find pre-analyzed healthcare data across 13 Canadian provinces and territories. They migrated it to their main site, rebuilt the interface, and rearchitected the content structure.
              </p>
              <p className='fs-5'>
                The question was simple: did it actually work?
              </p>
              <p className='fs-5'>
                This is critical for CIHI's leadership; the measurement is meant to justify the modernization investment across the organization's highest-priority program.
              </p>

              <h2>How I set it up</h2>
              <p>
                In 2022, I conducted foundational discovery research to understand key usability obstacles affecting users' experiences with the legacy product. 15 user interviews and 10 stakeholder interviews shaped the initial target model and the design vision for the redesign. A key insight was that future tools needed to better support the contextual information describing the data displayed in the tool: "How is it calculated? How are variables defined?"
              </p>
              <p>
                Years of work went into the redesign. Now, CIHI needed to assess whether the implementation improved users' experiences. I ran two parallel unmoderated usability tests in Loop11: one for the legacy product, one for the redesign. Each had an identical protocol. 8 tasks built around the validated user needs from Discovery. I measured and compared task success, abandonment, time on task, and ease ratings.
              </p>
              <p>
                The catch: CIHI had already retired the legacy product, so UAT was the only option. The study required us to recruit internal staff with data analyst expertise as proxy users. Staff don't have a 1-to-1 comparison in end-users' mental models; yet, findings would still point to universal issues that would be issues for anyone, such as hidden information and restrictive task flows.
              </p>

              <h2>What I found</h2>
              <p>
                The redesign showed that overall task success increased by 20%. On methodology-finding tasks, it lifted 395%.
              </p>
              <p>
                Originally, the methodology had lived in a hidden drawer in the legacy product. Users missed it constantly. The redesign gave it dedicated, visible space, and that structural change led to massive success.
              </p>

              <h2>What changed</h2>
              <p>
                I presented findings several times to various partners across the organization, including the redesign team, product owners, and leadership.
              </p>
              <p>
                The overall improvements were appreciated because they validated the hard work of dedicated initiatives.
              </p>
              <p>
                Yet, the study also found gaps in the current design's usability; some tasks scored lower in the redesign. The underlying problems were tied to known issues that had to be deprioritized in the backlog. While some poor scores were anticipated, the study quantified their impact on real users; ultimately, the study moved fixes higher on the roadmap.
              </p>

              <h2>What I carry forward</h2>
              <p>
                I learned two lessons from this work.
              </p>
              <p>
                First, when evaluating modernization work, an old system may be gone; you can't always test against production. But this doesn't have to be a blocker. With UAT environments and proxy users, these constraints become a study design point in a careful protocol based on what's actually feasible. When taking this approach, it's critical to name boundaries and frame findings so that teams can still be confident in acting on insights immediately.
              </p>
              <p>
                Second, planning for benchmarking takes foresight. When long-term thinking doesn't happen upfront, it can constrain the team's ability to define success metrics early. Without this foundation, future research and strategy can't align effectively. By advocating for forward-thinking approaches, research can influence product success, not just inform it.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default BenchmarkingCaseStudy;
