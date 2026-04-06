'use client'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import BreadcrumbItem from 'react-bootstrap/BreadcrumbItem';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import AlertHeading from 'react-bootstrap/AlertHeading';

import { Accordion, AccordionItem } from '@/components/Accordion/Accordion';
import { BackButton } from '@/components/BackButton/BackButton';

function IndustryRequirements() {
  return (
    <div className="IndustryRequirements">
      <section id="content">
          <Container fluid="md">
          <Breadcrumb>
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem href="/user-research">User Research</BreadcrumbItem>
            <BreadcrumbItem active>Requirements Discovery</BreadcrumbItem>
          </Breadcrumb>
          <BackButton/>
            <Row>
              <Col>
              <h1>Requirements Discovery</h1>
              </Col>
            </Row>
            <br/>
              <Row>
                  <Col>
                  </Col>
                  <Col>
                    <Alert variant='warning'>
                      <AlertHeading><h2>Impact</h2></AlertHeading>
                      <ul id="accordion-content">
                        <li>Surface new opportuity areas</li>
                        <li>Align product strategy with real user needs</li>
                        <li>Reduce risk of building low-value features</li>
                      </ul>
                    </Alert> 
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Accordion defaultActiveKeys={["0", "1", "2"]} allKeys={["0", "1", "2"]}>
                    <AccordionItem index={0} header={"What I deliver"}>
                      <ul id="accordion-content">
                        <li>In-depth interviews and contextual inquiries</li>
                        <li>Thematic analyses and insight synthesis</li>
                        <li>Opportunity mapping and problem framing</li>
                        <li>Early-stage product direction recommendations</li>
                      </ul>                  
                      </AccordionItem>
                    <AccordionItem index={1} header={"How I work"}>
                        <h5>Internal Stakeholder Interviews</h5>
                        <ul id="accordion-content">
                          <li>Conducted 20 hours of semi-structured interviews with various departmental leaders</li>
                          <ul>
                            <li>Explored the internal workflows of managing current offerings</li>
                            <li>Discussed pain points and how future solutions can improve those challenges</li>
                            <li>Considered high-level internal service changes required for accommodating various shifts in offerings</li>
                          </ul>
                          <li>Thematically analyzed interview findings to identify common themes and key insights</li>
                          <li>Validated and extended upon key takeaways with findings from previous related initiatives</li>  
                        </ul>
                        <h5>User Interviews</h5>
                        <ul id="accordion-content">
                          <li>Conducted 14 1-hour semi-structured interviews with users across Canada</li>
                          <ul>
                            <li>Explored users' organizational goals, team dynamics, and everyday workflows</li>
                            <li>Explored how current offerings are leveraged in everyday work</li>
                            <li>Discussed pain points and how future solutions can improve those challenges</li>
                          </ul>
                          <li>Thematically analyzed interview findings to identify common themes and key insights</li>
                          <li>Validated and extended upon key takeaways with findings from previous related initiatives</li>
                        </ul>
                        <h5>Design Ideation</h5>
                        <ul id="accordion-content">
                          <li>Collaborated with the project's lead designer to formulate initial design wireframes</li>
                          <li>Provided data-driven design recommendations during initial design reviews</li>
                          <li>Guided and participated in a cross-department all-day design studio workshop to finalize future-vision design wireframes</li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem index={2} header={"Example deliverables"}>
                      <ul id="accordion-content">
                        <li>Current state user journey maps to show key findings and recommendations</li>
                          <li>Future state user journey maps to capture future-vision design wireframes</li>
                          <li>Executive reports recommending how to support users while meeting business needs</li>
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

export default IndustryRequirements;