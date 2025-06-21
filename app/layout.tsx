import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learning Companions - AI-Powered Learning",
  description: "Build and personalize AI learning companions for interactive voice conversations and fun learning experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <html lang="en">
        <body className={`${bricolage.variable} antialiased`}>
          <ClerkProvider appearance={{variables:{colorPrimary:"#fe5933"}}}>
            <Navbar/>
            {children}
          </ClerkProvider>
        </body>
      </html>
  
  );
}
