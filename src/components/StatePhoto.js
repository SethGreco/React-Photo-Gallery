import React from 'react';
import Photos from './Photos';
import { useState, useEffect } from 'react'
import {useLocation} from 'react-router-dom'


const StatePhoto = () => {
  
  const [photos, setPhotos] = useState([])
  const location = useLocation();
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const loc = params.get('st');
      fetch(`https://grecowebdev.com/photos?st=${loc}`)
        .then(results => {
          if (results.status >= 200 && results.status <= 299) {
            return results.json()
          } else {
            throw Error(results.statusText)
          }
        })
        .then(results => setPhotos(results.photos.photo))
        .catch(err => alert(err))
      }, [location])

  return (
    <div>
        <Photos photos={photos}/>
    </div>
  );
}

export default StatePhoto;