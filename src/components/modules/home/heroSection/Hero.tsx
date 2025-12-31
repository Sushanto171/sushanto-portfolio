import ContainerWrapper from "@/components/shared/ContainerWrapper";
import { MotionWrapper } from "@/components/shared/MotionWrapper";
import HeroContent from "./HeroContent";
import PortfolioCodeCard from "./PortfolioCodeCard";

export default function HeroSection() {
  return (
    <section className="relative sm:pt-0">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-accent/10 to-background opacity-80 blur-3xl" />

      <ContainerWrapper className="grid grid-cols-1 lg:grid-cols-2  lg:gap-12 items-center">
        {/* Left: Text Content */}
        <MotionWrapper
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-xl text-center lg:text-left">
          <HeroContent />
        </MotionWrapper>

        {/* Right: Code Card */}
        <MotionWrapper
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-center scale-52 sm:scale-50 md:scale-60 lg:scale-70 xl:scale-80 origin-center">
          <PortfolioCodeCard />
        </MotionWrapper>
      </ContainerWrapper>
    </section>
  );
}
