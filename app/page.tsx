import Hero from "@/components/Hero";
import ClinicalStreams from "@/components/ClinicalStreams";
import Disciplines from "@/components/Disciplines";
import SpecialistAssessments from "@/components/SpecialistAssessments";
import Values from "@/components/Values";
import Locations from "@/components/Locations";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import SeoIntro from "@/components/SeoIntro";

export default function Home() {
  return (
    <>
      <Hero />
      <ClinicalStreams />
      <Disciplines />
      <SpecialistAssessments />
      <Values />
      <Locations />
      <Faq />
      <SeoIntro />
      <CtaBanner />
    </>
  );
}
