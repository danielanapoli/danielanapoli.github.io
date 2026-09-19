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
          {/* <CustomBreadcrumb /> */}
          <Row fluid='true' className="mb-3">
            <Col className='fs-5'>
              <h1 className='display-4 fw-bold'>Creating an ETL pipeline to translate raw data into reliable insights</h1>
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
                Partway through the survey, the responses stopped looking human. Duplicate answers and identical timestamps were arriving in batches. A flood of spam was coming in through the social media ads I had used to recruit. I had six datasets from two survey modes to merge into one, and fraud had compromised a source.
              </p>
              <p className='fs-5'>
                So I designed a pipeline to pull trustworthy, actionable insight out of that mess. This case study follows the extract, transform, and load steps that turned raw responses into something a design team could confidently build on.
              </p>
              <p className='fs-5'>
                The urgency behind this work goes back to the research topic: Canada's population over 65 will soon be the largest it has ever been. Yet, most remote healthcare technology built for these adults leaves them out of the design process.
              </p>
              <p className='fs-5'>
                For my PhD, I asked what older adults actually need from remote healthcare technology, and what would earn their trust to use it. And findings about trust are only as trustworthy as the data underneath them.
              </p>

              <h2>How I set it up</h2>
              <p>
                I designed a Canada-wide survey to measure how comfortable people were letting remote healthcare technology collect their data. To reach older adults realistically, I ran it in two modes, online and on paper. Online-only recruitment skews toward the most tech-comfortable people; we could not afford our study to overrepresent this group.
              </p>
              <p>
                I designed the survey and its goals with my supervisor, Sonia Chiasson, and our partners at the National Research Council's Aging in Place program, Heather Molyneaux and Helene Fournier. They helped sharpen the questions and reach older adults beyond the usual online panels. The Human-Centric Cybersecurity Partnership funded the work.
              </p>
              <p>
                These two modes of recruitment led to six datasets, two from online panels and four from paper versions. These datasets did not mesh together seamlessly: each had different field names, the same answers coded in different ways, and various other quirks.
              </p>
              <p>
                Before we could answer our research questions, the data had to become one clean structure we could stand behind.
              </p>

              <h2>Validation before cleaning</h2>
              <p>
                I built the pipeline in Python in separate stages so that I could trace data from start to finish. I put validation first, ahead of any cleaning. It was critical to check that the data was not compromised; otherwise, it would be incorporated into the analysis in a tidy and invisible way.
              </p>
              <p>
                I designed the validation stage to check every response against explicit quality rules. It excluded anything that failed, and it wrote a log of every exclusion and why, so that anyone could review.
              </p>
              <p>
                From there, I scripted processes to transform and load the data. The pipeline systematically integrated all six sources into a unified structure by aligning disparate field names and resolving differences in coding schemes across datasets.
              </p>
              <p>
                Data normalization is a critical foundation for meaningful statistical comparison and for preventing misinterpretation. So, I programmed the data fields to ensure that only relevant variables were included. I converted raw codes into standardized, readable variable names so that the analysis was transparent and reproducible.
              </p>
              <p>
                Finally, I split the data for hand-off to the next set of tools: the numeric responses to R and the open-text answers to NVivo.
              </p>

              <h2>What the data showed</h2>
              <p>
                All key survey takeaways are captured in <a href='https://link.springer.com/chapter/10.1007/978-3-031-92840-6_5' target='_blank' rel='noopener noreferrer'>our published work</a>.
              </p>
              <p>
                One important finding is that older adults were significantly less likely to say they would use remote healthcare technology. On the 5-point likelihood scale, adults 65 and older averaged 3.3, against 4.1 for adults 35 to 49.
              </p>
              <p>
                I was sure to calculate effect sizes alongside p-values, so I could keep the differences large enough to act on and set aside the ones too small to matter in practice.
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
                Every decision that informs an insight has to live somewhere a reader can find. This includes the responses I excluded, how I coded a scale, and which statistical differences could be trusted. This traceability allows collaborators, reviewers, or a version of me a year from now to trust the dataset without rebuilding.
              </p>
              <p>
                Now, traceability is the first thing I reach for when I research and build anything.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default SurveysCaseStudy;
