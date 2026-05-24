'use client'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';

import { Accordion, AccordionItem } from '@/components/Accordion/Accordion';
import CustomBreadcrumb from '@/components/BreadCrumb/BreadCrumb';
import CustomCard from '@/components/CustomCard/CustomCard';

function PerformanceBenchmarking() {
  return (
    <div className="PerformanceBenchmarking">
      <section id="content">
        <Container fluid="md">
          <CustomBreadcrumb/>
            <Row fluid='true' className="mb-3">
              <Col className='prose-content'>
                <h1>Usability benchmarking</h1>
                <p className='fs-5'>
                  Many teams invest in redesign processes without knowing their true impact on goals and KPIs.
                  I help translate user behaviours into quantifiable metrics that connect design decisions to clear outcomes.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={8} className='prose-content'>
                <Accordion defaultActiveKeys={["0"]} allKeys={["0", "1", "2", "3"]}>
                  <AccordionItem index={0} header={"What I deliver"}>
                    <p>Benchmarking only works if the measures are worth repeating.</p>
                    <ul id="accordion-content">
                      <li>Longitudinal usability benchmarking frameworks tailored to your product ecosystem</li>
                      <li>Standardized KPI definitions, including task success rates, abandonment metrics, time-on-task analysis, and user flow efficiency</li>
                      <li>Competitive benchmarking studies comparing products against previous designs and competitors</li>
                      <li>Executive-ready performance briefs with insights and recommendations</li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem index={1} header={"What you gain"}>
                    <p>Design decisions that connect to outcomes you can actually track.</p>
                    <ul id="accordion-content">
                      <li>Measurements of product changes and competitiveness over time</li>
                      <li>ROI demonstrations for leadership, product teams, and stakeholders</li>
                      <li>User-centred priorities anchored to decisions and roadmaps</li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem index={2} header={"How I work"}>
                    <h3>Align on success</h3>
                    <p>The right metrics come from the team, not the methodology.</p>
                    <ul id="accordion-content">
                      <li>Identify success indicators tied to organizational goals</li>
                      <li>Recommend metrics that are measurable and worth measuring</li>
                      <li>Pull in metadata from other departments to support usability test results</li>
                    </ul>
                    <h3>Design for rigorous data collection</h3>
                    <p>Good benchmarking data doesn't happen by accident.</p>
                    <ul id="accordion-content">
                      <li>Craft task-based studies focused on user behaviours with recent design changes</li>
                      <li>Recruit participants who match key persona characteristics</li>
                      <li>Launch scalable and repeatable unmoderated usability tests</li>
                    </ul>
                    <h3>Trend analyses and insights</h3>
                    <p>One data point isn't a benchmark.</p>
                    <ul id="accordion-content">
                      <li>Conduct descriptive and inferential statistics to identify key differences between products</li>
                      <li>Leverage website metadata to supplement and contextualize results</li>
                      <li>Analyze session recordings for added context on usability challenges</li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem index={3} header={"Example outputs"}>
                    <p>What this looks like when it lands with stakeholders.</p>
                    <ul id="accordion-content">
                      <li>Executive scorecards showing key usability metrics related to business metrics</li>
                      <li>Quarterly trend reports across releases with year-over-year comparisons</li>
                      <li>Granular performance monitoring for different user segments and study periods</li>
                    </ul>
                  </AccordionItem>
                </Accordion>
              </Col>
              <Col md={4} className='align-self-start'>
                <CustomCard
                  cardImage='/img/statistics.webp'
                  cardTitle='Quantifying the impact of redesign'
                  cardText='When CIHI rebuilt its public health data tool from the ground up, they needed evidence the investment paid off. Parallel usability tests following the same protocol could help detect major shifts between the legacy product and the redesign. The findings showed a 20% overall improvement in task success, including a 395% jump for a task the original design had quietly buried.'
                  cardLink='/user-research/benchmarking/case-study'
                  cardLinkText='Read the case study'
                />
              </Col>
            </Row>
        </Container>
      </section>
    </div>
  );
}

export default PerformanceBenchmarking;