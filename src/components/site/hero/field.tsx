import { SITE } from '@/lib/config';
import { cn } from '@/lib/utils';

/** Static product navigation. No WebGL or decorative runtime is required. */
export const LatticeField = ({ className }: { className?: string }) => (
  <nav
    aria-label='Ecosystem overview'
    className={cn('border-t border-border', className)}
  >
    {SITE.ecosystem.projects.map((project) => (
      <a
        key={project.name}
        href={project.href}
        className='flex min-h-14 flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-border py-3 hover:underline'
      >
        <span className='font-medium'>{project.name}</span>
        <span className='text-sm text-muted-foreground'>{project.role}</span>
      </a>
    ))}
  </nav>
);
export default LatticeField;
