import AboutUs from "@/Components/Home/AboutUs";
import Banner from "@/Components/Home/Banner";
import ServiceCard from "@/Components/Home/ServiceCard";
import Testimonials from "@/Components/Home/Testimonials";

export default function Home() {
  return (
    <div className="space-y-5">
      <section>
        <Banner></Banner>
      </section>
      <section>
        <AboutUs></AboutUs>
      </section>
      <section>
        <ServiceCard></ServiceCard>
      </section>
      <section>
        <Testimonials></Testimonials>
      </section>
    </div>
  );
}
