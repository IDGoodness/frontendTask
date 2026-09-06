import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LearningManagement from "@/components/LearningManagement";
import TrainingPrograms from "@/components/TrainingPrograms";
import ManagementDevelopment from "@/components/ManagementDevelopment";
import TransformationHub from "@/components/TransformationHub";
import TrainingConsultant from "@/components/TrainingConsultant";
import AccelerationCTA from "@/components/AccelerationCTA";
import Testimonials from "@/components/Testimonials";
import PreFooterCTA from "@/components/PreFooterCTA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <LearningManagement />
        <TrainingPrograms />
        <ManagementDevelopment />
        <TransformationHub />
        <TrainingConsultant />
        <AccelerationCTA />
        <Testimonials />
        <PreFooterCTA />
      </main>
    </div>
  );
}
