'use client'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

import CustomBreadcrumb from '@/components/BreadCrumb/BreadCrumb';

function SurveysCaseStudy() {
  return (
    <div className="SurveysCaseStudy">
      <section id="content">
        <Container fluid="md">
          <CustomBreadcrumb />
          <Row fluid='true' className="mb-3">
            <Col className='fs-5'>
              <h1 className='display-4 fw-bold'>An ETL pipeline to turn data into insights a design team could trust</h1>
              <p className='text-muted'>
                Doctoral research, Carleton University, 2023.{' '}
                <Badge
                  bg='primary'
                  text='light'
                  as='a'
                  href='https://github.com/danielanapoli/remotehealthcare-survey-etl'
                  target='_blank'
                  rel='noopener noreferrer'
                  title="Daniela's GitHub repository for this project. Opens in a new tab."
                  className='ms-2 fw-normal border text-decoration-none'
                >
                  See the code on GitHub
                </Badge>
              </p>
              <p className='fs-5'>
                Partway through fielding the survey, the responses stopped looking human. Duplicate answers, identical timestamps arriving in batches, a flood of fraud pouring in through the social media ads I had used to recruit.
              </p>
              <p className='fs-5'>
                I had six datasets from two survey modes to merge into one, and now fraud had compromised one of those sources. The pipeline I designed to pull trustworthy, actionable insight out of that mess is what this case study is about: the extract, transform, and load steps that carry raw responses through to something a design team can build on.
              </p>
              <p className='fs-5'>
                The reason it mattered goes back to the research problem at hand.
              </p>
              <p className='fs-5'>
                Canada's population over 65 is about to be the largest it has ever been, yet most remote healthcare technology built for these adults leaves them out of the design process. For my PhD, I asked what older adults actually need from this technology, and what would earn their trust to use it. A finding about trust is only as trustworthy as the data underneath it.
              </p>

              <h2>How I set it up</h2>
              <p>
                I designed a Canada-wide survey to measure how comfortable people were letting remote healthcare technology collect their data. To reach older adults realistically, I ran it in two modes, online and on paper. Online-only recruitment skews toward the most tech-comfortable people, which is exactly the group this research could not afford to overrepresent.
              </p>
              <p>
                I shaped the survey and its goals with my supervisor, Sonia Chiasson, and our partners at the National Research Council's Aging in Place program, Heather Molyneaux and Helene Fournier. They helped sharpen the questions and reach older adults beyond the usual online panels. The Human-Centric Cybersecurity Partnership funded the work.
              </p>
              <p>
                Two modes gave me six datasets, two from online panels and four paper versions, not all of which meshed together seamlessly. Different field names, the same answers coded in different ways, a different set of quirks per source. Before any of it could answer a research question, it had to become one clean structure I could stand behind.
              </p>

              <h2>Validation before cleaning</h2>
              <p>
                I built the pipeline in Python, in separate stages that I could trace from start to finish, and I put validation first, ahead of any cleaning. The order of this process mattered most. Cleaning a compromised source before checking it would have incorporated invalid responses into the analysis in a tidy and invisible way.
              </p>
              <p>
                Ultimately, the first stage checks every response against explicit quality rules and quarantines anything that fails, and it writes a log of every exclusion and why, which anyone could check.
              </p>
              <p>
                From there, the pipeline does the transform and load work. It integrates all six sources into one shared structure, matching up the field names and codings that differed across modes. It builds the fields the analysis needs, from readable variable names to age cohorts.
              </p>
              <p>
                Then it splits the data for hand-off to the next set of tools: the numeric responses to R and the open-text answers to NVivo.
              </p>

              <h2>What the data showed</h2>
              <p>
                All key takeaways are captured in our published work.
              </p>
              <p>
                An important finding is that older adults were significantly less likely to say they would use remote healthcare technology. On the 5-point likelihood scale, adults 65 and older averaged 3.3, against 4.1 for adults 35 to 49. I reported effect sizes alongside p-values, the size of each difference next to the odds it was real, so I could keep the differences large enough to act on and set aside the ones too small to matter.
              </p>
              <p>
                This one held at r = 0.19, modest but real, and it pointed somewhere a design team could go.
              </p>

              <h2>Where it went</h2>
              <p>
                The findings were ultimately incorporated into a <a href='/academic/toolkit'>design toolkit of 15 tools</a>, which healthcare-technology experts reviewed, built to help teams design for what older adults actually need. The pipeline is what made those findings safe to build on.
              </p>

              <h2>What I carry forward</h2>
              <p>
                This project solidified the value of traceability in my work.
              </p>
              <p>
                Every decision that informs an insight has to live somewhere a reader can find it. Which responses I excluded, how I coded a scale, and which differences I trusted. That traceability is what lets a collaborator, a reviewer, or a version of me a year from now trust the dataset without rebuilding it.
              </p>
              <p>
                Traceability is now the first thing I reach for when I research and build anything.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default SurveysCaseStudy;
