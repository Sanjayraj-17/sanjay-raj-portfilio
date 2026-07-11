import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sanjay Raj M | Full Stack Developer | Software Engineer Portfolio",
  description: "Sanjay Raj M is a Full Stack Developer specializing in building high-performance Next.js web applications, scalable Python backend systems, and beautiful UI/UX designs. Explore his projects and certifications.",
  keywords: ["Sanjay Raj M", "Full Stack Developer", "Software Engineer", "Next.js Portfolio", "React Developer", "Python Developer", "Sanjay Raj Portfolio"],
  authors: [{ name: "Sanjay Raj M" }],
  creator: "Sanjay Raj M",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/Sanjayraj-17",
    title: "Sanjay Raj M | Full Stack Developer Portfolio",
    description: "Sanjay Raj M is a Full Stack Developer specializing in building high-performance Next.js web applications, scalable Python backend systems, and beautiful UI/UX designs. Explore his projects and certifications.",
    siteName: "Sanjay Raj M Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Sanjay Raj M",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanjay Raj M | Full Stack Developer Portfolio",
    description: "Sanjay Raj M is a Full Stack Developer specializing in building high-performance Next.js web applications, scalable Python backend systems, and beautiful UI/UX designs.",
    images: ["/profile.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030303",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sanjay Raj M",
    "jobTitle": "Full Stack Developer",
    "url": "https://github.com/Sanjayraj-17",
    "sameAs": [
      "https://github.com/Sanjayraj-17",
      "https://linkedin.com/in/sanjay-raj-m-0701042aa"
    ],
    "description": "Sanjay Raj M is a Full Stack Developer specializing in building high-performance Next.js web applications, scalable Python backend systems, and beautiful UI/UX designs."
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
