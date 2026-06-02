/**
 * Created At: 2025.07.25:06:38:44
 * @author - @FL03
 * @directory - src/app/(public)/privacy
 * @file - page.tsx
 */
// imports
import type { Metadata } from 'next';
import { SITE } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${SITE.author.company} collects, uses, and protects your information.`,
};

export default function Page() {
  return (
    <article>
      <p className="label-mono text-primary">[ Legal ]</p>
      <h1 className="mt-6 font-display text-5xl font-light tracking-tight sm:text-6xl">
        Privacy Policy
      </h1>
      <p className="label-mono mt-4 text-muted-foreground">
        Last updated · June 1, 2026
      </p>

      <div className="mt-10 space-y-8 leading-relaxed text-muted-foreground">
        <section>
          <h2 className="font-display text-2xl font-light text-foreground">
            1. Overview
          </h2>
          <p className="mt-3">
            This policy describes how {SITE.author.company} (&ldquo;Scattered-Systems,&rdquo;
            &ldquo;we,&rdquo; or &ldquo;us&rdquo;) collects, uses, and safeguards
            information when you visit {SITE.url} or use the portal and related
            services.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-light text-foreground">
            2. Information we collect
          </h2>
          <p className="mt-3">
            <strong className="text-foreground/90">Information you provide</strong> —
            such as your name, email, and account details when you sign up,
            contact us, or configure a cluster.{' '}
            <strong className="text-foreground/90">Usage data</strong> — basic,
            aggregated analytics about how the site and portal are used, used to
            improve reliability and experience. We do not sell your data.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-light text-foreground">
            3. How we use information
          </h2>
          <p className="mt-3">
            To operate and improve the portal and Eryon, provision and
            orchestrate the clusters you create, communicate with you about your
            account, and keep the service secure.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-light text-foreground">
            4. Sharing &amp; disclosure
          </h2>
          <p className="mt-3">
            We share information only with service providers that help us operate
            the platform, or where required by law. Your clusters, data, and keys
            remain yours.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-light text-foreground">
            5. Security &amp; retention
          </h2>
          <p className="mt-3">
            We apply reasonable technical and organizational measures to protect
            your information and retain it only as long as needed to provide the
            service or as required by law.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-light text-foreground">
            6. Your rights
          </h2>
          <p className="mt-3">
            You may request access to, correction of, or deletion of your
            personal information at any time by contacting us.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-light text-foreground">
            7. Contact
          </h2>
          <p className="mt-3">
            Questions about this policy? Reach us at{' '}
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
Page.displayName = 'PrivacyPage';
