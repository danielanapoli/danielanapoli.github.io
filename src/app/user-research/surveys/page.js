'use client'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Accordion, AccordionItem } from '@/components/Accordion/Accordion';
import CustomBreadcrumb from '@/components/BreadCrumb/BreadCrumb';

function Surveys() {
  return (
    <div className="Surveys">
      <section id="content">
        <Container fluid="md">
          <CustomBreadcrumb/>
          <Row fluid='true' className="mb-3">
            <Col className='prose-content'>
              <h1>Large-scale Surveys</h1>
              <p className='fs-5'>Qualitative research tells you what's happening, but not how widespread it is. I help teams build the quantitative foundation that makes related research more focused and decisions more confident.</p>
            </Col>
          </Row>
          <Row>
            <Col className='prose-content'>
              <Accordion defaultActiveKeys={["0", "1", "2"]} allKeys={["0", "1", "2"]}>
                <AccordionItem index={0} header={"What I deliver"}>
                  <p>Large-scale surveys that give teams a quantitative foundation for confident decisions and sharper qualitative research.</p>
                  <ul id="accordion-content">
                    <li>Rigorous survey design that measures what it's supposed to measure</li>
                    <li>Validated usability scales that make findings comparable across studies</li>
                    <li>Quantification of user needs, behaviours, and usability trends</li>
                    <li>Segmentation by persona, cohort, or user group</li>
                    <li>Statistical analysis and reporting</li>
                  </ul>
                </AccordionItem>
                <AccordionItem index={1} header={"How I work"}>
                  <h3>Design for measurement integrity</h3>
                  <p>A small wording change can undermine an entire study. I design surveys with meticulous attention to what is actually being measured.</p>
                  <ul id="accordion-content">
                    <li>Define research questions tied to specific product or design decisions</li>
                    <li>Select and apply validated usability scales where appropriate</li>
                    <li>Follow best practices in question wording, order, and structure to encourage high response rates and quality</li>
                  </ul>
                  <h3>Run and analyze the survey</h3>
                  <p>Surveys paired with web analytics and prior research tell a more complete story than either can alone.</p>
                  <ul id="accordion-content">
                    <li>Conduct statistical analysis to identify trends, patterns, and segment differences</li>
                    <li>Cross-reference findings with web analytics and other quantitative data sources</li>
                  </ul>
                  <h3>Shape what comes next</h3>
                  <p>Valuable survey data enables confident decisions in product directions and further research strategy.</p>
                  <ul id="accordion-content">
                    <li>Use findings to inform preliminary product and design decisions</li>
                    <li>Identify potential pain points to probe further in interviews or usability studies</li>
                    <li>Cross-reference survey themes with qualitative findings to build confidence across methods</li>
                  </ul>
                </AccordionItem>
                <AccordionItem index={2} header={"Example outputs"}>
                  <ul id="accordion-content">
                    <li>Survey instruments built on validated usability scales</li>
                    <li>Statistical analysis reports with segmented findings</li>
                    <li>Preliminary product and design recommendations</li>
                  </ul>
                  <p className="mt-3">When you're ready to track how design changes affect those baselines, <a href="/user-research/benchmarking">usability benchmarking</a> closes the loop.</p>
                </AccordionItem>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Surveys;
