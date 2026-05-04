import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sustainable Multimodal Artificial Intelligence for Research and Technology Transfer (SMARTT 2026)",
  description: "Sustainable Multimodal Artificial Intelligence for Research and Technology Transfer (SMARTT 2026) - International Conference.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
