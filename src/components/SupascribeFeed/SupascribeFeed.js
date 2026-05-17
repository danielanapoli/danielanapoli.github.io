'use client';

import Script from 'next/script';

export function SupascribeFeed({ embedId, loaderSrc, blogHref }) {
  return (
    <>
      <div data-supascribe-embed-id={embedId} data-supascribe-feed>
        {blogHref && (
          <p><a href={blogHref} target='_blank' rel='noopener noreferrer'>Read on Substack</a></p>
        )}
      </div>
      <Script src={loaderSrc} strategy='afterInteractive' />
    </>
  );
}
