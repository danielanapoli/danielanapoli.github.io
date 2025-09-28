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
          <BreadcrumbItem active>Talks and Workshops</BreadcrumbItem>
        </Breadcrumb>
        <h1>Talks and Workshops</h1>
        <br/>
        <Row>
            <Col>
              <h3>Remote Healthcare Technology Use Cases and the Contextual Integrity of Older Adult User Privacy</h3>
              <Badge bg="secondary">Presentation</Badge>
              <br/><br/>
              <p>
                Older adults' privacy perspectives can be context-dependent, and their willingness to make privacy tradeoffs can vary depending on healthcare contexts. 
                This talk took place at the <a href="https://privaci.info/symposium/2023/cfp.html" target="_blank" rel="noopener noreferrer" title="A link to the CI Symposium's website. Opens in a new tab.">5th Annual Symposium on Applications of Contextual Integrity</a>. 
              </p>
            </Col>
            <Col md={4}>
            <div className='smaller-div'>
              <SlidesEmbed embedId={"https://www.slideshare.net/slideshow/embed_code/key/zsZeg71024rJW?hostedIn=slideshare&page=upload"} />
            </div>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col>
              <h3>The U in UX can be For Everyone: Accessible and Usable Privacy</h3>
              <Badge bg="secondary">Presentation</Badge> <Badge bg="secondary">Workshop</Badge>
              <br/><br/>
              <p>
                Privacy-conscious designs can integrate accessibility-related principles for truly inclusive and safe solutions. 
                This talk was part of a larger online workshop I ran for the <a href="https://uwaterloo.ca/stratford-school-of-interaction-design-and-business/uxperience-think-privacy" target="_blank" rel="noopener noreferrer" title="A link to the University of Waterloo website. Opens in a new tab.">uXperience | Think Privacy Design Jam</a>.
              </p>
            </Col>
            <Col md={4}>
              <YoutubeEmbed embedId={"hxwTL7ljHHU"}/>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col>       
              <h3>Design Tips to Help Non-Visual Visitors Stay Secure Online</h3>
              <Badge bg="secondary">Presentation</Badge>
              <br/><br/>
              <p>
                With some extra steps, website security features can be made even more inclusive.
                This invited talk took place at the <a href="https://guides.uoguelph.ca/event/accessibility-conference-designing-diverse-abilities" target="_blank" rel="noopener noreferrer" title="A link to the University of Guelph website. Opens in a new tab.">10th Annual Accessibility Conference: Designing for Diverse Abilities</a> for accessibility practitioners. 
              </p> 
            </Col>
            <Col md={4}>
            <div className='smaller-div'>
              <SlidesEmbed embedId={"https://www.slideshare.net/slideshow/embed_code/key/GoBnk9VwftLcdo?hostedIn=slideshare&page=upload"} />
            </div>
            </Col>
          </Row>
      </Container>
      </section>
    </div>
  );
}

export default AcademicPublications
