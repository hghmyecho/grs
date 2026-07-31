import Hero from "@/components/Hero";
import ClinicalStreams from "@/components/ClinicalStreams";
import Disciplines from "@/components/Disciplines";
import Values from "@/components/Values";
import Locations from "@/components/Locations";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ClinicalStreams />
      <Disciplines />
      <Values />
      <Locations />
      <Faq />
      <CtaBanner />
    </>
  );
}
