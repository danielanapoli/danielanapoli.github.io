'use client'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Accordion, AccordionItem } from '@/components/Accordion/Accordion';
import CustomBreadcrumb from '@/components/BreadCrumb/BreadCrumb';
import SlidesEmbed from '@/components/SlidesEmbed/SlidesEmbed';

function IndustryWorkflows() {
  return (
    <div className="IndustryWorkflows">
      <section id="content">
        <Container fluid="md">
          <CustomBreadcrumb/>
          <Row fluid='true' className="mb-3">
            <Col className='prose-content'>
              <h1 className='display-4 fw-bold'>Service Design Case Study: Improving Interdisciplinary Workflows</h1>
              <p className='fs-5'>Aligning product managers, designers, and developers around shared priorities is hard. Each discipline brings different goals, different processes, and different definitions of what good work looks like.</p>
            </Col>
          </Row>
          <Row className='mb-4'>
            <Col className='prose-content'>
              <Accordion defaultActiveKeys={["0", "1"]} allKeys={["0", "1"]}>
                <AccordionItem index={0} header={"Process"}>
                  <h3>Explore cross-departmental workflows</h3>
                  <p>Before proposing any changes, I needed to understand how each team actually worked. As-Is Scenario Mapping was a deliberate choice to surface the current state before introducing any new direction.</p>
                  <ul id="accordion-content">
                    <li>Facilitated 15 one-on-one workshops with 5 participants from each of the design, development, and product management teams</li>
                    <li>Explored each participant's involvement in the product development process, their collaborations, and the tools they relied on</li>
                    <li>Thematically analyzed findings to distill a master map for each team, then consolidated all three into a cross-departmental view</li>
                  </ul>
                  <h3>Identify improvement opportunities</h3>
                  <p>With a clear picture of the current state, I worked with participants to validate findings and collaboratively prioritize where change was most needed.</p>
                  <ul id="accordion-content">
                    <li>Reviewed and refined master maps with participants to validate key findings</li>
                    <li>Facilitated dot-voting sessions to prioritize critical collaboration processes, major pain points, and key opportunities</li>
                  </ul>
                  <h3>Rally collaborator buy-in</h3>
                  <p>Giving people a shared view of the problem and a hand in shaping the solution changed how they related to each other, not just how they worked.</p>
                  <ul id="accordion-content">
                    <li>Led a 2-hour seminar with all 20 participants to present and discuss validated findings</li>
                    <li>Facilitated a Hills workshop to collaboratively define priorities for workflow improvements</li>
                    <li>Packaged findings and recommendations for organizational leaders</li>
                  </ul>
                </AccordionItem>
                <AccordionItem index={1} header={"Outcomes"}>
                  <p>The research reduced silos between teams and uncovered concrete opportunities for workflow improvement. The process itself gave participants space to be self-reflective and co-own a path forward. Empathy and morale across the three teams visibly improved. Full institutionalization of the findings was underway at the time of my departure.</p>
                </AccordionItem>
              </Accordion>
            </Col>
          </Row>
          <Row>
            <Col>
              <SlidesEmbed embedId={"https://docs.google.com/presentation/d/e/2PACX-1vQd5PDpJXKgZfi36N-aW1bIOZo5w62e6Zjwk9AlB_LjlNsq881p2tPvc3wa1jPLfg/pubembed?start=false&loop=true&delayms=3000"} title="Slides: Service Design Case Study: Improving Interdisciplinary Workflows" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default IndustryWorkflows;
