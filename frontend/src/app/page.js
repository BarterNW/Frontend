
import TestimonialSection from '../components/testimonialSection'
import BarterNowSection from '../components/BarterNowSection'
import WhyBarterNow from '../components/WhyBarterNow';
export default function Home() {
  return (
    <div className=' flex flex-col justify-center iteams-center overflow-x-hidden'>
      <WhyBarterNow />
      <TestimonialSection />
      <BarterNowSection />
      
    </div>
  );
}
