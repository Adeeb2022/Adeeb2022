import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Footer from "./components/Footer";

function App() {
  const personalDetails = {
    name: "Adeeb Abdulsamad",
    tagline: "I'm a Front-end Developer",
    location: "Taiz, Yemen",
    email: "adeebsamad01@gmail.com",
    mobile: "+967 774 263 970",
    availability: "Open for work",
    brand: "Pixel Perfect",
    statement:
      "My unique blend of technical expertise, creative thinking, and background in psychology allows me to approach each project with a deep understanding of the end user's perspective, resulting in highly effective user-centred digital products.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
      <Footer />
    </>
  );
}

export default App;
