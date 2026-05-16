import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import VenueList from './VenueList'
import Map from './Map'
import ImageCarousel from './ImageCarousel';
import venueList from './venueImages.json'


export default function America250() {

  const [activeVenue, setActiveVenue] = useState(0);

  const handleStateChange = (data) => {
    setActiveVenue(data);
  };

  // 1. Find the specific venue data here
    const targetVenue = venueList.find(item => item.id === activeVenue);

    // 2. Guard clause: Handle missing data or loading state at the page level
    if (!targetVenue || !targetVenue.images) {
        return <p>Loading venue details...</p>;
    }

    // 3. Map the images cleanly before handing them over
    const carouselImages = targetVenue.images.map((url, index) => ({
        id: index + 1,
        url: url
    }));

    const displayPhone = targetVenue.phone;
    const telHref = displayPhone.replace(/[\s-]/g, '');

  return (
    <div>
      <Navbar />
      <div className='content-container'>
        <h1 className='tagline'>Join us in our celebration of America's 250th Anniversary by hosting an event at one of our historic venues!</h1>
        <div className='pitch'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sagittis tortor, vitae condimentum odio. Quisque magna felis, aliquet nec pharetra ac, iaculis lacinia erat. Ut sit amet lorem nec orci rhoncus convallis. In bibendum augue et rhoncus lacinia. Aliquam at commodo lectus. Vestibulum nec efficitur risus. Maecenas varius sollicitudin ex, sed hendrerit massa varius et. Duis id ex lacinia, laoreet ipsum rutrum, vestibulum libero. Suspendisse congue accumsan ipsum, at elementum leo luctus ut. Integer tristique blandit velit, a maximus risus faucibus eu. Morbi varius nisl sed suscipit viverra. Morbi sit amet convallis sem. Ut dapibus, metus a tincidunt elementum, tortor mi posuere tortor, et ultrices massa libero ut augue.
          Quisque eu hendrerit tortor. Mauris ut condimentum metus. Suspendisse dapibus mi non pellentesque facilisis. Aenean tempor egestas ligula ut porttitor. Sed ut ex facilisis, congue diam vitae, porttitor tellus. Sed imperdiet interdum ullamcorper. Vivamus sit amet iaculis dui. Nullam porttitor iaculis ornare. Fusce sagittis ex nibh, eu rhoncus erat faucibus ut.
        
        <div className='intro-explore'>Explore Our Venues</div>
      </div>
      <VenueList onActiveChange={handleStateChange}/>

      <div className='detail-container'>
        <div className='detail-description'>
            {targetVenue.description} <br/>
        </div>
        <div className='web-link'>
            <a href={targetVenue.website} target='_blank'>Visit the website</a>
        </div>     
        <ImageCarousel images={carouselImages}/>
        <Map address={targetVenue.address}/>
        <div className='detail-description detail-contact'>
          
            Email us at: {targetVenue.contactEmail} or
            Call us at: 
          <a className='detail-phone' href={`tel:+1${telHref}`}>{' ' + targetVenue.phone}</a>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
    
    
  )
  
}//Home
