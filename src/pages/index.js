import {
  Offer,
  Contact,
  Footer,
  Hero,
  Nav,
  Timeline,
  About,
} from "@/components";

export default function Home() {
  return (
    <section className="flex flex-col w-full h-full min-h-[100dvh] justify-start items-center">
      <Nav />
      <Hero />
      <Offer />
      <About />
      <Timeline />
      <Contact />
      <Footer />
    </section>
  );
}
