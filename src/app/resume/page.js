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
            <h1>Daniela Napoli</h1>
            <p>
              Ontario, Canada
              <br /><a href='mailto:hello@danielanapoli.com' rel='noopener noreferrer' title="Daniela's email address. Will open the mail app.">hello@danielanapoli.com</a>
              <br /><a href='https://danielanapoli.com' target='_blank' rel='noopener noreferrer' title="Daniela's personal website. Opens in new tab.">www.danielanapoli.com</a>
            </p>
          </Row>

          <Row>
            <Col className='prose-content-narrow'>

              <h3 className='underlined-heading'>Highlight Summary</h3>
              <div className='mb-4'>
                <ul>
                  <li>User researcher with a PhD in HCI and nearly a decade of mixed-methods research experience across industry UX and academic HCI.</li>
                  <li>Pairs qualitative depth (discovery, contextual inquiry, journey mapping) with rigorous quantitative benchmarking (SUS, SUPR-Q, inferential statistics).</li>
                  <li>Most recently served as embedded researcher on CIHI's highest-priority program; 12+ studies delivered across two senior-role tenures inform design, feature prioritization, and technical requirements.</li>
                  <li>Domain experience in healthcare data, enterprise software, aviation training, accessibility, usable privacy.</li>
                </ul>
              </div>

              <h3 className='underlined-heading'>Research Methods & Tools</h3>
              <div className='mb-4'>
                <ul>
                  <li><strong>Qualitative methods:</strong> Semi-structured interviews, contextual inquiry, journey mapping, concept testing, heuristic evaluations, think-aloud usability testing, affinity mapping, severity ranking, thematic analysis.</li>
                  <li><strong>Quantitative methods:</strong> Unmoderated task-based testing, validated questionnaires (SUS, SUPR-Q, UX-Lite, NPS), descriptive & inferential statistics (t-tests, ANOVA, chi-square).</li>
                  <li><strong>Research platforms:</strong> Optimal Workshop, Loop11, Questback.</li>
                  <li><strong>Surveys:</strong> Qualtrics, SurveyMonkey, Google Forms, Microsoft Forms.</li>
                  <li><strong>Analysis:</strong> Python, R, SPSS, NVivo, Excel.</li>
                  <li><strong>Collaboration:</strong> Mural, Miro, Confluence, Figma.</li>
                  <li><strong>Analytics:</strong> Hotjar, GA4.</li>
                </ul>
              </div>

              <h3 className='underlined-heading'>User Research Experience</h3>

              <ResumeEntry
                title='Senior User Experience Researcher'
                dateRange='Oct 2025 – Current'
                organization='Canadian Institute for Health Information'
                location='Toronto, Ontario'
                bullets={[
                  'Lead 3 generative discovery studies (20+ user interviews, Canada-wide survey, concept testing) to guide modernization of legacy products serving clients across all 13 Canadian provinces and territories.',
                  'Conducted several studies within a longitudinal findability benchmarking program (2022–2026); the 2026 study quantified a 20% overall lift in task success and a 395% improvement on methodology-finding tasks in a redesigned product vs. its legacy version.',
                  "Serve as embedded researcher on CIHI's highest-priority program across two senior-role tenures; 12+ studies delivered to date.",
                  'Insights have directly informed design decisions, feature prioritization processes, and technical requirements definitions for the program.',
                  'Mentor a junior researcher on study design, analysis, research strategy, and stakeholder communication.',
                ]}
              />

              <ResumeEntry
                title='Senior User Experience Researcher'
                dateRange='Oct 2021 – Mar 2023'
                organization='Canadian Institute for Health Information'
                location='Toronto, Ontario'
                bullets={[
                  'Designed and ran early studies in a longitudinal findability benchmarking program for a flagship KPI report, establishing the baseline and methodology that anchored multi-year measurement.',
                  "Led requirements discovery shaping the program's initial target model (future vision and modernization strategy): 15 user interviews and 10 stakeholder interviews.",
                  'Recommendations were implemented in the retirement of legacy offerings and the release of new products designed around the user needs surfaced in discovery.',
                ]}
                featuredProject={{
                  href: '/user-research/discovery',
                  label: 'Requirements Discovery',
                  linkTitle: "Link to a project page on Daniela's website. Opens in a new tab.",
                }}
              />

              <ResumeEntry
                title='User Experience Researcher, Intern'
                dateRange='Sep 2020 – Dec 2020'
                organization='Canadian Institute for Health Information'
                location='Ottawa, Ontario'
                bullets={[
                  'Facilitated 2–3 cross-departmental workshops focused on refining user personas.',
                  'Contributed to ~10 user interviews to validate and develop user personas.',
                  "Developed Python modules to automate persona mapping from research findings and website metadata — replaced a manual process that previously took the team a week or more per cycle; became part of the team's ongoing persona refresh workflow.",
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
                  'Conducted and analyzed ~15 user interviews across Design, Development, and Product Management to map workflows, identify organizational pain points, and uncover collaboration opportunities.',
                  'Designed and facilitated a cross-department design-thinking workshop (~20 participants) using as-is scenario mapping, value proposition analysis, and need-statement techniques to ideate solutions for workflow challenges.',
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
                  'Systematically reviewed academic literature on AR in military training to support an R&D proposal.',
                ]}
              />

              <h3 className='underlined-heading'>Education</h3>

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

              <h3 className='underlined-heading'>Selected Publications</h3>
              <div className='mb-4'>
                <ul>
                  <li>Napoli, D., et al. <a href='https://www.usenix.org/conference/soups2021/presentation/napoli' target='_blank' rel='noopener noreferrer' title='Link to USENIX. Opens in a new tab.'>"I'm Literally Just Hoping This Will Work": Obstacles Blocking the Online Security and Privacy of Users with Visual Disabilities.</a> <em>Symposium on Usable Privacy and Security (SOUPS)</em>, 2021 — 33 citations.</li>
                  <li>Napoli, D., et al. <a href='https://dl.acm.org/doi/abs/10.1145/3170427.3180292' target='_blank' rel='noopener noreferrer' title='Link to the ACM Digital Library. Opens in a new tab.'>Developing Accessible and Usable Security (ACCUS) Heuristics.</a> <em>ACM CHI Extended Abstracts</em>, 2018 — 24 citations.</li>
                  <li>Napoli, D., et al. <a href='https://link.springer.com/chapter/10.1007/978-3-031-92840-6_5' target='_blank' rel='noopener noreferrer' title='Link to Springer. Opens in a new tab.'>Exploring User Perspectives on Data Collection, Data Sharing Preferences, and Privacy Concerns with Remote Healthcare Technology.</a> <em>HCI International (HCII)</em>, 2025 — large-scale survey, n=384.</li>
                  <li>Napoli, D., et al. <a href='https://link.springer.com/chapter/10.1007/978-3-031-94159-7_24' target='_blank' rel='noopener noreferrer' title='Link to Springer. Opens in a new tab.'>Helpful but Terrifying: Older Adults' Perspectives of AI in Remote Healthcare Technology.</a> <em>HCI International (HCII)</em>, 2025.</li>
                </ul>
              </div>

              <h3 className='underlined-heading'>Selected Invited Talks</h3>
              <div className='mb-4'>
                <ul>
                  <li>Considering Privacy & AI in Remote Healthcare Technology for Older Adults — <em>Wisdom Exchange Project</em>, Dec 2025.</li>
                  <li>The U in UX Can Be For Everyone: Accessible and Usable Privacy — <em>uXperience Think Privacy Design Jam, University of Waterloo</em> (workshop facilitator).</li>
                  <li>Design Tips to Help Non-Visual Visitors Stay Secure Online — <em>10th Annual Accessibility Conference, University of Guelph</em>.</li>
                </ul>
              </div>

              <h3 className='underlined-heading'>Professional Development</h3>

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
