/**
 * Created At: 2026.06.01:00:00:00
 * @author - @FL03
 * @directory - src/components/site/sections
 * @file - platform.tsx
 */
// imports
// project
import { SITE } from '@/lib/config';
import { Section, SectionHeader } from '@/components/site/section';
import { Reveal } from '@/components/site/reveal';

export const Platform = () => (
  <Section id="platform">
    <SectionHeader
      index="03"
      eyebrow={SITE.platform.eyebrow}
      title={
        <>
          Rigor, <span className="italic text-primary">all the way down.</span>
        </>
      }
      description={SITE.platform.lede}
    />

    <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {SITE.platform.stack.map((group, i) => (
        <Reveal key={group.label} delay={i * 0.05}>
          <div className="flex h-full flex-col gap-4 bg-card p-6">
            <span className="label-mono text-primary">{group.label}</span>
            <ul className="flex flex-col gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-lg font-light tracking-tight text-foreground/90"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>

    {/* infinite, pause-on-hover marquee — CSS only */}
    <div className="mask-fade-x relative mt-12 overflow-hidden border-y border-border py-6">
      <div className="flex w-max animate-marquee items-center gap-8 hover:[animation-play-state:paused]">
        {[...SITE.platform.principles, ...SITE.platform.principles].map(
          (principle, i) => (
            <span
              key={`${principle}-${i}`}
              className="flex items-center gap-8 font-display text-2xl font-light text-muted-foreground/50"
            >
              {principle}
              <span className="size-1.5 rounded-full bg-primary/40" />
            </span>
          ),
        )}
      </div>
    </div>
  </Section>
);
Platform.displayName = 'Platform';

export default Platform;
