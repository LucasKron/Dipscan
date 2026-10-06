import Nav from "../../components/Nav/Nav";
import Hero from "../../components/home/hero";
import Features from "../../components/home/features";
import Footer from "../../components/home/footer";

import "./home.css";

export default function Home() {
  return (
    <>
      <Nav />

      <Hero />

      <Features />

      <Footer />
    </>
  );
}