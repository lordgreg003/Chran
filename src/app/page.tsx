import Navbar from "./ui/components/layoutComponents/navbar";
import Carousel from "./ui/components/homeComponents/Carousel";
import AboutPage from "./ui/components/homeComponents/About";
import StatsSection from "./ui/components/homeComponents/StatsSection";
import Blogs from "./ui/components/blogsComponent/Blogs";
import Footer from "./ui/components/layoutComponents/Footer";
export default function Home() {
  const slides = [
    {
      image: "/carousel1.webp",
      text: "Support Human Rights Advocacy in Nigeria",
    },
    {
      image: "/carousel3.webp",
      text: "Promoting Democracy and Accountability",
    },
    {
      image: "/carousel2.webp",
      text: "Stand with Victims of Human Rights Violations",
    },
    // Add more slides as needed
  ];
  return (
    <div>
      <Navbar />
      <Carousel slides={slides} />
      <AboutPage />
      <StatsSection />
      <Blogs />
      <Footer />
    </div>
  );
}
