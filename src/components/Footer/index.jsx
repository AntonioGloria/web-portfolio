import SketchfabIcon from '../SketchfabIcon';

export default function Footer() {
  return (
    <footer className='fs-sm-6 fs-md-4 d-flex justify-content-between p-4 footer'>
      <div className='text-primary mx-md-5'>Antonio Gloria</div>
      <div className='mx-md-5'>
      <a title='Github' className='m-2' href='https://github.com/AntonioGloria'>
        <i className='fa-brands fa-github'></i>
      </a>
      <a title='Linkedin' className='m-2' href='https://www.linkedin.com/in/antonio-gloria/'>
        <i className='fa-brands fa-linkedin'></i>
      </a>
      <a title='CodePen' className='m-2' href='https://codepen.io/angloria87'>
        <i className='fa-brands fa-codepen'></i>
      </a>
      <a title='Artstation' className='m-2' href='https://www.artstation.com/angloria87'>
        <i className='fa-brands fa-artstation'></i>
      </a>
      <a title='Sketchfab' className='m-2' href='https://sketchfab.com/agloria87'>
        <SketchfabIcon/>
      </a>
      </div>
    </footer>
  )
}