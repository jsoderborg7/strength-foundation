import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledNavbar = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
`

const Navbar = () => {
  return (
    <nav>
      <StyledNavbar>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/plans'>Plans</Link>
        </li>
        <li>
          <Link to='/about'>About Me</Link>
        </li>
      </StyledNavbar>
    </nav>
  )
}
export default Navbar
