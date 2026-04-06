import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hinote Support",
  description: "Support center for Hinote.",
};

const quickActions = [
  {
    title: "Send a support request",
    description: "Reach out for help with setup, bugs, or account-related questions.",
    href: "mailto:support.greenapp@gmail.com",
    label: "Email support",
  },
  {
    title: "Read the privacy policy",
    description: "Review how Hinote handles data and what users can control.",
    href: "/hinote/privacy",
    label: "Open privacy page",
  },
  {
    title: "Open support URL",
    description: "Use the public support page for customer-facing communication.",
    href: "https://apps-privacy-three.vercel.app/hinote/support",
    label: "Visit support URL",
  },
];

const resourceGroups = [
  {
    heading: "Getting started",
    items: [
      "Set up Hinote and begin writing notes right away.",
      "Understand how offline storage works on your device.",
      "Find the quickest path for reporting bugs or asking questions.",
    ],
  },
  {
    heading: "Policies",
    items: [
      "Privacy Policy",
      "Terms of Use",
      "Data deletion requests",
    ],
  },
];

export default function HinoteSupportPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(251,146,60,0.18),_transparent_25%),linear-gradient(180deg,_#fffaf5_0%,_#ffffff_45%,_#fff7ed_100%)] px-6 py-8 text-slate-900 sm:px-10 lg:px-14">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <Link href="/" className="transition hover:text-slate-900">
            Privacy Center
          </Link>
          <span>/</span>
          <span className="text-slate-900">Hinote</span>
          <span>/</span>
          <span className="text-slate-900">support</span>
        </div>

        <section className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_20px_70px_rgba(234,88,12,0.10)] backdrop-blur sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div className="space-y-5">
              <span className="inline-flex w-fit rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700">
                Hinote Support Center
              </span>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Hi there, how can we help with Hinote today?
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Find the right place to get support, review privacy information,
                or use the official support URL for Hinote.
              </p>

              <div className="flex items-center rounded-[1.25rem] border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-500 shadow-inner">
                <span className="mr-3 text-base text-orange-500">/</span>
                <span className="flex-1">
                  https://apps-privacy-three.vercel.app/hinote/support
                </span>
                <a
                  href="https://apps-privacy-three.vercel.app/hinote/support"
                  className="rounded-full bg-slate-950 px-4 py-2 font-medium text-white transition hover:bg-slate-800"
                >
                  Open
                </a>
              </div>
            </div>

            <aside className="rounded-[1.5rem] border border-orange-100 bg-orange-50/70 p-6">
              <p className="text-sm font-semibold text-slate-950">
                Support details
              </p>
              <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                <p>Product: Hinote</p>
                <p>Support email: support.greenapp@gmail.com</p>
                <p>
                  Support URL:
                  {" "}
                  https://apps-privacy-three.vercel.app/hinote/support
                </p>
                <p>Last updated: 2026-04-06</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          {quickActions.map((action) => (
            <article
              key={action.title}
              className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
            >
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                {action.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {action.description}
              </p>
              <a
                href={action.href}
                className="mt-6 inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                {action.label}
              </a>
            </article>
          ))}
        </section>

        <section className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          {resourceGroups.map((group) => (
            <article
              key={group.heading}
              className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.05)]"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                {group.heading}
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-orange-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="rounded-[2rem] border border-slate-200/80 bg-slate-950 px-8 py-10 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm uppercase tracking-[0.24em] text-orange-200">
                Contact
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Need direct help from the Hinote team?
              </h2>
              <p className="text-sm leading-7 text-slate-300">
                Send your issue details, device information, and screenshots if
                available so we can help faster.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:support.greenapp@gmail.com"
                className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-orange-50"
              >
                support.greenapp@gmail.com
              </a>
              <a
                href="https://apps-privacy-three.vercel.app/hinote/support"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
              >
                apps-privacy-three.vercel.app/hinote/support
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
