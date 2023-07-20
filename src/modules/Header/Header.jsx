import React from 'react';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import { HeaderSt } from './Header.styled';

const Header = () => {
  return (
    <HeaderSt>
   
      <div>
        <HeaderMenu />
      </div>

    </HeaderSt>
  );
};

export default Header;
