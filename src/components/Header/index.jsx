import AGloriaLogo from "../AGloriaLogo";

export default function Header() {
  return (
    <header
      className='d-flex justify-content-around p-3 p-lg-5 h-50'
      style={{
        backgroundImage: 'linear-gradient(#21252900, #212529FF), url("./img/Header.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <AGloriaLogo width={'36vw'} className='d-none d-lg-block'/>
      <div className='text-start w-lg-50'>
        <p className='display-3 display-xl-1'>Hello, I&apos;m  Antonio</p>
        <p className='fs-6 fs-xl-4'>
          A front-end web developer with a background in game art production.
          Throughout my career, I have developed artistic skills including 3D art
          and graphic design, as well as technical skills such as coding and
          troubleshooting issues with software and art assets. With an eye for
          detail, a joy for solving problems, and mentoring teammates, I strive to
          create projects that are visually appealing and fulfill the user’s needs.
        </p>
      </div>
    </header>
  )
}