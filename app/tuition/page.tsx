import TuitionHero from "@/components/tuition/TuitionHero";
import BatchesList from "@/components/tuition/BatchesList";
import WhyTuition from "@/components/tuition/WhyTuition";
import ContactForm from "@/components/shared/ContactForm";

export default function TuitionPage() {
  return (
    <>
      <TuitionHero />
      <BatchesList />
      <WhyTuition />
      <ContactForm variant="tuition" />
    </>
  );
}