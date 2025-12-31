import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function ContainerWrapper({
  children,
  className,
}: ContainerWrapperProps) {
  return (
    <div
      className={cn(
        // Centering & width control (CLS-safe)
        "mx-auto w-full max-w-[1280px]",

        // Responsive horizontal padding (mobile → desktop)
        "px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12",

        className
      )}
    >
      {children}
    </div>
  );
}
