'use client'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const PROTOTYPE_URL = '/prototypes/uxr-repo/index.html';

function ResearchRepositoryCaseStudy() {
  return (
    <div className="ResearchRepositoryCaseStudy">
      <section id="content">
        <Container fluid="md">
          {/* <CustomBreadcrumb /> */}
          <Row fluid='true' className="mb-3">
            <Col className='fs-5'>
              <h1 className='display-4 fw-bold'>Designing a research repository people will actually use</h1>
              <p className='text-muted'>Canadian Institute for Health Information, 2026</p>
              <p className='fs-5'>
                I set out to design the organization&rsquo;s first UX research repository; in true User Researcher fashion, I started this journey by trying to understand the people who would need the final solution most. 
              </p>
              <p>
                Once the findings were in, I suggested next steps. On a slide, recommendations can feel abstract; leaders can&rsquo;t engage with a diagram the same way they can engage with something that behaves like the real thing. So, I built an interactive prototype using AI.
              </p>
              {/* Prototype frame */}
              <Row>
                <Col>
                  <p className='fs-6 text-muted'>Note: This is not the prototype I built for CIHI. It is a recreated version, with fabricated content, for demonstration purposes only.</p>
                </Col>
              </Row>
              <Row>
              <Col>
                <div className='ratio ratio-16x9 border rounded-3 overflow-hidden shadow-sm'>
                  <iframe
                    src={PROTOTYPE_URL}
                    title='UXR Repository interactive prototype'
                    loading='lazy'
                    style={{ border: 0 }}
                  />
                </div>
              </Col>
              <Row>
                <Col>
                  <div className='float-end mt-2'>
                    <a
                      className='btn btn-outline-primary btn-sm'
                      href={PROTOTYPE_URL}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Open full screen &#8599;
                    </a>
                  </div>
                </Col>
              </Row>

              <h2>Learning partners' needs</h2>
              <p className='fs-5'>
                The obvious answer to this problem relates to findability: build a searchable library, fill it with insights, and people will use them. But the research showed that isn&rsquo;t necessarily true. While making insights easy to find is important, it doesn&rsquo;t make everyone confident enough to actually use them.
              </p>
              <p>
                I ran listening sessions with 36 CIHI staff across a range of roles and relationships to the research, including project leads closely embedded in research practices to branch directors who weren&rsquo;t even sure what UX Research had to offer.
              </p>
              <p>
                During these sessions, I focused on paying rapt attention to each individual&rsquo;s experiences and ways of thinking. One question guided my prompts: &ldquo;What makes this person feel confident enough to rely on a research finding they didn&rsquo;t produce themselves?&rdquo;
              </p>

              <h2>The real problem wasn&rsquo;t findability</h2>
              <p>
                Throughout the interviews, it became clear that someone&rsquo;s proximity to the research influenced how much they trusted it. A lead embedded in a study never doubted the findings: &ldquo;I was on the journey, so there was never a moment where I had to be unsure.&rdquo; But a manager on the periphery wasn&rsquo;t sure research could help at all.
              </p>
              <p>
                When I looked at what proximity actually gave the confident people, it broke into three things they could see. First, they had a solid understanding of who was studied and the limits of what was found. Second, they got to see the underlying evidence behind the finding, and the context around it. And, third, they could see whether the organization could actually act on it.
              </p>
              <p>
                Thus, while the people close to the work absorbed these confidence-building facts during a project, everyone else was working without them.
              </p>

              <h2>Designing for confidence, not just search</h2>
              <p>
                I structured recommendations for the repository to focus on confidence signals. Each entry should hold a study, its key findings, and the evidence under each finding, so any claim traces back to where it came from.
              </p>
              <p>
                Further, I recommended metadata to carry the rest of the contextual information people needed, including the sample, the method, the participant characteristics, how fresh a finding is, and who to ask when a question remains. While this metadata provides critical details people need to trust an insight, it also provides a solid foundation for future potential AI interactions. 
                I dive into why this is important when responsibly democratizing user research in my article: <a href='https://hellodaniela.substack.com/p/the-bot-is-the-easy-part-a-researchers'>Researcher’s Guide to Using AI for User Knowledge Mobilization</a>.
              </p>

              <Image src='/img/rapid-prototyping-flowchart.png' alt='A diagram showing the three stages of including collecting user requirements and additional contextal that Daniela used to build a conceptual prototype for the UX Research repository.' className='img-fluid' />

              <h2>Prototyping the structure in hours, not weeks</h2>
              <p>
                I gave the model my findings and recommendations, then directed it with design language (think: list views, accordions, faceted filtering, sticky sorting bars).
              </p>
              <p>
                Together, the AI and I iteratively refined the interactive prototype into something that could effectively facilitate discussion with the project leaders. This process took about two hours and saved me the days, possibly weeks, it would have taken me to do this by hand.
              </p>
            </Row>
              

              <h2>Where it stands now</h2>
              <p>
                The repository is in-flight work. The research is complete, the design is underway, but the final decisions are yet to be made. With my research and prototypes in hand, CIHI&rsquo;s leaders now have something real to anchor their future decisions; they can feel more confident about how they will extend the value of user research across the organization.
              </p>

              <h2>What I carry forward</h2>
              <p>
                Using UX Research findings can be a trust problem before it&rsquo;s a search problem. While findability is high-stakes, people will actually use research if they can trace it, judge it, and see it acted on. And the people who need this support the most are the ones without the researcher down the hall.
              </p>
              <p>
                Additionally, when a working prototype costs hours instead of weeks, enabling decision-makers to interact with something real (while the design direction is still open) can allow users&rsquo; needs to truly resonate. Not only can AI prototyping compress the time to build, but it also allows teams to better gauge what&rsquo;s worth building.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default ResearchRepositoryCaseStudy;
