import AboutMe from "@/components/modules/home/aboutSection/AboutMe";
import Hero from "@/components/modules/home/heroSection/Hero";
import ProjectsSection from "@/components/modules/home/projectsSection/ProjectsSection";
import SkillsSection from "@/components/modules/home/Skills";
import ContainerWrapper from "@/components/shared/ContainerWrapper";

const HomePage = () => {
  return (
    <main >
      <Hero />
      <ContainerWrapper>
        <AboutMe />
        <SkillsSection />
        <ProjectsSection />
      </ContainerWrapper>
    </main>
  );
};

export default HomePage;
