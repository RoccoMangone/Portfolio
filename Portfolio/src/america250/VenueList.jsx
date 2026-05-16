import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'


export default function VenueList({onActiveChange}) {

    
    const venues = ['48 Wall Street', 'Artistry', '60 Pine'];
    const [activeVenue, setActiveVenue] = useState(0);

    useEffect(() => {
        onActiveChange(activeVenue);
    }, [activeVenue])

    return (
        <nav className='venue-bar'>
            <div className='venue-container'>
                <div className='venue-btns'>

                    {/* Creates a list of the venues */}
                    {venues.map((venue, index) => (
                        <div className={`venue ${activeVenue === index ? 'venue-active' : ""}`} onClick={() => {setActiveVenue(index)}} key={index}>{venue}</div>
                    ))}
  
                    
                </div>
            </div>
        </nav>
    )
}//VenueList


