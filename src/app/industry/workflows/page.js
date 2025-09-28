import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import AlertHeading from 'react-bootstrap/AlertHeading';
import Badge from 'react-bootstrap/Badge';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import BreadcrumbItem from 'react-bootstrap/BreadcrumbItem';

import { Accordion, AccordionItem } from '@/components/Accordion/Accordion';

function IndustryWorkflows() {
  return (
    <div className="IndustryWorkflows">
      <section id="content">
          <Container fluid="md">
          <Breadcrumb>
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem href="/industry">Industry Portfolio</BreadcrumbItem>
            <BreadcrumbItem active>Improving Interdisciplinary Workflows</BreadcrumbItem>
          </Breadcrumb>
            <Row>
              <Col>
              <h1>Improving Interdisciplinary Workflows</h1>
              </Col>
            </Row>
            <br/>
            <Row>            
                <Col>
                  <h2>Product teams need...</h2>
                  <p id="hero-text">
                    streamlined processes to efficiently complete their work and nuture innovation
                    <br/><br/>
                    <Badge bg="secondary">IBM Design Studio</Badge>
                  </p>
                  
                </Col>
                <Col>
                  <Alert variant='warning'>
                    <AlertHeading><h2>Research Impact</h2></AlertHeading>
                    <ul id="accordion-content">
                      <li>Reduced silos between the design, development, and product management disciplines</li>
                      <li>Uncovered opportunities for workflow improvements</li>
                      <li>Improved empathy and morale among internal stakeholders</li>                      
                    </ul>
                  </Alert> 
              </Col>
              </Row>
              <Row>
                <Col>
                  <Accordion defaultActiveKeys={["0", "1", "2"]} allKeys={["0", "1", "2"]}>
                    <AccordionItem index={0} header={"Problem"}>
                      <p id="accordion-content">
                        Product teams struggle to conisistently maintain their <strong>efficiency</strong>.
                      </p>
                      <p id="accordion-content">
                        Sustaining impactful workflows is no easy feat! Especially while involving interdisciplinary teams with various expertise and priorities.
                      </p>
                    </AccordionItem>
                    <AccordionItem index={1} header={"Process"}>
                      <p id="accordion-content">
                        <h4>Explore Cross-Departmental Workflows</h4>
                        <ul>
                          <li>Facilitated 15 total 1-on-1 <i>As-Is Scenario Mapping</i> workshops with employees, including 5 from the design, development, and product management teams</li>
                          <ul>
                            <li>Discussed each step of an individual's involvement in the product development process</li>
                            <li>Explored their processes, collaborations, and experiences leveraging specialized tools to achieve their goals</li>
                            <li>Identified workflow-related and tool-related challenges</li>
                          </ul>
                          <li>Thematically analyzed maps and distilled a "Master As-Is Scenario Map" (master maps) for each of the 3 teams, highlighting nuances of the related specialties</li>
                          <li>Consolidated 3 master maps to articulate and assess overall cross-departmental workflows</li>
                          </ul>
                        <h4>Identify Improvement Opportunities</h4>
                        <ul>
                          <li>Reviewed and modified master maps with each participant to validate key findings</li>
                          <li>Facilitated dot-voting sessions with participants to collaboratively prioritize:</li>
                          <ul>
                            <li>Most critical collaboration processes to focus on</li>
                            <li>Major pain points</li>
                            <li>Key opportunities for improvement</li>
                          </ul>                      
                        </ul>
                        <h4>Rally Stakeholder Buy-in</h4>
                        <ul>
                          <li>Led a 2-hour seminar involving 20 participants from the design, development, and product management teams</li>
                          <ul>
                            <li>Presented and discussed validated master maps and dot-voting results</li>
                            <li>Facilitated a design thinking workshop focused on collaboratively writing <i>Hills</i> or mission statements focused on prioritized workflow improvements</li>
                          </ul>
                          <li>Packaged research findings and recommendations for organizational leaders</li>                      
                        </ul>    
                      </p>      
                    </AccordionItem>
                    <AccordionItem index={2} header={"Tools"}>
                      <ul id="accordion-content">
                        <li>Mural</li>
                        <li>Snacks, stickies, pens, and paper</li>
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

export default IndustryWorkflows;