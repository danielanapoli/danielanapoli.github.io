export const metadata = {
  title: 'How I Use AI',
  description: 'How Daniela Napoli approaches AI responsibly in UX research: a do/don\'t framework, the thinking behind it, and what she\'s built and learned.',
  alternates: { canonical: '/ai' },
  openGraph: {
    title: 'How I Use AI | Daniela Napoli',
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
import Table from 'react-bootstrap/Table';

function HowIUseAI() {
  return (
    <div className='HowIUseAI'>
      <section id='content'>
        <Container fluid='md'>

          <Row className='mb-4'>
            <Col className='fs-5'>
              <h1>AI is part of my practice. Not just a topic I research.</h1>
              <p className='fs-4'>
                I shape corporate products to be AI-friendly. I build tools to accelerate UX research. And I use it daily to sharpen how I understand users' needs in AI.
              </p>
            </Col>
          </Row>

          <Row className='mb-4'>
            <Col className='fs-5'>
              <h2>My AI approach</h2>
              <p>
                AI makes researchers nervous; the concern is legitimate. Not only can AI mislead, it makes it easier to get the answer we're looking for rather than the one we actually need. Knowing how to use it responsibly when conducting research is a skill. Knowing when to step away from it entirely is the more important one. These two spaces are where my approach with AI lives.
              </p>
              <p>
                My approach is grounded in three kinds of experience: 
              </p>
                <ul>
                    <li>Technical grounding in what LLM models actually do (and don't do)</li>
                    <li>Tinkering experience from creating AI tools and watching where they fail</li>
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
                      It turns out AI can do a lot. But it's probabilistic. My early iterations confidently flagged problems that didn't exist, especially against dynamic content the model couldn't actually verify. The fix wasn't smarter prompts. It was making seemingly "nice-to-have" steps required. The skill could generate findings, but it couldn't decide which findings to take to a team. That's where the researcher's work begins.
                    </CardText>
                  <ul className='mt-auto'>
                    <li>
                      <a href='https://hellodaniela.substack.com/p/ai-heuristic-evaluation-building' target='_blank' rel='noopener noreferrer' title="Part 1: Building the skill. Daniela's Substack. Opens in a new tab.">
                        Read Part 1: Building the skill
                      </a>
                    </li>
                    <li>
                      <a href='https://hellodaniela.substack.com/p/uxr-claude-skill-evaluation' target='_blank' rel='noopener noreferrer' title="Part 2: Five Websites, One Claude Skill, and the Thing Prompts Can't Fix. Daniela's Substack. Opens in a new tab.">
                        Read Part 2: Five Websites, One Claude Skill, and the Thing Prompts Can't Fix
                      </a>
                    </li>
                  </ul>
                  <div className='mt-auto'>
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
                    Personas sitting in a research report don't change how teams make decisions. I worked with researchers and subject matter experts to define persona characteristics, then built rule-based classification systems that operationalized them across departments. To this day, teams actually use the outputs to make decisions.
                  </CardText>
                  <CardText>
                    I started to build these systems before the recent AI wave. The structures were designed so machine-learning could later replace more rudimentary automations. The design accounted for AI before it arrived on the scene.
                  </CardText>
                  <div className='mt-auto'>
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
                    I work with technical leads to translate user insights into requirements. This includes defining how data, metadata, and APIs are structured. The collaboration is where research stops being a report and starts being implementation. These recommendations are what make AI work for users downstream.
                  </CardText>
                  <div className='mt-auto'>
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
                I work through my thinking around AI on Substack. This is where I explore the questions that come up in practice, share what I'm learning, and reflect on the implications for UX research, design, and beyond. Here are some of my recent posts:
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
                Knowledge mobilization, AI, and the parts that still need a human expertise and oversight.
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
              <h2>What's next</h2>
              <p>
                Currently, I am...
              </p>
              <ul>
                <li>Exploring UX research repositories tailored for researchers and leaders making product decisions in corporate settings.</li>
                <li>Taking courses on how to deepen <a href="https://anthropic.skilljar.com/ai-fluency-framework-foundations" target="_blank" rel="noopener noreferrer" title="Anthropic. Opens in a new tab.">my AI fluency</a>.</li>
                <li>Continuing to experiment with how AI can be responsibly applied to UX research practice.</li>
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
