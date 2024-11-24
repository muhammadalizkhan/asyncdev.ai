import Navbar from "./components/NavBar/Navbar";
import Hero from "./Hero/Page";
import Pricing from "./Pricing/Page";
import Services from "./Services/page";
import ScheduleCall from "./ScheduleCall/Page";

export default function Page() {
  return (
    <div>
      <Hero />
      <Services />
      <Pricing />
      <ScheduleCall />
    </div>
  );
}
