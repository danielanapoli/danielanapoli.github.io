import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import AlertHeading from 'react-bootstrap/AlertHeading';
import Badge from 'react-bootstrap/Badge';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import BreadcrumbItem from 'react-bootstrap/BreadcrumbItem';

import { Accordion, AccordionItem } from '@/components/Accordion/Accordion';

function IndustryBenchmarking() {
  return (
    <div className="IndustryBenchmarking">
      <section id="content">
        <Container fluid="md">
          <Breadcrumb>
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem href="/industry">Industry Portfolio</BreadcrumbItem>
            <BreadcrumbItem active>Usability Benchmarking</BreadcrumbItem>
          </Breadcrumb>
            <Row>
              <Col>
              <h1>Usability Benchmarking</h1>
              </Col>
            </Row>
             <br/>
            <Row fluid='true'>
              <Col>
                <h2>Users need...</h2>
                <p id="hero-text">
                    to quickly find performance data about their clinic and other comparable clinics.
                    <br/><br/>
                    <Badge bg="secondary">The Canadian Institute for Health Information (CIHI)</Badge>  
                </p>
              </Col>
              <Col>
                <Alert variant='warning'>
                  <AlertHeading><h2>Research Impact</h2></AlertHeading>
                  <ul id="accordion-content">
                    <li>Increased findability of website content</li>
                    <li>Quantified UX and SEO support for organizational goals</li>
                    <li>Enhanced future directions with data-driven recommendations</li>
                  </ul>
                </Alert> 
              </Col>
            </Row>
            <Row>
                <Col>
                    <Accordion defaultActiveKeys={["0", "1", "2"]} allKeys={["0", "1", "2"]}>
                      <AccordionItem index={0} header={"Problem"}>
                        <p id="accordion-content">
                          Users struggle to <strong>find</strong> relevant data needed for their tasks on the CIHI website.
                        </p>
                        <p id="accordion-content">
                          Making relevant data standout to users is not straightforward. CIHI's website provides recent and historical data for over 3,800 individual health indicators. 
                        </p>
                      </AccordionItem>
                      <AccordionItem index={1} header={"Process"}>
                        <h5>Define Findability Metrics</h5>
                          <p id="accordion-content">
                            <ul>
                              <li>Consulted with the UX and SEO teams to identify success indicators which align best with organizational goals</li>
                              <li>Recommended measurable and impactful metrics</li>
                              <li>Collaborated with other departments to access additional metadata to support usability test results</li>
                            </ul>
                          </p>
                        <h5>Assess Design Impact on Findability</h5>
                          <p id="accordion-content">
                            <ul>
                              <li>Designed task-based, between-subject usability tests focused on recent usability and SEO changes</li>
                              <li>Facilitated 10 sessions with internal stakeholders and end-users, comparing old and new designs</li>
                              <li>Conducted descriptive and inferential statistics to identify significant differences in results</li>
                              <li>Leveraged website metadata to supplement and contextualize usability test findings </li>
                              <li>Analyzed session transcripts for additional qualitative context</li>
                            </ul>
                          </p>
                        <h5>Share Research Findings and Recommendations</h5>
                          <p id="accordion-content">
                            <ul>
                              <li>Extracted key takeaways from all analyses</li>
                              <li>Packaged and delivered overall findings and delivered 3 cross-departmental presentations</li>
                              <ul>
                                <li>Key findings and performance metrics of <i>old</i> designs</li>
                                <li>Key findings and performance metrics of <i>new</i> designs</li>
                                <li>Comparison of <i>old</i> and <i>new</i> designs</li>
                              </ul>
                              <li>Presented recommendations for future UX and SEO initiatives</li>
                            </ul>
                          </p>
                      </AccordionItem>
                      <AccordionItem index={2} header={"Tools"}>
                        <ul id="accordion-content">
                          <li>R</li>
                          <li>Excel</li>
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

export default IndustryBenchmarking;