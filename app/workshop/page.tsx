import WorkshopHero from "@/components/workshop/WorkshopHero";
import ProgramsList from "@/components/workshop/ProgramsList";
import ProjectGallery from "@/components/workshop/ProjectGallery";
import ContactForm from "@/components/shared/ContactForm";

export default function WorkshopPage() {
  return (
    <>
      <WorkshopHero />
      <ProgramsList />
      <ProjectGallery />
      <ContactForm variant="workshop" />
    </>
  );
}