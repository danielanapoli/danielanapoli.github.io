'use client'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';

import { Accordion, AccordionItem } from '@/components/Accordion/Accordion';
import { BackButton } from '@/components/BackButton/BackButton';
import CustomBreadcrumb from '@/components/BreadCrumb/BreadCrumb';

function PerformanceBenchmarking() {
  return (
    <div className="PerformanceBenchmarking">
      <section id="content">
        <Container fluid="md">
          <CustomBreadcrumb/>
          <BackButton/>
            <Row fluid='true'>
              <h1>Performance benchmarking</h1>
                <p className='fs-5'>
                  Many teams invest in redesign processes without knowing their true impact on goals and KPIs. 
                  I help translate user behaviours into quantifiable metrics that connect design decisions to clear outcomes.
                </p>
            </Row>
            <br/>
            <Row className='justify-content-center'>
              <Col fluid='true' sm='8'>
                <Table responsive bordered>
                  <thead>
                    <tr>
                      <th></th>
                      <th className='align-middle text-center'>Success rate</th>
                      <th className='align-middle text-center'>Clicks</th>
                      <th className='align-middle text-center'>Duration<br/>(sec)</th>
                      <th className='align-middle text-center'>Difficulty rating<br/> (out of 5)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Legacy design</td>
                      <td className='text-end'>59%</td>
                      <td className='text-end'>14</td>
                      <td className='text-end'>45</td>
                      <td className='text-end'>4</td>
                    </tr>
                    <tr>
                      <td>Q1 Update</td>
                      <td className='text-end'>78%<br/><p className='text-success fw-bold'>[+19]</p></td>
                      <td className='text-end'>8<br/><p className='text-success fw-bold'>[-6]</p></td>
                      <td className='text-end'>23<br/><p className='text-success fw-bold'>[-22]</p></td>
                      <td className='text-end'>2<br/><p className='text-success fw-bold'>[-2]</p></td>
                    </tr>
                    <tr>
                      <td>Q4 Update</td>
                      <td className='text-end'>81%<br/><p className='text-success fw-bold'>[+3]</p></td>
                      <td className='text-end'>10<br/><p className='text-danger fw-bold'>[+2]</p></td>
                      <td className='text-end'>25<br/><p className='text-danger fw-bold'>[+2]</p></td>
                      <td className='text-end'>1<br/><p className='text-success fw-bold'>[-1]</p></td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <Accordion defaultActiveKeys={["0", "1", "2", "3"]} allKeys={["0", "1", "2", "3"]}>
                      <AccordionItem index={0} header={"What I deliver"}>
                        <ul id="accordion-content">
                          <li>Longitudinal usability benchmarking frameworks tailored to product ecosystems</li>
                          <li>Standardized KPI definitions, including task success rates, abandonment metrics, time-on-task analysis, and user flow efficiency</li>
                          <li>Competitive benchmarking studies comparing products against previous designs and
                             competitors</li>
                          <li>Executive-ready performance briefs with actionable insights and strategic recommendations</li>
                        </ul>
                      </AccordionItem>
                       <AccordionItem index={1} header={"What you gain"}>
                        <ul id="accordion-content">
                          <li>Measurements of product changes and competitiveness over time</li>
                          <li>ROI demonstrations for leadership, product teams, and stakeholders</li>
                          <li>Anchored user-centred priorities for decisions and roadmaps</li>                    
                        </ul>
                      </AccordionItem>
                      <AccordionItem index={2} header={"How I work"}>
                        <h5>Align on success</h5> 
                          <ul id="accordion-content">
                            <li>Consult with the product teams to identify success indicators and organizational goals</li>
                            <li>Recommend measurable and impactful metrics</li>
                            <li>Collaborate with other departments to access additional metadata to support usability test results</li>
                          </ul>
                        <h5>Design for rigorous data collection</h5>
                          <ul id="accordion-content">
                              <li>Craft task-based studies to zero in on user behaviours with recent design changes</li>
                              <li>Recruit best-fit participants who match key persona characteristics</li>
                              <li>Launch scalable and repeatable unmoderated usability tests</li>
                          </ul>
                        <h5>Trend analyses and insights</h5>
                          <ul id="accordion-content">                              
                              <li>Conduct descriptive and inferential statistics to identify key differences between products</li>
                              <li>Leverage website metadata to supplement and contextualize results and limitations</li>
                              <li>Analyze session recordings for added context on usability challenges</li>                            
                          </ul>
                      </AccordionItem>
                      <AccordionItem index={3} header={"Example outputs"}>
                        <ul id="accordion-content">
                          <li>Executive scorecards showing key usability metrics related to business metrics</li>
                          <li>Quarterly trend reports across releases with year-over-year comparisons</li>
                          <li>Granular performance monitoring for different user segments and study periods</li>
                        </ul>
                      </AccordionItem>
                    </Accordion>
                  </Col>
              </Row>
        </Container>
      </section>
    </div>
  );
}

export default PerformanceBenchmarking;