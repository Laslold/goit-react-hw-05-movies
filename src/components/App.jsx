import HeaderMenu from 'modules/Header/HeaderMenu';

import './app.css';

import UserRoutes from './UserRoutes';

export const App = () => {
  return (
    <div className="container">
      <HeaderMenu />
      <UserRoutes />
    </div>
  );
};
