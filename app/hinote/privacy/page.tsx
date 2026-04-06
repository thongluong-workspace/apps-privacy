import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hinote Privacy Policy",
  description:
    "Hinote is a note-taking and personal information management app designed to be simple, fast, and easy to use every day.",
};

export default function HinotePrivacyPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#fff7ed_0%,_#ffffff_25%,_#fffaf5_100%)] px-6 py-8 text-slate-900 sm:px-10 lg:px-14">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <Link href="/" className="transition hover:text-slate-900">
            Privacy Center
          </Link>
          <span>/</span>
          <span className="text-slate-900">Hinote</span>
          <span>/</span>
          <span className="text-slate-900">privacy</span>
        </div>

        {/* Header */}
        <section className="overflow-hidden rounded-[2rem] border border-orange-100 bg-white p-8 shadow-[0_20px_60px_rgba(234,88,12,0.08)] sm:p-10">
          <div
            className="mb-6 h-3 w-32 rounded-full"
            style={{
              backgroundImage: "linear-gradient(90deg, #f97316, #facc15)",
            }}
          />
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                Privacy Policy
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Hinote
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                Quick notes, clear organization, and focus on what matters.
              </p>
              <p className="max-w-2xl text-base leading-8 text-slate-600">
                Hinote is a simple, fast, and privacy-focused note-taking app.
              </p>
            </div>

            {/* Summary */}
            <aside className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-950">
                Quick summary
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Last updated: 2026-04-06
              </p>
              <p className="text-sm text-slate-600">
                Support: support@hinote.app
              </p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-orange-400" />
                  <span>We collect only necessary data.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-orange-400" />
                  <span>We do not sell your data.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-orange-400" />
                  <span>You can request data deletion anytime.</span>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        {/* Sections */}
        <section className="grid gap-5">
          {/* 01 */}
          <Article number="01" title="General Information">
            <p>
              This Privacy Policy explains how Hinote ("we", "our", or "us")
              collects, uses, and protects your information when you use our
              application.
            </p>
            <p>
              By using Hinote, you agree to the collection and use of
              information in accordance with this policy.
            </p>
          </Article>

          {/* 02 */}
          <Article number="02" title="Information We Collect">
            <p>
              We follow the principle of data minimization and only collect what
              is necessary to operate the app.
            </p>
            <p>
              <strong>User-generated content:</strong> Notes, titles, tags, and
              other content you create.
            </p>
            <p>
              <strong>Technical data:</strong> Device type, OS, app version,
              crash logs, and performance data.
            </p>
            <p>
              <strong>Account data (if applicable):</strong> Email or user ID for
              syncing across devices.
            </p>
            <p>
              Hinote does not require account registration for basic features.
            </p>
          </Article>

          {/* 03 */}
          <Article number="03" title="How We Use Information">
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and maintain app functionality.</li>
              <li>Store and display your notes.</li>
              <li>Improve performance and fix bugs.</li>
              <li>Respond to support requests.</li>
              <li>Ensure security and prevent abuse.</li>
            </ul>
          </Article>

          {/* 04 */}
          <Article number="04" title="Data Sharing and Disclosure">
            <p>We do not sell your personal data.</p>
            <p>
              We may use trusted third-party services (e.g., Firebase) for
              storage, analytics, or crash reporting.
            </p>
            <p>
              Data may be disclosed if required by law or to protect users and
              systems.
            </p>
          </Article>

          {/* 05 */}
          <Article number="05" title="Data Storage and Security">
            <p>
              We apply reasonable security measures to protect your data from
              unauthorized access or loss.
            </p>
            <p>
              Data is retained only as long as necessary for service operation.
            </p>
            <p>
              No system is 100% secure, but we strive to protect your data.
            </p>
          </Article>

          {/* 06 */}
          <Article number="06" title="User Rights">
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your data</li>
              <li>Request correction</li>
              <li>Request deletion</li>
              <li>Withdraw consent</li>
            </ul>
            <p>Contact us to exercise your rights.</p>
          </Article>

          {/* 07 */}
          <Article number="07" title="Children’s Privacy">
            <p>
              Hinote is not intended for children under 13. We do not knowingly
              collect data from children.
            </p>
          </Article>

          {/* 08 */}
          <Article number="08" title="Changes to This Policy">
            <p>
              We may update this Privacy Policy. Changes will be posted with an
              updated date.
            </p>
          </Article>

          {/* 09 */}
          <Article number="09" title="Contact">
            <p>If you have any questions, please contact us:</p>
            <p>support@hinote.app</p>
          </Article>
        </section>
      </div>
    </main>
  );
}

/* Reusable component */
function Article({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)] sm:p-7">
      <div className="mb-5 flex items-center gap-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-sm font-semibold text-orange-700">
          {number}
        </span>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
          {title}
        </h2>
      </div>
      <div className="space-y-4 text-base leading-8 text-slate-600">
        {children}
      </div>
    </article>
  );
}