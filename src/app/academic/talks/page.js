export const metadata = {
  title: 'Talks & Workshops',
  description: 'Invited talks and workshops on accessible design, usable privacy, and AI in remote healthcare technology. Presentations at HCI conferences and design events.',
  alternates: { canonical: '/academic/talks' },
};

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

import YoutubeEmbed from '@/components/YoutubeEmbed/YoutubeEmbed';
import SlidesEmbed from '@/components/SlidesEmbed/SlidesEmbed';
import CustomBreadcrumb from '@/components/BreadCrumb/BreadCrumb';

function AcademicTalks() {
  return (
    <div className="AcademicTalks">
      <section id="content">
        <Container fluid='md'>
          <CustomBreadcrumb/>
          <h1 className="display-4 fw-bold mb-4">Talks and Workshops</h1>

          <div className='border rounded p-4 mb-4'>
            <Row className='g-4 align-items-center'>
              <Col xs={12} md={7}>
                <div className='mb-2'>
                  <Badge bg="secondary">Presentation</Badge>
                </div>
                <h2 className='mb-2'>Considering Privacy &amp; AI in Remote Healthcare Technology for Older Adults</h2>
                <p className='mb-3'>We spoke to older adults across Canada about their needs and privacy expectations in remote healthcare technology. Unexpectedly, many had a lot to say about AI and the exciting (but sometimes scary) potential implications on future solutions.</p>
                <p className='text-muted small mb-2'>Wisdom Exchange Project &middot; December 2025</p>
                <a href="https://www.wisdomexchangeproject.org/home" target="_blank" rel="noopener noreferrer" title="A link to the Wisdom Exchange Project website. Opens in a new tab.">View the Wisdom Exchange Project</a>
              </Col>
              <Col xs={12} md={5}>
                <SlidesEmbed embedId={"https://www.slideshare.net/slideshow/embed_code/key/AdMkQXxrqTzC0Q?hostedIn=slideshare&page=upload"} title="Slides: Considering Privacy & AI in Remote Healthcare Technology for Older Adults" />
              </Col>
            </Row>
          </div>

          <div className='border rounded p-4 mb-4'>
            <Row className='g-4 align-items-center'>
              <Col xs={12} md={7}>
                <div className='mb-2'>
                  <Badge bg="secondary">Presentation</Badge>
                </div>
                <h2 className='mb-2'>Remote Healthcare Technology Use Cases and the Contextual Integrity of Older Adult User Privacy</h2>
                <p className='mb-3'>Older adults' privacy perspectives can be context-dependent, and their willingness to make privacy tradeoffs can vary depending on healthcare contexts.</p>
                <p className='text-muted small mb-2'>5th Annual Symposium on Applications of Contextual Integrity &middot; 2023</p>
                <a href="https://privaci.info/symposium/2023/cfp.html" target="_blank" rel="noopener noreferrer" title="A link to the CI Symposium website. Opens in a new tab.">View the CI Symposium</a>
              </Col>
              <Col xs={12} md={5}>
                <SlidesEmbed embedId={"https://www.slideshare.net/slideshow/embed_code/key/zsZeg71024rJW?hostedIn=slideshare&page=upload"} title="Slides: Remote Healthcare Technology Use Cases and the Contextual Integrity of Older Adult User Privacy" />
              </Col>
            </Row>
          </div>

          <div className='border rounded p-4 mb-4'>
            <Row className='g-4 align-items-center'>
              <Col xs={12} md={7}>
                <div className='mb-2'>
                  <Badge bg="secondary" className='me-1'>Presentation</Badge>
                  <Badge bg="secondary">Workshop</Badge>
                </div>
                <h2 className='mb-2'>The U in UX Can Be For Everyone: Accessible and Usable Privacy</h2>
                <p className='mb-3'>Privacy-conscious designs can integrate accessibility-related principles for truly inclusive and safe solutions.</p>
                <p className='text-muted small mb-2'>uXperience Think Privacy Design Jam &middot; University of Waterloo</p>
                <a href="https://uwaterloo.ca/stratford-school-of-interaction-design-and-business/uxperience-think-privacy" target="_blank" rel="noopener noreferrer" title="A link to the University of Waterloo website. Opens in a new tab.">View the uXperience Think Privacy Design Jam</a>
              </Col>
              <Col xs={12} md={5}>
                <YoutubeEmbed embedId={"hxwTL7ljHHU"} title="Video: The U in UX Can Be For Everyone — Accessible and Usable Privacy" />
              </Col>
            </Row>
          </div>

          <div className='border rounded p-4 mb-4'>
            <Row className='g-4 align-items-center'>
              <Col xs={12} md={7}>
                <div className='mb-2'>
                  <Badge bg="secondary">Presentation</Badge>
                </div>
                <h2 className='mb-2'>Design Tips to Help Non-Visual Visitors Stay Secure Online</h2>
                <p className='mb-3'>With some extra steps, website security features can be made even more inclusive.</p>
                <p className='text-muted small mb-2'>10th Annual Accessibility Conference: Designing for Diverse Abilities &middot; University of Guelph</p>
                <a href="https://guides.uoguelph.ca/event/accessibility-conference-designing-diverse-abilities" target="_blank" rel="noopener noreferrer" title="A link to the University of Guelph website. Opens in a new tab.">View the Accessibility Conference</a>
              </Col>
              <Col xs={12} md={5}>
                <SlidesEmbed embedId={"https://www.slideshare.net/slideshow/embed_code/key/GoBnk9VwftLcdo?hostedIn=slideshare&page=upload"} title="Slides: Design Tips to Help Non-Visual Visitors Stay Secure Online" />
              </Col>
            </Row>
          </div>

        </Container>
      </section>
    </div>
  );
}

export default AcademicTalks
