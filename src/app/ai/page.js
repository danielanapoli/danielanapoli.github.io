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
            <Col>
              <h1 className='display-4 fw-bold'>AI is part of my practice.<br />Not just a topic I research.</h1>
              <p className='fs-4 mt-3'>
                I shape corporate products to be AI-friendly. I build tools to accelerate UX research. And I use it daily to sharpen how I understand users&rsquo; needs in AI.
              </p>
            </Col>
          </Row>

          {/* Stats */}
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

          <hr className='mb-5' />

          {/* My AI Approach */}
          <Row className='mb-4'>
            <Col>
              <h2>My AI approach</h2>
              <p className='fs-4 fw-bold'>
                Knowing how to use AI responsibly when conducting research is a skill. Knowing when to step away from it entirely is the more important one.
              </p>
              <p>
                AI makes researchers nervous; the concern is legitimate. Not only can AI mislead, it makes it easier to get the answer we&rsquo;re looking for rather than the one we actually need. These two spaces are where my approach with AI lives.
              </p>
              <p>
                I&rsquo;ve been working through this position for years, before the current AI wave made it the conversation. My approach is grounded in three kinds of experience:
              </p>
            </Col>
          </Row>

          <Row className='mb-5 g-3'>
            <Col md={4}>
              <div className='border rounded p-3 h-100'>
                <p className='text-uppercase small fw-bold text-muted mb-2'>01 &mdash; Technical</p>
                <p className='mb-0'>Technical grounding in what LLMs actually do (and don&rsquo;t do)</p>
              </div>
            </Col>
            <Col md={4}>
              <div className='border rounded p-3 h-100'>
                <p className='text-uppercase small fw-bold text-muted mb-2'>02 &mdash; Builder</p>
                <p className='mb-0'>Builder experience from creating AI tools and watching where they fail</p>
              </div>
            </Col>
            <Col md={4}>
              <div className='border rounded p-3 h-100'>
                <p className='text-uppercase small fw-bold text-muted mb-2'>03 &mdash; Lived</p>
                <p className='mb-0'>Lived experience using AI daily in and outside of work contexts</p>
              </div>
            </Col>
          </Row>

          <hr className='mb-5' />

          {/* Some of my AI work */}
          <Row className='mb-4'>
            <Col>
              <h2>Some of my AI work</h2>
            </Col>
          </Row>

          {/* Work item 1: UXR Claude Skill */}
          <Row className='mb-5 g-4'>
            <Col md={4}>
              <h3>UXR Claude Skill</h3>
              <p className='text-muted small mb-3'>Claude &middot; Open source</p>
              <p className='display-5 fw-bold mb-0'>5</p>
              <p className='text-muted small mb-3'>websites tested &middot; 200+ reads &middot; 15 repo clones</p>
              <p className='text-uppercase small fw-bold text-muted mb-1'>Outcome</p>
              <p className='small mb-0'>Open-sourced skill the research community is reading and cloning.</p>
            </Col>
            <Col md={8}>
              <p className='fw-bold mb-3'>I tried to replace myself with AI &mdash; and learned exactly where a researcher&rsquo;s judgment still has to take over.</p>
              <p>
                I tried to replace myself with AI and assessed what came back. I built a Claude skill that conducts usability heuristic evaluations, then ran it across five websites to see what would hold up.
              </p>
              <p>
                It turns out AI can do a lot. But it&rsquo;s probabilistic. Early iterations confidently flagged problems that didn&rsquo;t exist, especially against dynamic content the model couldn&rsquo;t actually verify. The fix wasn&rsquo;t smarter prompts. It was making freshness verification a required step rather than a nice-to-have. In practice, that means documented assumptions on every claim, clear separation between what the AI generated and what got verified, and freshness checks built into the workflow.
              </p>
              <p>
                The skill could generate findings. What it couldn&rsquo;t do was decide which findings to take to a team. That&rsquo;s where the researcher&rsquo;s work begins. The skill is open-sourced, with over 200 reads across the two-part build write-up on Substack and six repo clones to date.
              </p>
              <p>
                <a href='https://hellodaniela.substack.com/p/ai-heuristic-evaluation-building' target='_blank' rel='noopener noreferrer' title="Part 1: Building the skill. Daniela's Substack. Opens in a new tab.">Read Part 1: Building the skill</a>
              </p>
              <p>
                <a href='https://hellodaniela.substack.com/p/uxr-claude-skill-evaluation' target='_blank' rel='noopener noreferrer' title="Part 2: Five Websites, One Claude Skill, and the Thing Prompts Can't Fix. Daniela's Substack. Opens in a new tab.">Read Part 2: Five Websites, One Claude Skill, and the Thing Prompts Can&rsquo;t Fix</a>
              </p>
              <p>
                <a href='https://github.com/danielanapoli/ux-heuristic-evaluation' target='_blank' rel='noopener noreferrer' title="Daniela's GitHub repository. Opens in a new tab.">Download the skill on GitHub</a>
              </p>
            </Col>
          </Row>

          <hr className='mb-5' />

          {/* Work item 2: Persona Automation */}
          <Row className='mb-5 g-4'>
            <Col md={4}>
              <h3>Persona Automation</h3>
              <p className='text-muted small mb-3'>CIHI &middot; Automation</p>
              <p className='fs-3 fw-bold mb-0'>In use today</p>
              <p className='text-muted small mb-3'>across CIHI departments &amp; marketing analytics</p>
              <p className='text-uppercase small fw-bold text-muted mb-1'>Outcome</p>
              <p className='small mb-0'>Static personas turned into a system teams act on.</p>
            </Col>
            <Col md={8}>
              <p className='fw-bold mb-3'>Turning static personas into rule-based systems teams actually use to make decisions.</p>
              <p>
                Personas sitting in a research report don&rsquo;t change how teams make decisions. I worked with researchers and subject matter experts at the Canadian Institute for Health Information (CIHI) to define persona characteristics, then built rule-based classification systems that operationalized them across departments. CIHI&rsquo;s marketing department adopted the system to segment clients systematically, enabling digital analytics that map signed-in visitors to the persona framework. Teams still use the outputs today.
              </p>
              <p>
                I started to build these systems before the recent AI wave. The structures were designed so machine-learning could later replace more rudimentary automations. That meant focusing on key goals and purposes of the automation processes without focusing on technical builds. Ultimately, landing on validated data structures that future automation could easily plug into.
              </p>
              <p>
                <a href='/user-research/automation' rel='noopener noreferrer' title="Daniela's persona integration and research automation work.">Read more about my automation work</a>
              </p>
            </Col>
          </Row>

          <hr className='mb-5' />

          {/* Work item 3: Requirements Discovery */}
          <Row className='mb-5 g-4'>
            <Col md={4}>
              <h3>Requirements Discovery</h3>
              <p className='text-muted small mb-3'>Discovery &middot; Data &amp; APIs</p>
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
                This user-centred collaboration is where research stops being a report and starts being implementation. These recommendations are what make AI <i>actually work</i> for users downstream.
              </p>
              <p>
                <a href='/user-research/discovery/case-study' rel='noopener noreferrer' title="Daniela's requirements discovery work.">Read more about my discovery work</a>
              </p>
            </Col>
          </Row>

          <hr className='mb-5' />

          {/* Where my thinking lives */}
          <Row className='mb-3'>
            <Col>
              <h2>Where my thinking lives</h2>
              <p>
                I work through my thinking around AI on Substack. This is where I explore the questions that come up in practice, share what I&rsquo;m learning, and reflect on the implications for UX research, design, and beyond. Here are some of my recent posts:
              </p>
            </Col>
          </Row>

          <Row className='mb-4 g-4'>
            <Col md={4}>
              <a href='https://hellodaniela.substack.com/p/ai-cant-replace-a-researchers-empathy' target='_blank' rel='noopener noreferrer' title="AI Can't Replace a Researcher's Empathy. Daniela's Substack. Opens in a new tab." className='fw-bold d-block mb-1'>
                &ldquo;AI Can&rsquo;t Replace a Researcher&rsquo;s Empathy&rdquo;
              </a>
              <p className='text-muted small mb-0'>What will likely stay uniquely human in research even as AI improves.</p>
            </Col>
            <Col md={4}>
              <a href='https://hellodaniela.substack.com/p/the-bot-is-the-easy-part-a-researchers' target='_blank' rel='noopener noreferrer' title="The Bot Is the Easy Part. Daniela's Substack. Opens in a new tab." className='fw-bold d-block mb-1'>
                &ldquo;The Bot Is the Easy Part: A Researcher&rsquo;s Guide to Using AI for User Knowledge Mobilization&rdquo;
              </a>
              <p className='text-muted small mb-0'>Knowledge mobilization, AI, and the parts that still need human expertise and oversight.</p>
            </Col>
            <Col md={4}>
              <a href='https://hellodaniela.substack.com/p/what-a-panel-of-design-leaders-reminded' target='_blank' rel='noopener noreferrer' title="What a Panel of Design Leaders Reminded Me About AI. Daniela's Substack. Opens in a new tab." className='fw-bold d-block mb-1'>
                &ldquo;What a Panel of Design Leaders Reminded Me About AI&rdquo;
              </a>
              <p className='text-muted small mb-0'>Reflections on a UX research and influence panel by Outwitly.</p>
            </Col>
          </Row>

          <Row className='mb-5'>
            <Col>
              <a href='https://hellodaniela.substack.com' target='_blank' rel='noopener noreferrer' title="Daniela's Substack. Opens in a new tab.">Read more on Substack &rarr;</a>
            </Col>
          </Row>

          <hr className='mb-5' />

          {/* What's next */}
          <Row className='mb-3'>
            <Col>
              <h2>What&rsquo;s next</h2>
              <p>
                I&rsquo;m building toward work that sits at the intersection of three threads I&rsquo;ve been pulling at.
              </p>
            </Col>
          </Row>

          <Row className='mb-4 g-3'>
            <Col md={4}>
              <div className='border rounded p-3 h-100'>
                <p className='text-uppercase small fw-bold text-muted mb-2'>Practice Development</p>
                <p className='mb-0'>Designing a UX research repository that connects what researchers produce to what teams actually use when making product decisions. Currently in planning, with case studies to come.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className='border rounded p-3 h-100'>
                <p className='text-uppercase small fw-bold text-muted mb-2'>AI Fluency</p>
                <p className='mb-0'>Deepening AI fluency through structured learning, including <a href='https://anthropic.skilljar.com/ai-fluency-framework-foundations' target='_blank' rel='noopener noreferrer' title='Anthropic. Opens in a new tab.'>Anthropic&rsquo;s AI Fluency Framework</a>.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className='border rounded p-3 h-100'>
              <p className='text-uppercase small fw-bold text-muted mb-2'>Responsible AI</p>
                <p className='mb-0'>Exploring how AI can build a stronger sense of duty to the people being researched, not just speed up research.</p>
              </div>
            </Col>
          </Row>

          <Row className='mb-5'>
            <Col>
              <p>More case studies to come. In the meantime, <a href='mailto:hello@danielanapoli.com'>get in touch</a> if you want to discuss AI and UX research.</p>
            </Col>
          </Row>

        </Container>
      </section>
    </div>
  );
}

export default HowIUseAI;
