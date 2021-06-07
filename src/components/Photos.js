import React from 'react';
import Photo from './Photo'
import '../style/photos.scss'

const Photos = ({ photos }) => {

  return (
    <div className='list-of-photos'>
      {photos.map((photo) => (
      <Photo key={photo.id} photo={photo} />
      ))}
    </div>
  )
}

export default Photos
