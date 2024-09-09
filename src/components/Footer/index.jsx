import SketchfabIcon from "../SketchfabIcon";

export default function Footer() {
  return (
    <footer className='fs-1 d-flex justify-content-around border align-items-center p-3'>
      <a title='Github' href='https://github.com/AntonioGloria'>
        <i className='fa-brands fa-github'></i>
      </a>
      <a title='Linkedin' href='https://www.linkedin.com/in/antonio-gloria/'>
        <i className='fa-brands fa-linkedin'></i>
      </a>
      <a title='CodePen' href='https://codepen.io/angloria87'>
        <i className='fa-brands fa-codepen'></i>
      </a>
      <a title='Artstation' href='https://www.artstation.com/angloria87'>
        <i className='fa-brands fa-artstation'></i>
      </a>
      <a title='Sketchfab' href='https://sketchfab.com/agloria87'>
        <SketchfabIcon/>
      </a>
    </footer>
  )
}