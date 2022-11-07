import Nav from "./Nav";
import HeroContent from "./HeroContent.js";

function Hero() {
  return (
    <div className="min-h-screen bg-slate-900 px-8 pt-4 md:px-32 md:pt-8">
      <Nav />
      <HeroContent />
    </div>
  );
}

export default Hero;
