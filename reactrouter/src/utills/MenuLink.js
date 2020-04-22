import React from 'react';
import { Route, Link } from 'react-router-dom';

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
      <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
        let active = match ? 'active abc' : '';
        return (
          <li className={active}>
            <Link
              to={to} className="my-link">{label}
              </Link>
          </li>
        )
      }}
      />
    )
  };
  export default MenuLink;
