import { DM_Sans } from 'next/font/google';
import './globals.css';
import { Footer } from './footer';
import { ThemeProvider } from 'next-themes';
import AnnouncementBanner from '@/components/screens/announcement-banner';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata = {
  title: 'Ganesh Portfolio',
  description: 'Web Designer & Developer from India',
};

const geist = DM_Sans({
  variable: '--font-geist',
  subsets: ['latin'],
});

const geistMono = DM_Sans({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} tracking-tight antialiased bg-white dark:bg-zinc-950 font-neue`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          {/* AnnouncementBanner with fixed black bg */}
          <AnnouncementBanner />

          {/* Wrap all animated bg sections here */}
          <div className="animate-bg-cycle min-h-screen transition-colors duration-1000">
            <div className="flex w-full flex-col">
              <div className="relative mx-auto w-full flex-1">
                {children}
                <Footer />
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
