import '../style/photo.scss'

function Photo({photo}) {
  return (
    <div className='img-container'>
      <p className='url-link'>flickr.com/photos/{photo.owner}/{photo.id}/</p>
      <img className='flickr-img' src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`} alt='Cannot display'/>
    </div>
  )
}

export default Photo
