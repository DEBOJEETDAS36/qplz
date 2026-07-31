import WorkshopHero from "@/components/workshop/WorkshopHero";
import ProgramsList from "@/components/workshop/ProgramsList";
import ProjectGallery from "@/components/workshop/ProjectGallery";
import EnquiryForm from "@/components/workshop/EnquiryForm";

export default function WorkshopPage() {
  return (
    <>
      <WorkshopHero />
      <ProgramsList />
      <ProjectGallery />
      <EnquiryForm />
    </>
  );
}