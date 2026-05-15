'use client'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Accordion, AccordionItem } from '@/components/Accordion/Accordion';
import { BackButton } from '@/components/BackButton/BackButton';
import CustomBreadcrumb from '@/components/BreadCrumb/BreadCrumb';

function UsabilityTesting() {
  return (
    <div className="UsabilityTesting">
      <section id="content">
        <Container fluid="md">
          <CustomBreadcrumb/>
          <BackButton/>
          <Row fluid='true'>
            <h1>Usability testing</h1>
            <p className='fs-5'>Usability issues are rarely surface-level. I help teams investigate user interactions deeply enough to understand what is actually driving friction, and what to do about it.</p>
          </Row>
          <br/>
          <Row>
            <Col>
              <Accordion defaultActiveKeys={["0", "1", "2"]} allKeys={["0", "1", "2"]}>
                <AccordionItem index={0} header={"What I deliver"}>
                  <p>Usability testing that surfaces not just where users struggle, but why, so teams can act on findings with confidence.</p>
                  <ul id="accordion-content">
                    <li>Moderated and unmoderated usability testing tailored to research goals and project constraints</li>
                    <li>Diagnostic probing to distinguish implementation issues from deeper systemic ones</li>
                    <li>Severity-rated usability findings grounded in established heuristics</li>
                    <li>Actionable recommendations prioritized by impact on user experience</li>
                    <li>Anonymized video clips that make usability issues tangible for stakeholders</li>
                  </ul>
                </AccordionItem>
                <AccordionItem index={1} header={"How I work"}>
                  <h5>Choose the right study format</h5>
                  <p>The research goal drives the format decision. Quantitative metrics like time on task call for unmoderated. Understanding the why behind user behaviour calls for moderated, where probing in the moment is possible.</p>
                  <ul id="accordion-content">
                    <li>Define research goals and success criteria with the product team</li>
                    <li>Assess constraints including timeline, participant availability, and product fidelity</li>
                    <li>Select study format based on what the research question requires</li>
                  </ul>
                  <h5>Design and run the study</h5>
                  <p>I recruit real end-users and build tasks around the behaviours that matter most.</p>
                  <ul id="accordion-content">
                    <li>Recruit participants from the actual target user population</li>
                    <li>Craft tasks that reflect realistic user goals and workflows</li>
                    <li>Probe beneath surface-level struggles to identify the root cause of usability issues</li>
                  </ul>
                  <h5>Analyze and prioritize findings</h5>
                  <p>Severity ratings are grounded in established heuristics and guidelines, not intuition.</p>
                  <ul id="accordion-content">
                    <li>Map observations to usability heuristics to interpret their full implications</li>
                    <li>Rate severity based on impact to primary task completion</li>
                    <li>Prioritize recommendations by their effect on the overall user experience</li>
                  </ul>
                  <h5>Translate findings into action</h5>
                  <p>Nothing convinces a team to take usability seriously like watching someone struggle first-hand.</p>
                  <ul id="accordion-content">
                    <li>Deliver findings in formats suited to the team and stakeholder audience</li>
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
