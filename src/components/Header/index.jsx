export default function Header() {
  return (
    <header
      className='d-flex flex-column justify-content-center'
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)), url("./img/Header.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '50vh',
        padding: '5em',
      }}
    >
      <h1>Hello, I am Antonio Gloria</h1>
      <section>
        A front-end web developer with a background in game art production.
        Throughout my career, I have developed artistic skills including 3D art
        and graphic design, as well as technical skills such as coding and
        troubleshooting issues with software and art assets. With an eye for
        detail, a joy for solving problems, and mentoring teammates, I strive to
        create projects that are visually appealing and fulfill the user’s needs.
      </section>
    </header>
  )
}