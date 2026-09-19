'use client';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ResumeEntry } from '@/components/ResumeEntry/ResumeEntry';

function Resume() {
  return (
    <div className='Resume'>
      <Container fluid='md'>
        <section id='content'>
          <Row className='text-center mb-3'>
            <Col>
              <h1 className='display-4 fw-bold'>Daniela Napoli</h1>
              <p>
                Ontario, Canada
                <br /><a href='mailto:hello@danielanapoli.com' rel='noopener noreferrer' title="Daniela's email address. Will open the mail app.">hello@danielanapoli.com</a>
                <br /><a href='https://danielanapoli.com' target='_blank' rel='noopener noreferrer' title="Daniela's personal website. Opens in new tab.">www.danielanapoli.com</a>
              </p>
            </Col>
          </Row>
          <Row className='justify-content-end mb-3 d-print-none'>
            <Col xs='auto'>
              <a href='/Daniela-Napoli-Resume.pdf' download className='btn btn-dark'>
                Download PDF
              </a>
            </Col>
          </Row>

          <Row>
            <Col className='prose-content-narrow'>

              <h2 className='underlined-heading'>Professional Summary</h2>
              <div className='mb-4'>
                <ul>
                  <li>User researcher who drives mixed-methods studies end to end, synthesizes complex qualitative and quantitative data, and turns it into decisions senior leaders act on. Integrates AI to accelerate analysis while keeping interpretation and validity under researcher judgment. Latest benchmarking study showed a 20% lift in task success and 395% improvement on a key findability metric.</li>
                  <li>Sets research strategy and builds scalable systems, including reusable methods (question banks, collaborator FAQ guides) and an AI-enabled research repository, so cross-functional product, design, and engineering teams leverage user insight at scale. Mentors junior researchers and sets research standards.</li>
                  <li>10 years of user research across industry UX and academic HCI, including a PhD in Computer Science examining trust and adoption of emerging technology, and hands-on delivery inside Agile product teams. Writes publicly on where researcher judgment can't be automated.</li>
                </ul>
              </div>

              <h2 className='underlined-heading'>Skills</h2>
              <div className='mb-4'>
                <p>Design Research • Research Strategy • Generative and Evaluative Research • Qualitative and Quantitative Methodologies • Interview and Survey Design • Usability Testing and Prototype Evaluation • Heuristic Evaluation • Accessibility and Inclusive Design • Design Thinking • Agile Product Development • Stakeholder Engagement • Cross-Functional Collaboration • Research Mentorship • AI-Assisted Research</p>
              </div>

              <h2 className='underlined-heading'>Research Methods and Tools</h2>
              <div className='mb-4'>
                <ul>
                  <li><strong>Generative research:</strong> Semi-structured interviews, contextual inquiry, journey mapping, concept testing and concept evaluation, research protocol design (interview guides, observation grids, questionnaires).</li>
                  <li><strong>Evaluative research:</strong> Heuristic evaluations, think-aloud usability testing, unmoderated task-based usability testing, longitudinal benchmarking studies.</li>
                  <li><strong>Questionnaire and survey design:</strong> Survey design, statistical analysis of survey data, validated questionnaires (SUS, SUPR-Q, UX-Lite); Qualtrics, SurveyMonkey, Google Forms, Microsoft Forms.</li>
                  <li><strong>Qualitative analysis:</strong> Thematic analysis, affinity mapping, severity ranking; NVivo.</li>
                  <li><strong>Quantitative analysis:</strong> Descriptive and inferential statistics (t-tests, ANOVA, chi-square); Python, R, SPSS, Excel; Hotjar, GA4.</li>
                  <li><strong>Research platforms:</strong> Optimal Workshop, Loop11, Questback, Qualtrics.</li>
                  <li><strong>Stakeholder engagement and cross-functional collaboration:</strong> Design Thinking workshops, Mural, Miro, Confluence, Jira.</li>
                </ul>
              </div>

              <h2 className='underlined-heading'>User Research Experience</h2>

              <ResumeEntry
                title='Senior User Experience Researcher'
                dateRange='Oct 2025 – Current'
                organization='Canadian Institute for Health Information'
                location='Toronto, Ontario'
                bullets={[
                  "Design, run, and synthesize concurrent generative discovery (20+ interviews, Canada-wide survey) and evaluative longitudinal benchmarking for CIHI's highest-priority modernization program, embedded within Agile cross-functional product, design, and engineering teams building products for users across all Canadian provinces and territories.",
                  'Benchmarking measures products before and after release; latest outcomes: 20% task success lift, 395% improvement on key findability metric.',
                  'Analyze discovery interviews with AI in parallel with fieldwork, surfacing participant feedback to the team before sessions close while keeping interpretation and validity under researcher judgment. Lead prompt-writing workshops to build the team’s AI fluency.',
                  'Anchor ambiguous project vision through storytelling and journey maps. Translate user needs into feature priorities, technical requirements, and success criteria, and present findings to senior leadership, including Branch Directors who use them to reprioritize development backlogs.',
                  'Design and build an AI-enabled UX research repository, a scalable system that consolidates findings, reduces redundancy, and lets cross-functional teams leverage user insight at organizational scale.',
                ]}
              />

              <ResumeEntry
                title='Doctoral Researcher (Full-Time Focus)'
                dateRange='Apr 2023 – Sep 2025'
                organization='Carleton University'
                location='Ottawa, Ontario'
                bullets={[
                  'Computer Science PhD Researcher focused on tailoring remote healthcare technology to the needs and privacy expectations of older adults, examining how trust shapes adoption of emerging technology.',
                  'Designed and executed qualitative interviews and a national survey (n=384) on data collection, data sharing preferences, and privacy concerns, and published two peer-reviewed papers at HCII 2025 on privacy and on AI in remote healthcare.',
                  "Senior member and junior research mentor for Carleton's Human Oriented Research in Usable Security Laboratory.",
                ]}
              />

              <ResumeEntry
                title='Senior User Experience Researcher'
                dateRange='Oct 2021 – Mar 2023'
                organization='Canadian Institute for Health Information'
                location='Toronto, Ontario'
                bullets={[
                  "Led generative requirements discovery shaping the program's target model (future vision and modernization strategy) through 15 user interviews and 10 stakeholder interviews.",
                  'Designed and executed evaluative studies in a longitudinal findability benchmarking program, establishing the baseline and methodology that anchored a multi-year research roadmap.',
                  'Partnered cross-functionally with product, design, and engineering teams and presented recommendations to leadership; findings implemented in retirement of legacy offerings and release of new products designed around user needs.',
                ]}
                featuredProject={{
                  href: '/user-research/discovery',
                  label: 'Requirements discovery',
                  linkTitle: "Link to a project page on Daniela's website. Opens in a new tab.",
                }}
              />

              <ResumeEntry
                title='User Experience Researcher, Intern'
                dateRange='Sep 2020 – Dec 2020'
                organization='Canadian Institute for Health Information'
                location='Ottawa, Ontario'
                bullets={[
                  "Developed Python modules to automate persona mapping from research findings and website metadata, replacing a manual process that took a week per cycle; automation became part of the team's ongoing persona refresh workflow. Identified gap in how research translates to decisions and built infrastructure to solve it.",
                  'Facilitated 2 cross-departmental workshops and 10 user interviews to refine and validate user personas.',
                ]}
                featuredProject={{
                  href: '/user-research/automation',
                  label: 'Persona Automation',
                  linkTitle: "Link to a project page on Daniela's website. Opens in a new tab.",
                }}
              />

              <ResumeEntry
                title='Design Researcher, Intern'
                dateRange='May 2019 – Dec 2019'
                organization='IBM'
                location='Ottawa, Ontario'
                bullets={[
                  'Conducted and analyzed 15 user interviews across Design, Development, and Product Management to map workflows, identify organizational pain points, and uncover collaboration opportunities.',
                  'Designed and facilitated a cross-department design-thinking workshop (20 participants) using as-is scenario mapping, value proposition analysis, and need-statement techniques to ideate solutions for workflow challenges.',
                  'Packaged and presented key findings to internal stakeholders and at an internship-related conference.',
                ]}
                featuredProject={{
                  href: '/user-research/workflows',
                  label: 'Improving Interdisciplinary Workflows',
                  linkTitle: "Link to a project page on Daniela's website. Opens in a new tab.",
                }}
              />

              <ResumeEntry
                title='Human Factors Consultant, Intern'
                dateRange='Jan 2017 – Jul 2017'
                organization='CAE'
                location='Ottawa, Ontario'
                className='mb-4'
                bullets={[
                  "Collaborated with developers on a proof-of-concept for a cost-effective virtual-reality aviation training system; conducted usability studies (n=10) assessing impact on users' learning goals and situational awareness.",
                  'Co-designed and co-facilitated a director-level workshop using emergency-scenario simulations; captured findings and synthesized them into a recommendations report informing formal organizational response plans.',
                  'Systematically reviewed academic literature on AR in military training to support R&D proposals.',
                ]}
              />

              <h2 className='underlined-heading'>Education</h2>

              <ResumeEntry
                title='Doctor of Philosophy in Computer Science'
                dateRange='Sep 2018 – Aug 2025'
                organization='Carleton University'
                location='Ottawa, Ontario'
                bullets={[
                  <>Thesis: <a href='https://hdl.handle.net/20.500.14718/44742' target='_blank' rel='noopener noreferrer' title='Link to Carleton University Thesis repository'>Tailoring Remote Healthcare Technology to Meet the Needs and Privacy Expectations of Older Adults</a></>,
                  <>Senior member of Carleton's Human Oriented Research in Usable Security <a href='https://chorus.scs.carleton.ca/' target='_blank' rel='noopener noreferrer' title='Link to the Carleton Usable Security research lab. Opens in a new tab.'>(CHORUS)</a> lab</>,
                ]}
              />

              <ResumeEntry
                title='Master of Arts in Human-Computer Interaction'
                dateRange='Sep 2016 – May 2018'
                organization='Carleton University'
                location='Ottawa, Ontario'
                className='mb-4'
                bullets={[
                  <>Thesis: <a href='https://carleton.scholaris.ca/items/b9e26ef6-df12-4cf4-bfea-07a99d045f59' target='_blank' rel='noopener noreferrer' title='Link to Carleton University Thesis repository'>Accessible and Usable Security: Exploring Visually Impaired Users' Online Security and Privacy Strategies</a></>,
                  <>Junior member of Carleton's Human Oriented Research in Usable Security <a href='https://chorus.scs.carleton.ca/' target='_blank' rel='noopener noreferrer' title='Link to the Carleton Usable Security research lab. Opens in a new tab.'>(CHORUS)</a> lab</>,
                ]}
              />

              <h2 className='underlined-heading'>Selected Publications</h2>
              <div className='mb-4'>
                <ul>
                  <li>Napoli, D., et al. <a href='https://www.usenix.org/conference/soups2021/presentation/napoli' target='_blank' rel='noopener noreferrer' title='Link to USENIX. Opens in a new tab.'>"I'm Literally Just Hoping This Will Work": Obstacles Blocking the Online Security and Privacy of Users with Visual Disabilities.</a> <em>Symposium on Usable Privacy and Security (SOUPS)</em>, 2021 — 35 citations.</li>
                  <li>Napoli, D., et al. <a href='https://dl.acm.org/doi/abs/10.1145/3170427.3180292' target='_blank' rel='noopener noreferrer' title='Link to the ACM Digital Library. Opens in a new tab.'>Developing Accessible and Usable Security (ACCUS) Heuristics.</a> <em>ACM CHI Extended Abstracts</em>, 2018 — 24 citations.</li>
                  <li>Napoli, D., et al. <a href='https://link.springer.com/chapter/10.1007/978-3-031-92840-6_5' target='_blank' rel='noopener noreferrer' title='Link to Springer. Opens in a new tab.'>Exploring User Perspectives on Data Collection, Data Sharing Preferences, and Privacy Concerns with Remote Healthcare Technology.</a> <em>HCI International (HCII)</em>, 2025 — large-scale survey, n=384.</li>
                  <li>Napoli, D., et al. <a href='https://link.springer.com/chapter/10.1007/978-3-031-94159-7_24' target='_blank' rel='noopener noreferrer' title='Link to Springer. Opens in a new tab.'>Helpful but Terrifying: Older Adults' Perspectives of AI in Remote Healthcare Technology.</a> <em>HCI International (HCII)</em>, 2025.</li>
                </ul>
              </div>

              <h2 className='underlined-heading'>Selected Invited Talks</h2>
              <div className='mb-4'>
                <ul>
                  <li>Considering Privacy & AI in Remote Healthcare Technology for Older Adults — <em>Wisdom Exchange Project</em>, Dec 2025.</li>
                  <li>The U in UX Can Be For Everyone: Accessible and Usable Privacy — <em>uXperience Think Privacy Design Jam, University of Waterloo</em> (workshop facilitator).</li>
                  <li>Design Tips to Help Non-Visual Visitors Stay Secure Online — <em>10th Annual Accessibility Conference, University of Guelph</em>.</li>
                </ul>
              </div>

              <h2 className='underlined-heading'>Professional Development</h2>

              <ResumeEntry
                title='AI Fluency: Framework & Foundations'
                badge='Course'
                dateRange='June 2026'
                organization='Anthropic Academy'
                organizationHref='https://anthropic.skilljar.com/ai-fluency-framework-foundations'
              />
              
              <ResumeEntry
                title='The Complete Games User Research Fundamentals'
                badge='Course'
                dateRange='Mar 2026 – Current'
                organization='Games User Research with Steve Bromley'
                organizationHref='https://gamesuserresearch.com/courses/games-user-research-fundamentals-a-practical-introduction-on-how-to-plan-run-and-analyse-games-user-research-studies/'
              />

              <ResumeEntry
                title='Nielsen Norman Group Certified'
                badge='Courses'
                dateRange='Aug 2022'
                organization='Nielsen Norman Group'
                bullets={[
                  <><a href='https://www.nngroup.com/courses/ux-statistics' target='_blank' rel='noopener noreferrer'>Statistics for UX</a></>,
                  <><a href='https://www.nngroup.com/courses/measuring-ux/' target='_blank' rel='noopener noreferrer'>Measuring UX & ROI</a></>,
                  <><a href='https://www.nngroup.com/courses/discovery/' target='_blank' rel='noopener noreferrer'>Discovery: Building the Right Thing</a></>,
                ]}
              />

              <ResumeEntry
                title='Workshop Organizer'
                badge='Leadership'
                dateRange='Aug 2021'
                organization='17th Annual Symposium on Usable Privacy and Security (SOUPS)'
                organizationHref='https://www.usenix.org/conference/soups2021'
              />

              <ResumeEntry
                title='Mentoring Program Co-Chair'
                badge='Leadership'
                dateRange='Aug 2020'
                organization='16th Annual Symposium on Usable Privacy and Security (SOUPS)'
                organizationHref='https://www.usenix.org/conference/soups2020'
              />

              <ResumeEntry
                title='Enterprise Design Thinking Co-Creator'
                badge='Certificate'
                dateRange='Dec 2019'
                organization='IBM'
                location='Ottawa, Ontario'
                className='mb-4'
                bullets={[
                  <>Learn more about the <a href='https://www.ibm.com/design/thinking/page/badges/core-skills#Co-Creator' target='_blank' rel='noopener noreferrer'>Co-Creator</a> skillset and badge criteria.</>,
                ]}
              />

            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
}

export default Resume;
