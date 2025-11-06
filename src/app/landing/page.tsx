import Header from '../../components/header';
import Hero from '../../components/hero';
import AboutUs from '@/components/about-us';
import Summit from '@/components/summit-footer';

export default function LandingPage() {
  return (
    <>
      <Header />
      
      <main>
        <Hero />
        
        <AboutUs/>

        {/*Maybe add some testemonials */}
      </main>
      
       <Summit/>
    </>
  )
}