import React from 'react';
import { NavLink } from 'react-router-dom';
import { items } from './items.js';
import { HeaderMenuS, HeaderMenuStUl } from './HeaderMenu.styled.js';

const getLinkClassName = ({ isActive }) => {
  return isActive ? 'linkActive' : 'link';
};

const HeaderMenu = () => {
  const element = items.map(({ id, to, text }) => (
    <HeaderMenuS key={id}>
      <NavLink className={getLinkClassName} to={to}>
        {text}
      </NavLink>
    </HeaderMenuS>
  ));
  return <HeaderMenuStUl className="menu">{element}</HeaderMenuStUl>;
};

export default HeaderMenu;
