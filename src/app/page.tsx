import Navbar from "./ui/components/layoutComponents/navbar";
// import Carousel from "./ui/components/homeComponents/Carousel";
// import AboutPage from "./ui/components/homeComponents/About";
import StatsSection from "./ui/components/homeComponents/StatsSection";
// import Blogs from "./ui/components/blogsComponent/Blogs";
import Footer from "./ui/components/layoutComponents/Footer";
// import SupportVolunteerSection from "./ui/components/homeComponents/SupportVolunteerSection";
import FeatureCard from "./ui/components/homeComponents/FeatureCard";
import NewsComponent from "./ui/components/homeComponents/NewsComponent";
import NewsSection from "./ui/components/homeComponents/NewsSection";
import NewsComponent1 from "./ui/components/homeComponents/NewsComponent1";
import UpcomingEvents from "./ui/components/homeComponents/UpcomingEvents";
import ShowMoreLayout from "./ui/components/homeComponents/ShowMoreLayout";
 
export default function Home() {
  // const slides = [
  //   {
  //     image: "/chranlogo2.jpeg",
  //     text: "Support Human Rights Advocacy in Nigeria",
  //   },
  //   {
  //     image: "/chranlogo3.jpeg",
  //     text: "Promoting Democracy and Accountability",
  //   },
  //   {
  //     image: "/chranlogo4.jpeg",
  //     text: "Advocating for Justice and Equality in Marginalized Communities",
  //   },
  //   {
  //     image: "/chranlogo5.jpeg",
  //     text: "Empowering Women and Girls to Overcome Discrimination and Violence",
  //   }, 
  //   {
  //     image: "/chranlogo6.jpeg",
  //     text: "Championing Freedom of Expression and Access to Information",
  //   }, 
  //   {
  //     image: "/chranlogo7.jpeg",
  //     text: "Strengthening Grassroots Movements for Sustainable Development",
  //   },
  //   {
  //     image: "/chranlogo8.jpeg",
  //     text: "Defending the Rights of Vulnerable and Displaced Populations",
  //   },
  //   {
  //     image: "/chranlogo9.jpeg",
  //     text: "Supporting Legal Reforms for Inclusive and Transparent Governance",
  //   },
  //   {
  //     image: "/chranlogo10.jpeg",
  //     text: "Stand with Victims of Human Rights Violations",
  //   },];
  return (
    <div>
      <Navbar />
      {/* <Carousel slides={slides} /> */}
      <FeatureCard />
      {/* <AboutPage /> */}
      <NewsComponent />
      <StatsSection />
      {/* <Blogs /> */}
      <NewsSection />
      <NewsComponent1 />
      {/* <SupportVolunteerSection /> */}
      <UpcomingEvents />
      <ShowMoreLayout />
      <Footer />
    </div>
  );
}
