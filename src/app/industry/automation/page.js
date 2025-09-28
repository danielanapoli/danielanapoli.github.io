import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import AlertHeading from 'react-bootstrap/AlertHeading';
import Badge from 'react-bootstrap/Badge';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import BreadcrumbItem from 'react-bootstrap/BreadcrumbItem';

import { Accordion, AccordionItem } from '@/components/Accordion/Accordion';

function IndustryAutomation() {
  return (
    <div className="IndustryAutomation">
      <br/> 
        <section id="content">
            <Container fluid="md">
            <Breadcrumb>
                <BreadcrumbItem href="/">Home</BreadcrumbItem>
                <BreadcrumbItem href="/industry">Industry Portfolio</BreadcrumbItem>
                <BreadcrumbItem active>Persona Automation</BreadcrumbItem>
            </Breadcrumb>
                <Row>
                <Col>
                <h1>Persona Automation</h1>
                </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <h2>Users need...</h2>
                        <p id="hero-text">
                        personalized support for leveraging data and relating tools.
                        <br/><br/>
                        <Badge bg="secondary">The Canadian Institute for Health Information (CIHI)</Badge> 
                        </p>
                    </Col>
                    <Col>
                        <Alert variant='warning'>
                        <AlertHeading><h2>Research Impact</h2></AlertHeading>
                        <ul id="accordion-content">
                            <li>Enhanced user experience personalization by improving data relevancy</li>
                            <li>Increased team productivity and reduced project timelines by 2 weeks</li> 
                            <li>Spearheaded automation integration initiaitves across the organization</li>                 
                        </ul>
                        </Alert> 
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Accordion defaultActiveKeys={["0", "1", "2"]} allKeys={["0", "1", "2"]}>
                        <AccordionItem index={0} header={"Problem"}>
                            <p id="accordion-content">
                            Users struggle to <strong>assess</strong> how CIHI data could be useful for their projects.
                            </p>
                            <p id="accordion-content">
                            Customizing user experiences to improve relevancy is not straightforward. Many users have multiple roles and their needs in CIHI tools can dynamically change per visit.
                            </p>
                        </AccordionItem>
                    <AccordionItem index={1} header={"Process"}>
                        *Note: Before I joined the project, this analysis was planned to be completed manually with Excel.  
                        With my programming background, I identified an opportunity to leverage automation techniques. 
                        <br/><br/>
                        <h4>Data Scrubbing with Python</h4>
                        <ul id="accordion-content">
                            <li>Extracted responses to open-text, demographic questions from recent <i>exit-intent</i> survey responses</li>
                            <li>Cleaned data for processing
                            <ul>
                                <li>Assessed response validity, excluded invalid responses</li>
                                <li>Adjusted for spelling variations</li>
                                <li>Translated French-language responses</li>
                            </ul>
                            </li>
                        </ul>
                        <h4>Mapping Users to Personas with Natural Language Processing</h4>
                        <ul id="accordion-content">
                            <li>Compiled keyword list from open-text responses relating to persona characteristics</li>
                            <li>Iteratively categorized respondents per persona</li>
                            <ul>
                            <li>Automatically mapped keywords to survey response</li>
                            <li>Manually assessed unmapped response for potential keyword list improvements</li>
                            <li>Improved mapping algorithm</li>
                                <ul>
                                <li>E.g., Updated word stems, considered medical terminology, and considered vernacular variations</li>
                                </ul>
                            </ul>
                            <li>Ended processing when 87% of the survey responses could be accurately categorized</li>
                        </ul>
                        <h4>Expanding the Persona Framework</h4>
                        <ul id="accordion-content">
                            <li>Once respondents were categorized, full responses were further analyzed</li>
                            <li>Validated the existing persona framework using mapped responses</li>
                            <ul>
                            <li>E.g., Persona A most often uses the XYZ tool on the website</li>
                            </ul> 
                            <li>Extracted new user insights and integrated findings in the persona framework</li>
                            <ul>
                            <li>E.g., Persona B is most likely to report XYZ pain points</li>
                            </ul>
                            <li>Provided data-driven recommendations for usability improvements to the CIHI website</li>
                        </ul>
                        </AccordionItem>
                        <AccordionItem index={2} header={"Tools"}>
                        <ul id="accordion-content">
                            <li>Excel</li>
                            <li>Python</li>
                            <li>VS Code</li>
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