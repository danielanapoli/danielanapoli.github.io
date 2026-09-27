'use client'

import Container from 'react-bootstrap/Container';
import BackButton from '@/components/BackButton/BackButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/CardBody';
import Button from 'react-bootstrap/Button';

import { Accordion, AccordionItem } from '@/components/Accordion/Accordion';
import CustomBreadcrumb from '@/components/BreadCrumb/BreadCrumb';

function Surveys() {
  return (
    <div className="Surveys">
      <section id="content">
        <Container fluid="md">
          {/* <CustomBreadcrumb/> */}
          <BackButton />
          <Row fluid='true' className="mb-3">
            <Col className='prose-content'>
              <h1 className='display-4 fw-bold'>Large-scale Surveys</h1>
              <p className='fs-5'>Qualitative research tells you what's happening, but not how widespread it is. I help teams build the quantitative foundation that makes related research more focused and decisions more confident.</p>
            </Col>
          </Row>
          <Row className='align-items-start'>
            <Col md={8} className='mb-4 mb-md-0'>
              <Card bg='light' className='border-0'>
                <CardBody className='p-4'>
                  <p className='text-uppercase small fw-bold text-muted mb-2'>Case study</p>
                  <h2 className='mb-3'>Building a survey dataset that a design team could trust</h2>
                  <p>A national mixed-methods survey of 384 adults, run online and on paper, hit an influx of fraudulent responses. The fix was a modular Python ETL pipeline with validation as its own auditable stage, ahead of any cleaning, that turned into a design toolkit for remote healthcare technology.</p>
                  <hr/>
                  <Row className='mb-4'>
                    <Col xs={4}>
                      <p className='text-uppercase small fw-bold text-muted mb-1'>Position</p>
                      <p className='mb-0'>Doctoral researcher, Carleton University</p>
                    </Col>
                    <Col xs={4}>
                      <p className='text-uppercase small fw-bold text-muted mb-1'>Approach</p>
                      <p className='mb-0'>National survey, online and on paper</p>
                    </Col>
                    <Col xs={4}>
                      <p className='text-uppercase small fw-bold text-muted mb-1'>Output</p>
                      <p className='mb-0'>Auditable Python ETL pipeline</p>
                    </Col>
                  </Row>
                  <Button as='a' href='/user-research/surveys/case-study' variant='primary'>Read more</Button>
                </CardBody>
              </Card>
            </Col>
            <Col md={4} className='prose-content'>
              <Accordion allKeys={["0", "1", "2"]}>
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
