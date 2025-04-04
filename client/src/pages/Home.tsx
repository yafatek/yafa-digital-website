import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import CaseStudies from '@/components/home/CaseStudies';
import Testimonials from '@/components/home/Testimonials';
import Blog from '@/components/home/Blog';
import Contact from '@/components/home/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <CaseStudies />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
