import PricingComponent from "./components/PricingComponent/PricingComponent";
import ServiceComponent from "./components/ServiceComponent/ServiceComponent";
import Hero from "./Hero/Page";
import ScheduleCall from "./ScheduleCall/Page";
import EngagementModels from "./components/EngagementModels/EngagementModels";
import ExploreOurTech from "./components/ExploreOurTech/ExploreOurTech";

export default function Page() {
  return (
    <div>
      <Hero />
      <ServiceComponent />
      <PricingComponent />
      <EngagementModels />
      <ScheduleCall />
      <ExploreOurTech />
    </div>
  );
}
