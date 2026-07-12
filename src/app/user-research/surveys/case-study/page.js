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
              <h1 className='display-4 fw-bold'>Building a survey dataset that a design team could trust</h1>
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
                  Code on GitHub
                </Badge>
              </p>
              <p className='fs-5'>
                Canada's 65+ population will soon be the largest it has ever been. Remote healthcare could help these individuals manage their health from home, yet most of the technology built for it leaves them out of the design process. For my PhD, I asked what older adults actually need from this technology, and what would earn their trust to use it.
              </p>

              <h2>One pipeline, from raw data to insight</h2>
              <p>
                I designed a Canada-wide survey to explore people's comfort with allowing remote healthcare technology to collect their data. Then I built the pipeline to transform the raw data into insights. To sample older adults realistically, we ran the survey online and on paper. Online-only recruitment can skew toward the most tech-comfortable audiences.
              </p>
              <p>
                This approach led to six datasets, two online panels and four paper versions, that needed to be combined into one.
              </p>
              <p>
                My Python pipeline ran in modular stages that were easy to trace.
              </p>
              <ol>
                <li>Validate responses against explicit quality rules before any cleaning.</li>
                <li>Integrate all six sources into one schema.</li>
                <li>Engineer the features the analysis needs, from readable field names to age cohorts.</li>
                <li>Split the data two ways, quantitative responses to R, open-text to NVivo.</li>
              </ol>

              <h2>The data got flooded before it got cleaned</h2>
              <p>
                Our social media ads did not work as I hoped. They drew an influx of fraudulent responses, duplicate content and identical timestamps arriving in batches. That's why validation became its own stage ahead of any cleaning, with an auditable log of every response I excluded and why. The mess is what forced a more disciplined pipeline.
              </p>

              <h2>A finding that held and got used</h2>
              <p>
                Older adults were significantly less likely to say they would use remote healthcare technology. On the 5-point likelihood scale, the 65+ group averaged 3.3, against 4.1 for adults 35 to 49 (r = 0.19). Because I reported effect sizes next to p-values, I kept the differences that mattered and set aside the ones too small to act on.
              </p>
              <p>
                The key takeaways were incorporated into a <a href='/academic/toolkit'>design toolkit of 15 validated tools</a>, assessed by healthcare-technology experts, that helps teams build for older adults' real needs.
              </p>

              <h2>No solo efforts</h2>
              <p>
                I designed the survey and its research goals with my supervisor, Sonia Chiasson, and our partners at the National Research Council's Aging in Place program, Heather Molyneaux and Helene Fournier. They helped shape the questions and reach older adults beyond the usual online panels. The Human-Centric Cybersecurity Partnership funded the work.
              </p>

              <h2>What I'd carry forward</h2>
              <p>
                A major takeaway from this case study is that every decision that shapes a result, which responses to exclude, how a scale gets encoded, which differences to trust, has to live somewhere a reader can find and validate. This traceability is what lets a collaborator, a reviewer, or a version of me a year from now trust the dataset without rebuilding it. Traceability is the first thing I reach for when I build anything now.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default SurveysCaseStudy;
