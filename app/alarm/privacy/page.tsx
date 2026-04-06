import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Alarm Privacy Policy",
  description:
    "Alarm is an alarm and reminder app focused on timely notifications and flexible recurring schedules.",
};

export default function AlarmPrivacyPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#f0fdf4_0%,_#ffffff_25%,_#f8fafc_100%)] px-6 py-8 text-slate-900 sm:px-10 lg:px-14">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <Link href="/" className="transition hover:text-slate-900">
            Privacy Center
          </Link>
          <span>/</span>
          <span className="text-slate-900">Alarm</span>
          <span>/</span>
          <span className="text-slate-900">privacy</span>
        </div>

        <section className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-[0_20px_60px_rgba(16,185,129,0.10)] sm:p-10">
          <div
            className="mb-6 h-3 w-32 rounded-full"
            style={{
              backgroundImage: "linear-gradient(90deg, #0f766e, #22c55e)",
            }}
          />
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                Privacy Policy
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Alarm
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                Set alarms quickly, receive notifications on time, and keep
                your schedule on track.
              </p>
              <p className="max-w-2xl text-base leading-8 text-slate-600">
                Alarm is an alarm and reminder app focused on timely
                notifications and flexible recurring schedules.
              </p>
            </div>

            <aside className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-950">
                Quick summary
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Last updated: 2026-04-06
              </p>
              <p className="text-sm leading-6 text-slate-600">
                Support: support@alarm.app
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
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
            </aside>
          </div>
        </section>

        <section className="grid gap-5">
          <article className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)] sm:p-7">
            <div className="mb-5 flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">
                01
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                General information
              </h2>
            </div>
            <div className="space-y-4 text-base leading-8 text-slate-600">
              <p>
                This policy applies specifically to Alarm and explains how data
                is handled when you use alarm and reminder features.
              </p>
            </div>
          </article>

          <article className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)] sm:p-7">
            <div className="mb-5 flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">
                02
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Data we may collect
              </h2>
            </div>
            <div className="space-y-4 text-base leading-8 text-slate-600">
              <p>
                Information you configure in the app, such as alarm times,
                reminder titles, repeat frequency, sound preferences, and
                vibration or notification settings.
              </p>
              <p>
                Technical information related to the device, operating system,
                and system errors to help ensure notifications are delivered on
                time.
              </p>
            </div>
          </article>

          <article className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)] sm:p-7">
            <div className="mb-5 flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">
                03
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                How we use data
              </h2>
            </div>
            <div className="space-y-4 text-base leading-8 text-slate-600">
              <p>
                To run alarm features, display reminders, and sync settings if
                sync support is added in the future.
              </p>
              <p>
                To analyze errors and improve the reliability of schedules and
                notifications.
              </p>
            </div>
          </article>

          <article className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)] sm:p-7">
            <div className="mb-5 flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">
                04
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Contact
              </h2>
            </div>
            <div className="space-y-4 text-base leading-8 text-slate-600">
              <p>
                If you have questions about Alarm&apos;s privacy policy, please
                contact us at support@alarm.app.
              </p>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
