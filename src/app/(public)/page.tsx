import AboutMe from "@/components/modules/home/aboutSection/AboutMe";
import Hero from "@/components/modules/home/heroSection/Hero";
import LearningPathTab from "@/components/modules/home/LearningPath";
import SkillsSection from "@/components/modules/home/Skills";
import ContainerWrapper from "@/components/shared/ContainerWrapper";

const HomePage = () => {
  return (
    <main >
      <Hero />
      <ContainerWrapper>
        <AboutMe />
        <SkillsSection />
        <LearningPathTab />
      </ContainerWrapper>
    </main>
  );
};

export default HomePage;
