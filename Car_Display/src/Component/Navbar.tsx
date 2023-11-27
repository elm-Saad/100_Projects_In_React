import { NavLink } from 'react-router-dom';

import Wrapper from '../assets/wrappers/Navbar'
// basics notes of styled Component
//import styled from 'styled-components'
// const StyledBtn = styled.button`
//     background: red;
//     color: white;
//     font-size: 2rem;
//     padding: 1rem;
// `
// {/* <StyledBtn>hi styled components</StyledBtn> */}

const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-center'>
        <span className='logo'>MixMaster</span>
        {/* <StyledBtn>hi styled components</StyledBtn> */}
        <div className='nav-links'>
          <NavLink to='/' className='nav-link'>
            Home
          </NavLink>
          <NavLink to='/about' className='nav-link'>
            About
          </NavLink>
          <NavLink to='/newsletter' className='nav-link'>
            Newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar