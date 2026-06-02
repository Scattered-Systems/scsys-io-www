/**
 * Created At: 2026.06.01:00:00:00
 * @author - @FL03
 * @directory - src/app
 * @file - opengraph-image.tsx
 *
 * Dynamically generated Open Graph card. satori only supports flexbox, so the
 * layout is flex-only — no grid.
 */
import { ImageResponse } from 'next/og';
import { SITE } from '@/lib/config';

export const alt = `${SITE.title} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#101319',
          backgroundImage:
            'radial-gradient(60% 60% at 28% 32%, rgba(95,220,255,0.18), transparent 70%), radial-gradient(50% 50% at 85% 80%, rgba(160,124,255,0.16), transparent 72%)',
          padding: '72px',
          color: '#eef3f6',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            fontSize: 26,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: '#8fa3b0',
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: '#5fdcff',
            }}
          />
          scsys.io
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '18px',
              fontSize: 92,
              lineHeight: 1,
              letterSpacing: '-0.03em',
            }}
          >
            <span>Cloud clusters,</span>
            <span style={{ color: '#5fdcff', fontStyle: 'italic' }}>
              in harmony.
            </span>
          </div>
          <div style={{ display: 'flex', fontSize: 30, color: '#aebac4' }}>
            The portal for self-orchestrating clouds, powered by Eryon.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 22,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#6b7884',
          }}
        >
          <span>{SITE.author.company}</span>
          <span>scsys.io</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
