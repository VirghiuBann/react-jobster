import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt='jobster logo' className='logo' />
      </nav>
      <div className='info'>
        <h1>
          job <span>tracking</span> app
        </h1>
        <button className='btn btn-hero'>Login/Register</button>
      </div>
      <img src={main} alt='job hunt' className='img main-img' />
    </main>
  )
}

export default Landing
