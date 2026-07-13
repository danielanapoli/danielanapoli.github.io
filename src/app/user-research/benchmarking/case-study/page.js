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
                In 2021, I ran foundational discovery research to understand key usability obstacles impacting users' experiences of the legacy product. 15 user interviews and 10 stakeholder interviews shaped the initial target model — the design vision for the redesign. A key insight was that future tools needed to better support the contextual information describing the data displayed in the tool: "How is it calculated? How are variables defined?"
              </p>
              <p>
                Years of work went into the redesign. Now, I needed to measure whether the implementation matched that vision. I ran two parallel unmoderated usability tests in Loop11: one for the legacy product, one for the redesign. Each had an identical protocol. 8 tasks built around the validated user needs from Discovery. I measured and compared task success, abandonment, time on task, and ease ratings.
              </p>
              <p>
                The catch: CIHI had already retired the legacy product, so UAT was the only option. The study required us to recruit internal staff with data analyst expertise as proxy users. Despite not having a 1-to-1 comparison in end-users' mental models, the findings could point to universal issues that would be issues for anyone, such as hidden information and restrictive task flows.
              </p>

              <h2>What I found</h2>
              <p>
                The redesign showed that overall task success increased by 20%. On methodology-finding tasks, it lifted 395%.
              </p>
              <p>
                Originally, the methodology had lived in a secondary drawer in the legacy product. Users missed it constantly. The redesign gave it dedicated, visible space — this was an integral structural change leading to massive success.
              </p>

              <h2>What changed</h2>
              <p>
                I presented findings several times to various partners in the redesign team, product owners, and leadership.
              </p>
              <p>
                The overall improvements were appreciated. They validated the hard work of dedicated initiatives.
              </p>
              <p>
                Yet, the study also found some tasks scored lower. The problems were tied to known issues that needed to be deprioritized in the backlog. So, poor scores were anticipated, but the study quantified their impact on real users and ultimately moved them higher on the roadmap.
              </p>

              <h2>What I carry forward</h2>
              <p>
                If the old system is gone, sometimes modernization work means you can't test against production. You work with what you have: UAT environments and proxy users. The constraint becomes a research design point in a tight protocol given what's actually available. You name the boundaries and frame findings so the team can be confident to act on them immediately.
              </p>
              <p>
                This work shapes how I think about research and strategy. Planning for benchmarking doesn't always happen upfront. This constrains the team's ability to define success metrics early, so future research and strategy can align from the start. That's the difference between research that informs products and research that influences products.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default BenchmarkingCaseStudy;
