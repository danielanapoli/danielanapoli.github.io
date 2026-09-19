'use client'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/CardBody';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import AlertHeading from 'react-bootstrap/AlertHeading';

import { Accordion, AccordionItem } from '@/components/Accordion/Accordion';
import CustomBreadcrumb from '@/components/BreadCrumb/BreadCrumb';

function IndustryRequirements() {
  return (
    <div className="IndustryRequirements">
      <section id="content">
          <Container fluid="md">
          {/* <CustomBreadcrumb/> */}
            <Row className="mb-3">
              <Col className='prose-content'>
                <h1 className='display-4 fw-bold'>Requirements discovery</h1>
                <p className='fs-5'>
                  Early product decisions made without a clear picture of the problem space are expensive to undo. I help teams build that picture before the direction is set.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={8} className='mb-4 mb-md-0'>
                <Card bg='light' className='border-0'>
                  <CardBody className='p-4'>
                    <p className='text-uppercase small fw-bold text-muted mb-2'>Case study</p>
                    <h2 className='mb-3'>Informing strategy with user needs</h2>
                    <p>CIHI was retiring a long-standing public health data product. They needed a user-centered strategy for what came next. Three connected generative studies surfaced the core tension: users trust the data deeply, but the current packaging made it close to impossible to find and extract what they needed quickly.</p>
                    <hr/>
                    <Row className='mb-4'>
                      <Col xs={4}>
                        <p className='text-uppercase small fw-bold text-muted mb-1'>Position</p>
                        <p className='mb-0'>Senior UX Researcher, CIHI</p>
                      </Col>
                      <Col xs={4}>
                        <p className='text-uppercase small fw-bold text-muted mb-1'>Approach</p>
                        <p className='mb-0'>Three connected generative studies</p>
                      </Col>
                      <Col xs={4}>
                        <p className='text-uppercase small fw-bold text-muted mb-1'>Output</p>
                        <p className='mb-0'>User-centered product strategy</p>
                      </Col>
                    </Row>
                    <Button as='a' href='/user-research/discovery/case-study' variant='primary'>Read more</Button>
                  </CardBody>
                </Card>
                <Card bg='light' className='border-0 mt-4'>
                  <CardBody className='p-4'>
                    <p className='text-uppercase small fw-bold text-muted mb-2'>Case study</p>
                    <h2 className='mb-3'>Backing qualitative findings with survey data</h2>
                    <p>Interviews can surface the right themes, but they can't tell a team how widely those themes hold. A large-scale survey adds that scope, giving teams the confidence to commit to a direction during discovery. This case study walks through running that kind of survey research end-to-end: designing the questions, collecting the data, building the ETL processes to clean and merge it, and running the statistical analyses that turned it into insight.</p>
                    <hr/>
                    <Row className='mb-4'>
                      <Col xs={4}>
                        <p className='text-uppercase small fw-bold text-muted mb-1'>Position</p>
                        <p className='mb-0'>Doctoral researcher, Carleton University</p>
                      </Col>
                      <Col xs={4}>
                        <p className='text-uppercase small fw-bold text-muted mb-1'>Approach</p>
                        <p className='mb-0'>End-to-end survey design, ETL pipeline, statistical analysis</p>
                      </Col>
                      <Col xs={4}>
                        <p className='text-uppercase small fw-bold text-muted mb-1'>Output</p>
                        <p className='mb-0'>Validated, actionable insights at scale</p>
                      </Col>
                    </Row>
                    <Button as='a' href='/user-research/surveys/case-study' variant='primary'>Read more</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md={4} className='prose-content'>
                <Accordion allKeys={["0", "1", "2"]}>
                  <AccordionItem index={0} header={"What I usually deliver"}>
                    <p>Discovery research that informs product strategy and grounds teams in what users actually need. That includes translating insights into design decisions and practical requirements that technical teams can act on.</p>
                    <ul id="accordion-content">
                      <li>In-depth interviews and contextual inquiries</li>
                      <li>Thematic analyses and insight synthesis</li>
                      <li>Opportunity mapping and problem framing</li>
                      <li>Early-stage product direction recommendations</li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem index={1} header={"How I work"}>
                    <h3>Start with what already exists</h3>
                    <p>Before strategizing any research, I dig into what the organization already knows. That means reviewing digital analytics, existing documentation, and prior research to understand the landscape before adding to it.</p>
                    <ul id="accordion-content">
                      <li>Audit existing data sources and prior research initiatives</li>
                      <li>Identify knowledge gaps that primary research needs to fill</li>
                      <li>Review findings with internal collaborators to pressure-test assumptions before moving forward</li>
                    </ul>
                    <h3>Consult internal collaborators</h3>
                    <p>The people closest to the product have already formed a picture of the user. I want to understand that picture, where it came from, and what organizational goals and constraints are shaping it, before I strategize anything.</p>
                    <ul id="accordion-content">
                      <li>Interview departmental leaders to surface assumptions about users and existing knowledge</li>
                      <li>Understand organizational goals and strategic priorities that research outcomes need to align with</li>
                      <li>Identify internal constraints that shape what solutions are actually viable</li>
                    </ul>
                    <h3>Talk to users</h3>
                    <p>With the internal picture in place, user interviews have sharper focus.</p>
                    <ul id="accordion-content">
                      <li>Conduct semi-structured interviews to explore goals, workflows, and pain points</li>
                      <li>Analyze findings thematically to surface patterns across participants</li>
                      <li>Validate and build on existing knowledge where prior research is available</li>
                    </ul>
                    <h3>Stay involved through design ideation</h3>
                    <p>Findings don't hand themselves off. I push to keep research present in early design and requirements gathering, whether that's a single review or a cross-functional workshop, because the translation step is where insights tend to get lost.</p>
                    <ul id="accordion-content">
                      <li>Contribute research findings to inform initial wireframe directions</li>
                      <li>Participate in design reviews and workshops to keep user needs present where the engagement allows</li>
                      <li>Help frame user insights as actionable requirements for technical teams</li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem index={2} header={"Example outputs"}>
                    <ul id="accordion-content">
                      <li>Current state journey maps showing key findings and recommendations</li>
                      <li>Future state journey maps capturing early design direction</li>
                      <li>User-informed requirements documentation for technical implementation</li>
                      <li>Executive reports connecting user needs to business goals</li>
                    </ul>
                    <p className="mt-3">Once direction is set, <a href="/user-research/usability-testing">usability testing</a> validates the execution.</p>
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