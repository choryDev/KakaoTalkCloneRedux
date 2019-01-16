import React from 'react';
import '../styles/style.css';
import { NavLink } from 'react-router-dom'

const HeaderComponent = ({
  ...state
}) => {
  const { selected1, selected2, selected3, selected4, } = state;
  const classNameName1 = `tab-bar__tab ${selected1}`;
  const classNameName2 = `tab-bar__tab ${selected2}`;
  const classNameName3 = `tab-bar__tab ${selected3}`;
  const classNameName4 = `tab-bar__tab ${selected4}`;
  return (
    < nav className="tab-bar" >
      <NavLink exact to="/" className={classNameName1}>
        <i className="fa fa-user"></i>
        <span className="tab-bar__title">Friends</span>
      </NavLink>
      <NavLink exact to="/chats" className={classNameName2}>
        <i className="fa fa-comment"></i>
        <span className="tab-bar__title">Chats</span>
      </NavLink>
      <NavLink exact to="/find" className={classNameName3}>
        <i className="fas fa-search"></i>
        <span className="tab-bar__title">Find</span>
      </NavLink>
      <NavLink exact to="/more" className={classNameName4}>
        <i className="fa fa-ellipsis-h"></i>
        <span className="tab-bar__title">More</span>
      </NavLink>
    </nav >
  );
};


export default HeaderComponent;