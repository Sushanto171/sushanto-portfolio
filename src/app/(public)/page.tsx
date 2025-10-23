import Hero from "@/components/modules/home/Hero";
import SkillsSection from "@/components/modules/home/Skills";
import ContainerWrapper from "@/components/shared/ContainerWrapper";

const HomePage = () => {
  return (
    <div className="h-[3000px]">
      <Hero />
      <ContainerWrapper>
        <SkillsSection />
      </ContainerWrapper>
    </div>
  );
};

export default HomePage;
