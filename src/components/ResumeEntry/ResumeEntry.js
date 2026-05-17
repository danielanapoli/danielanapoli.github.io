import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

function BulletList({ bullets }) {
  return (
    <ul>
      {bullets.map((bullet, i) => {
        if (typeof bullet === 'string') {
          return <li key={i}>{bullet}</li>;
        }
        return (
          <li key={i}>
            {bullet.text}
            {bullet.subbullets?.length > 0 && (
              <ul>
                {bullet.subbullets.map((sub, j) => <li key={j}>{sub}</li>)}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function ResumeEntry({
  title,
  dateRange,
  organization,
  location,
  bullets = [],
  featuredProject,
  className = 'mb-3',
}) {
  return (
    <Row className={className}>
      <Col>
        <div className='d-flex justify-content-between align-items-baseline'>
          <strong>{title}</strong>
          <span className='ms-3 text-nowrap'>{dateRange}</span>
        </div>
        <div>{organization}{location ? `, ${location}` : ''}</div>
        {bullets.length > 0 && <BulletList bullets={bullets} />}
        {featuredProject && (
          <Alert variant='light'>
            💡 Featured project:{' '}
            <a
              href={featuredProject.href}
              target='_blank'
              rel='noopener noreferrer'
              title={featuredProject.linkTitle}
            >
              {featuredProject.label}
            </a>
          </Alert>
        )}
      </Col>
    </Row>
  );
}

export default ResumeEntry;
