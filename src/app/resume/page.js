'use client';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';

function Resume() {
  return (
    <div className='Resume'>
      <Container fluid='md'>
        <section id='content'>
            <Row className='text-center'>
                <h1>Daniela Napoli</h1>
                <p>
                Ontario, Canada
                <br/><a href='mailto:hello@danielanapoli.com' rel='noopener noreferrer' title="Daniela's email address. Will open the mail app.">hello@danielanapoli.com</a>
                <br/><a href='https://danielanapoli.com' target='_blank' rel='noopener noreferrer' title="Daniela's personal website. Opens in new tab.">www.danielanapoli.com</a>
                </p>
            </Row>        
            <Row>
                <Col><h3 className='underlined-heading'>Highlight Summary</h3></Col>
            </Row>
            <Row>
                <Col md={10}>
                <ul>
                    <li>Nearly 10 years of qualitative and quantitative user research</li>
                    <li>PhD in Computer Science; MA in Human-Computer Interaction</li>
                    <li>Expertise in user-centered design, usable privacy, and accessibility</li>
                    <li>Uncovers insights that drive product improvements, roadmaps, and ROI</li>
                    <li>Collaborates cross-functionally with developers, PMs, and leadership to align business and user needs</li>
                </ul>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col><h3 className='underlined-heading'>Education</h3></Col>
            </Row>
            <Row>
                <Col md={8}>
                <strong>Doctor of Philosophy in Computer Science</strong><br/>
                Carleton University, Ottawa, Ontario<br/>
                <ul>
                    <li>Thesis: <a href='https://hdl.handle.net/20.500.14718/44742' target='_blank' rel='noopener noreferrer' title='Link to Carleton University Thesis repository'>Tailoring Remote Healthcare Technology to Meet the Needs and Privacy Expectations of Older Adults</a></li>
                    <li>Senior member of Carleton's Human Oriented Research in Usable Security <a href='https://chorus.scs.carleton.ca/' target='_blank' rel='noopener noreferrer' title='Link to the Carleton Usable Security research lab. Opens in a new tab.'>(CHORUS)</a> lab</li>
                </ul>
                </Col>
                <Col className='text-end' md={3}>September 2018 - August 2025</Col>
            </Row>
            <Row>
                <Col md={8}>
                <strong>Master of Arts in Human-Computer Interaction</strong><br/>
                Carleton University, Ottawa, Ontario<br/>
                <ul>
                    <li>Thesis: <a href='https://carleton.scholaris.ca/items/b9e26ef6-df12-4cf4-bfea-07a99d045f59' target='_blank' rel='noopener noreferrer' title='Link to Carleton University Thesis repository'>Accessible and Usable Security: Exploring Visually Impaired Users’ Online Security and Privacy Strategies</a></li>
                    <li>Junior member of Carleton's Human Oriented Research in Usable Security <a href='https://chorus.scs.carleton.ca/' target='_blank' rel='noopener noreferrer' title='Link to the Carleton Usable Security research lab. Opens in a new tab.'>(CHORUS)</a> lab</li>
                </ul>
                </Col>
                <Col className='text-end' md={3}>September 2016 - May 2018</Col>
            </Row>
            <br/>
            <Row>
                <Col><h3 className='underlined-heading'>User Research Experience</h3></Col>
            </Row>
            <Row>
                <Col md={8}>
                <strong>Senior User Experience Researcher</strong><br/>
                Canadian Institute for Health Information, Toronto, Ontario<br/>
                <ul>
                    <li>Led generative discovery research to guide modernization of critical legacy products</li>
                    <li>Led quantitative findability benchmarking and comparative studies to quantify UX improvements for KPI reports</li>
                    <li>Partnered with product and program leaders to shape research strategy and priorities</li>
                    <li>Delivered user-backed insights that shaped product strategy, design directions, and roadmap decisions</li>
                    <li>Mentored other researchers on study design, analysis, research strategy, and communicating impact to stakeholders</li>
                </ul>
                </Col>
                <Col className='text-end' md={3}>October 2025 - Current</Col>            
            </Row>
            <Row>
                <Col md={8}>
                <strong>Senior User Experience Researcher</strong><br/>
                Canadian Institute for Health Information, Toronto, Ontario<br/>
                    <ul>
                        <li>Led qualitative and quantitative usability studies to improve product UX and SEO performance</li>
                        <li>Supported research strategy and priorities with team leads and program managers</li>
                        <li>Conducted user interviews and focus groups to uncover requirements for future offerings</li>
                        <li>Synthesized findings into actionable recommendations that informed product and roadmap decisions</li>
                    </ul>
                <Alert variant='light'>💡 Featured project: <a target='_blank' rel='noopener noreferrer' title='Link to a project page on Danielas website. Opens in a new tab.' href='/industry/requirements'>Requirements Discovery</a></Alert>              
                </Col>
                <Col className='text-end' md={3}>October 2021 - March 2023</Col>            
            </Row>
            <Row>
                <Col md={8}>
                <strong>User Experience Researcher, Intern</strong><br/>
                Canadian Institute for Health Information, Ottawa, Ontario<br/>
                <ul>
                    <li>Facilitated cross-departmental workshops focused on refining user personas</li>
                    <li>Conducted user interviews to validate and develop user personas</li>
                    <li>Developed Python modules for mapping research findings and website metadata to organizational personas</li>
                    <li>Supported Senior Researcher in designing usability tests for website evaluations</li>
                </ul>
                <Alert variant='light'>💡 Featured project: <a target='_blank' rel='noopener noreferrer' title='Link to a project page on Danielas website. Opens in a new tab.' href='/industry/automation'>Persona Automation</a></Alert>
                </Col>
                <Col className='text-end' md={3}>September 2020 - December 2020</Col>
            </Row>
            <Row>
                <Col md={8}>
                <strong>Design Researcher, Intern</strong><br/>
                IBM, Ottawa, Ontario<br/>
                <ul>
                    <li>Conducted and analyzed user interviews across Design, Development, and Product Management departments to:</li>
                    <ul>
                    <li>Map workflows and tool usage</li>
                    <li>Identify organizational pain points</li>
                    <li>Uncover opportunities for improved collaboration</li>
                    </ul>
                    <li>Designed and facilitated cross-department design thinking workshops to ideate future solutions in addressing design workflow challenges, including:</li>
                    <ul>
                    <li>As-Is Scenario Mapping</li>
                    <li>Value Proposition Analysis</li>
                    <li>Writing Need Statements</li>
                    </ul>
                    <li>Packaged and presented key findings at internal stakeholder meetings and an internship-related conference</li>
                </ul>
                <Alert variant='light'>💡 Featured project: <a target='_blank' rel='noopener noreferrer' title='Link to a project page on Danielas website. Opens in a new tab.' href='/industry/workflows'>Improving Interdisciplinary Workflows</a></Alert>
                </Col>
                <Col className='text-end' md={3}>May 2019 - December 2019</Col>
            </Row>
            <Row>
                <Col md={8}>
                <strong>Human Factors Consultant, Intern</strong><br/>
                CAE, Ottawa, Ontario<br/>
                <ul>
                    <li>Collaborated with developers to craft a proof-of-concept for a cost-effective virtual reality aviation training system</li>
                    <li>Conducted usability studies to assess the impact of the proof-of-concept on users' learning goals and situational awareness</li>
                    <li>Systematically reviewed academic literature exploring augmented reality (AR) in military training for R&D proposals</li>
                    <li>Crafted technical reports and presentations to share findings with upper management and other internal stakeholders</li>
                </ul>
                </Col>
                <Col className='text-end' md={3}>January 2017 - July 2017</Col>
            </Row>
            <Row>
                <Col md={8}>
                <strong>Web Team Assistant</strong><br/>
                University of Guelph-Humber, Toronto, Ontario<br/>
                <ul>
                    <li>Led website WCAG compliance initiatives with particular focus on retroactively making content accessible</li>
                    <li>Assisted in publishing web content that focused on meeting usability and accessibility best practices</li>
                    <li>Acted as production assistant for lead photographer during in-studio and on-site shoots for website content</li>
                    <li>Assisted in crafting web content and news articles for the website, including covering recent sporting events and other major rallies</li>
                </ul>
                </Col>
                <Col className='text-end' md={3}>May 2015 - September 2016</Col>
            </Row>
            <br/>

            <Row>
                <Col><h3 className='underlined-heading'>Professional Development</h3></Col>
            </Row>
            <Row>
                <Col md={8}>
                <strong>The Complete Games User Research Fundamentals</strong> <Badge bg='secondary'>Course</Badge><br/>
                Games User Research with Steve Bromley, <a href='https://gamesuserresearch.com/courses/games-user-research-fundamentals-a-practical-introduction-on-how-to-plan-run-and-analyse-games-user-research-studies/' target='_blank' rel='noopener noreferrer' title='Link to the course website. Opens in a new tab.'>Online course</a><br/>
                </Col>
                <Col className='text-end' md={3}>March 2026 - current</Col>
            </Row>
            <br/>
            <Row>
                <Col md={8}>
                <strong>Measuring UX and ROI</strong> <Badge bg='secondary'>Course</Badge><br/>
                NNGroup, <a href='https://www.nngroup.com/courses/measuring-ux/' target='_blank' rel='noopener noreferrer' title='Link to the course website. Opens in a new tab.'>Online course</a><br/>
                </Col>
                <Col className='text-end' md={3}>August 2022</Col>
            </Row>
            <br/>
            <Row>
                <Col md={8}>
                <strong>Discovery: Building the Right Thing</strong> <Badge bg='secondary'>Course</Badge><br/>
                NNGroup, <a href='https://www.nngroup.com/courses/discovery/' target='_blank' rel='noopener noreferrer' title='Link to the course website. Opens in a new tab.'>Online course</a><br/>
                </Col>
                <Col className='text-end' md={3}>August 2022</Col>
            </Row>
            <br/>
            <Row>
                <Col md={8}>
                <strong>Statistics for UX</strong> <Badge bg='secondary'>Course</Badge><br/>
                NNGroup, <a href='https://www.nngroup.com/courses/ux-statistics' target='_blank' rel='noopener noreferrer' title='Link to the course website. Opens in a new tab.'>Online course</a><br/>
                </Col>
                <Col className='text-end' md={3}>August 2022</Col>
            </Row>
            <br/>
            <Row>
                <Col md={8}>
                <strong>Workshop Organizer</strong> <Badge bg='secondary'>Leadership</Badge><br/>
                <a href='https://www.usenix.org/conference/soups2021' target='_blank' rel='noopener noreferrer'>17th Annual Symposium on Usable Privacy and Security (SOUPS)</a><br/>
                </Col>
                <Col className='text-end' md={3}>August 2021</Col>
            </Row>
            <br/>
            <Row>
                <Col md={8}>
                <strong>Mentoring Program Co-Chair</strong> <Badge bg='secondary'>Leadership</Badge><br/>
                <a href='https://www.usenix.org/conference/soups2020' target='_blank' rel='noopener noreferrer'>16th Annual Symposium on Usable Privacy and Security (SOUPS)</a><br/>
                </Col>
                <Col className='text-end' md={3}>August 2020</Col>
            </Row>
            <br/>
            <Row>
                <Col md={8}>
                <strong>Enterprise Design Thinking Co-Creator</strong> <Badge bg='secondary'>Certificate</Badge><br/>
                IBM, Ottawa, Ontario<br/>
                <ul>
                    <li>Learn more about the <a href='https://www.ibm.com/design/thinking/page/badges/core-skills#Co-Creator' target='_blank' rel='noopener noreferrer'>Co-Creator</a> skillset and badge criteria.</li>
                </ul>
                </Col>
                <Col className='text-end' md={3}>December 2019</Col>
            </Row>
            <br/>
        </section>
      </Container>
    </div>
  );
}

export default Resume;