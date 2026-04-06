'use client'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import AlertHeading from 'react-bootstrap/AlertHeading';
import Badge from 'react-bootstrap/Badge';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import BreadcrumbItem from 'react-bootstrap/BreadcrumbItem';

import { Accordion, AccordionItem } from '@/components/Accordion/Accordion';
import { BackButton } from '@/components/BackButton/BackButton';

function IndustryAutomation() {
  return (
    <div className="IndustryAutomation">
      <br/> 
        <section id="content">
            <Container fluid="md">
            <Breadcrumb>
                <BreadcrumbItem href="/">Home</BreadcrumbItem>
                <BreadcrumbItem href="/user-research">Industry Portfolio</BreadcrumbItem>
                <BreadcrumbItem active>Usability tests</BreadcrumbItem>
            </Breadcrumb>
            <BackButton/>
                <Row>
                <Col>
                <h1>Usability testing</h1>
                </Col>
                </Row> 
                 <Row>
                    <Col>
                    </Col>
                    <Col>
                        <Alert variant='warning'>
                        <AlertHeading><h2>Impact</h2></AlertHeading>
                        <ul id="accordion-content">
                            <li>Improve usability and task success rates</li>
                            <li>Enhance overall user satisfaction</li>
                            <li>Support iterative product improvements</li>                 
                        </ul>
                        </Alert> 
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Accordion defaultActiveKeys={["0", "1", "2"]} allKeys={["0", "1", "2"]}>
                        <AccordionItem index={1} header={"What I deliver"}>
                          <ul id="accordion-content">
                            <li>Moderated and unmoderated usability testing</li>
                            <li>Task success and behavioural analysis</li>
                            <li>Identification of usability issues and severity</li>
                            <li>Actionable recommendations for improvement</li>
                          </ul>
                        </AccordionItem>
                        <AccordionItem index={1} header={"How I work"}>
                          <ol id="accordion-content">
                            <li>Define critical user tasks</li>
                            <li>Observe real user interactions</li>
                            <li>Identify friction points and breakdowns</li>
                            <li>Prioritize fixed based on impact</li>
                          </ol>
                        </AccordionItem>
                        <AccordionItem index={2} header={"Example outputs"}>
                        <ul id="accordion-content">
                            <li>Anonymized video clips highlighting key issues</li>
                            <li>Executive usability findings reports</li>
                            <li>Severity-ranked issue lists</li>
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