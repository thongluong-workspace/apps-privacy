import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.18),_transparent_28%),linear-gradient(180deg,_#fffaf4_0%,_#ffffff_55%,_#fff7ed_100%)] px-6 py-10 text-slate-900 sm:px-10 lg:px-14">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <section className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_20px_70px_rgba(217,119,6,0.10)] backdrop-blur sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex w-fit rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700">
                Privacy Center
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Privacy policies for Hinote and future apps in the ecosystem.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                This site is organized by app so it stays easy to scale. Each
                app has its own privacy page, such as
                `app/hinote/privacy/page.tsx` or `app/alarm/privacy/page.tsx`,
                so you can write content directly in JSX instead of passing data
                through objects.
              </p>
            </div>
            <div className="grid gap-3 rounded-[1.5rem] border border-orange-100 bg-orange-50/70 p-5 text-sm text-slate-700 sm:min-w-72">
              <div>
                <p className="font-semibold text-slate-900">
                  Built to scale
                </p>
                <p>Each app has its own URL and its own privacy content.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Suggested URLs</p>
                <p className="font-mono text-xs">
                  /hinote/privacy, /alarm/privacy
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <article className="group rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1">
            <div
              className="mb-5 h-2 w-24 rounded-full"
              style={{
                backgroundImage: "linear-gradient(90deg, #f97316, #facc15)",
              }}
            />
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Hinote
              </h2>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                Privacy Policy
              </p>
              <p className="text-sm leading-7 text-slate-600">
                Hinote is a note-taking and personal information management app
                designed to be simple, fast, and easy to use every day.
              </p>
            </div>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-orange-400" />
                <span>Only collects the data needed to operate the app.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-orange-400" />
                <span>Does not sell personal data to third parties.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-orange-400" />
                <span>Users can request updates or deletion of relevant data.</span>
              </li>
            </ul>
            <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
              <p className="text-sm text-slate-500">Updated: 2026-04-06</p>
              <Link
                href="/hinote/privacy"
                className="rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                View details
              </Link>
            </div>
          </article>

          <article className="group rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1">
            <div
              className="mb-5 h-2 w-24 rounded-full"
              style={{
                backgroundImage: "linear-gradient(90deg, #0f766e, #22c55e)",
              }}
            />
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Alarm
              </h2>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                Privacy Policy
              </p>
              <p className="text-sm leading-7 text-slate-600">
                Alarm is an alarm and reminder app focused on timely
                notifications and flexible recurring schedules.
              </p>
            </div>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                <span>
                  Can process alarm schedules, reminders, and recurring timing
                  options.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                <span>
                  May use device information and notification permissions to
                  support core functionality.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                <span>
                  Has its own standalone policy that can be updated separately
                  from Hinote.
                </span>
              </li>
            </ul>
            <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
              <p className="text-sm text-slate-500">Updated: 2026-04-06</p>
              <Link
                href="/alarm/privacy"
                className="rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                View details
              </Link>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
