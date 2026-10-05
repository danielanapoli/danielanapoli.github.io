'use client';

import { useId, useState } from 'react';

// A timeline lane whose list collapses behind a toggle below xl. From xl up
// the toggle is hidden and the list always shows on the horizontal track.
export function CollapsibleLane({ label, className, children }) {
  const [expanded, setExpanded] = useState(false);
  const listId = useId();

  return (
    <div className={`timeline-lane ${className}${expanded ? '' : ' timeline-collapsed'}`}>
      <h3 className='timeline-lane-label'>
        <span className='timeline-lane-text'>{label}</span>
        <button
          type='button'
          className='timeline-toggle'
          aria-expanded={expanded}
          aria-controls={listId}
          onClick={() => setExpanded(!expanded)}
        >
          {label}
          <span className='timeline-toggle-hint'>{expanded ? 'Hide' : 'Show'}</span>
        </button>
      </h3>
      <ol className='timeline-list' id={listId}>
        {children}
      </ol>
    </div>
  );
}

export default CollapsibleLane;
