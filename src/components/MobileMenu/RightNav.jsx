import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: none;
  flex-flow: row nowrap;
  position: relative;
  li {
    ${'' /* padding: 18px 10px; */}
  }
  @media (max-width:995px) {
    display: flex;
    flex-flow: column nowrap;
    background-color: #900C3F;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    z-index: 9999;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li a {
      color: #fff;
    }
  }
  @media (max-height:500px) {
    padding-top: 3.5rem;
  }
`;

const RightNav = ({ open, setOpen }) => {
  return (
    <Ul open={open}>
      <li><a onClick={() => setOpen(false)} href="#home">На верх</a></li>
      <li><a onClick={() => setOpen(false)} href="#about">О себе</a></li>
      <li><a onClick={() => setOpen(false)} href="#questions">Вопросы и ответы</a></li>
      <li><a onClick={() => setOpen(false)} href="#pricing">Цены</a></li>
      <li><a onClick={() => setOpen(false)} href="#contact">Контакты</a></li>
      <li style={{'position': 'absolute', 'bottom': '20px'}}><a href="tel:+380973909127">+38 097 390 9127</a></li>
    </Ul>
  )
}

export default RightNav
