/**
 * Created At: 2026.06.01:00:00:00
 * @author - @FL03
 * @directory - src/components/site
 * @file - hud.tsx
 *
 * Decorative "observatory" overlay — fixed mono readouts framing the page
 * (vertical wordmark, coordinates, a live UTC clock). Purely atmospheric:
 * pointer-events-none, aria-hidden, and hidden below large screens.
 */
'use client';
// imports
import * as React from 'react';
// project
import { SITE } from '@/lib/config';

export const Hud = () => {
  const [time, setTime] = React.useState('--:--:--');

  React.useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString('en-GB', {
        hour12: false,
        timeZone: 'UTC',
      });
    const update = () => setTime(fmt());
    // first paint on the next frame (avoids a synchronous setState in the
    // effect body), then tick once a second
    const raf = requestAnimationFrame(update);
    const id = window.setInterval(update, 1000);
    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(id);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 hidden select-none text-muted-foreground/70 2xl:block"
    >
      {/* vertical wordmark, left edge */}
      <span
        className="label-mono absolute left-5 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl]"
        style={{ transform: 'translateY(-50%) rotate(180deg)' }}
      >
        Scattered · Systems
      </span>

      {/* coordinates, bottom-left */}
      <span className="label-mono absolute bottom-6 left-6">
        {SITE.author.coords}
      </span>

      {/* live clock + substrate status, bottom-right */}
      <span className="label-mono absolute bottom-6 right-6 flex items-center gap-2">
        <span className="size-1.5 rounded-full bg-primary animate-drift" />
        Eryon · {time} UTC
        <span className="text-primary animate-blink">▍</span>
      </span>
    </div>
  );
};
Hud.displayName = 'Hud';

export default Hud;
