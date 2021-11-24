import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: none;
  flex-flow: row nowrap;
  li {
    ${'' /* padding: 18px 10px; */}
  }
  @media (max-width:995px) {
    display: flex;
    flex-flow: column nowrap;
    background-color: #FA8072;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li a {
      color: #fff;
    }
  }
`;

const RightNav = ({ open, setOpen }) => {
  return (
    <Ul open={open}>
      <li><a onClick={() => setOpen(false)} href="#home">Home</a></li>
      <li><a onClick={() => setOpen(false)} href="#about">About</a></li>
      <li><a onClick={() => setOpen(false)} href="#questions">Questions</a></li>
      <li><a onClick={() => setOpen(false)} href="#pricing">Price</a></li>
      <li><a onClick={() => setOpen(false)} href="#contact">Contact</a></li>
    </Ul>
  )
}

export default RightNav
