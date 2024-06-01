import { NavLink } from 'react-router-dom'
import links from '../utils/links'

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div>
      {links.map((link) => {
        const { text, path, id, icon } = link

        return (
          <NavLink
            to={path}
            key={id}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <span>{icon}</span>
            {text}
          </NavLink>
        )
      })}
    </div>
  )
}

export default NavLinks
