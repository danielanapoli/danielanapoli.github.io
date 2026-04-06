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
    <div className="Surveys">
      <br/> 
        <section id="content">
            <Container fluid="md">
            <Breadcrumb>
                <BreadcrumbItem href="/">Home</BreadcrumbItem>
                <BreadcrumbItem href="/user-research">User Research</BreadcrumbItem>
                <BreadcrumbItem active>Large-scale surveys</BreadcrumbItem>
            </Breadcrumb>
            <BackButton/>
                <Row>
                <Col>
                <h1>Large-scale surveys</h1>
                </Col>
                </Row>
                <br/> 
                <Row>
                    <Col>
                        <h2>Users need...</h2>
                        <p id="hero-text">
                        something.
                        </p>
                    </Col>
                    <Col>
                        <Alert variant='warning'>
                        <AlertHeading><h2>Impact</h2></AlertHeading>
                        <ul id="accordion-content">
                            <li>Generalize qualitative insights to larger populations</li>
                            <li>Reduce decision-making ambiguity</li>
                            <li>Inform development priorities based on real user feedback</li>                 
                        </ul>
                        </Alert> 
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Accordion defaultActiveKeys={["0", "1", "2"]} allKeys={["0", "1", "2"]}>
                        <AccordionItem index={1} header={"What I deliver"}>
                          <ul id="accordion-content">
                            <li>Survey design (e.g., validated questions, sampling strategy, bias mitigation)</li>
                            <li>Quantification of user needs and priorities</li>
                            <li>Segmentation considerations (e.g., findings by personas, by cohorts)</li>
                            <li>Statistical analysis and reporting</li>
                          </ul>
                        </AccordionItem>
                        <AccordionItem index={1} header={"How I work"}>
                          <ol id="accordion-content">
                            <li>Define research questions tied to product decisions</li>
                            <li>Design structured, sound surveys</li>
                            <li>Analyze responses using statistical methods</li>
                            <li>Translate findings into prioritized recommendations</li>
                          </ol>
                        </AccordionItem>
                        <AccordionItem index={2} header={"Example outputs"}>
                        <ul id="accordion-content">
                            <li>Data-driven insights and recommendations</li>
                            <li>User segmentation models</li>
                            <li>Insight reports with quantified needs</li>
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