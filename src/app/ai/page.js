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
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/CardBody';
import CardTitle from 'react-bootstrap/CardTitle';
import CardText from 'react-bootstrap/CardText';

function HowIUseAI() {
  return (
    <div className='HowIUseAI'>
      <section id='content'>
        <Container fluid='md'>

          <Row className='mb-4'>
            <Col className='fs-5'>
              <h1>AI is part of my practice. Not just a topic I research.</h1>
              <p className='fs-4'>
                I shape corporate products to be AI-friendly. I build tools to accelerate UX research. And I use it daily to sharpen how I understand users&rsquo; needs in AI.
              </p>
            </Col>
          </Row>

          <Row className='mb-4'>
            <Col className='fs-5'>
              <h2>My AI approach</h2>
              <p>
                AI makes researchers nervous; the concern is legitimate. Not only can AI mislead, it makes it easier to get the answer we&rsquo;re looking for rather than the one we actually need. Knowing how to use it responsibly when conducting research is a skill. Knowing when to step away from it entirely is the more important one. These two spaces are where my approach with AI lives.
              </p>
              <p>
                I&rsquo;ve been working through this position for years, before the current AI wave made it the conversation. My approach is grounded in three kinds of experience:
              </p>
              <ul>
                <li>Technical grounding in what LLMs actually do (and don&rsquo;t do)</li>
                <li>Builder experience from creating AI tools and watching where they fail</li>
                <li>Lived experience using AI daily in and outside of work contexts</li>
              </ul>
            </Col>
          </Row>

          <Row className='mb-2'>
            <Col className='fs-5'>
              <h2>Some of my AI work</h2>
            </Col>
          </Row>

          <Row className='mb-4 g-4'>
            <Col md={4} className='d-flex'>
              <Card className='h-100 border-0'>
                <CardBody className='d-flex flex-column'>
                  <CardTitle as='h4'>UXR Claude Skill</CardTitle>
                  <CardText>
                    I tried to replace myself with AI and assessed what came back. I built a Claude skill that conducts usability heuristic evaluations, then ran it across five websites to see what would hold up.
                  </CardText>
                  <CardText>
                    It turns out AI can do a lot. But it&rsquo;s probabilistic. Early iterations confidently flagged problems that didn&rsquo;t exist, especially against dynamic content the model couldn&rsquo;t actually verify. The fix wasn&rsquo;t smarter prompts. It was making freshness verification a required step rather than a nice-to-have. In practice, that means documented assumptions on every claim, clear separation between what the AI generated and what got verified, and freshness checks built into the workflow.
                  </CardText>
                  <CardText>
                    The skill could generate findings. What it couldn&rsquo;t do was decide which findings to take to a team. That&rsquo;s where the researcher&rsquo;s work begins. The skill is open-sourced, with over 200 reads across the two-part build write-up on Substack and six repo clones to date.
                  </CardText>
                  <ul>
                    <li>
                      <a href='https://hellodaniela.substack.com/p/ai-heuristic-evaluation-building' target='_blank' rel='noopener noreferrer' title="Part 1: Building the skill. Daniela's Substack. Opens in a new tab.">
                        Read Part 1: Building the skill
                      </a>
                    </li>
                    <li>
                      <a href='https://hellodaniela.substack.com/p/uxr-claude-skill-evaluation' target='_blank' rel='noopener noreferrer' title="Part 2: Five Websites, One Claude Skill, and the Thing Prompts Can't Fix. Daniela's Substack. Opens in a new tab.">
                        Read Part 2: Five Websites, One Claude Skill, and the Thing Prompts Can&rsquo;t Fix
                      </a>
                    </li>
                    </ul>
                  <div>
                    <a href='https://github.com/danielanapoli' target='_blank' rel='noopener noreferrer' title="Daniela's GitHub repository. Opens in a new tab.">
                        Download the skill on GitHub
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col md={4} className='d-flex'>
              <Card className='h-100 border-0'>
                <CardBody className='d-flex flex-column'>
                  <CardTitle as='h4'>Persona Automation</CardTitle>
                  <CardText>
                    Personas sitting in a research report don&rsquo;t change how teams make decisions. I worked with researchers and subject matter experts at the Canadian Institute for Health Information (CIHI) to define persona characteristics, then built rule-based classification systems that operationalized them across departments. CIHI&rsquo;s marketing department adopted the system to segment clients systematically, enabling digital analytics that map signed-in visitors to the persona framework. Teams still use the outputs today.
                  </CardText>
                  <CardText>
                    I started to build these systems before the recent AI wave. The structures were designed so machine-learning could later replace more rudimentary automations. That meant focusing on key goals and purposes of the automation processes without focusing on technical builds. Ultimately, landing on validated data structures that future automation could easily plug into. 
                  </CardText>
                  <div>
                    <a href='/user-research/automation' rel='noopener noreferrer' title="Daniela's persona integration and research automation work.">
                      Read more about my automation work
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col md={4} className='d-flex'>
              <Card className='h-100 border-0'>
                <CardBody className='d-flex flex-column'>
                  <CardTitle as='h4'>Requirements Discovery</CardTitle>
                  <CardText>
                    Early product decisions made without a clear picture of the problem space are expensive to undo. I help teams build that picture before the direction is set.
                  </CardText>
                  <CardText>
                    I work with technical leads to translate user insights into requirements for data, metadata, and APIs. Recent work led three generative studies (survey, interviews, concept testing) to inform requirements for a product that needs to support both human use and automated system access. 
                  </CardText>
                  <CardText>
                    This user-centred collaboration is where research stops being a report and starts being implementation. These recommendations are what make AI <i>actually work</i> for users downstream.
                  </CardText>
                  <div>
                    <a href='/user-research/discovery/case-study' rel='noopener noreferrer' title="Daniela's requirements discovery work.">
                      Read more about my discovery work
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row className='mb-4'>
            <Col className='fs-5'>
              <h2>Where my thinking lives</h2>
              <p>
                I work through my thinking around AI on Substack. This is where I explore the questions that come up in practice, share what I&rsquo;m learning, and reflect on the implications for UX research, design, and beyond. Here are some of my recent posts:
              </p>
              <p>
                <a href='https://hellodaniela.substack.com/p/ai-cant-replace-a-researchers-empathy' target='_blank' rel='noopener noreferrer' title="AI Can't Replace a Researcher's Empathy. Daniela's Substack. Opens in a new tab.">
                  &ldquo;AI Can&rsquo;t Replace a Researcher&rsquo;s Empathy&rdquo;
                </a>
                <br />
                What will likely stay uniquely human in research even as AI improves.
              </p>
              <p>
                <a href='https://hellodaniela.substack.com/p/the-bot-is-the-easy-part-a-researchers' target='_blank' rel='noopener noreferrer' title="The Bot Is the Easy Part: A Researcher's Guide to Using AI for User Knowledge Mobilization. Daniela's Substack. Opens in a new tab.">
                  &ldquo;The Bot Is the Easy Part: A Researcher&rsquo;s Guide to Using AI for User Knowledge Mobilization&rdquo;
                </a>
                <br />
                Knowledge mobilization, AI, and the parts that still need human expertise and oversight.
              </p>
              <p>
                <a href='https://hellodaniela.substack.com/p/what-a-panel-of-design-leaders-reminded' target='_blank' rel='noopener noreferrer' title="What a Panel of Design Leaders Reminded Me About AI. Daniela's Substack. Opens in a new tab.">
                  &ldquo;What a Panel of Design Leaders Reminded Me About AI&rdquo;
                </a>
                <br />
                Reflections on a UX research and influence panel by Outwitly.
              </p>
              <p>
                <a href='https://hellodaniela.substack.com' target='_blank' rel='noopener noreferrer' title="Daniela's Substack. Opens in a new tab.">Read more on Substack</a>
              </p>
            </Col>
          </Row>

          <Row className='mb-4'>
            <Col className='fs-5'>
              <h2>What&rsquo;s next</h2>
              <p>
                I&rsquo;m building toward work that sits at the intersection of three threads I&rsquo;ve been pulling at.
              </p>
              <ul>
                <li>Designing a UX research repository that connects what researchers produce to what teams actually use when making product decisions. Currently in planning, with case studies to come.</li>
                <li>Deepening AI fluency through structured learning, including <a href="https://anthropic.skilljar.com/ai-fluency-framework-foundations" target="_blank" rel="noopener noreferrer" title="Anthropic. Opens in a new tab.">Anthropic&rsquo;s AI Fluency Framework</a>.</li>
                <li>Exploring how AI can build a stronger sense of duty to the people being researched, not just speed up research.</li>
              </ul>
              <p>
                More case studies to come. In the meantime, <a href="mailto:hello@danielanapoli.com">get in touch</a> if you want to discuss AI and UX research.
              </p>
            </Col>
          </Row>

        </Container>
      </section>
    </div>
  );
}

export default HowIUseAI;
