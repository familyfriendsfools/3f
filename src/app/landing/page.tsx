import Hero from './_components/l_hero';
import AboutUs from './_components/l_about-us';
import Footer from './_components/l_footer';
import Navbar from './_components/l_navbar';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
      </main>
      <Footer />
    </>
  )
}