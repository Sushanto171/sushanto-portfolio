import Hero from "@/components/modules/home/heroSection/Hero";
import LearningPathTab from "@/components/modules/home/LearningPath";
import SkillsSection from "@/components/modules/home/Skills";
import ContainerWrapper from "@/components/shared/ContainerWrapper";

const HomePage = () => {
  return (
    <div className="h-[3000px]">
      <Hero />
      <ContainerWrapper>
        <SkillsSection />
        <LearningPathTab />
      </ContainerWrapper>
    </div>
  );
};

export default HomePage;
