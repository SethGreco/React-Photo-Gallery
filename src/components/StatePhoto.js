import React from 'react';
import Photos from './Photos';
import { useState, useEffect } from 'react'

// Secret:
// 593c2bd01129dfbf
const StatePhoto = () => {
  
  

  const [photos, setPhotos] = useState([

  ])
  
  useEffect(() => {
    fetch('https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key='+apiKey+'&user_id=193082487@N03&format=json&nojsoncallback=true')
      .then(results => results.json())
      .then(res => setPhotos(res.photos.photo))}, [])

  return (
    <div>
        <Photos photos={photos}/>
    </div>
  );
}

export default StatePhoto;