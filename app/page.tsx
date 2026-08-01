import CallToAction from "@/components/home/CallToAction";
import FeaturedWork from "@/components/home/FeaturedWork";
import Hero from "@/components/home/Hero";
import OverviewSplit from "@/components/home/OverviewSplit";
import WhyUs from "@/components/home/WhyUs";
import ContactForm from "@/components/shared/ContactForm";


export default function Home() {
  return (
    <>
      <Hero />
      <OverviewSplit />
      <WhyUs />
      <FeaturedWork />
      <ContactForm variant="general" />
      <CallToAction />
    </>
  );
}