import React from 'react';
import { NavLink } from 'react-router-dom';
import { items } from './items.js';
import { HeaderMenuS, HeaderMenuStUl } from './HeaderMenu.styled.js';
import PropTypes from 'prop-types';

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

HeaderMenu.propTypes = {
  isActive: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      to: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};
export default HeaderMenu;
