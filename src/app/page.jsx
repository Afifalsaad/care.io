import AboutUs from "@/Components/Home/AboutUs";
import Banner from "@/Components/Home/Banner";

export default function Home() {
  return (
    <div className="space-y-5">
      <section>
        <Banner></Banner>
      </section>
      <section>
        <AboutUs></AboutUs>
      </section>
    </div>
  );
}
