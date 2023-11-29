
import Hero from "@/components/Hero";
import WorkList from "@/components/WorkList";
import FeaturedProject from "@/components/FeaturedProject";
import StatList from "@/components/StatList";
import Subcribe from "@/components/Subcribe";

export default function Home() {
  return (
    <>
        <Hero/>
        <WorkList/>
        <StatList />
        <FeaturedProject/>
        <Subcribe/>
    </>
  )
}
