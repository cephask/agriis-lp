import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNavbar navItems={navItems} /> */}
        <Hero />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
