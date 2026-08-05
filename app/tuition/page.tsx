import TuitionHero from "@/components/tuition/TuitionHero";
import BatchesList from "@/components/tuition/BatchesList";
import WhyTuition from "@/components/tuition/WhyTuition";
import ContactForm from "@/components/shared/ContactForm";
import AboutTeacher from "@/components/tuition/AboutTeacher";

export default function TuitionPage() {
  return (
    <>
      <TuitionHero />
      <BatchesList />
      <AboutTeacher />
      <WhyTuition />
      <ContactForm variant="tuition" />
    </>
  );
}