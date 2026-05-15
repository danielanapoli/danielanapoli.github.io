'use client'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import AlertHeading from 'react-bootstrap/AlertHeading';
import Badge from 'react-bootstrap/Badge';

import { Accordion, AccordionItem } from '@/components/Accordion/Accordion';
import { BackButton } from '@/components/BackButton/BackButton';
import CustomBreadcrumb from '@/components/BreadCrumb/BreadCrumb';

function IndustryAutomation() {
  return (
    <div className="IndustryAutomation">
      <section id="content">
        <Container fluid="md">
          <CustomBreadcrumb/>
          <BackButton/>
          <Row fluid='true'>
            <h1>Persona Integration</h1>
            <p className='fs-5'>Personas sitting in a research report don't change how teams make decisions. I can help organizations put them in their work.</p>
            <Col>
              <Accordion defaultActiveKeys={["0", "1", "2", "3"]} allKeys={["0", "1", "2", "3"]}>
                <AccordionItem index={0} header={"What I deliver"}>
                  <p>Integrating persona frameworks to translate user insights into audience segmentation protocols other departments can adopt and act on. That includes the technical work of building those systems, not just recommending them.</p>
                  <ul id="accordion-content">
                    <li>Persona development and validation grounded in real user data</li>
                    <li>Automated persona classification built on and validated against existing audience frameworks</li>
                    <li>Research-informed recommendations for embedding personas into organizational workflows</li>
                  </ul>
                </AccordionItem>
                <AccordionItem index={1} header={"How I work"}>
                  <h5>Assess and consolidate existing research</h5>
                  <p>Before building anything, I need to understand what the existing research can actually support. That means reviewing what's available, evaluating its reliability, and identifying gaps that need to be addressed before personas can be scaled.</p>
                  <ul id="accordion-content">
                    <li>Review existing research, data sources, and segmentation approaches</li>
                    <li>Evaluate whether existing findings are sufficient to support persona development</li>
                    <li>Design and conduct targeted studies to address research gaps where needed</li>
                    <li>Synthesize consolidated insights into a foundation the system can be built on</li>
                  </ul>
                  <h5>Build the classification framework collaboratively</h5>
                  <p>The system is only as trustworthy as the logic underneath it. I work with researchers, subject matter experts, and relevant stakeholders to define the keywords and characteristics that form the basis of the persona classification model.</p>
                  <ul id="accordion-content">
                    <li>Facilitate collaborative sessions to identify persona characteristics and defining attributes</li>
                    <li>Validate the classification framework across research and non-research perspectives</li>
                    <li>Refine the framework iteratively before any technical build begins</li>
                  </ul>
                  <h5>Build the persona system</h5>
                  <p>With a validated framework in place, I build the technical system that makes persona classification reliable and scalable.</p>
                  <ul id="accordion-content">
                    <li>Clean and process raw data for analysis</li>
                    <li>Build persona classification and mapping systems grounded in the validated framework</li>
                    <li>Validate outputs against existing personas and refine iteratively</li>
                  </ul>
                  <h5>Embed personas into how the organization operates</h5>
                  <p>When persona systems are built to scale, they change how other departments make decisions, from how marketing segments users to how product teams prioritize features.</p>
                  <ul id="accordion-content">
                    <li>Translate research findings into persona logic that other teams can adopt and operationalize</li>
                    <li>Present outputs to relevant stakeholders in formats that support cross-departmental adoption</li>
                  </ul>
                </AccordionItem>
                <AccordionItem index={2} header={"Example deliverables"}>
                  <ul id="accordion-content">
                    <li>Automated scripts for scanning and categorizing raw user data into persona groups</li>
                    <li>Research-informed recommendations for embedding personas into organizational workflows</li>
                    <li>Executive reports connecting persona insights to organizational strategy</li>
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

export default IndustryAutomation;
