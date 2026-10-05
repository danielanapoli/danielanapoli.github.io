import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';

function BulletList({ bullets }) {
  return (
    <ul>
      {bullets.map((bullet, i) => {
        if (bullet?.subbullets) {
          return (
            <li key={i}>
              {bullet.text}
              {bullet.subbullets.length > 0 && (
                <ul>
                  {bullet.subbullets.map((sub, j) => <li key={j}>{sub}</li>)}
                </ul>
              )}
            </li>
          );
        }
        return <li key={i}>{bullet}</li>;
      })}
    </ul>
  );
}

export function ResumeEntry({
  title,
  badge,
  dateRange,
  organization,
  organizationHref,
  location,
  bullets = [],
  featuredProject,
  className = 'mb-3',
}) {
  const orgNode = organizationHref
    ? <a href={organizationHref} target='_blank' rel='noopener noreferrer'>{organization}</a>
    : organization;
  const featuredProjects = [].concat(featuredProject ?? []);

  return (
    <Row className={className}>
      <Col>
        <div className='d-flex justify-content-between align-items-baseline'>
          <div>
            <strong>{title}</strong>
            {badge && <Badge bg='secondary' className='ms-2'>{badge}</Badge>}
          </div>
          <span className='ms-3 text-nowrap'>{dateRange}</span>
        </div>
        <div>{orgNode}{location ? `, ${location}` : ''}</div>
        {bullets.length > 0 && <BulletList bullets={bullets} />}
        {featuredProjects.length > 0 && (
          <Alert variant='light'>
            💡 Read more:{' '}
            {featuredProjects.map((project, i) => (
              <span key={project.href}>
                {i > 0 && ' · '}
                <a
                  href={project.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  title={project.linkTitle}
                >
                  {project.label}
                </a>
              </span>
            ))}
          </Alert>
        )}
      </Col>
    </Row>
  );
}

export default ResumeEntry;
