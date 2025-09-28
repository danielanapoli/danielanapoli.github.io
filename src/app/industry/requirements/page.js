import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import BreadcrumbItem from 'react-bootstrap/BreadcrumbItem';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import AlertHeading from 'react-bootstrap/AlertHeading';

import { Accordion, AccordionItem } from '@/components/Accordion/Accordion';

function IndustryRequirements() {
  return (
    <div className="IndustryRequirements">
      <section id="content">
          <Container fluid="md">
          <Breadcrumb>
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem href="/industry">Industry Portfolio</BreadcrumbItem>
            <BreadcrumbItem active>Requirements Discovery</BreadcrumbItem>
          </Breadcrumb>
            <Row>
              <Col>
              <h1>Requirements Discovery</h1>
              </Col>
            </Row>
            <br/>
              <Row>
                  <Col>
                    <h2>Users need...</h2>
                    <p id="hero-text">
                      to gauge their performance and guide future<br/>improvement programs. 
                      <br/><br/>
                      <Badge bg="secondary">The Canadian Institute for Health Information (CIHI)</Badge> 
                    </p>
                  </Col>
                  <Col>
                    <Alert variant='warning'>
                      <AlertHeading><h2>Research Impact</h2></AlertHeading>
                      <ul id="accordion-content">
                        <li>Delivered comprehensive data-driven vision statements for future CIHI offerings</li>
                        <li>Streamlined user and organization needs</li>
                        <li>Enhanced stakeholder alignment and buy-in</li>
                      </ul>
                    </Alert> 
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Accordion defaultActiveKeys={["0", "1", "2"]} allKeys={["0", "1", "2"]}>
                    <AccordionItem index={0} header={"Problem"}>
                      <p id="accordion-content">
                        Users struggle to <strong>consolidate</strong> data about their clinic on the CIHI website.
                        <br/><br/>
                        Wrangling this data to put on the CIHI website is not straightforward. Data is split among different departments, and each department has unique processes for managing their data.
                      </p>                  
                      </AccordionItem>
                    <AccordionItem index={1} header={"Process"}>
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
                        <h5>Sharing Findings and Recommendations</h5>
                        <ul id="accordion-content">
                          <li>Crafted <i>current state</i> user journey maps to communicate key findings and recommendations</li>
                          <li>Crafted <i>future state</i> user journey maps to contextualize future-vision design wireframes</li>
                          <li>Supported leadership in evaluating how to accommodate users while meeting organizational goals</li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem index={2} header={"Tools"}>
                      <ul id="accordion-content">
                        <li>Mural</li>
                        <li>NVivo</li>
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

export default IndustryRequirements;