import PricingComponent from "./components/PricingComponent/PricingComponent";
import ServiceComponent from "./components/ServiceComponent/ServiceComponent";
import Hero from "./components/Hero/Hero";
import ScheduleCall from "./ScheduleCall/Page";
import EngagementModels from "./components/EngagementModels/EngagementModels";
import ExploreOurTech from "./components/ExploreOurTech/ExploreOurTech";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import WhatMakesUsDifferent from "./components/WhatMakesUsDifferent/WhatMakesUsDifferent";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import OurExpertise from "./Our-Expertise/ourExperties";

export default function Page() {
  return (
    <>
      <div className="relative">
        <div className="bg-yellow-500 text-black text-center py-2 z-50">
          <p className="text-sm font-medium">🚧 Site is under development</p>
        </div>
      </div>

      <Hero />
      <OurExpertise />
      <ServiceComponent />
      <ChooseUs />
      <WhatMakesUsDifferent />
      <WhoWeAre />
      <EngagementModels />
      <ScheduleCall />
      <PricingComponent />
      <ExploreOurTech />
    </>
  );
}
