import "./globals.css";
import { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { AuthProvider } from "@/contexts/auth";
import { Inter, Kanit } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { LoadingProvider } from "@/contexts/loading";

const kanit = Kanit({
  preload: true,
  style: "normal",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-kanit",
  weight: ["400", "500", "700"],
});
const inter = Inter({
  preload: true,
  style: "normal",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "L0GU.im",
  description:
    "Faça login na nossa plataforma e acesse conteúdo exclusivo. Insira suas credenciais e aproveite!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="rgb(9 9 11)" />
        <meta name="google-adsense-account" content="ca-pub-5836460971552859" />
      </head>
      <body
        className={`${kanit.variable} ${inter.variable} antialiased font-inter text-gray-50 bg-zinc-950`}
      >
        <NextTopLoader height={2} showSpinner={false} color="rgb(124 58 237)" />
        <AuthProvider>
          <LoadingProvider>
            <Toaster />
            {children}
          </LoadingProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
