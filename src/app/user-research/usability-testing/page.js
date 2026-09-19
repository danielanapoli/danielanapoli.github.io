'use client'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/CardBody';
import Button from 'react-bootstrap/Button';

import { Accordion, AccordionItem } from '@/components/Accordion/Accordion';
import CustomBreadcrumb from '@/components/BreadCrumb/BreadCrumb';

function UsabilityTesting() {
  return (
    <div className="UsabilityTesting">
      <section id="content">
        <Container fluid="md">
          {/* <CustomBreadcrumb/> */}
          <Row fluid='true' className="mb-3">
            <Col className='prose-content'>
              <h1 className='display-4 fw-bold'>Usability testing</h1>
              <p className='fs-5'>Usability issues are rarely surface-level. I help teams investigate user interactions deeply enough to understand what is actually driving friction, and what to do about it.</p>
            </Col>
          </Row>
          <Row className='align-items-start'>
            <Col md={8} className='mb-4 mb-md-0'>
              <Card bg='light' className='border-0'>
                <CardBody className='p-4'>
                  <p className='text-uppercase small fw-bold text-muted mb-2'>Case study</p>
                  <h2 className='mb-3'>Testing usability inside the sprint</h2>
                  <p>At CIHI, I embed research within development sprints so teams can user-test products before they release, rather than after. Findings feed directly into the backlog, shaping the usability of the product at launch and supporting how changes get communicated to users and marketing.</p>
                  <hr/>
                  <Row className='mb-4'>
                    <Col xs={4}>
                      <p className='text-uppercase small fw-bold text-muted mb-1'>Position</p>
                      <p className='mb-0'>Senior UX Researcher, CIHI</p>
                    </Col>
                    <Col xs={4}>
                      <p className='text-uppercase small fw-bold text-muted mb-1'>Approach</p>
                      <p className='mb-0'>Agile user testing</p>
                    </Col>
                    <Col xs={4}>
                      <p className='text-uppercase small fw-bold text-muted mb-1'>Output</p>
                      <p className='mb-0'>A user-tested product at launch</p>
                    </Col>
                  </Row>
                  <Button variant='primary' disabled>Read more (coming soon)</Button>
                </CardBody>
              </Card>
            </Col>
            <Col md={4} className='prose-content'>
              <Accordion allKeys={["0", "1", "2"]}>
                <AccordionItem index={0} header={"What I deliver"}>
                  <p>Usability testing that surfaces not just where users struggle, but why, so teams can act on findings with confidence.</p>
                  <ul id="accordion-content">
                    <li>Moderated and unmoderated usability testing tailored to research goals and project constraints</li>
                    <li>Diagnostic probing to distinguish implementation issues from deeper systemic ones</li>
                    <li>Severity-rated usability findings grounded in established heuristics</li>
                    <li>Actionable recommendations prioritized by impact on user experience</li>
                    <li>Anonymized video clips that make usability issues tangible for collaborators</li>
                  </ul>
                </AccordionItem>
                <AccordionItem index={1} header={"How I work"}>
                  <h3>Choose the right study format</h3>
                  <p>The research goal drives the format decision. Quantitative metrics like time on task call for unmoderated. Understanding the why behind user behaviour calls for moderated, where probing in the moment is possible.</p>
                  <ul id="accordion-content">
                    <li>Define research goals and success criteria with the product team</li>
                    <li>Assess constraints including timeline, participant availability, and product fidelity</li>
                    <li>Select study format based on what the research question requires</li>
                  </ul>
                  <h3>Design and run the study</h3>
                  <p>I recruit real end-users and build tasks around the behaviours that matter most.</p>
                  <ul id="accordion-content">
                    <li>Recruit participants from the actual target user population</li>
                    <li>Craft tasks that reflect realistic user goals and workflows</li>
                    <li>Probe beneath surface-level struggles to identify the root cause of usability issues</li>
                  </ul>
                  <h3>Analyze and prioritize findings</h3>
                  <p>Severity ratings are grounded in established heuristics and guidelines, not intuition.</p>
                  <ul id="accordion-content">
                    <li>Map observations to usability heuristics to interpret their full implications</li>
                    <li>Rate severity based on impact to primary task completion</li>
                    <li>Prioritize recommendations by their effect on the overall user experience</li>
                  </ul>
                  <h3>Translate findings into action</h3>
                  <p>Nothing convinces a team to take usability seriously like watching someone struggle first-hand.</p>
                  <ul id="accordion-content">
                    <li>Deliver findings in formats suited to the team and collaborator audience</li>
                    <li>Share anonymized video clips to make usability issues tangible</li>
                    <li>Translate findings into actionable next steps within agile timelines</li>
                  </ul>
                </AccordionItem>
                <AccordionItem index={2} header={"Example outputs"}>
                  <ul id="accordion-content">
                    <li>Anonymized video clips highlighting key usability issues</li>
                    <li>Severity-ranked issue lists tied to usability heuristics</li>
                    <li>Executive usability findings reports</li>
                    <li>Actionable recommendations prioritized by impact</li>
                  </ul>
                  <p className="mt-3">If the problem space hasn't been fully mapped yet, <a href="/user-research/discovery">requirements discovery</a> is where to start.</p>
                </AccordionItem>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default UsabilityTesting;
