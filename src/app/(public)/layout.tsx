import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/navbar/Navbar";
import { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
