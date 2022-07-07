import React from 'react';

import './navbar.scss';

const navbar = () => {
  return (
    <div className='navbar'>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
          </NavLink>
          <Bars />
          
          <NavMenu>
           <NavLink to="/header" activeStyle>
            header
           </NavLink>

           <NavLink to="/container" activeStyle>
            container
           </NavLink>

           <NavLink to="/footer" activeStyle>
            footer
           </NavLink>
          </NavMenu>
      </Nav>
    </div>
  )
};

export default navbar;