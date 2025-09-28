import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import BreadcrumbItem from 'react-bootstrap/BreadcrumbItem';

import YoutubeEmbed from '@/components/YoutubeEmbed/YoutubeEmbed';
import SlidesEmbed from '@/components/SlidesEmbed/SlidesEmbed';

function AcademicPublications() {
  return (
    <div className="AcademicPublications">
      <section id="content">
            <Container>
            <Breadcrumb>
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem href="/academic">Academic Portfolio</BreadcrumbItem>
            <BreadcrumbItem active>Paper Publications</BreadcrumbItem>
            </Breadcrumb>
            <h1>Paper Publications</h1>
            <br/>
        <Row>
            <Col>
              <a href="https://dl.acm.org/doi/abs/10.1145/3170427.3180292" target="_blank" rel="noopener noreferrer" title="A link to the ACM Digital Library. Opens in a new tab."><h3>Developing Accessible and Usable Security (ACCUS) Heuristics</h3></a>
              <Badge bg="secondary">Extended Abstract</Badge> <Badge bg="secondary">Presentation</Badge>
              <br/>
              <br/>
              <p>Usable security and web accessibility are often treated as separate issues. Existing research does not adequately address how users with vision loss secure their online experiences.</p>
              <p>We created heuristics that merge both fields and evaluated ten websites, uncovering multiple issues that prevent users from following standard security advice.</p>
              <p><strong>Downloads:</strong> 362<br/></p>
              <p><strong>Citations:</strong> 24<br/></p>
            </Col>
            <Col md={4}>
              <div className='smaller-div'>
                <SlidesEmbed embedId={"https://www.slideshare.net/slideshow/embed_code/key/8e3R7RXhawyezP?hostedIn=slideshare&page=upload"}/>
              </div>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col>
              <a href="https://link.springer.com/chapter/10.1007/978-3-031-92840-6_5" target="_blank" rel="noopener noreferrer" title="A link to the Springer research database. Opens in a new tab."><h3>Exploring User Perspectives on Data Collection, Data Sharing Preferences, and Privacy Concerns with Remote Healthcare Technology</h3></a>
              <Badge bg="secondary">Full-paper</Badge> <Badge bg="secondary">Presentation</Badge>
              <br/>
              <br/>
             <p>Remote healthcare technology enhances access to quality care and improves diagnoses through continuous monitoring.</p>
             <p>We surveyed 384 people in Canada aged 20 to 93 years old to explore participants’ comfort with data collection, sharing preferences, and potential privacy concerns related to remote healthcare technology. We explore these topics within the context of various healthcare scenarios including health emergencies and managing chronic health conditions.</p>
             <p><strong>Downloads:</strong> 177</p>
             <p><strong>Citations:</strong> 1</p>
            </Col>
            <Col md={4}>
              <div className='smaller-div'>
                <SlidesEmbed embedId={"https://www.slideshare.net/slideshow/embed_code/key/hv7R1brxl5lmD?startSlide=1"}/>
              </div>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col>
              <a href="https://link.springer.com/chapter/10.1007/978-3-031-94159-7_24" target="_blank" rel="noopener noreferrer" title="A link to the Springer research database. Opens in a new tab."><h3>Helpful but Terrifying: Older Adults’ Perspectives of AI in Remote Healthcare Technology</h3></a>
              <Badge bg="secondary">Poster</Badge> <Badge bg="secondary">Presentation</Badge>
              <br/><br/>
              <p>Canada is prioritizing digital healthcare solutions to help address staffing shortages, access inequities, and the needs of an aging population where remote healthcare can be critical for sustaining specialized and home care services.</p>
              <p>We interviewed 21 Canadians aged 65 to 87 with chronic health conditions about remote healthcare technology. They were interested in AI features but had concerns about safety and privacy. While they recognized that AI integration is inevitable, they felt powerless to avoid AI-driven solutions when seeking care.</p>
              <p><strong>Downloads:</strong> 218</p>
              <p><strong>Citations:</strong> 0</p>
            </Col>
            <Col md={4}>
              <div className='smaller-div'>
                <SlidesEmbed embedId={"https://www.slideshare.net/slideshow/embed_code/key/epGU6OoTUnkQ9O?startSlide=1"}/>
              </div>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col>
            <a href="https://www.usenix.org/conference/soups2021/presentation/napoli" target="_blank" rel="noopener noreferrer" title="A link to the USENIX website. Opens in a new tab."><h3>"I'm Literally Just Hoping This Will Work:'' Obstacles Blocking the Online Security and Privacy of Users with Visual Disabilities</h3></a>
              <Badge bg="secondary">Full-paper</Badge> <Badge bg="secondary">Presentation</Badge>
              <br/><br/>
              <p>To manage security and privacy threats effectively, users need to perceive relevant information. However, accessibility barriers prevent users with visual disabilities from accessing this information, which can lead to misinterpretations of their security and privacy.</p>
              <p>We studied how these users protect their online security by observing their interactions with Gmail, Amazon, and a phishing site mimicking CNIB, a well-known organization. We also conducted semi-structured interviews to understand their real-world concerns.</p>
              <p>Our analysis identified serious usability issues that caused risky behaviors or compromises between accessibility and security, particularly when accessibility software like JAWS hindered risk identification. We outlined four states of security and privacy experienced during sensitive tasks and provided design recommendations to improve communication of security information for users with visual disabilities.</p>
              <p><strong>Downloads:</strong> N/A</p>
              <p><strong>Citations:</strong> 29</p>
            </Col>
            <Col md={4}>
              <YoutubeEmbed embedId="wPes4YF4bxY" />
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col>
              <a href="https://www.usenix.org/conference/soups2020/presentation/napoli" target="_blank" rel="noopener noreferrer" title="A link to the USENIX website. Opens in a new tab."><h3>Something Doesn’t Feel Right: Using Thermal Warnings to Improve User Security Awareness</h3></a>
              <Badge bg="secondary">Extended Abstract</Badge> <Badge bg="secondary">Presentation</Badge>
              <br/><br/>
              <p>Embodied cognition posits that understanding is closely linked to the environment and physical senses. We explored a new method to enhance security awareness through thermal notifications.</p>
              <p>In this paper, we present our system, NoViz-Thermal, and evaluate its effectiveness in communicating TLS certificate security. We identified accessibility and usability issues but believe that thermal stimulation can boost users' confidence in making security assessments. Additionally, thermal warnings may address the limitations of visual alerts and the challenges posed by display-less IoT technology.</p>
              <p><strong>Downloads:</strong> N/A</p>
              <p><strong>Citations:</strong> 4</p>
            </Col>
            <Col md={4}>
              <YoutubeEmbed embedId={"c_swgoqTOw8"}/>
            </Col>
        </Row>
        <Row>
            <p className='smaller-text'>*Note: Metrics are estimates. Citations are tracked by Google Scholar, and downloads are tracked by the corresponding publisher's digital library if available.</p>
        </Row>
        </Container>
      </section>
    </div>
  );
}

export default AcademicPublications
