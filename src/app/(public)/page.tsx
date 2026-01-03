import AboutMe from "@/components/modules/home/aboutSection/AboutMe";
import ContactSection from "@/components/modules/home/contactSection/ContactSection";
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
        <ContactSection />
      </ContainerWrapper>
    </main>
  );
};

export default HomePage;
