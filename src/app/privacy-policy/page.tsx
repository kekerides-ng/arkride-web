import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { WaitlistLogo } from "@/components/waitlist/WaitlistLogo";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Ark Ride collects, uses, and protects information shared through our website, waitlist, and ride services.",
};

const CONTENTS = [
  { id: "overview", label: "At a glance" },
  { id: "information", label: "Information we collect" },
  { id: "use", label: "How we use it" },
  { id: "analytics", label: "Analytics & cookies" },
  { id: "sharing", label: "When we share it" },
  { id: "retention", label: "How long we keep it" },
  { id: "rights", label: "Your choices & rights" },
  { id: "security", label: "Security & children" },
  { id: "changes", label: "Changes & contact" },
] as const;

function PolicySection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-8 border-t border-[#E5E5E5] py-9 sm:py-11">
      <div className="flex gap-4 sm:gap-7">
        <span className="mt-1.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-[#FEEE8F] font-(family-name:--font-mona-sans) text-[11px] font-bold text-black">
          {number}
        </span>
        <div className="min-w-0 max-w-[670px]">
          <h2 id={`${id}-title`} className="font-(family-name:--font-mona-sans) text-[23px] leading-[30px]! font-semibold tracking-normal! text-wrap! text-black sm:text-[28px] sm:leading-[36px]!">
            {title}
          </h2>
          <div className="mt-4 space-y-4 font-(family-name:--font-geist) text-[15px] leading-[25px] text-[#555] sm:text-[16px] sm:leading-[27px]">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main id="main" className="min-h-dvh bg-[#F9F9F9] text-black [font-variant-numeric:normal]">
      <header className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-7 sm:px-8 lg:px-[5.5%] lg:py-10">
        <Link href="/" aria-label="Ark Ride home" className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
          <WaitlistLogo className="h-[33px] w-[106px]" />
        </Link>
        <Link href="/" className="group inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-4 py-2.5 font-(family-name:--font-mona-sans) text-[12px] font-semibold text-black transition-colors hover:border-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:text-[13px]">
          <span aria-hidden="true" className="text-[17px] leading-none transition-transform group-hover:-translate-x-0.5">←</span>
          Back to waitlist
        </Link>
      </header>

      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <section className="relative overflow-hidden rounded-[22px] bg-white px-6 pt-12 pb-11 sm:px-12 sm:pt-16 sm:pb-14 lg:px-[76px] lg:pt-[78px] lg:pb-[72px]">
          <div aria-hidden="true" className="pointer-events-none absolute -top-28 -right-36 size-[330px] rounded-full border-[42px] border-[#FEEE8F]/60 sm:-top-36 sm:-right-24 sm:size-[470px] sm:border-[58px]" />
          <div aria-hidden="true" className="pointer-events-none absolute right-[19%] bottom-0 hidden h-44 w-px bg-[#E8E8E8] lg:block" />
          <div className="relative z-10 max-w-[710px]">
            <span className="inline-flex rounded-[4px] bg-[#FEEE8F] px-3 py-1.5 font-(family-name:--font-mona-sans) text-[11px] font-semibold tracking-[0.06em] text-[#020617] uppercase">
              The details, clearly
            </span>
            <h1 className="mt-7 font-(family-name:--font-mona-sans) text-[42px] leading-[1.08]! font-bold tracking-normal! text-wrap! text-black sm:text-[62px] lg:text-[76px]">
              Your journey.<br />Your data.
            </h1>
            <p className="mt-6 max-w-[560px] font-(family-name:--font-geist) text-[16px] leading-[27px] text-[#626262] sm:text-[18px] sm:leading-[30px]">
              Here&apos;s how Ark Ride handles the information you share when you join the waitlist, visit our website, or use our ride services.
            </p>
            <p className="mt-8 font-(family-name:--font-geist) text-[12px] font-medium text-[#767676]">
              Last updated 10 November 2026
            </p>
          </div>
        </section>

        <div className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[245px_minmax(0,1fr)] lg:gap-[72px]">
          <aside aria-label="Policy contents" className="lg:sticky lg:top-8 lg:self-start">
            <p className="font-(family-name:--font-mona-sans) text-[11px] font-semibold tracking-[0.08em] text-[#767676] uppercase">On this page</p>
            <nav className="mt-4 flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0" aria-label="Privacy policy sections">
              {CONTENTS.map(({ id, label }) => (
                <a key={id} href={`#${id}`} className="shrink-0 rounded-full px-3 py-2 font-(family-name:--font-geist) text-[13px] leading-[18px] text-[#626262] transition-colors hover:bg-[#FEEE8F] hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:rounded-[9px] lg:px-4 lg:text-[14px]">
                  {label}
                </a>
              ))}
            </nav>
          </aside>

          <article className="min-w-0">
            <PolicySection id="overview" number="01" title="At a glance">
              <p>Ark Ride connects people and drivers. We use the information you give us to manage the waitlist, operate our services, communicate with you, and improve the experience. This policy covers our website, waitlist, and ride services.</p>
              <p>Some features need additional information, such as trip details or driver verification documents. We explain those requests when you use the feature.</p>
            </PolicySection>

            <PolicySection id="information" number="02" title="Information we collect">
              <ul className="list-disc space-y-2 pl-5 marker:text-[#D5A923]">
                <li><strong className="font-semibold text-black">Waitlist details:</strong> whether you want to ride or drive, your email address and phone number, and any name, Lagos LGA or area, and feature suggestion you choose to provide.</li>
                <li><strong className="font-semibold text-black">Account and trip details:</strong> if you use our ride services, the details needed to create an account, arrange a trip, show a fare, support a booking, and record payments or earnings.</li>
                <li><strong className="font-semibold text-black">Driver verification:</strong> if you apply to drive, we may request identity, licence, address, vehicle, and guarantor details and supporting documents.</li>
                <li><strong className="font-semibold text-black">Website activity:</strong> basic technical information and, when enabled, page views and selected events such as opening or completing the waitlist form.</li>
              </ul>
            </PolicySection>

            <PolicySection id="use" number="03" title="How we use it">
              <p>We use your information to confirm and manage your place on the waitlist, send relevant launch and service updates, provide rides and driver services, verify eligibility where needed, answer support requests, prevent misuse, and meet applicable legal obligations.</p>
              <p>The location and feature answers on the waitlist help us understand where people want Ark Ride and what they would like us to build. You can leave optional answers blank.</p>
            </PolicySection>

            <PolicySection id="analytics" number="04" title="Analytics & cookies">
              <p>When analytics is enabled, we use PostHog to understand page visits and a small set of waitlist events. These events can include whether you signed up as a rider or driver and the LGA or driver area you supplied. We do not intentionally send your name, email address, phone number, or free-text feature suggestion in those events.</p>
              <p>Analytics is disabled when it is not configured, and our setup respects your browser&apos;s Do Not Track setting. We do not use session recording or automatic click capture on the waitlist. Essential browser storage may be used to keep the site working and remember whether you have seen the logo introduction.</p>
            </PolicySection>

            <PolicySection id="sharing" number="05" title="When we share it">
              <p>Information may be shared with providers that help us host the service, deliver email, measure website use, process payments, provide maps, or support verification. We share trip information with the rider or driver involved as needed to arrange and complete a ride. We may also disclose information when required by law or to protect people and the service.</p>
              <p>Some providers may process information outside Nigeria. Where that happens, we handle the transfer in line with applicable data protection requirements.</p>
            </PolicySection>

            <PolicySection id="retention" number="06" title="How long we keep it">
              <p>We keep information for as long as it is needed for the purpose described here, including managing the waitlist and providing services, and for any longer period required by law or needed to resolve disputes. Retention depends on the type of record. You can ask us about a particular record using the contact details below.</p>
            </PolicySection>

            <PolicySection id="rights" number="07" title="Your choices & rights">
              <p>You may ask to access or correct your personal information, request deletion, object to or restrict certain uses, withdraw consent where processing relies on it, or ask for a portable copy where applicable. Some requests may be limited by legal or operational requirements.</p>
              <p>To make a request or leave the waitlist, email <a href="mailto:support@myarkride.com?subject=Privacy%20request" className="font-medium text-black underline decoration-[#D5A923] underline-offset-4 hover:decoration-black">support@myarkride.com</a>.</p>
            </PolicySection>

            <PolicySection id="security" number="08" title="Security & children">
              <p>We use technical and organisational measures intended to protect personal information. No internet service can guarantee complete security, so please tell us promptly if you believe your information or account has been compromised.</p>
              <p>Ark Ride services are intended for adults. If you believe a child has given us personal information, contact us so we can review it.</p>
            </PolicySection>

            <PolicySection id="changes" number="09" title="Changes & contact">
              <p>We may update this policy as Ark Ride changes. The date at the top shows when this version was last updated. If a change materially affects how we use your information, we will provide additional notice where appropriate.</p>
              <p>Questions about this policy or your data? Write to <a href="mailto:support@myarkride.com?subject=Privacy%20question" className="font-medium text-black underline decoration-[#D5A923] underline-offset-4 hover:decoration-black">support@myarkride.com</a>.</p>
            </PolicySection>
          </article>
        </div>
      </div>

      <footer className="bg-black text-white">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-7 px-5 py-11 sm:flex-row sm:items-end sm:justify-between sm:px-8 sm:py-14">
          <div>
            <p className="font-(family-name:--font-mona-sans) text-[24px] leading-[31px]! font-semibold tracking-normal! text-wrap! text-white">Your next ride starts here.</p>
            <p className="mt-2 font-(family-name:--font-geist) text-[14px] leading-[22px] text-[#C7C7C7]">A clearer journey, from the first step.</p>
          </div>
          <div className="flex items-center gap-6 font-(family-name:--font-geist) text-[13px]">
            <Link href="/" className="underline decoration-[#FEEE8F] underline-offset-4 hover:text-[#FEEE8F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Join the waitlist</Link>
            <span className="text-[#A7A7A7]">© {new Date().getFullYear()} Ark Ride</span>
          </div>
        </div>
        <div className="relative h-[52px] overflow-hidden">
          <Image src="/waitlist/footer-strip.webp" alt="" fill sizes="100vw" className="object-cover" />
        </div>
      </footer>
    </main>
  );
}
