import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { ModalProvider } from "@/providers/modal-provider";
import ProfileService from "@/lib/current-profile";
import getCurrentProfile from "@/lib/current-profile";
import { ChatSection } from "@/components/chat/chat-section";
import { SideBar } from "@/components/sidebar/sidebar";
import { MessageProvider } from "@/contexts/message-provider";
import getConversations from "@/actions/get-conversations";
import { ChatSectionMobile } from "@/components/chat/chat-section-mobile";
import ToasterProvider from "@/providers/toaster-provider";

const font = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatGPT",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const currentUser = await getCurrentProfile();
  const conversations = await getConversations();

  return (
    <html lang="en">
      <body className={`h-screen ${font.className} bg-white dark:bg-[#212121] overflow-hidden`}>
        <ModalProvider currentUser={currentUser}/>
        <ToasterProvider/>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
        >
          <MessageProvider>
            {children}
          </MessageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
