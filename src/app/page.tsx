import About from '@/component/About';
import Banner from '@/component/Banner';
import Contact from '@/component/ContactUs';
import Work from '@/component/Experience';
import Projects from '@/component/Projects';
import FullScreenLoader from '@/component/common/loader';
import Footer from '@/component/footer';
import Opensource from "@/component/Opensource";
// import Head from 'next/head'

export default function Home() {

  return (
    <div className='h-[88vh] mx-auto p-4'>
      {/* {isLoading && <FullScreenLoader />} */}
      <Banner />
      <About />
      <Work />
      <Opensource/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
