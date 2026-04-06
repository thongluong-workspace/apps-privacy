import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hinote Privacy Policy",
  description:
    "Hinote is a simple, offline-first note-taking app that respects your privacy.",
};

export default function HinotePrivacyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10 text-gray-900">
      <div className="mx-auto max-w-3xl">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-black">
            Privacy Center
          </Link>{" "}
          / Hinote / Privacy
        </div>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-semibold">Hinote Privacy Policy</h1>
          <p className="mt-2 text-gray-600">
            Simple, offline note-taking with full privacy.
          </p>

          <div className="mt-4 text-sm text-gray-500">
            <p>Last updated: 2026-04-06</p>
            <p>Contact: support@hinote.app</p>
          </div>
        </header>

        {/* Content */}
        <section className="space-y-8 text-[15px] leading-7">
          <Article title="1. General Information">
            <p>
              This Privacy Policy explains how Hinote ("we", "our", or "us")
              handles your information.
            </p>
            <p>
              Hinote is designed to be fully offline. Your data stays entirely
              on your device.
            </p>
          </Article>

          <Article title="2. Information We Collect">
            <p>
              We do <strong>not collect or store any personal data</strong> on
              external servers.
            </p>
            <p>
              All notes and content you create are stored locally on your device
              using a Realm database.
            </p>
            <p>No account or login is required.</p>
          </Article>

          <Article title="3. How We Use Information">
            <p>
              Your data is used only داخل the app to display and manage your
              notes.
            </p>
            <p>We do not access or process your data externally.</p>
          </Article>

          <Article title="4. Data Sharing">
            <p>
              We do <strong>not share or sell your data</strong>.
            </p>
            <p>Your data never leaves your device.</p>
          </Article>

          <Article title="5. Data Storage">
            <p>
              All data is stored locally on your device using secure storage.
            </p>
            <p>
              The security of your data depends on your device's protection
              (passcode, biometrics, etc.).
            </p>
          </Article>

          <Article title="6. User Control">
            <ul className="list-disc pl-5">
              <li>You can edit or delete notes anytime داخل the app</li>
              <li>Uninstalling the app removes all data</li>
            </ul>
          </Article>

          <Article title="7. Third-Party Services">
            <p>Hinote does not use any third-party data collection services.</p>
          </Article>

          <Article title="8. Children’s Privacy">
            <p>
              We do not knowingly collect any data from children or any users.
            </p>
          </Article>

          <Article title="9. Changes">
            <p>
              This policy may be updated. Changes will be reflected on this
              page.
            </p>
          </Article>

          <Article title="10. Contact">
            <p>support.greenapp@gmail.com</p>
          </Article>
        </section>
      </div>
    </main>
  );
}

/* Component */
function Article({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-2 text-lg font-semibold">{title}</h2>
      <div className="space-y-2 text-gray-700">{children}</div>
    </div>
  );
}