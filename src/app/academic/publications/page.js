export const metadata = {
  title: 'Paper Publications',
  description: 'Peer-reviewed HCI publications on accessible security, visual disability, and remote healthcare privacy by Daniela Napoli. Published at SOUPS, HCII, and ACM.',
  alternates: { canonical: '/academic/publications' },
};

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

import YoutubeEmbed from '@/components/YoutubeEmbed/YoutubeEmbed';
import SlidesEmbed from '@/components/SlidesEmbed/SlidesEmbed';
import CustomBreadcrumb from '@/components/BreadCrumb/BreadCrumb';

function AcademicPublications() {
  return (
    <div className="AcademicPublications">
      <section id="content">
        <Container fluid='md'>
          <CustomBreadcrumb/>
          <h1 className="display-4 fw-bold mb-4">Paper Publications</h1>

          {/* 2025 */}
          <div className='border rounded p-4 mb-4'>
            <Row className='g-4 align-items-center'>
              <Col xs={12} md={7}>
                <div className='mb-2'>
                  <Badge bg="secondary" className='me-1'>Full-paper</Badge>
                  <Badge bg="secondary">Presentation</Badge>
                </div>
                <h2 className='mb-2'>Exploring User Perspectives on Data Collection, Data Sharing Preferences, and Privacy Concerns with Remote Healthcare Technology</h2>
                <p>Remote healthcare technology enhances access to quality care and improves diagnoses through continuous monitoring.</p>
                <p className='mb-3'>We surveyed 384 people in Canada aged 20 to 93 years old to explore participants' comfort with data collection, sharing preferences, and potential privacy concerns related to remote healthcare technology.</p>
                <p className='text-muted small mb-2'>553 reads &middot; 3 citations</p>
                <a href="https://link.springer.com/chapter/10.1007/978-3-031-92840-6_5" target="_blank" rel="noopener noreferrer" title="A link to the Springer research database. Opens in a new tab.">Read full publication on Springer</a>
              </Col>
              <Col xs={12} md={5}>
                <SlidesEmbed embedId={"https://www.slideshare.net/slideshow/embed_code/key/hv7R1brxl5lmD?startSlide=1"} title="Slides: Exploring User Perspectives on Data Collection, Data Sharing Preferences, and Privacy Concerns with Remote Healthcare Technology" />
              </Col>
            </Row>
          </div>

          <div className='border rounded p-4 mb-4'>
            <Row className='g-4 align-items-center'>
              <Col xs={12} md={7}>
                <div className='mb-2'>
                  <Badge bg="secondary" className='me-1'>Poster</Badge>
                  <Badge bg="secondary">Presentation</Badge>
                </div>
                <h2 className='mb-2'>Helpful but Terrifying: Older Adults' Perspectives of AI in Remote Healthcare Technology</h2>
                <p>Canada is prioritizing digital healthcare solutions to help address staffing shortages, access inequities, and the needs of an aging population where remote healthcare can be critical.</p>
                <p className='mb-3'>We interviewed 21 Canadians aged 65 to 87 with chronic health conditions about remote healthcare technology. They were interested in AI features but had concerns about safety and privacy. While they recognized that AI integration is inevitable, they felt powerless to avoid AI-driven solutions when seeking care.</p>
                <p className='text-muted small mb-2'>954 reads</p>
                <a href="https://link.springer.com/chapter/10.1007/978-3-031-94159-7_24" target="_blank" rel="noopener noreferrer" title="A link to the Springer research database. Opens in a new tab.">Read full publication on Springer</a>
              </Col>
              <Col xs={12} md={5}>
                <SlidesEmbed embedId={"https://www.slideshare.net/slideshow/embed_code/key/epGU6OoTUnkQ9O?startSlide=1"} title="Slides: Helpful but Terrifying: Older Adults' Perspectives of AI in Remote Healthcare Technology" />
              </Col>
            </Row>
          </div>

          {/* 2021 */}
          <div className='border rounded p-4 mb-4'>
            <Row className='g-4 align-items-center'>
              <Col xs={12} md={7}>
                <div className='mb-2'>
                  <Badge bg="secondary" className='me-1'>Full-paper</Badge>
                  <Badge bg="secondary">Presentation</Badge>
                </div>
                <h2 className='mb-2'>&ldquo;I&rsquo;m Literally Just Hoping This Will Work:&rdquo; Obstacles Blocking the Online Security and Privacy of Users with Visual Disabilities</h2>
                <p>To manage security and privacy threats effectively, users need to perceive relevant information. However, accessibility barriers prevent users with visual disabilities from accessing this information, which can lead to misinterpretations of their security and privacy.</p>
                <p className='mb-3'>We studied how these users protect their online security by observing their interactions with Gmail, Amazon, and a phishing site mimicking CNIB. We identified serious usability issues and outlined four states of security and privacy experienced during sensitive tasks.</p>
                <p className='text-muted small mb-2'>35 citations</p>
                <a href="https://www.usenix.org/conference/soups2021/presentation/napoli" target="_blank" rel="noopener noreferrer" title="A link to the USENIX website. Opens in a new tab.">Read full publication on USENIX</a>
              </Col>
              <Col xs={12} md={5}>
                <YoutubeEmbed embedId="wPes4YF4bxY" title="Talk: I'm Literally Just Hoping This Will Work — Obstacles Blocking the Online Security and Privacy of Users with Visual Disabilities" />
              </Col>
            </Row>
          </div>

          {/* 2020 */}
          <div className='border rounded p-4 mb-4'>
            <Row className='g-4 align-items-center'>
              <Col xs={12} md={7}>
                <div className='mb-2'>
                  <Badge bg="secondary" className='me-1'>Extended Abstract</Badge>
                  <Badge bg="secondary">Presentation</Badge>
                </div>
                <h2 className='mb-2'>Something Doesn&rsquo;t Feel Right: Using Thermal Warnings to Improve User Security Awareness</h2>
                <p>Embodied cognition posits that understanding is closely linked to the environment and physical senses. We explored a new method to enhance security awareness through thermal notifications.</p>
                <p className='mb-3'>We present our system, NoViz-Thermal, and evaluate its effectiveness in communicating TLS certificate security. We identified accessibility and usability issues but believe that thermal stimulation can boost users&rsquo; confidence in making security assessments.</p>
                <p className='text-muted small mb-2'>5 citations</p>
                <a href="https://www.usenix.org/conference/soups2020/presentation/napoli" target="_blank" rel="noopener noreferrer" title="A link to the USENIX website. Opens in a new tab.">Read full publication on USENIX</a>
              </Col>
              <Col xs={12} md={5}>
                <YoutubeEmbed embedId={"c_swgoqTOw8"} title="Talk: Something Doesn't Feel Right — Using Thermal Warnings to Improve User Security Awareness" />
              </Col>
            </Row>
          </div>

          {/* 2018 */}
          <div className='border rounded p-4 mb-4'>
            <Row className='g-4 align-items-center'>
              <Col xs={12} md={7}>
                <div className='mb-2'>
                  <Badge bg="secondary" className='me-1'>Extended Abstract</Badge>
                  <Badge bg="secondary">Presentation</Badge>
                </div>
                <h2 className='mb-2'>Developing Accessible and Usable Security (ACCUS) Heuristics</h2>
                <p>Usable security and web accessibility are often treated as separate issues. Existing research does not adequately address how users with vision loss secure their online experiences.</p>
                <p className='mb-3'>We created heuristics that merge both fields and evaluated ten websites, uncovering multiple issues that prevent users from following standard security advice.</p>
                <p className='text-muted small mb-2'>24 citations</p>
                <a href="https://dl.acm.org/doi/abs/10.1145/3170427.3180292" target="_blank" rel="noopener noreferrer" title="A link to the ACM Digital Library. Opens in a new tab.">Read full publication on ACM Digital Library</a>
              </Col>
              <Col xs={12} md={5}>
                <SlidesEmbed embedId={"https://www.slideshare.net/slideshow/embed_code/key/8e3R7RXhawyezP?hostedIn=slideshare&page=upload"} title="Slides: Developing Accessible and Usable Security (ACCUS) Heuristics" />
              </Col>
            </Row>
          </div>

          <Row>
            <Col>
              <p className='smaller-text'>Metrics are estimates. Citations are tracked by Google Scholar; reads are reported by each publisher&rsquo;s digital library where available. Entries without data are omitted rather than shown as zero.</p>
            </Col>
          </Row>

        </Container>
      </section>
    </div>
  );
}

export default AcademicPublications
