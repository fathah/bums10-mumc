import Atmosphere from "./components/Atmosphere";
import Hero from "./components/Hero";
import Invitation from "./components/Invitation";
import Countdown from "./components/Countdown";
import Details from "./components/Details";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Atmosphere />
      <div className="relative z-10">
        <Hero />
        <Invitation />
        <Countdown />
        <Details />
        <Footer />
      </div>
    </main>
  );
}
