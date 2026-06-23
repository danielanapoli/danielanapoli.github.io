function formatDate(dateStr) {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  if (isNaN(d)) return null;
  return d.toLocaleDateString('en-CA', { year: 'numeric', month: 'short', day: 'numeric' });
}

function stripHtml(html) {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function fetchPosts(feedUrl, limit) {
  try {
    const res = await fetch(feedUrl);
    const xml = await res.text();
    return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)]
      .slice(0, limit)
      .map(([, content]) => ({
        title: (
          content.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/s)?.[1] ??
          content.match(/<title>(.*?)<\/title>/s)?.[1] ??
          ''
        ).trim(),
        href: (
          content.match(/<link>\s*(https?:\/\/.*?)\s*<\/link>/s)?.[1] ??
          content.match(/<guid[^>]*>\s*(https?:\/\/.*?)\s*<\/guid>/s)?.[1] ??
          ''
        ).trim(),
        date: content.match(/<pubDate>(.*?)<\/pubDate>/)?.[1]?.trim() ?? '',
        description: stripHtml(
          content.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/s)?.[1] ??
          content.match(/<description>([\s\S]*?)<\/description>/s)?.[1] ??
          ''
        ),
      }))
      .filter((p) => p.title && p.href);
  } catch {
    return [];
  }
}

export function SubstackFeedEntry({ title, href, date, description, variant = 'list' }) {
  if (variant === 'card') {
    return (
      <div className='mb-4'>
        {date && <p className='text-muted small mb-1'>{formatDate(date)}</p>}
        <h2><a href={href} target='_blank' rel='noopener noreferrer'>{title}</a></h2>
        {description && <p>{description}</p>}
        <a href={href} target='_blank' rel='noopener noreferrer'>Read on Substack →</a>
      </div>
    );
  }

  return (
    <div className='mb-3'>
      <a href={href} target='_blank' rel='noopener noreferrer' className='d-block'>
        {title}
      </a>
      {date && <p className='text-muted small mb-0'>{formatDate(date)}</p>}
    </div>
  );
}

export async function SubstackFeed({ feedUrl, limit = 5, variant = 'list', children }) {
  const posts = feedUrl ? await fetchPosts(feedUrl, limit) : [];

  if (variant === 'card') {
    const entries = posts.length > 0 ? posts : null;
    return entries
      ? entries.map((post, i) => (
          <div key={i}>
            <SubstackFeedEntry variant='card' {...post} />
            {i < entries.length - 1 && <hr />}
          </div>
        ))
      : children;
  }

  return (
    <>
      <h2>Recent thinking</h2>
      <p className='text-muted small'>
        Where AI fits into research practice, and where human judgment stays in the loop.
      </p>
      {posts.length > 0
        ? posts.map((post, i) => <SubstackFeedEntry key={i} {...post} />)
        : children}
    </>
  );
}

export default SubstackFeed;
