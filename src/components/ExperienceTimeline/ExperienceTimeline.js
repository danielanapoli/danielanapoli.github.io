// Experience timeline drawn from data. Below xl it reads as two vertical
// lists; from xl up, CSS positions each entry on a horizontal 2016–2026 track
// using the --start and --span percentages calculated here.

const FIRST_YEAR = 2016;
const LAST_YEAR = 2026;
const TOTAL_MONTHS = (LAST_YEAR - FIRST_YEAR + 1) * 12;
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const industry = [
  { start: '2017-01', end: '2017-07', title: 'Human Factors Consultant', org: 'CAE', note: 'Intern', tier: 1 },
  { start: '2019-05', end: '2019-12', title: 'Design Researcher', org: 'IBM', note: 'Intern', tier: 2 },
  { start: '2020-09', end: '2020-12', title: 'UX Researcher', org: 'CIHI', note: 'Intern', tier: 1 },
  { start: '2021-10', end: '2023-03', title: 'Senior UX Researcher', org: 'CIHI', tier: 2 },
  { start: '2025-10', end: '2026-10', title: 'Senior UX Researcher', org: 'CIHI', tier: 1, alignEnd: true },
];

const academia = [
  { kind: 'degree', start: '2016-09', end: '2018-05', title: 'MA, Human-Computer Interaction', org: 'Carleton University' },
  { kind: 'degree', start: '2018-09', end: '2025-08', title: 'PhD, Computer Science (HCI)', org: 'Carleton University' },
  { kind: 'focus', start: '2023-04', end: '2025-09', title: 'Full-time thesis focus', org: 'Older adults and remote healthcare' },
  { kind: 'paper', start: '2018-04', title: 'CHI 2018', org: 'ACCUS heuristics' },
  { kind: 'paper', start: '2021-08', title: 'SOUPS 2021', org: 'Security for users with visual disabilities' },
  { kind: 'paper', start: '2025-06', title: 'HCII 2025 ×2', org: 'Privacy and AI in remote care' },
];

function parse(ym) {
  const [year, month] = ym.split('-').map(Number);
  return { year, month };
}

// Months from January of the first year to the start of the given month.
function monthsFromStart(ym) {
  const { year, month } = parse(ym);
  return (year - FIRST_YEAR) * 12 + (month - 1);
}

function formatRange(start, end) {
  const s = parse(start);
  const e = parse(end);
  if (s.year === e.year) return `${MONTHS[s.month - 1]}–${MONTHS[e.month - 1]} ${e.year}`;
  return `${MONTHS[s.month - 1]} ${s.year}–${MONTHS[e.month - 1]} ${e.year}`;
}

// Inline CSS variables used by the desktop layout. End months are inclusive.
function position({ start, end }) {
  const from = monthsFromStart(start);
  const to = end ? monthsFromStart(end) + 1 : from;
  return {
    '--start': (from / TOTAL_MONTHS) * 100,
    '--span': ((to - from) / TOTAL_MONTHS) * 100,
  };
}

const newestFirst = (a, b) => monthsFromStart(b.start) - monthsFromStart(a.start);

function Entry({ entry, className }) {
  const { start, end, title, org, note, kind } = entry;
  return (
    <li className={className} style={position(entry)}>
      <span className='timeline-bar' aria-hidden='true' />
      <span className='timeline-label'>
        {end && <span className='timeline-date'>{formatRange(start, end)}</span>}
        <span className={kind === 'paper' ? 'timeline-paper-title' : 'timeline-title'}>{title}</span>
        <span className='timeline-org'>{note ? `${org} · ${note}` : org}</span>
      </span>
    </li>
  );
}

export function ExperienceTimeline() {
  const years = Array.from({ length: LAST_YEAR - FIRST_YEAR + 1 }, (_, i) => FIRST_YEAR + i);

  return (
    <div className='timeline'>
      <div className='timeline-lane timeline-industry'>
        <h3 className='timeline-lane-label'>Industry</h3>
        <ol className='timeline-list'>
          {[...industry].sort(newestFirst).map((entry) => (
            <Entry
              key={entry.start}
              entry={entry}
              className={`timeline-entry timeline-role timeline-tier-${entry.tier}${entry.alignEnd ? ' timeline-align-end' : ''}`}
            />
          ))}
        </ol>
      </div>

      <div className='timeline-axis' aria-hidden='true'>
        {years.map((year) => <span key={year}>{year}</span>)}
      </div>

      <div className='timeline-lane timeline-academia'>
        <h3 className='timeline-lane-label'>Academia</h3>
        <ol className='timeline-list'>
          {[...academia].sort(newestFirst).map((entry) => (
            <Entry key={entry.start} entry={entry} className={`timeline-entry timeline-${entry.kind}`} />
          ))}
        </ol>
      </div>

      <ul className='timeline-legend' aria-hidden='true'>
        <li><span className='timeline-key timeline-key-role' />Industry role</li>
        <li><span className='timeline-key timeline-key-degree' />Degree</li>
        <li><span className='timeline-key timeline-key-paper' />Peer-reviewed paper</li>
      </ul>
    </div>
  );
}

export default ExperienceTimeline;
