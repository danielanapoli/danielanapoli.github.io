'use client'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import AlertHeading from 'react-bootstrap/AlertHeading';

import { Accordion, AccordionItem } from '@/components/Accordion/Accordion';
import { BackButton } from '@/components/BackButton/BackButton';
import CustomBreadcrumb from '@/components/BreadCrumb/BreadCrumb';

function IndustryRequirements() {
  return (
    <div className="IndustryRequirements">
      <section id="content">
          <Container fluid="md">
          <CustomBreadcrumb/>
          <BackButton/>
            <Row>
              <h1>Requirements Discovery</h1>
                  <Col>
                    <Accordion defaultActiveKeys={["0", "1", "2"]} allKeys={["0", "1", "2"]}>
                    <AccordionItem index={0} header={"What I deliver"}>
                      <p>Discovery research that informs product strategy and grounds teams in what users actually need. That includes translating insights into design decisions and practical requirements that technical teams can act on.</p>
                      <ul id="accordion-content">
                        <li>In-depth interviews and contextual inquiries</li>
                        <li>Thematic analyses and insight synthesis</li>
                        <li>Opportunity mapping and problem framing</li>
                        <li>Early-stage product direction recommendations</li>
                      </ul>
                    </AccordionItem>
                    <AccordionItem index={1} header={"How I work"}>
                      <h5>Start with what already exists</h5>
                      <p>Before strategizing any research, I dig into what the organization already knows. That means reviewing digital analytics, existing documentation, and prior research to understand the landscape before adding to it.</p>
                      <ul id="accordion-content">
                        <li>Audit existing data sources and prior research initiatives</li>
                        <li>Identify knowledge gaps that primary research needs to fill</li>
                        <li>Review findings with internal stakeholders to pressure-test assumptions before moving forward</li>
                      </ul>
                      <h5>Consult internal stakeholders</h5>
                      <p>The people closest to the product have already formed a picture of the user. I want to understand that picture, where it came from, and what organizational goals and constraints are shaping it, before I strategize anything.</p>
                      <ul id="accordion-content">
                        <li>Interview departmental leaders to surface assumptions about users and existing knowledge</li>
                        <li>Understand organizational goals and strategic priorities that research outcomes need to align with</li>
                        <li>Identify internal constraints that shape what solutions are actually viable</li>
                      </ul>
                      <h5>Talk to users</h5>
                      <p>With the internal picture in place, user interviews have sharper focus.</p>
                      <ul id="accordion-content">
                        <li>Conduct semi-structured interviews to explore goals, workflows, and pain points</li>
                        <li>Analyze findings thematically to surface patterns across participants</li>
                        <li>Validate and build on existing knowledge where prior research is available</li>
                      </ul>
                      <h5>Stay involved through design ideation</h5>
                      <p>Findings don't hand themselves off. I push to keep research present in early design and requirements gathering, whether that's a single review or a cross-functional workshop, because the translation step is where insights tend to get lost.</p>
                      <ul id="accordion-content">
                        <li>Contribute research findings to inform initial wireframe directions</li>
                        <li>Participate in design reviews and workshops to keep user needs present where the engagement allows</li>
                        <li>Help frame user insights as actionable requirements for technical teams</li>
                      </ul>
                    </AccordionItem>
                    <AccordionItem index={2} header={"Example deliverables"}>
                      <ul id="accordion-content">
                        <li>Current state journey maps showing key findings and recommendations</li>
                        <li>Future state journey maps capturing early design direction</li>
                        <li>User-informed requirements documentation for technical implementation</li>
                        <li>Executive reports connecting user needs to business goals</li>
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