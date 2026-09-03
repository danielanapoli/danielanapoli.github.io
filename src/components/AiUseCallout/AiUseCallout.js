import Badge from 'react-bootstrap/Badge';

export function AiUseCallout({ label = 'I used AI to...', items = [] }) {
  return (
    <div className="AiUseCallout my-4 p-3 rounded bg-light">
      <h2>{label}</h2>
      <div className="d-flex flex-wrap justify-content-center gap-2">
        {items.map((item, index) => (
          <Badge
            key={index}
            pill
            bg="white"
            text="dark"
            className="border fw-normal fs-6 px-3 py-2"
          >
            ✅ {item}
          </Badge>
        ))}
      </div>
      <p className="mb-0 mt-3 text-start fs-6">
        <a href="/ai">Read more about how I use AI</a>
      </p>
    </div>
  );
}

export default AiUseCallout;
