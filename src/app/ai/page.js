export const metadata = {
  title: 'AI Work',
  description: 'How Daniela Napoli approaches AI responsibly in UX research: a do/don\'t framework, the thinking behind it, and what she\'s built and learned.',
  alternates: { canonical: '/ai' },
  openGraph: {
    title: 'AI Work | Daniela Napoli, PhD',
    description: 'How Daniela Napoli approaches AI responsibly in UX research: a do/don\'t framework, the thinking behind it, and what she\'s built and learned.',
  },
};

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HowIUseAI() {
  return (
    <div className='HowIUseAI'>
      <section id='content'>
        <Container fluid='md'>

          {/* Hero */}
          <Row className='mb-4'>
              <h1 className='display-4 fw-bold'>Putting AI in practice</h1>
          </Row>
          <Row className='mb-5'>
              <Col>
                  <p className='fs-5'>
                   AI makes researchers nervous, and that's fair: it can mislead us, and it makes it easier to find the answer we want instead of the one we need. 
                   So I build my own AI tools, test them against real people, and share what I learn with peers, because knowing when to step away from AI matters more than knowing how to use it.
                  </p>
              </Col>
          </Row>

          <Row className='mb-5 g-4'>
            {/* Case study: UXR Claude Skill */}
            <Col md={6}>
              <div className='bg-light rounded-3 p-4 p-md-5 h-100'>
                <h3>UXR Claude skill</h3>
                <p className='text-uppercase small fw-bold text-primary mb-3'>Featured &middot; Claude &middot; Open source</p>
                <p className='display-5 fw-bold mb-0'>5</p>
                <p className='text-muted small mb-3'>websites tested &middot; 200+ reads &middot; 15 repo clones</p>
                <p className='text-uppercase small fw-bold text-muted mb-1'>Outcome</p>
                <p className='small mb-3'>Open-source skill that the research community is reading and cloning.</p>
                <p className='fw-bold mb-3'>I built a Claude skill to replace myself in conducting usability heuristic evaluations, then ran it across five websites to see what would hold up.</p>
                <p className='mb-0'>
                  It turns out AI can do a lot. But it&rsquo;s probabilistic. Early iterations confidently flagged problems that didn&rsquo;t exist, especially against dynamic content the model couldn&rsquo;t actually verify.
                  So, the skill could generate some findings but it could not decide which findings were valid and worthwhile pursuing. That&rsquo;s where the researcher&rsquo;s work begins.
                </p>
                <p className='mb-0'>
                  <a href='https://hellodaniela.substack.com/p/ai-heuristic-evaluation-building' target='_blank' rel='noopener noreferrer' title="Part 1: Building the skill. Daniela's Substack. Opens in a new tab." className='mt-2 d-inline-block'>Read Part 1: Building the skill</a>
                </p>
                <p className='mb-0'>
                  <a href='https://hellodaniela.substack.com/p/uxr-claude-skill-evaluation' target='_blank' rel='noopener noreferrer' title="Part 2: Five Websites, One Claude Skill, and the Thing Prompts Can't Fix. Daniela's Substack. Opens in a new tab." className='mt-2 d-inline-block'>Read Part 2: Five Websites, One Claude Skill, and the Thing Prompts Can&rsquo;t Fix</a>
                </p>
                <p className='mb-0'>
                  <a href='https://github.com/danielanapoli/ux-heuristic-evaluation' target='_blank' rel='noopener noreferrer' title="Daniela's GitHub repository. Opens in a new tab." className='mt-2 d-inline-block'>Download the skill on GitHub</a>
                </p>
              </div>
            </Col>

            {/* Remaining cards */}
            <Col md={6}>
              <div className='d-flex flex-column gap-3 h-100'>
                <div className='border rounded p-3 position-relative'>
                  <p className='text-uppercase small fw-bold text-muted mb-2'>Privacy and AI</p>
                  <p className='mb-0'>We spoke to older adults across Canada about their needs and privacy expectations in remote healthcare technology. Unexpectedly, many had a lot to say about AI and the exciting (but sometimes scary) potential implications on future solutions.</p>
                  <p className='mb-0'><a href='https://link.springer.com/chapter/10.1007/978-3-031-92840-6_5' className='stretched-link mt-2 d-inline-block'>Read my conference paper</a></p>
                  <p className='mb-0'><a href='https://www.slideshare.net/slideshow/2025-wisdom-exchange-program-presentation/284464604' className='stretched-link mt-2 d-inline-block'>See slides for my invited talk</a></p>
                </div>
                <div className='border rounded p-3 position-relative'>
                  <p className='text-uppercase small fw-bold text-muted mb-2'>Prototyping with AI</p>
                  <p className='mb-0'>Designing and rapid prototyping an AI-enabled UX research repository that connects what researchers produce to what teams actually use when making product decisions.</p>
                  <p className='mb-0'><a href='/user-research/concept-testing/case-study' className='stretched-link mt-2 d-inline-block'>Read about the research repository</a></p>
                </div>
                <div className='border rounded p-3 position-relative'>
                  <p className='text-uppercase small fw-bold text-muted mb-2'>Fast, cheap, not quite human</p>
                  <p className='mb-0'>Testing my portfolio site with 10 Claude-generated synthetic recruiter personas alongside 1 real participant to see whether AI can stand in for human usability testing.</p>
                  <p className='mb-0'><a href='https://hellodaniela.substack.com/p/fast-cheap-not-quite-human-creating' target='_blank' rel='noopener noreferrer' title="Fast, Cheap, Not Quite Human: Creating Synthetic Users. Daniela's Substack. Opens in a new tab." className='stretched-link mt-2 d-inline-block'>Read the post on my Substack</a></p>
                </div>
                <div className='border rounded p-3'>
                  <p className='text-uppercase small fw-bold text-muted mb-2'>Building AI Fluency</p>
                  <p className='mb-0'>I am deepening my AI fluency through structured learning, including <a href='https://anthropic.skilljar.com/ai-fluency-framework-foundations' target='_blank' rel='noopener noreferrer' title='Anthropic. Opens in a new tab.'>Anthropic&rsquo;s AI Fluency Framework</a>. I bring my lessons learned back to my teams to support their AI skills development.</p>
                </div>
              </div>
            </Col>
          </Row>

          {/* Case study: Persona Automation */}
          {/*
          <Row className='mb-5 g-4 position-relative'>
            <Col md={4}>
              <h3>Persona automation</h3>
              <p className='text-muted small mb-3'>Personas &middot; Python</p>
              <p className='fs-3 fw-bold mb-0'>In use today</p>
              <p className='text-muted small mb-3'>across CIHI departments &amp; marketing analytics</p>
              <p className='text-uppercase small fw-bold text-muted mb-1'>Outcome</p>
              <p className='small mb-0'>Static personas turned into a system that teams act on.</p>
            </Col>
            <Col md={8}>
              <p className='fw-bold mb-3'>I turned personas into a rule-based system to track audiences.</p>
              <p>
                Personas sitting in a research report don&rsquo;t change how teams make decisions. I worked with researchers and subject matter experts at the Canadian Institute for Health Information (CIHI) to define persona characteristics, then built rule-based classification systems that operationalized them across departments. CIHI&rsquo;s marketing department adopted the system to segment clients systematically, enabling digital analytics that map signed-in visitors to the persona framework. Teams still use the outputs today.
              </p>
              <p>
                Pre-dating current AI tools, my program was designed so machine learning could later replace more rudimentary automations. This meant I focused on the key goals of the automation processes without focusing on technical builds. Ultimately, landing on validated data structures that future AI could easily plug into.
              </p>
              <p>
                <a href='/user-research/automation' rel='noopener noreferrer' title="Daniela's persona integration and research automation work." className='stretched-link'>Read more about my automation work</a>
              </p>
            </Col>
          </Row>
          *}

          <Row className='mb-5 g-4 position-relative'>
            <Col md={4}>
              <h3>Requirements discovery</h3>
              <p className='text-muted small mb-3'>Discovery &middot; UX for APIs</p>
              <p className='display-5 fw-bold mb-0'>3</p>
              <p className='text-muted small mb-3'>generative studies &mdash; survey, interviews, concept testing</p>
              <p className='text-uppercase small fw-bold text-muted mb-1'>Outcome</p>
              <p className='small mb-0'>Requirements that make AI actually work for users downstream.</p>
            </Col>
            <Col md={8}>
              <p className='fw-bold mb-3'>Building a clear picture of the problem space before expensive product directions get set.</p>
              <p>
                Early product decisions made without a clear picture of the problem space are expensive to undo. I help teams build that picture before the direction is set.
              </p>
              <p>
                I work with technical leads to translate user insights into requirements for data, metadata, and APIs. Recent work led three generative studies (survey, interviews, concept testing) to inform requirements for a product that needs to support both human use and automated system access.
              </p>
              <p>
                This user-centred collaboration is where research stops being a report and starts being implemented. These recommendations are what make AI actually work for users downstream.
              </p>
              <p>
                <a href='/user-research/discovery/case-study' rel='noopener noreferrer' title="Daniela's requirements discovery work." className='stretched-link'>Read more about my discovery work</a>
              </p>
            </Col>
          </Row>
          */}



          {/* Stats 
          <Row className='mb-5 g-3'>
            <Col xs={6} md={3}>
              <p className='display-5 fw-bold mb-0'>5</p>
              <p className='text-muted small'>Websites heuristically tested</p>
            </Col>
            <Col xs={6} md={3}>
              <p className='display-5 fw-bold mb-0'>200+</p>
              <p className='text-muted small'>Reads on the build write-up</p>
            </Col>
            <Col xs={6} md={3}>
              <p className='display-5 fw-bold mb-0'>3</p>
              <p className='text-muted small'>Generative studies run</p>
            </Col>
            <Col xs={6} md={3}>
              <p className='display-5 fw-bold mb-0'>TAGS</p>
              <p className='text-muted small'>Persona tagging system in use today</p>
            </Col>
          </Row>
          */}

          
        </Container>
      </section>
    </div>
  );
}

export default HowIUseAI;
