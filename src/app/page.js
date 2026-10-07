import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Categories from "@/components/Categories";
import LatestCollection from "@/components/LatestCollection";
import SaleBanner from "@/components/SaleBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Categories />
      <LatestCollection />
      <SaleBanner />
    </>
  );
}