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
    <div className="ConceptTesting">
      <br/> 
        <section id="content">
            <Container fluid="md">
            <Breadcrumb>
                <BreadcrumbItem href="/">Home</BreadcrumbItem>
                <BreadcrumbItem href="/user-research">User Research</BreadcrumbItem>
                <BreadcrumbItem active>Concept testing</BreadcrumbItem>
            </Breadcrumb>
            <BackButton/>
                <Row>
                <Col>
                <h1>Concept testing</h1>
                </Col>
                </Row>
                <br/> 
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <Alert variant='warning'>
                        <AlertHeading><h2>Impact</h2></AlertHeading>
                        <ul id="accordion-content">
                            <li>Reduce costs in redesign during development</li>
                            <li>Assurance designs aligns with validated user needs</li>
                            <li>Stronger confidence in product direction</li>                 
                        </ul>
                        </Alert> 
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Accordion defaultActiveKeys={["0", "1", "2"]} allKeys={["0", "1", "2"]}>
                        <AccordionItem index={0} header={"Problem"}>
                            <p id="accordion-content">
                            Users...
                            </p>
                            <p id="accordion-content">
                            More description.
                            </p>
                        </AccordionItem>
                        <AccordionItem index={1} header={"What I deliver"}>
                          <ul id="accordion-content">
                            <li>Concept testing using wireframes or prototypes</li>
                            <li>Feedback on usability, clarity, and desirability</li>
                            <li>Identification of gaps between user needs and solutions</li>
                            <li>Iterative design recommendations</li>
                          </ul>
                        </AccordionItem>
                        <AccordionItem index={1} header={"How I work"}>
                          <ol id="accordion-content">
                            <li>Translate user insights into testable concepts</li>
                            <li>Facilitate user sessions exploring prototypes</li>
                            <li>Identify friction, confusion, and unmet expectations</li>
                            <li>Support design iterations based on gathered evidence</li>
                          </ol>
                        </AccordionItem>
                        <AccordionItem index={2} header={"Example outputs"}>
                        <ul id="accordion-content">
                            <li>Annotated design concepts with real user feedback</li>
                            <li>Prioritized design recommendations</li>
                            <li>Comparative concept validation reports for each iteration</li>
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