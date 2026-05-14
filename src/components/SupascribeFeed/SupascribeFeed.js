'use client'

import Script from 'next/script';

export function SupascribeFeed({ embedId, loaderSrc }) {
  return (
    <>
      <div data-supascribe-embed-id={embedId} data-supascribe-feed></div>
      <Script src={loaderSrc} strategy="afterInteractive" />
    </>
  );
}
