import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hinote Support",
  description:
    "Official support page for Hinote - offline note-taking app.",
};

export default function HinoteSupportPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10 text-gray-900">
      <div className="mx-auto max-w-3xl">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-black">
            Privacy Center
          </Link>{" "}
          / Hinote / Support
        </div>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-semibold">Hinote Support</h1>
          <p className="mt-2 text-gray-600">
            Get help, report issues, or send feedback about Hinote.
          </p>

          <div className="mt-4 text-sm text-gray-500">
            <p>Last updated: 2026-04-06</p>
            <p>Email: support.greenapp@gmail.com</p>
          </div>
        </header>

        {/* Highlight Box */}
        <section className="mb-8 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-lg font-semibold">About Hinote</h2>
          <p className="mt-2 text-gray-700 leading-7">
            Hinote is a simple, offline-first note-taking app. All your notes
            are stored locally on your device. No login, no cloud sync, and no
            data collection.
          </p>
        </section>

        {/* Quick Actions */}
        <section className="mb-8 grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:support.greenapp@gmail.com?subject=Hinote Support"
            className="rounded-xl border border-gray-200 p-5 hover:bg-gray-50"
          >
            <h3 className="font-medium">Contact Support</h3>
            <p className="mt-1 text-sm text-gray-600">
              Send us an email if you need help or have questions.
            </p>
          </a>

          <a
            href="mailto:support.greenapp@gmail.com?subject=Hinote Bug Report"
            className="rounded-xl border border-gray-200 p-5 hover:bg-gray-50"
          >
            <h3 className="font-medium">Report a Bug</h3>
            <p className="mt-1 text-sm text-gray-600">
              Found an issue? Let us know so we can fix it.
            </p>
          </a>

          <a
            href="mailto:support.greenapp@gmail.com?subject=Hinote Feedback"
            className="rounded-xl border border-gray-200 p-5 hover:bg-gray-50"
          >
            <h3 className="font-medium">Send Feedback</h3>
            <p className="mt-1 text-sm text-gray-600">
              Share ideas to improve Hinote.
            </p>
          </a>

          <Link
            href="/hinote/privacy"
            className="rounded-xl border border-gray-200 p-5 hover:bg-gray-50"
          >
            <h3 className="font-medium">Privacy Policy</h3>
            <p className="mt-1 text-sm text-gray-600">
              Learn how your data is handled.
            </p>
          </Link>
        </section>

        {/* FAQ */}
        <section className="rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold">
            Frequently Asked Questions
          </h2>

          <div className="mt-4 space-y-5 text-gray-700 leading-7">
            <div>
              <p className="font-medium">
                Does Hinote require an account?
              </p>
              <p>No. You can use Hinote without signing up.</p>
            </div>

            <div>
              <p className="font-medium">
                Where is my data stored?
              </p>
              <p>
                All data is stored locally on your device using secure storage.
              </p>
            </div>

            <div>
              <p className="font-medium">
                Does Hinote collect my data?
              </p>
              <p>No. Hinote does not collect or track any user data.</p>
            </div>

            <div>
              <p className="font-medium">
                Can I recover deleted notes?
              </p>
              <p>
                No. Deleted notes cannot be recovered. Please confirm before
                deleting.
              </p>
            </div>

            <div>
              <p className="font-medium">
                I lost my data after reinstalling the app
              </p>
              <p>
                Since Hinote works offline and stores data locally,
                uninstalling the app will remove all data permanently.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Hinote</p>
          <p className="mt-1">
            Support URL:{" "}
            <a
              href="https://apps-privacy-three.vercel.app/hinote/support"
              className="underline hover:text-black"
            >
              https://apps-privacy-three.vercel.app/hinote/support
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}