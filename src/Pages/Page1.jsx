import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";

export default function Page1() {
  return (
    <div className="sm:h-screen lg:max-h-screen">
      {/*Navbar*/}
      <NavBar />
      {/*Hero Section */}
      <Hero />
      {/* Trusted Healthcare Brands */}
    </div>
  );
}
