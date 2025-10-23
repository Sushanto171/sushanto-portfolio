import { ReactNode } from "react";

export default function ContainerWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto container px-6 ${className}`}>{children}</div>
  );
}
