/**
 * Created At: 2025.07.25:06:38:44
 * @author - @FL03
 * @directory - src/app/(public)/terms
 * @file - page.tsx
 */
// imports
import type { Metadata } from 'next';
import { SITE } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `The terms governing use of ${SITE.author.company}, the portal, and Eryon.`,
};

export default function Page() {
  return (
    <article>
      <p className="label-mono text-primary">[ Legal ]</p>
      <h1 className="mt-6 font-display text-5xl font-light tracking-tight sm:text-6xl">
        Terms of Service
      </h1>
      <p className="label-mono mt-4 text-muted-foreground">
        Last updated · June 1, 2026
      </p>

      <div className="mt-10 space-y-8 leading-relaxed text-muted-foreground">
        <section>
          <h2 className="font-display text-2xl font-light text-foreground">
            1. Acceptance
          </h2>
          <p className="mt-3">
            By accessing {SITE.url} or using the portal, you agree to these
            terms. If you do not agree, please do not use the service.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-light text-foreground">
            2. The service
          </h2>
          <p className="mt-3">
            {SITE.author.company} provides the portal and Eryon — software for
            composing, deploying, and orchestrating cloud clusters. The service
            is under active development and may change, and features may be
            offered in preview.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-light text-foreground">
            3. Accounts &amp; acceptable use
          </h2>
          <p className="mt-3">
            You are responsible for your account, your credentials, and activity
            under it. Do not misuse the service, attempt to disrupt it, or use it
            to violate the law or the rights of others.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-light text-foreground">
            4. Your content &amp; clusters
          </h2>
          <p className="mt-3">
            You retain ownership of the data, configurations, and clusters you
            create. You grant us the limited rights necessary to operate and
            orchestrate them on your behalf.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-light text-foreground">
            5. Intellectual property
          </h2>
          <p className="mt-3">
            The portal, Eryon, and associated software, marks, and content are
            owned by {SITE.author.company} and its licensors, and are protected
            by applicable law.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-light text-foreground">
            6. Disclaimers &amp; liability
          </h2>
          <p className="mt-3">
            The service is provided &ldquo;as is,&rdquo; without warranties of
            any kind. To the maximum extent permitted by law, {SITE.author.company}{' '}
            is not liable for indirect, incidental, or consequential damages
            arising from your use of the service.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-light text-foreground">
            7. Changes &amp; contact
          </h2>
          <p className="mt-3">
            We may update these terms from time to time; material changes will be
            posted here. Questions? Reach us at{' '}
            <a
              href={`mailto:${SITE.email}`}
              className="text-primary underline-offset-4 hover:underline"
            >
              {SITE.email}
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
Page.displayName = 'TermsPage';
