import React from 'react';

const Header = (props) => (
    <div className="header">
      <div className="containter">
      <h1 className="header__title">{props.title}</h1>
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
      </div>
    </div>
  );

Header.defaultProps = {
  title: 'Indecision'
};

export default Header;
