import { FaTimes } from 'react-icons/fa'
import Wrapper from '../assets/wrappers/SmallSidebar.js'
import Logo from './Logo.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../features/user/userSlice.js'
import NavLinks from './NavLinks.jsx'

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const toggle = () => {
    dispatch(toggleSidebar())
  }
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <button className='close-btn' onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggle} />
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar
