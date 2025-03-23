// import Carousel from "./ui/components/homeComponents/Carousel";
// import AboutPage from "./ui/components/homeComponents/About";
// import StatsSection from "./ui/components/homeComponents/StatsSection";
// import Blogs from "./ui/components/blogsComponent/Blogs";
// import SupportVolunteerSection from "./ui/components/homeComponents/SupportVolunteerSection";

import BlogLayout7 from "./components/blogsComponent/BlogSection7";
import FeatureCard from "./components/homeComponents/FeatureCard";
import NewsComponent from "./components/homeComponents/NewsComponent";
import NewsComponent1 from "./components/homeComponents/NewsComponent1";
import NewsSection from "./components/homeComponents/NewsSection";
import ShowMoreLayout from "./components/homeComponents/ShowMoreLayout";
import UpcomingEvents from "./components/homeComponents/UpcomingEvents";
import Marquee from "./components/layoutComponents/Marquee";

 
 
 
export default function Home() {
 
  return (
    <div className="overflow-x-hidden overflow-x w-full m-0">
      <Marquee />
       <BlogLayout7 />
      <FeatureCard />
      <NewsComponent />
      <NewsSection />
      <NewsComponent1 />
      <UpcomingEvents />
      <ShowMoreLayout />
    </div>
  );
}
