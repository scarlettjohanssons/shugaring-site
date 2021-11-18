import React from 'react';
import styled from 'styled-components';
import BurgerMenu from './Burger';

const Nav = styled.nav`
  ${'' /* width: 100%; */}
  ${'' /* height: 55px; */}
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
`

const Navbar = () => {
  return (
    <Nav className='nav_mobile-menu'>
      <BurgerMenu />
    </Nav>
  )
}

export default Navbar
