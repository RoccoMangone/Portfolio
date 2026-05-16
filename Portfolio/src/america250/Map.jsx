import React from 'react';

export default function Map({ address }) {

  // 2. Encode the string to make it safe for a URL query string
  const encodedAddress = encodeURIComponent(address);

  // 3. Construct the official Google Maps search URL template
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
      <a 
        href={mapsUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="address-link"
      >
        <div>
          Find us at 
        </div>
        {address}
      </a>
    
  );
}