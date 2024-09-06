import SketchfabIcon from "../SketchfabIcon";

export default function Footer() {
  return (
    <footer className="fs-1 d-flex justify-content-around border align-items-center">
      <a href='https://www.linkedin.com/in/antonio-gloria/'>
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a href='https://codepen.io/angloria87'>
        <i className="fa-brands fa-codepen"></i>
      </a>
      <a href='https://github.com/AntonioGloria'>
        <i className="fa-brands fa-github"></i>
      </a>
      <a href='https://www.artstation.com/angloria87'>
        <i className="fa-brands fa-artstation"></i>
      </a>
      <a href='https://sketchfab.com/agloria87'>
        <SketchfabIcon/>
      </a>
    </footer>
  )
}