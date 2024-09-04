import React from 'react';
import ImageSlider from './Components/carousel/ImageSlider';
import HappyCustomers from './Components/HappyCustomers/HappyCustomers';
import HoneymoonDesties from './Components/HoneyMoondesties/HoneymoonDesties';
import Testimonial from './Components/testimonial/testimonial';
import TrandingSlider from './Components/TrandingSlider/TrandingSlider';


const App = () => {
  return (
    <>
      <ImageSlider />
      <HappyCustomers />
      <Testimonial/>
      <HoneymoonDesties/>
      <TrandingSlider/>
    </>
  );
};

export default App;
