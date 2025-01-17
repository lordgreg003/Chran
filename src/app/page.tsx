// import Carousel from "./ui/components/homeComponents/Carousel";
// import AboutPage from "./ui/components/homeComponents/About";
// import StatsSection from "./ui/components/homeComponents/StatsSection";
// import Blogs from "./ui/components/blogsComponent/Blogs";
// import SupportVolunteerSection from "./ui/components/homeComponents/SupportVolunteerSection";
import FeatureCard from "./ui/components/homeComponents/FeatureCard";
import NewsComponent from "./ui/components/homeComponents/NewsComponent";
import NewsSection from "./ui/components/homeComponents/NewsSection";
import NewsComponent1 from "./ui/components/homeComponents/NewsComponent1";
import UpcomingEvents from "./ui/components/homeComponents/UpcomingEvents";
import ShowMoreLayout from "./ui/components/homeComponents/ShowMoreLayout";
import Marquee from "./ui/components/layoutComponents/Marquee";
import BlogLayout4 from "./ui/components/blogsComponent/BlogSection4";
 
export default function Home() {
 
  return (
    <div className="overflow-x-hidden overflow-x w-full m-0">
      <Marquee />
       <BlogLayout4 />
      <FeatureCard />
      <NewsComponent />
      <NewsSection />
      <NewsComponent1 />
      <UpcomingEvents />
      <ShowMoreLayout />
    </div>
  );
}
