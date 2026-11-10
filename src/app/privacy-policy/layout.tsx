import localFont from "next/font/local";

const monaSans = localFont({
  src: "../fonts/MonaSans-latin.woff2",
  weight: "200 900",
  variable: "--font-mona-sans",
  display: "swap",
});

const geist = localFont({
  src: "../fonts/Geist-variable.woff2",
  weight: "100 900",
  variable: "--font-geist",
  display: "swap",
});

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${monaSans.variable} ${geist.variable} contents`}>{children}</div>;
}
