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
                The Canadian Institute for Health Information (CIHI) runs a publicly available tool that gives health system advisors, journalists, and patient advocates access to pre-analyzed healthcare data across all 13 Canadian provinces and territories. The data covers trending and comparison information across healthcare system topics, and the tool serves a wide range of people with different reasons for using it. For years, it lived as its own microsite. Then CIHI brought it into cihi.ca and rebuilt the experience from the ground up, reimagining how users work with the data to make key insights faster and easier to reach.
              </p>
              <p className='fs-5'>
                Redesign investments at this scale need to be justified. Did it actually get better for users?
              </p>

              <h2>The study</h2>
              <p>
                This study was one of several I conducted within a longitudinal findability benchmarking program at CIHI, designed to consistently measure the real impact of product investment decisions. For the 2026 study, I ran a parallel unmoderated usability test in Loop11, one in the legacy product and one in the redesign, using the same protocol across both. Eight tasks, each built around a validated user need. After each task, participants answered questions about their experience. At analysis, I compared task success rates, abandonment rates, time on task, pages viewed, and task ease ratings across both products.
              </p>
              <p>
                Two constraints shaped the design. CIHI had already retired the legacy product by the time this study ran, so testing took place in a UAT environment. And because external recruitment wasn't in scope at that stage, I recruited qualified internal CIHI staff as proxies, specifically data analysts who use this type of data regularly and met defined eligibility criteria to represent the target audience.
              </p>

              <h2>What we found</h2>
              <p>
                The redesign showed a 20% overall improvement in task success. For methodology-finding tasks (finding the details that explain how CIHI calculates its metrics), the improvement was 395%.
              </p>
              <p>
                That number has a story behind it. In the legacy product, methodology lived in a secondary drawer, so users had trouble locating it. The earlier design gave methodology a lower-priority placement. Research had already surfaced that need, and the redesign responded by giving methodology details dedicated, clearly visible space. Users who consistently failed that task in the legacy product succeeded in the redesign.
              </p>
              <p>
                Not everything improved. A few tasks scored lower on the redesign, in cases where content from the legacy product hadn't been migrated over yet. These declines were an expected part of a phased transition. The teams knew about those gaps. The study added quantified evidence of their impact on real users, and those gaps moved up the roadmap.
              </p>

              <h2>What it moved</h2>
              <p>
                Results went to the redesign team, product owners, and organizational directors with accountability for the program's outcomes. Collaborators got confirmation that the investment had paid off where it mattered most. The declines gave teams a clear signal about where to go next.
              </p>
              <p>
                The gaps the data surfaced are actively being addressed. The program continues.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default BenchmarkingCaseStudy;
