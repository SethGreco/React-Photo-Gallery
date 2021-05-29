import '../style/photo.scss'

function Photo({photo}) {
  return (
    <div className='img-container'>
      <a href={`Https://www.flickr.com/photos/${photo.owner}/${photo.id}/`} target={'blank'}>
      <img className='flickr-img' src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`} alt='Cannot display'/>
      </a>
    </div>
  )
}

export default Photo
