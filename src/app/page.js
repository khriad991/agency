
import Hero from "@/components/home/Hero";
import WorkList from "@/components/home/WorkList";
import FeaturedProject from "@/components/home/FeaturedProject";
import StatList from "@/components/home/StatList";
import Subscribe from "@/components/home/Subscribe";
import NavBar from "@/components/home/NavBar";

export default function Home() {
  return (
    <>
        <NavBar bg="bg-gradient"/>
        <Hero/>
        <WorkList/>
        <StatList />
        <FeaturedProject/>
        <Subscribe/>
    </>
  )
}
