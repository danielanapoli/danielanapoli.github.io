'use client'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/CardBody';
import Button from 'react-bootstrap/Button';

import { Accordion, AccordionItem } from '@/components/Accordion/Accordion';
import CustomBreadcrumb from '@/components/BreadCrumb/BreadCrumb';

function ConceptTesting() {
  return (
    <div className="ConceptTesting">
      <section id="content">
        <Container fluid="md">
          {/* <CustomBreadcrumb/> */}
          <Row fluid='true' className="mb-3">
            <Col className='prose-content'>
              <h1 className='display-4 fw-bold'>Concept testing</h1>
              <p className='fs-5'>Committing to a direction before testing it with users is an expensive assumption. I help teams validate potential before the cost of building accumulates.</p>
            </Col>
          </Row>
          <Row className='align-items-start'>
            <Col md={8} className='mb-4 mb-md-0'>
              <Card bg='light' className='border-0'>
                <CardBody className='p-4'>
                  <p className='text-uppercase small fw-bold text-muted mb-2'>Case study</p>
                  <h2 className='mb-3'>Designing a research repository people will actually use</h2>
                  <p>CIHI had no shared home for its user insights, so decisions were being made without them, not for lack of research but because it couldn&rsquo;t be found or trusted. Listening sessions with 36 staff revealed the real barrier wasn&rsquo;t findability but confidence, which shaped a repository design and an AI-built interactive prototype that gave leaders something real to react to.</p>
                  <hr/>
                  <Row className='mb-4'>
                    <Col xs={4}>
                      <p className='text-uppercase small fw-bold text-muted mb-1'>Position</p>
                      <p className='mb-0'>Senior UX Researcher, CIHI</p>
                    </Col>
                    <Col xs={4}>
                      <p className='text-uppercase small fw-bold text-muted mb-1'>Approach</p>
                      <p className='mb-0'>Listening sessions and an AI-built prototype</p>
                    </Col>
                    <Col xs={4}>
                      <p className='text-uppercase small fw-bold text-muted mb-1'>Output</p>
                      <p className='mb-0'>Research repository design direction</p>
                    </Col>
                  </Row>
                  <Button as='a' href='/user-research/concept-testing/case-study' variant='primary'>Read more</Button>
                </CardBody>
              </Card>
            </Col>
            <Col md={4} className='prose-content'>
              <Accordion allKeys={["0", "1", "2"]}>
                <AccordionItem index={0} header={"What I deliver"}>
                  <p>Concept testing that confirms whether a design direction has real potential before the team commits to building it.</p>
                  <ul id="accordion-content">
                    <li>Concept testing using wireframes, sketches, or higher-fidelity mockups depending on research goals</li>
                    <li>Feedback on usability, clarity, and desirability of proposed directions</li>
                    <li>Identification of gaps between proposed solutions and real user needs</li>
                    <li>Research-informed recommendations to guide design prioritization</li>
                  </ul>
                </AccordionItem>
                <AccordionItem index={1} header={"How I work"}>
                  <h3>Align on what we're testing and why</h3>
                  <p>The research goal determines everything — what fidelity makes sense, what questions to ask, and what a useful finding looks like.</p>
                  <ul id="accordion-content">
                    <li>Define what the concept needs to prove or disprove</li>
                    <li>Advise on fidelity choices and flag anything that could compromise research integrity</li>
                    <li>Align with the product team on what a useful finding looks like before the study begins</li>
                  </ul>
                  <h3>Turn findings into testable prototypes</h3>
                  <p>Before we test anything, I translate research findings into concrete requirements, then build toward a testable artifact myself.</p>
                  <ul id="accordion-content">
                    <li>Distill discovery and prior research into clear, prioritized user requirements</li>
                    <li>Vibe code interactive design prototypes directly from those requirements, iterating in tight loops rather than waiting on a design handoff</li>
                    <li>Refine each prototype against the requirements it's meant to satisfy, so what reaches participants reflects real user needs, not just a visual concept</li>
                  </ul>
                  <h3>Facilitate concept testing sessions</h3>
                  <p>I run moderated sessions that go beyond surface reactions to understand whether users are ready for, and capable of adopting, what's being proposed.</p>
                  <ul id="accordion-content">
                    <li>Recruit participants that reflect the range of users who will encounter the concept</li>
                    <li>Probe beneath initial reactions to understand the conditions that shape readiness and adoption</li>
                    <li>Identify gaps between what the concept assumes about users and what users actually need</li>
                  </ul>
                  <h3>Translate findings into product direction</h3>
                  <p>Concept testing findings are most valuable when they feed directly into design and prioritization decisions.</p>
                  <ul id="accordion-content">
                    <li>Synthesize findings across participants to identify patterns and segment differences</li>
                    <li>Facilitate prioritization workshops where research findings shape what gets built</li>
                    <li>Support design iterations grounded in what users are actually ready for</li>
                  </ul>
                </AccordionItem>
                <AccordionItem index={2} header={"Example outputs"}>
                  <ul id="accordion-content">
                    <li>Annotated concept designs with real user feedback</li>
                    <li>Prioritization workshop outputs connecting research findings to feature decisions</li>
                    <li>Research-informed recommendations for design iterations</li>
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

export default ConceptTesting;
