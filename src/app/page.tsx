import Navbar from "./components/NavBar/Navbar";
import Hero from "./Hero/Page";
import Pricing from "./Pricing/Page";
import Services from "./Services/page";
export default function Page() {
  return (
    <div>
      <Hero />
      <Services />
      <Pricing />
    </div>
  );
}
