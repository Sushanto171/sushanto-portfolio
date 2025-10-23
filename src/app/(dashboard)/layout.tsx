import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      This is DashboardLayout Component.
      {children}
    </div>
  );
}
