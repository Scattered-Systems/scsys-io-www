import { ImageResponse } from 'next/og';
import { SITE } from '@/lib/config';

export const alt = `${SITE.title} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#FAFAF7',
        padding: 64,
        color: '#141618',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', fontSize: 24, letterSpacing: '0.28em' }}>
        SCSYS
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          fontSize: 66,
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
        }}
      >
        {SITE.hero.lines.map((line, i) => (
          <div
            key={line}
            style={{ display: 'flex', color: i === 0 ? '#141618' : '#9C4B49' }}
          >
            {line}
          </div>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: '1px solid #9EA4A8',
          paddingTop: 24,
          fontSize: 24,
          color: '#465A66',
        }}
      >
        <span>{SITE.name}</span>
        <span>scsys.io</span>
      </div>
    </div>,
    { ...size },
  );
}
